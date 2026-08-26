# BallotMatch

A nonpartisan web app that helps people decide who to vote for in the
**November 2026 election**. Voters answer a short, plain-language survey about
their background, economic situation, values, and the issues they care about.
BallotMatch compares those answers to the candidates on their ballot and returns
a ranked list of matches — each with a match score, the specific points of
agreement and disagreement, and the sources behind the data.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, ready to deploy
on **Vercel**.

## How it works

1. **About you** — age, education, background, household, economics.
2. **Your values** — five plain-language sliders (no "left/right" labels).
3. **Your priorities** — rate nine issues; only the ones you mark *Important* or
   *Top priority* trigger deeper questions (the survey branches).
4. **Issue modules** — 5 questions each for the issues you chose.
5. **Where you vote** — your state (which determines the ballot) and local context.
6. **Results** — candidates ranked by a weighted match score, with transparent
   agreements/disagreements and sources.

### Match scoring (`lib/scoring.ts`)

- Every question you answer is a stance on a −2…+2 scale. Your answer is compared
  to each candidate's stance on the same question; closer answers score higher.
- Each issue is weighted by how important you said it was, then blended into an
  overall **issue score (85%)**. Your five core values act as a secondary axis
  and tiebreaker **(15%)**.
- Party labels never appear during the quiz — only on the results screen — so
  they can't bias your answers.

## Project structure

```
app/
  layout.tsx          Root layout + metadata
  page.tsx            Screen orchestration (landing → survey → results)
  globals.css         Tailwind + slider styles
components/
  Header.tsx          Brand header
  Landing.tsx         Hero + "how it works"
  SurveyWizard.tsx    Stepped survey (phases, values, priorities, issue modules)
  Results.tsx         Ranked candidate cards + methodology
lib/
  types.ts            Shared types
  survey.ts           All questions, value axes, and issue modules
  candidates.ts       Candidate data (SEE BELOW)
  scoring.ts          Matching engine
```

## Candidate data

`lib/candidates.ts` currently holds **real candidates for one race: the 2026
U.S. Senate election in Maine** — Susan Collins (R, incumbent) vs. Graham
Platner (D).

Their positions are mapped onto the app's −2…+2 scale from public records,
campaign materials, voting history, and neutral trackers (each candidate lists
its `sources`). Where a candidate has a clear documented stance, the mapping
reflects it; where none was found, the value is inferred from their record or
platform and called out in that candidate's `sourcingNote` (shown to users as
"How this was sourced"). Positions were compiled **August 2026** and are a
point-in-time snapshot — verify against official sources before voting.

> **Sourcing note.** This is a decision-support tool, not an authority. Every
> position should be checked against primary sources. Do not present inferred
> positions as a candidate's official stance.

### Adding more races

Append candidates to the `CANDIDATES` array using the same `positions` /
`values` keys (the question ids in `lib/survey.ts`) and set each one's `state`.
Good neutral sources:

- [Ballotpedia](https://ballotpedia.org)
- [Vote Smart](https://justfacts.votesmart.org)
- [VOTE411 (League of Women Voters)](https://www.vote411.org)

### State-based filtering

Every candidate has a `state` (2-letter code), and results are filtered to the
voter's registered state — each person sees only the candidates on their ballot
(`candidatesForState` in `lib/candidates.ts`). States without loaded candidates
show a clear "currently covers …" message. When a state *does* have candidates,
a toggle lets the user preview all loaded candidates. A natural next step is to
extend the filter to congressional district.

## Design

The look follows the provided references (kept in [`design/`](design/)): the
`Interface.pdf` wireframe (header → description → survey → outcomes), the
patriotic brand palette in `brandcolors.png` (`#EC2322` red, `#F16B64` coral,
`#1C1847` navy, `#EEE7E6` off-white, `#AC8798` mauve — see `tailwind.config.ts`),
and the card-based layout of `examplewebsite.jpg`.

## Privacy

All answers stay in the browser (React state) — nothing is sent to a server.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, **New Project → import the repo**. Framework preset: **Next.js**
   (auto-detected). No environment variables required.
3. Deploy. Every push to the default branch redeploys automatically.
