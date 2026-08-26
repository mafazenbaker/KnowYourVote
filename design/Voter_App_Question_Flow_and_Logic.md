# Voter App — Question Flow & Matching Logic

---

## Overview

The app guides voters through 5 phases. Early phases are fast and universal; later phases are personalized based on prior answers. Total time: ~5–8 minutes.

**Phases:**
1. Setup (State + Election Context)
2. Values Snapshot (quick spectrum questions)
3. Issue Priority Ranking
4. Issue Deep-Dives (branched by top priorities)
5. Candidate Match + Results

---

## Phase 1: Setup

*Goal: Establish context so the app knows which races and issues are relevant.*

| # | Question | Type | Notes |
|---|----------|------|-------|
| 1.1 | What state do you live in? | Dropdown | Determines ballot races |
| 1.2 | What county or city are you in? *(optional)* | Text / Dropdown | For local races |
| 1.3 | Which election are you preparing for? | Single select | Primary / General / Local / Special |
| 1.4 | Which races do you want help with? | Multi-select | President / Senate / House / Governor / State Legislature / Local |
| 1.5 | Have you voted before? | Single select | Yes / No / Not sure |

**Logic:**
- If **Primary** → flag party affiliation question (Phase 2)
- If **Local only** → skip federal issue questions in Phase 4
- If **first-time voter** → add optional "How voting works in [State]" info card

---

## Phase 2: Values Snapshot

*Goal: Establish a rough political orientation without asking "Are you liberal or conservative?" — which triggers defensive responses. Use behavior and belief statements instead.*

Each question is a **5-point scale**: Strongly Agree → Strongly Disagree.

| # | Statement | Axis It Measures |
|---|-----------|-----------------|
| 2.1 | The government should play an active role in reducing economic inequality. | Economic left ↔ right |
| 2.2 | Individuals should be free to make personal choices without government interference. | Libertarian ↔ Authoritarian |
| 2.3 | America benefits from being actively involved in global affairs. | Internationalist ↔ Nationalist |
| 2.4 | Free markets generally produce better outcomes than government programs. | Economic right ↔ left |
| 2.5 | Protecting the environment should take priority even if it slows economic growth. | Progressive ↔ Conservative |
| 2.6 | Immigration has been mostly positive for America. | Liberal ↔ Restrictive |
| 2.7 | Traditional values and institutions are worth preserving. | Conservative ↔ Progressive |
| 2.8 | Government spending on social programs helps more than it hurts. | Left ↔ Right |

**Output of Phase 2:**
Produces a 2-axis score:
- **Economic axis**: Left (–10) to Right (+10)
- **Social axis**: Progressive (–10) to Conservative (+10)

This score is used as a *tiebreaker* in Phase 5, not the primary match driver.

---

## Phase 3: Issue Priority Ranking

*Goal: Find out what the voter cares most about so Phase 4 goes deep on the right topics.*

**Instruction shown to user:**
> "Drag to rank these issues from most to least important to you, or tap to rate each one."

**Issue list** (voter ranks all, top 3–5 drive Phase 4 branching):

| Issue | Sub-issues covered in Phase 4 |
|-------|-------------------------------|
| Healthcare | Cost, insurance model, Medicare, reproductive rights |
| Economy & Jobs | Inflation, wages, taxes, trade, unions |
| Immigration | Border security, legal pathways, DACA, enforcement |
| Education | K-12 funding, school choice, student debt, curriculum |
| Climate & Energy | Emissions policy, fossil fuels, clean energy jobs |
| Criminal Justice & Public Safety | Policing, gun policy, sentencing, incarceration |
| Housing & Cost of Living | Affordability, rent control, homelessness, zoning |
| Social Issues | Abortion, LGBTQ+ rights, civil rights, religious liberty |
| Foreign Policy | Military, alliances, Ukraine/Israel/China, foreign aid |
| Democracy & Voting Rights | Election integrity, voting access, campaign finance |
| Government Spending & Debt | Budget deficit, entitlements, government size |
| Veterans & Military | Benefits, healthcare, deployment, VA reform |

**Logic:**
- Top 3 ranked issues → full deep-dive in Phase 4 (6–8 questions each)
- Issues ranked 4–6 → short version (2–3 questions each)
- Issues ranked 7+ → skipped unless voter opts in

