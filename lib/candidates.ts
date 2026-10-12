import type { Candidate } from "./types";
import { US_STATES } from "./survey";

// ---------------------------------------------------------------------------
// REAL CANDIDATE DATA — 2026 U.S. Senate race, Maine.
//
// Susan Collins (R, incumbent) vs. Graham Platner (D).
//
// Positions below are mapped onto this app's -2..+2 scale from public records,
// campaign materials, voting history, and neutral trackers (Ballotpedia, Vote
// Smart / OnTheIssues) — see each candidate's `sources`. Compiled August 2026.
//
// IMPORTANT / HONESTY:
//  - Where a candidate has an explicit, well-documented stance, the mapping
//    reflects it. Where none was found, the value is inferred from their voting
//    record or platform and marked in `sourcingNote` — treat those as lower
//    confidence and verify against official sources before voting.
//  - This is a point-in-time snapshot; candidates' positions can change.
//  - To add more races, append candidates with the same `positions` / `values`
//    keys (the question ids in lib/survey.ts) and set their `state`.
//
// `party` is never shown during the quiz — only on the results screen.
// ---------------------------------------------------------------------------

export const CANDIDATES: Candidate[] = [
  {
    id: "platner-me-sen",
    name: "Graham Platner",
    party: "Democratic Party",
    office: "U.S. Senate — Maine",
    state: "ME",
    bio: "Democratic nominee, oyster farmer and Marine combat veteran running on an economic-populist platform: Medicare for All, higher wages, stronger unions, and lower costs. Notably breaks with his party in favor of gun rights.",
    accent: "#1C1847",
    values: {
      v_govrole: 2, // active government to solve cost-of-living problems
      v_freedom: 2, // "common good" economic populism
      v_environment: 1, // urgent climate action, balanced with working-class costs
      v_faith: -2, // secular; church/state separation
      v_change: 2, // anti-establishment reform message
    },
    positions: {
      // Healthcare — supports Medicare for All
      hc_coverage: 2, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 2,
      // Economy — raise taxes on wealthy/corps, raise wages, pro-union
      ec_taxes: 2, ec_wage: 2, ec_spending: 2, ec_trade: 1, ec_labor: 2,
      // Immigration — path to citizenship AND strong border security
      im_undocumented: 2, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      // Education — invest in public schools, relieve student debt
      ed_k12: 2, ed_debt: 2, ed_college: 2, ed_curriculum: 1, ed_prek: 2,
      // Climate — urgent action, defend clean air/water rules
      cl_urgency: 2, cl_fossil: 1, cl_renew: 2, cl_carbon: 1, cl_tradeoff: 1,
      // Justice — reform-leaning, but PRO-gun-rights (owns AR-15s, opposes AWB)
      cj_police: 1, cj_sentencing: 1, cj_guns: -1, cj_drugs: 1, cj_death: 1,
      // Social — strong federal abortion guarantee, LGBTQ+ rights
      so_abortion: 2, so_lgbtq: 2, so_religion: 2, so_voting: 2, so_dei: 1,
      // Foreign — restraint, cut Pentagon waste, end "pointless" wars
      fp_military: 2, fp_aid: -1, fp_intervention: 2, fp_alliances: 0, fp_china: 1,
      // Housing — federal support for construction, ban hedge-fund homebuying
      ho_afford: 2, ho_zoning: 1, ho_renters: 2, ho_homeless: 2, ho_ownership: 2,
    },
    // Only non-"high" keys are listed; anything omitted is treated as "high".
    positionConfidence: {
      fp_aid: "low", fp_alliances: "low", fp_china: "low",
      cj_death: "low", so_dei: "low",
    },
    sources: [
      { label: "Campaign platform — grahamforsenate.com", url: "https://www.grahamforsenate.com/platform" },
      { label: "Ballotpedia — Graham Platner", url: "https://ballotpedia.org/Graham_Platner" },
      { label: "OnTheIssues — Graham Platner", url: "https://www.ontheissues.org/Senate/Graham_Platner.htm" },
      { label: "NewsCenter Maine — interview on guns, rights, service", url: "https://www.newscentermaine.com/article/news/politics/maine-politics/interview-graham-platner-gun-control-transgender-rights-military-record-family-senate/97-da9bf2d5-e35b-4a2f-9cbd-3b1e3be48570" },
    ],
    sourcingNote:
      "Economic, healthcare, housing, gun, abortion and immigration positions are from his stated platform and interviews. Foreign-aid, alliance, China, death-penalty and DEI mappings are inferred from his antiwar-populist platform and are lower confidence.",
  },
  {
    id: "collins-me-sen",
    name: "Susan Collins",
    party: "Republican Party",
    office: "U.S. Senate — Maine",
    state: "ME",
    bio: "Republican incumbent known for a moderate, bipartisan brand: supports abortion rights and pre-existing-condition protections, backs NATO and Ukraine, and some gun measures — while voting for the 2017 Republican tax cuts and favoring lighter regulation.",
    accent: "#EC2322",
    values: {
      v_govrole: -1, // leans smaller government, but backs some programs
      v_freedom: -1, // market/individual lean
      v_environment: 0, // both clean-energy measures and domestic production
      v_faith: -1, // not religious-right; mostly separate
      v_change: -1, // institutionalist incumbent
    },
    positions: {
      // Healthcare — defended ACA + pre-existing protections; opposed Medicaid cuts
      hc_coverage: -1, hc_drugs: 0, hc_preexisting: 2, hc_medicaid: 1, hc_costs: -1,
      // Economy — voted for 2017 tax cuts; open to modest minimum-wage rises
      ec_taxes: -1, ec_wage: 1, ec_spending: -1, ec_trade: -1, ec_labor: -1,
      // Immigration — border security, but co-sponsored citizenship path for Dreamers
      im_undocumented: 1, im_border: -1, im_levels: -1, im_daca: 2, im_asylum: -1,
      // Education — some choice; targeted loan relief, opposed broad cancellation
      ed_k12: -1, ed_debt: -1, ed_college: -1, ed_curriculum: -1, ed_prek: -1,
      // Climate — bipartisan clean energy + methane rules, plus domestic production
      cl_urgency: 1, cl_fossil: -1, cl_renew: 1, cl_carbon: 0, cl_tradeoff: 0,
      // Justice — backed First Step Act, background checks, red-flag & bump-stock bans
      cj_police: -1, cj_sentencing: 1, cj_guns: 1, cj_drugs: 1, cj_death: -1,
      // Social — pro-choice; anti-discrimination but opposed the broad Equality Act
      so_abortion: 2, so_lgbtq: 1, so_religion: 1, so_voting: 0, so_dei: -1,
      // Foreign — internationalist: strong on NATO, Ukraine, and alliances
      fp_military: -1, fp_aid: 1, fp_intervention: -1, fp_alliances: 2, fp_china: -1,
      // Housing — backed bipartisan housing/homeownership legislation
      ho_afford: 1, ho_zoning: -1, ho_renters: -1, ho_homeless: -1, ho_ownership: 1,
    },
    // Only non-"high" keys are listed; anything omitted is treated as "high".
    positionConfidence: {
      v_environment: "medium",
      cj_death: "low", so_dei: "low", so_voting: "low",
      ho_zoning: "low", ho_renters: "low", ho_homeless: "low",
    },
    sources: [
      { label: "Ballotpedia — Susan Collins", url: "https://ballotpedia.org/Susan_Collins" },
      { label: "Vote Smart — Susan Collins key votes", url: "https://justfacts.votesmart.org/candidate/key-votes/379/susan-collins" },
      { label: "OnTheIssues — Susan Collins", url: "https://www.ontheissues.org/Susan_Collins.htm" },
      { label: "Official Senate site — collins.senate.gov", url: "https://www.collins.senate.gov" },
    ],
    sourcingNote:
      "Positions on abortion, pre-existing conditions, Medicaid, the 2017 tax cuts, minimum wage, Dreamers, guns, sentencing reform, and NATO/Ukraine are from her documented votes and statements. Death-penalty, DEI, voting-rules, and some housing mappings are inferred from her overall record and are lower confidence.",
  },
];

// ---------------------------------------------------------------------------
// State-based filtering
// ---------------------------------------------------------------------------

/** Candidates whose race is in the given state (2-letter code). */
export function candidatesForState(stateCode: string): Candidate[] {
  return CANDIDATES.filter((c) => c.state === stateCode);
}

/** State codes that currently have at least one candidate loaded. */
export const STATES_WITH_CANDIDATES: string[] = Array.from(
  new Set(CANDIDATES.map((c) => c.state)),
).sort();

/** Full state names for the states that have candidates (for empty-state copy). */
export const STATE_NAMES_WITH_CANDIDATES: string[] = STATES_WITH_CANDIDATES.map(
  (code) => US_STATES.find((s) => s.code === code)?.name ?? code,
);
