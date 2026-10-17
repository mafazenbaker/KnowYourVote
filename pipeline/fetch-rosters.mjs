#!/usr/bin/env node
// KnowYourVote data pipeline — roster fetcher (v0)
// ---------------------------------------------------------------------------
// Fetches current U.S. senators (and optionally representatives) by state from
// the Congress.gov API, and optionally state legislators from the OpenStates
// (Plural) API. Writes real, verifiable INCUMBENT rosters to
// pipeline/out/rosters/<ST>.json.
//
// IMPORTANT: these are sitting incumbents — NOT the 2026 nominees/challengers,
// and governors are not covered by either API. This gives you the roster of
// people whose records the position step can then mine; challengers and
// open-seat candidates still need manual sourcing. See pipeline/README.md.
//
// Usage:
//   npm run pipeline:rosters                 # all states, senators only
//   npm run pipeline:rosters -- ME TX OH     # specific states
//   npm run pipeline:rosters -- --all --house        # include U.S. House
//   npm run pipeline:rosters -- ME --openstates      # + state legislators
// ---------------------------------------------------------------------------

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "out", "rosters");

const CONGRESS_KEY = process.env.CONGRESS_API_KEY;
const OPENSTATES_KEY = process.env.OPENSTATES_API_KEY;

const STATES = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"],
  ["CA", "California"], ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"],
  ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"], ["ID", "Idaho"],
  ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"], ["KS", "Kansas"],
  ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"], ["MD", "Maryland"],
  ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"], ["MS", "Mississippi"],
  ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"], ["NV", "Nevada"],
  ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"], ["NY", "New York"],
  ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"], ["OK", "Oklahoma"],
  ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"], ["SC", "South Carolina"],
  ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"], ["UT", "Utah"],
  ["VT", "Vermont"], ["VA", "Virginia"], ["WA", "Washington"], ["WV", "West Virginia"],
  ["WI", "Wisconsin"], ["WY", "Wyoming"], ["DC", "District of Columbia"],
];
const STATE_NAME = Object.fromEntries(STATES.map(([c, n]) => [c, n]));

function parseArgs(argv) {
  const flags = { all: false, house: false, openstates: false };
  const states = [];
  for (const a of argv) {
    if (a === "--all") flags.all = true;
    else if (a === "--house") flags.house = true;
    else if (a === "--openstates") flags.openstates = true;
    else if (/^[A-Za-z]{2}$/.test(a)) states.push(a.toUpperCase());
  }
  const targets = flags.all || states.length === 0 ? STATES.map(([c]) => c) : states;
  return { flags, targets };
}

async function congress(path, params = {}) {
  if (!CONGRESS_KEY) {
    throw new Error(
      "CONGRESS_API_KEY is not set. Get a free key at https://api.congress.gov/sign-up/ " +
        "and put it in pipeline/.env (see pipeline/.env.example).",
    );
  }
  const url = new URL(`https://api.congress.gov/v3/${path}`);
  url.searchParams.set("format", "json");
  url.searchParams.set("api_key", CONGRESS_KEY);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, String(v));
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Congress.gov ${res.status} for ${path}: ${await res.text()}`);
  }
  return res.json();
}

async function fetchFederal(stateCode) {
  // GET /member/{stateCode}?currentMember=true  → current members for the state.
  const data = await congress(`member/${stateCode}`, {
    currentMember: "true",
    limit: 250,
  });
  const members = data.members ?? [];
  const senators = [];
  const reps = [];
  for (const m of members) {
    const entry = {
      bioguideId: m.bioguideId,
      name: m.name,
      party: m.partyName ?? m.party,
      state: m.state ?? STATE_NAME[stateCode],
      url: m.url,
    };
    // Representatives carry a district; senators do not.
    if (m.district === undefined || m.district === null) senators.push(entry);
    else reps.push({ ...entry, district: m.district });
  }
  return { senators, reps };
}

async function openStates(path, params = {}) {
  if (!OPENSTATES_KEY) {
    throw new Error(
      "OPENSTATES_API_KEY is not set. Get a free key at https://openstates.org/accounts/signup/ " +
        "and put it in pipeline/.env (see pipeline/.env.example).",
    );
  }
  const url = new URL(`https://v3.openstates.org/${path}`);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, String(v));
  const res = await fetch(url, { headers: { "X-API-Key": OPENSTATES_KEY } });
  if (!res.ok) {
    throw new Error(`OpenStates ${res.status} for ${path}: ${await res.text()}`);
  }
  return res.json();
}

async function fetchStateLegislators(stateName) {
  // State legislatures are large; pull the first page as a sample/starting point.
  const data = await openStates("people", {
    jurisdiction: stateName,
    per_page: 50,
  });
  return (data.results ?? []).map((p) => ({
    name: p.name,
    party: p.party,
    role: p.current_role?.title,
    district: p.current_role?.district,
    chamber: p.current_role?.org_classification,
  }));
}

async function main() {
  const { flags, targets } = parseArgs(process.argv.slice(2));
  await mkdir(OUT_DIR, { recursive: true });
  console.log(`Fetching rosters for ${targets.length} state(s)…\n`);

  let ok = 0;
  for (const code of targets) {
    const name = STATE_NAME[code] ?? code;
    try {
      const { senators, reps } = await fetchFederal(code);
      const roster = {
        state: code,
        stateName: name,
        fetchedAt: new Date().toISOString(),
        note: "Incumbents from Congress.gov — not 2026 nominees. Review before use.",
        senators,
        ...(flags.house ? { representatives: reps } : {}),
      };
      if (flags.openstates) {
        roster.stateLegislators = await fetchStateLegislators(name);
      }
      await writeFile(
        resolve(OUT_DIR, `${code}.json`),
        JSON.stringify(roster, null, 2) + "\n",
      );
      const extra = [
        flags.house ? `${reps.length} reps` : null,
        flags.openstates ? `${roster.stateLegislators.length} state legislators` : null,
      ]
        .filter(Boolean)
        .join(", ");
      console.log(
        `  ✓ ${code}: ${senators.length} senators${extra ? ` (+ ${extra})` : ""}`,
      );
      ok++;
    } catch (err) {
      console.error(`  ✗ ${code}: ${err.message}`);
    }
  }
  console.log(`\nDone. ${ok}/${targets.length} states written to pipeline/out/rosters/`);
  if (ok === 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