**Special routing:**
- If voter's state has a **ballot measure** on a specific topic (e.g., abortion amendment in FL), that topic is auto-promoted to the deep-dive queue regardless of ranking.

---

## Phase 4: Issue Deep-Dives

*Branched by Phase 3 rankings. Only shows questions relevant to top-ranked issues.*

---

### 4A — Healthcare

| # | Question | Options |
|---|----------|---------|
| 4A.1 | Which best describes your current health coverage? | Employer / Marketplace (ACA) / Medicare / Medicaid / Uninsured / VA / Other |
| 4A.2 | What's your biggest healthcare concern? | Cost of premiums / Out-of-pocket costs / Access to providers / Prescription drug prices / Coverage for pre-existing conditions |
| 4A.3 | What role should the federal government play in healthcare? | Fully government-run (single payer) / Public option alongside private / Improve the ACA / Deregulate and let the market work / Leave it to states |
| 4A.4 | Should Medicare be expanded to cover more people? | Yes, expand to all / Yes, expand gradually / Keep as-is / No, reform to reduce costs |
| 4A.5 | On abortion access: | No restrictions / Available with limits / Only in specific circumstances / No exceptions |
| 4A.6 | Should the government cap prescription drug prices? | Yes, strongly / Yes, with exceptions / Let market decide / No |

---

### 4B — Economy & Jobs

| # | Question | Options |
|---|----------|---------|
| 4B.1 | What's your biggest economic concern right now? | Inflation / Job security / Wage growth / Tax burden / National debt |
| 4B.2 | Should the federal minimum wage be raised? | Yes, significantly / Yes, modestly / Leave to states / No |
| 4B.3 | On taxes for high earners and corporations: | Should be raised significantly / Raised slightly / Kept the same / Lowered |
| 4B.4 | How do you view trade with other countries? | Prioritize free trade / Use tariffs to protect American jobs / Trade only with allies |
| 4B.5 | What's your view on labor unions? | Very supportive / Somewhat supportive / Neutral / Somewhat opposed / Opposed |
| 4B.6 | Should the government invest heavily in infrastructure? | Yes, major federal investment / Yes, but keep it targeted / Leave to states / No |

---

### 4C — Immigration

| # | Question | Options |
|---|----------|---------|
| 4C.1 | What is your biggest immigration concern? | Border security / Illegal immigration levels / Legal immigration backlog / Treatment of migrants / Economic impact |
| 4C.2 | What should happen to undocumented immigrants already in the US? | Path to citizenship / Legal status but not citizenship / Deportation of all / Focus on criminals only |
| 4C.3 | Should there be a physical barrier at the southern border? | Yes, expand significantly / Yes, where it makes sense / Rely on technology instead / No |
| 4C.4 | Should the US accept more or fewer legal immigrants? | More / About the same / Fewer / Unsure |
| 4C.5 | What should happen to DACA recipients (Dreamers)? | Offer citizenship / Offer permanent legal status / Extend protections temporarily / End the program |

---

### 4D — Education

| # | Question | Options |
|---|----------|---------|
| 4D.1 | Do you have school-age children? | Yes / No |
| 4D.2 | What's your biggest education concern? | Quality of public schools / Cost of college / Student loan debt / School safety / Curriculum concerns |
| 4D.3 | On school choice and vouchers: | Strong support / Support with guardrails / Neutral / Opposed / Strongly opposed |
| 4D.4 | What should happen with student loan debt? | Full cancellation / Partial cancellation / Income-based relief only / No cancellation |
| 4D.5 | How should K-12 education be primarily funded? | Federal investment / State control / Local property taxes / Combination |
| 4D.6 | Who should decide school curriculum on controversial topics? | Parents / Local school boards / State government / Federal standards |

---

### 4E — Climate & Energy

| # | Question | Options |
|---|----------|---------|
| 4E.1 | How urgent is climate change as a policy priority? | Crisis requiring immediate action / Important but not emergency / Overstated / Not a priority |
| 4E.2 | Should the US transition away from fossil fuels? | Yes, as fast as possible / Yes, gradually over decades / Maintain a balance / No, prioritize energy production |
| 4E.3 | Should the government subsidize clean energy? | Yes, heavily / Yes, moderately / Let market decide / No |
| 4E.4 | On the Inflation Reduction Act's climate provisions: | Expand them / Keep as-is / Scale back / Repeal |
| 4E.5 | How important are clean energy jobs in your community? | Very important / Somewhat / Not applicable / Prefer traditional energy jobs |

