# KnowYourVote data pipeline

Tooling to help populate candidate data faster from public civic-data APIs
(**Congress.gov** and **OpenStates/Plural**). It is **dev/build tooling** — it is
not part of the deployed web app and is never imported by it.

## What this does — and, honestly, what it can't

This pipeline accelerates the **incumbent** slice of the data work. Read these
limits before relying on it:

- **Incumbents only.** The APIs return *sitting* legislators and their records.
  They do **not** know the 2026 **nominees/challengers**, and **governors aren't
  in either API** at all. So for an open seat, a challenger, or a governor's
  race, you still need the manual, sourced method used in `lib/candidates.ts`.
- **Records, not stances.** No API hands you a −2…+2 position on our questions.
  The position step infers leanings from a **curated** list of signal bills
  (`key-bills.json`) and always requires **human review** before anything goes
  live. Treat its output as a first draft, never as final.
- **Keys required.** You must create two free API keys (below). They stay in
  `pipeline/.env`, which is gitignored — never commit real keys.

Net effect: it quickly gives you the verified **roster** of incumbents and a
reviewed **draft** of their positions. It is one accelerator, not a magic
"fill all 50 states" button.

## Setup

1. Get the two free keys:
   - Congress.gov → https://api.congress.gov/sign-up/
   - OpenStates → https://openstates.org/accounts/signup/
2. `cp pipeline/.env.example pipeline/.env` and paste your keys in.

## Step 1 — rosters (runnable now)

Fetches current U.S. senators (and optionally representatives / state
legislators) by state into `pipeline/out/rosters/<ST>.json`.

```bash
npm run pipeline:rosters                 # all states, senators only
npm run pipeline:rosters -- ME TX OH     # specific states
npm run pipeline:rosters -- --all --house        # include the U.S. House
npm run pipeline:rosters -- ME --openstates      # + state legislators
```

Output is a real, verifiable incumbent roster — a safe thing to check first to
confirm your keys and API access work.

## Step 2 — positions (curation + review)

`key-bills.json` (start from `key-bills.sample.json`) maps our issue-question
ids to **signal bills**: if an incumbent sponsored/cosponsored a bill, that
implies a stance on the −2…+2 axis at a stated confidence. The inference step
(next to build, once rosters are confirmed) reads each incumbent's
cosponsored-legislation from Congress.gov, applies these rules, and emits
schema-shaped candidate **drafts** with low/medium confidence, a `sourcingNote`,
and a `NEEDS_REVIEW` flag.

This config is the human-in-the-loop part: you choose which bills are
meaningful signals and in which direction. The sample entries are placeholders —
replace them with vetted signal bills for the current Congress.

## Step 3 — validate & merge

Pipeline output must pass the candidate schema before it's merged:

```bash
npm run validate:data   # point -d at your generated file(s)
```

After human review, hand-merge accepted candidates into `lib/candidates.ts`
(same shape, same `positions`/`values` keys). Keep each candidate's real
`sources` and a `sourcingNote` that says the draft was machine-assisted and
reviewed.

## Files

```
pipeline/
  README.md             # this file
  .env.example          # API-key template (copy to .env)
  fetch-rosters.mjs     # Step 1: incumbent rosters from Congress.gov / OpenStates
  key-bills.sample.json # Step 2: signal-bill → stance config (copy to key-bills.json)
  out/                  # generated output (gitignored)
```