---

### 4F — Criminal Justice & Public Safety

| # | Question | Options |
|---|----------|---------|
| 4F.1 | What's your biggest public safety concern? | Crime rates / Police misconduct / Gun violence / Mass incarceration / Drug policy |
| 4F.2 | On policing: | Increase funding and staffing / Reform practices while maintaining funding / Redirect some funds to social services / Significant defunding |
| 4F.3 | On gun policy: | No new restrictions / Universal background checks only / Ban assault-style weapons / Stricter licensing and red flag laws / Comprehensive restrictions |
| 4F.4 | On mandatory minimum sentences: | Keep or increase / Reform selectively / Eliminate most / Eliminate all |
| 4F.5 | On marijuana legalization: | Full federal legalization / Leave to states / Decriminalize only / Keep illegal |

---

### 4G — Housing & Cost of Living

| # | Question | Options |
|---|----------|---------|
| 4G.1 | Are you a homeowner or renter? | Homeowner / Renter / Neither |
| 4G.2 | What best describes your housing situation? | Stable / Struggling with costs / At risk of losing housing / Looking to buy |
| 4G.3 | What should the government do about housing costs? | Build more public housing / Provide rental assistance / Incentivize private development / Reduce regulations on building / Leave to market |
| 4G.4 | On rent control policies: | Support nationally / Support locally / Oppose / Unsure |
| 4G.5 | Should the government help first-time homebuyers? | Yes, aggressively / Yes, with limits / No |

---

### 4H — Social Issues

| # | Question | Options |
|---|----------|---------|
| 4H.1 | How important are LGBTQ+ protections in federal law? | Very important / Somewhat / Neutral / Somewhat opposed / Strongly opposed |
| 4H.2 | On affirmative action in college admissions: | Support / Support with limits / Oppose / Strongly oppose |
| 4H.3 | How should government relate to religious expression in public life? | Strict separation / Allow religious expression, no endorsement / Government can support religious values |
| 4H.4 | On trans athletes in sports: | Allow based on gender identity / Allow with restrictions / Ban in women's sports / Unsure |

---

### 4I — Foreign Policy

| # | Question | Options |
|---|----------|---------|
| 4I.1 | How active should the US be globally? | Lead on most issues / Engage selectively / Focus domestically / Withdraw significantly |
| 4I.2 | On military spending: | Increase / Keep as-is / Reduce modestly / Reduce significantly |
| 4I.3 | Should the US continue supporting Ukraine? | Yes, fully / Yes, with conditions / Reduce support / No |
| 4I.4 | How should the US approach China? | Aggressive competition / Firm but diplomatic / Cooperative / Unsure |
| 4I.5 | On foreign aid overall: | Increase / Keep as-is / Reduce / Eliminate |

---

### 4J — Democracy & Voting Rights

| # | Question | Options |
|---|----------|---------|
| 4J.1 | How concerned are you about election integrity? | Very concerned (fraud risk) / Somewhat / Not very / Concerned about access restrictions |
| 4J.2 | Should it be easier or harder to vote? | Much easier / Somewhat easier / Keep as-is / Require more ID/verification |
| 4J.3 | On campaign finance: | Overturn Citizens United / Strong limits on donations / Disclose all donors / No limits needed |
| 4J.4 | Should congressional districts be drawn by independent commissions? | Yes / No / Unsure |

---

## Phase 5: Candidate Matching Logic

### Step 1 — Build the Voter Profile

From Phases 2–4, the app generates:

```
voter_profile = {
  state: "Florida",
  races: ["Senate", "Governor"],
  economic_axis: -3,          // slightly left
  social_axis: +4,            // moderately conservative
  issue_weights: {
    healthcare: 10,           // #1 priority (max weight)
    economy: 8,               // #2 priority
    immigration: 6,           // #3 priority
    climate: 4,               // #4 priority (short version)
    housing: 2                // #5 priority (short version)
  },
  issue_positions: {
    healthcare: { ... },      // detailed position map
    economy: { ... },
    ...
  }
}
```

---

### Step 2 — Build the Candidate Database

For each candidate on the voter's ballot:

```
candidate_profile = {
  name: "Candidate A",
  party: "D",
  race: "Senate",
  state: "Florida",
  positions: {
    healthcare: {
      government_role: "public_option",
      medicare_expansion: "yes_gradual",
      drug_price_caps: "yes",
      ...
    },
    economy: {
      min_wage: "raise_significantly",
      taxes_high_earners: "raise_slightly",
      ...
    },
    ...
  }
}
```

Candidate positions are sourced from:
- Official campaign platforms
- Congressional voting records (GovTrack, VoteSmart)
- Candidate questionnaires
- News and debate records

---

### Step 3 — Calculate Match Score

For each issue, compare voter position to candidate position on a per-question basis.

**Question-level scoring:**

```
score = match_value × issue_weight

match_value:
  - Exact match           → 1.0
  - Adjacent position     → 0.6
  - Moderate mismatch     → 0.2
  - Direct opposition     → 0.0
  - Candidate no position → 0.4 (neutral/unknown penalty)
```

**Issue-level rollup:**

```
issue_score = average(question scores within issue) × issue_weight
```

**Total match score:**

```
total_match = sum(all issue_scores) / sum(all issue_weights) × 100
```

Output: **Match % per candidate** (e.g., "82% match with Candidate A")

---

### Step 4 — Apply Tiebreaker (Values Axis)

When two candidates are within **5 points** of each other:

```
axis_distance = sqrt(
  (voter.economic_axis - candidate.economic_axis)² +
  (voter.social_axis - candidate.social_axis)²
)

// Lower distance = better values alignment
// Add small bonus to closer candidate's score
```

---

### Step 5 — Generate Results

**For each race on the voter's ballot:**

```
results = [
  {
    candidate: "Candidate A",
    match_score: 82,
    top_agreements: ["Healthcare", "Economy"],
    top_disagreements: ["Immigration"],
    party: "D"
  },
  {
    candidate: "Candidate B",
    match_score: 61,
    top_agreements: ["Immigration", "Gun Policy"],
    top_disagreements: ["Healthcare", "Climate"],
    party: "R"
  }
]
```

**Results screen shows:**
1. Match percentage with each candidate (bar or circle visualization)
2. Top 3 issues where they agree
3. Top 3 issues where they disagree
4. Side-by-side position comparison on the voter's top issues
5. Links to candidate's official platform, voting record, donation page
6. "Learn more" cards for each disagreement point

---

## Edge Cases & Rules

| Scenario | Handling |
|----------|----------|
| Voter says "unsure" on a question | Skip from scoring; don't penalize either side |
| Candidate has no stated position | Apply 0.4 neutral score for that question |
| Third-party / independent candidate | Include if on ballot; clearly labeled |
| Primary election | Show only candidates within voter's registered party (or all if open primary state) |
| Ballot measure (not a candidate) | Show voter's implied position vs. what Yes/No vote means |
| Voter skips an issue entirely | Remove from scoring; reweight remaining issues proportionally |
| Tied match scores | Use values axis distance as tiebreaker |
| All candidates score below 40% | Show note: "No strong match found — here's where each candidate differs from your views" |

---

## Neutrality Principles

1. **No leading questions.** Every option must be phrased without emotional language.
2. **Balanced option sets.** Each question must have options that span the full range of reasonable positions.
3. **No party labels in questions.** Avoid associating positions with party names during the quiz.
4. **Equal data sourcing.** Use the same source types for all candidates (voting records, official platforms).
5. **Transparency.** Show voters exactly *why* they matched with a candidate — not just the score.
6. **No endorsements.** The app presents match data; the voter decides.

---

## Suggested Question Count by Phase

| Phase | Questions | Est. Time |
|-------|-----------|-----------|
| Phase 1: Setup | 5 | ~1 min |
| Phase 2: Values Snapshot | 8 | ~2 min |
| Phase 3: Issue Ranking | 1 (drag/rank) | ~1 min |
| Phase 4: Deep-Dives (top 3 issues) | ~18–24 | ~3–4 min |
| **Total** | **~32–38** | **~7–8 min** |

Progress bar shown throughout. Voter can pause and resume.

---

*Document version 1.0 — Voter App Project*
