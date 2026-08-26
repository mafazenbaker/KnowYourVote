# Voter App — Candidate Database
### 2026 Midterm Elections | Last Updated: August 2026

---

## Part 1: Data Sources & Methodology

### Primary Sources (used to populate all candidate entries)

| Source | What It Provides | URL |
|--------|-----------------|-----|
| **Ballotpedia** | Candidate bios, voting records, campaign platforms, election results | [ballotpedia.org](https://ballotpedia.org) |
| **VoteSmart** | Policy positions, voting records, interest group ratings, candidate questionnaires | [votesmart.org](https://votesmart.org) |
| **BallotReady** | Candidate websites, social media, endorsements, race-level info | [ballotready.org](https://app.ballotready.org) |
| **GovTrack** | Congressional voting records, bill sponsorship, legislator profiles | [govtrack.us](https://www.govtrack.us) |
| **OpenSecrets** | Campaign finance, donor data, PAC contributions | [opensecrets.org](https://www.opensecrets.org) |
| **ISideWith** | Policy position aggregation from candidate statements | [isidewith.com](https://www.isidewith.com) |
| **FEC.gov** | Official campaign finance filings | [fec.gov](https://www.fec.gov) |
| **Cook Political Report** | Race competitiveness ratings | [cookpolitical.com](https://www.cookpolitical.com) |
| **Official campaign websites** | Candidate-stated platforms | Linked per candidate |

### Data Collection Rules
1. Positions sourced from **official campaign websites first**, then voting records, then news/debate quotes.
2. Every position entry includes a **source tag** (see legend below).
3. If a candidate has **no stated position**, entry is marked `NO_POSITION`.
4. Positions updated within **30 days** of each election.
5. All data is **nonpartisan** — same standards applied to all candidates.

### Position Source Tags
- `[W]` — Official campaign website / platform
- `[V]` — Voting record (GovTrack / Congress.gov)
- `[S]` — Public statement / speech / interview
- `[Q]` — Candidate questionnaire (VoteSmart / Ballotpedia)
- `[N]` — News / debate coverage
- `[I]` — Interest group rating (NRA, ADA, ACLU, etc.)

---

## Part 2: Database Schema

Each candidate record follows this structure:

```json
{
  "id": "unique-id",
  "name": "Full Name",
  "party": "D | R | I | G | L",
  "state": "State Name",
  "race": "US Senate | US House | Governor | State Senate | ...",
  "district": null,
  "incumbent": true | false,
  "election_date": "2026-11-03",
  "primary_date": "varies",
  "website": "URL",
  "ballotpedia": "URL",
  "govtrack": "URL",
  "fec_id": "ID",
  "positions": {
    "healthcare": {
      "government_role": "value + source tag",
      "aca": "value + source tag",
      "medicare_expansion": "value + source tag",
      "drug_price_caps": "value + source tag",
      "abortion": "value + source tag"
    },
    "economy": {
      "min_wage": "value + source tag",
      "taxes_wealthy": "value + source tag",
      "trade_tariffs": "value + source tag",
      "unions": "value + source tag"
    },
    "immigration": {
      "border_security": "value + source tag",
      "undocumented_pathway": "value + source tag",
      "daca": "value + source tag",
      "legal_immigration_levels": "value + source tag"
    },
    "climate": {
      "urgency": "value + source tag",
      "fossil_fuels": "value + source tag",
      "clean_energy_subsidies": "value + source tag"
    },
    "gun_policy": {
      "background_checks": "value + source tag",
      "assault_weapons": "value + source tag",
      "red_flag_laws": "value + source tag"
    },
    "education": {
      "school_vouchers": "value + source tag",
      "student_debt": "value + source tag",
      "federal_funding": "value + source tag"
    },
    "social": {
      "lgbtq_protections": "value + source tag",
      "affirmative_action": "value + source tag"
    },
    "foreign_policy": {
      "military_spending": "value + source tag",
      "ukraine_aid": "value + source tag",
      "china_policy": "value + source tag"
    },
    "democracy": {
      "voting_access": "value + source tag",
      "campaign_finance": "value + source tag"
    }
  }
}
```

---

## Part 3: 2026 Candidate Entries

---

### GEORGIA — U.S. Senate
**Election Date:** November 3, 2026 | **Primary:** May 19, 2026 (runoff June 16)
**Race Rating:** Toss-Up (Cook Political Report)

---

#### Jon Ossoff (D) — Incumbent
- **Party:** Democrat
- **Status:** Incumbent (first elected 2021)
- **Website:** [ossoff.senate.gov](https://ossoff.senate.gov)
- **Ballotpedia:** [ballotpedia.org/Jon_Ossoff](https://ballotpedia.org/Jon_Ossoff)
- **GovTrack:** [govtrack.us](https://www.govtrack.us/congress/members/jon_ossoff/456803)
- **OpenSecrets:** [opensecrets.org](https://www.opensecrets.org/members-of-congress/jon-ossoff)

| Issue | Position | Source |
|-------|----------|--------|
| **Healthcare — Government role** | Strengthen ACA; supports public option; opposes single-payer as immediate step | [W][S] |
| **Healthcare — Drug prices** | Supports capping insulin at $35/mo; negotiated drug prices through Medicare | [V] |
| **Healthcare — Medicaid** | Supports Medicaid expansion nationally | [W][S] |
| **Healthcare — Abortion** | Supports federal abortion access protections | [V][S] |
| **Economy — Min. wage** | Supports raising federal minimum wage | [W] |
| **Economy — Taxes** | Raise taxes on wealthy and corporations; cut taxes for working/middle class | [W][S] |
| **Economy — Trade/Tariffs** | Opposes broad tariffs; supports targeted trade policy | [S][N] |
| **Economy — Infrastructure** | Supports major federal infrastructure investment | [V] |
| **Immigration — Border** | Supports technology-based border security; opposes mass detention | [S][N] |
| **Immigration — Undocumented** | Supports legal pathways; reform of ICE practices | [S][N] |
| **Immigration — DACA** | Supports protections for DACA recipients | [V][S] |
| **Climate — Urgency** | Treats climate as urgent crisis | [W][V] |
| **Climate — Clean energy** | Supports IRA clean energy provisions; opposes rollback | [V] |
| **Guns — Background checks** | Supports universal background checks | [V][S] |
| **Guns — Assault weapons** | Supports assault weapons restrictions | [V] |
| **Guns — Red flag laws** | Supports red flag laws | [V] |
| **Education — Vouchers** | Opposes school vouchers | [S] |
| **Education — Student debt** | Supports targeted relief; debt-free public college | [W][S] |
| **Social — LGBTQ+** | Supports federal LGBTQ+ protections | [V][S] |
| **Foreign policy — Military** | Supports robust defense spending | [V] |
| **Foreign policy — Ukraine** | Supports continued Ukraine aid | [V][S] |
| **Democracy — Voting access** | Supports expanded voting access; opposes voter ID restrictions | [V][S] |

**Key Accomplishments (for results page):**
- Led Senate investigations on child welfare and maternal health
- Voted for insulin price cap ($35/mo)
- Voted for Bipartisan Infrastructure Law
- Secured funding for rural Georgia healthcare

---

#### Mike Collins (R) — Republican Nominee (pending runoff)
- **Party:** Republican
- **Status:** U.S. Representative (GA-10); challenging for Senate
- **Website:** [mikecollinsforgeorgia.com](https://mikecollinsforgeorgia.com)
- **Ballotpedia:** [ballotpedia.org/Mike_Collins_(Georgia)](https://ballotpedia.org/Mike_Collins_(Georgia))

| Issue | Position | Source |
|-------|----------|--------|
| **Healthcare — Government role** | Opposes government-run healthcare; favors market-based solutions | [W][Q] |
| **Healthcare — Drug prices** | Supports market competition to lower prices; skeptical of price controls | [W] |
| **Healthcare — Abortion** | Hardline opposition to abortion; supports restrictions | [N][S] |
| **Economy — Taxes** | Supports tax cuts; opposes tax increases on businesses | [W] |
| **Economy — Trade/Tariffs** | Supports Trump trade/tariff policies | [V][S] |
| **Immigration — Border** | Hardline border security; authored Laken Riley Act (detain migrants charged with crimes) | [V][W] |
| **Immigration — Undocumented** | Supports deportation and strict enforcement | [W][S] |
| **Immigration — DACA** | Opposes DACA protections | [V][S] |
| **Climate — Urgency** | Skeptical of climate emergency framing | [S] |
| **Climate — Fossil fuels** | Supports domestic energy production including fossil fuels | [W] |
| **Guns — Background checks** | Opposes new federal background check requirements | [I] NRA-endorsed |
| **Guns — Assault weapons** | Opposes assault weapons ban | [V][W] |
| **Education — Vouchers** | Supports school choice/vouchers | [W] |
| **Education — Student debt** | Opposes broad student debt cancellation | [S] |
| **Social — LGBTQ+** | Opposes federal LGBTQ+ protections in education/sports | [V][S] |
| **Foreign policy — Military** | Supports increased defense spending | [V][W] |
| **Foreign policy — Ukraine** | Has expressed skepticism about unlimited Ukraine aid | [S][N] |
| **Democracy — Voting** | Supports voter ID requirements | [S] |

---

#### Derek Dooley (R) — Republican Primary Contender
- **Party:** Republican
- **Status:** Political newcomer; former college/NFL football coach
- **Ballotpedia:** [ballotpedia.org/Derek_Dooley](https://ballotpedia.org/Derek_Dooley)

| Issue | Position | Source |
|-------|----------|--------|
| **General platform** | "Georgia First" framing; Trump agenda supporter; political outsider | [W][N] |
| **Accountability** | Pledged to hold regular town halls; serve only two terms | [S][N] |
| **Immigration** | Supports Trump immigration policies | [S] |
| **Economy** | Supports conservative fiscal policy; opposes government overreach | [W] |
| **Most other positions** | `NO_POSITION` — detailed policy questionnaires not yet completed | — |

> ⚠️ *Note: Dooley is a first-time candidate; detailed policy positions are limited. Update after runoff (June 16) and general election filing.*

---

### FLORIDA — U.S. Senate (Special Election)
**Election Date:** November 3, 2026 | **Primary:** August 18, 2026
**Race Rating:** Likely R (Cook Political Report)
**Context:** Seat vacated when Marco Rubio became Secretary of State; Gov. DeSantis appointed Ashley Moody.

---

#### Ashley Moody (R) — Appointed Incumbent
- **Party:** Republican
- **Status:** Appointed by Gov. DeSantis (Jan. 2025); former FL Attorney General
- **Website:** [ashleymoody.com](https://ashleymoody.com)
- **Ballotpedia:** [ballotpedia.org/Ashley_B._Moody](https://ballotpedia.org/Ashley_B._Moody)
- **GovTrack:** [govtrack.us/congress/members/ashley_moody/457033](https://www.govtrack.us/congress/members/ashley_moody/457033)

| Issue | Position | Source |
|-------|----------|--------|
| **Healthcare — Government role** | Opposes government-run healthcare; favors market/state solutions | [W][S] |
| **Healthcare — Abortion** | Supports abortion restrictions; aligned with FL's 6-week ban as AG | [S][N] |
| **Healthcare — Drug prices** | `NO_POSITION` (Senate tenure too new for full record) | — |
| **Economy — Taxes** | Supports tax cuts; pro-business | [W] |
| **Economy — Trade** | Aligned with Trump tariff/trade policies | [S] |
| **Immigration — Border** | Hardline; sued Biden admin over immigration policies as FL AG | [S][N] |
| **Immigration — DACA** | Opposed DACA as FL AG | [S] |
| **Climate — Fossil fuels** | Supports domestic energy production | [W] |
| **Climate — IRA** | Critical of IRA climate provisions | [S] |
| **Guns** | Strong 2nd Amendment supporter; `NO_POSITION` on specific legislation | [I] |
| **Education — Vouchers** | Supports school choice | [S] |
| **Social — LGBTQ+** | Opposed LGBTQ+ protections as FL AG | [S][N] |
| **Foreign policy** | Supports Trump America First foreign policy; strong stance on Cuba | [S][W] |
| **Key win** | Negotiated $1.5B in FEMA funding for FL; opioid lawsuit settlements | [N] |
| **Trump endorsement** | Endorsed by President Trump | [N] |

---

### NORTH CAROLINA — U.S. Senate
**Election Date:** November 3, 2026
**Race Rating:** Toss-Up (Cook Political Report)
**Context:** Open seat — Sen. Thom Tillis retiring.

---

#### Roy Cooper (D)
- **Party:** Democrat
- **Status:** Former NC Governor (2017–2025); not a current officeholder
- **Website:** [roycooper.com](https://roycooper.com)
- **Ballotpedia:** [ballotpedia.org/Roy_Cooper](https://ballotpedia.org/Roy_Cooper)

| Issue | Position | Source |
|-------|----------|--------|
| **Healthcare — Medicaid** | Expanded Medicaid as Governor; strong supporter of expansion | [W][S] |
| **Healthcare — ACA** | Strongly supports ACA; opposes rollback | [W][S] |
| **Healthcare — Abortion** | Supports abortion access; vetoed NC abortion restrictions as Gov | [S][N] |
| **Economy — Taxes** | Opposes tax breaks for billionaires; supports middle-class focus | [W][S] |
| **Economy — Trade/Tariffs** | Opposes broad tariffs; argues constitutional authority rests with Congress | [S][N] |
| **Economy — Jobs** | Touted job creation and balanced budgets during governorship | [W][S] |
| **Immigration** | Supports humane immigration reform; moderate on enforcement | [S] |
| **Climate** | Supported clean energy investment as Governor | [S][W] |
| **Education — Vouchers** | Skeptical of vouchers; historically supported public schools | [S][N] |
| **Education — Funding** | Supports strong public school investment | [W] |
| **Social — LGBTQ+** | Repealed NC's HB2 (anti-trans "bathroom bill") as Governor | [S][N] |
| **Foreign policy** | Supports US alliances; NATO; moderate internationalism | [S] |
| **Democracy** | Supports voting access; opposed NC voter restriction laws | [S][N] |

---

#### Michael Whatley (R)
- **Party:** Republican
- **Status:** Former RNC Chairman; former NC GOP Chairman
- **Website:** [whatleyforsenate.com](https://whatleyforsenate.com)
- **Ballotpedia:** [ballotpedia.org/Michael_Whatley](https://ballotpedia.org/Michael_Whatley)

| Issue | Position | Source |
|-------|----------|--------|
| **Economy — Taxes** | Supports lower taxes; pro-growth economic policy | [W][S] |
| **Economy — Trade** | Aligned with Trump tariff/trade policies | [S] |
| **Immigration** | Supports strong border security | [W][S] |
| **Social — General** | Conservative on social issues; aligned with Trump agenda | [S] |
| **Education — Vouchers** | Supports school choice | [S] |
| **Public Safety** | Supports law enforcement; tough-on-crime stance | [W] |
| **Trump endorsement** | Trump-endorsed candidate | [N] |
| **Most policy specifics** | `NO_POSITION` — non-legislative background; limited public record | — |

> ⚠️ *Note: Whatley is a party operative, not a former legislator. Fewer specific policy positions on record. Update as campaign questionnaires are filed.*

---

### TEXAS — U.S. Senate
**Election Date:** November 3, 2026
**Race Rating:** Likely R (Cook Political Report)
**Context:** Incumbent Sen. John Cornyn defeated in GOP primary by Ken Paxton.

---

#### Ken Paxton (R) — GOP Nominee
- **Party:** Republican
- **Status:** Former TX Attorney General (2015–2025)
- **Website:** [kenpaxtonforsenate.com](https://kenpaxtonforsenate.com)
- **Ballotpedia:** [ballotpedia.org/Ken_Paxton](https://ballotpedia.org/Ken_Paxton)

| Issue | Position | Source |
|-------|----------|--------|
| **Healthcare — Government role** | Strongly opposes government-run healthcare; sued to overturn ACA | [S][N] |
| **Healthcare — Abortion** | Strongly anti-abortion; enforced TX abortion ban as AG | [S][N] |
| **Healthcare — Drug prices** | Favors market solutions; opposed price controls | [W] |
| **Economy — Taxes** | Supports major tax cuts; unveiled economic plan centered on write-offs for housing and healthcare | [W][N] |
| **Economy — Trade** | Supports Trump's America First trade policies | [S] |
| **Immigration — Border** | Hardline; fought DACA and DAPA in courts as AG; created human trafficking unit | [S][N] |
| **Immigration — DACA** | Opposed DACA; fought implementation in TX courts | [S][N] |
| **Immigration — Undocumented** | Supports mass deportation / strict enforcement | [S] |
| **Climate** | Skeptic of climate regulations; supports fossil fuel production | [S][W] |
| **Climate — IRA** | Opposes IRA climate provisions | [S] |
| **Guns** | Strongly pro-2nd Amendment; opposes most gun restrictions | [I][S] |
| **Education — Vouchers** | Supports school choice / vouchers | [S] |
| **Education — Religion** | Supports Bible reading and prayer in public schools (Senate Bill 11) | [S][N] |
| **Social — LGBTQ+** | Opposes federal LGBTQ+ protections; fought against protections for trans students | [S][N] |
| **Foreign policy** | America First; peace through strength; prioritizes US interests | [W][S] |
| **Trump endorsement** | Trump-endorsed | [N] |

---

#### James Talarico (D) — Democratic Nominee
- **Party:** Democrat
- **Status:** Former TX State Representative
- **Website:** [imfortalarico.com](https://www.imfortalarico.com)
- **Ballotpedia:** [ballotpedia.org/James_Talarico](https://ballotpedia.org/James_Talarico)

| Issue | Position | Source |
|-------|----------|--------|
| **Healthcare — Government role** | Supports affordable healthcare; ACA expansion; opposes cuts | [W][S] |
| **Healthcare — Abortion** | Supports abortion access rights | [W][S] |
| **Economy — General** | Focus on lowering costs; fighting "billionaire influence" in politics | [W][S] |
| **Economy — Taxes** | Opposes rigged system favoring the wealthy; supports working families | [S] |
| **Economy — Trade** | Opposes Trump tariffs; says they drive up costs for TX families | [S] |
| **Education — Vouchers** | Strongly opposes school vouchers; champion of public schools | [S][N] |
| **Education — Religion in schools** | Opposes mandatory Bible reading / Ten Commandments in classrooms | [S][N] |
| **Social — LGBTQ+** | Supports LGBTQ+ protections | [W][S] |
| **Immigration** | Supports humane immigration reform; moderate on enforcement | [S] |
| **Climate** | Supports clean energy investment; addresses climate as serious issue | [W] |
| **Technology** | Has focused on data center policy and energy consumption in TX | [S][N] |
| **Democracy** | Supports voting access; opposes voter suppression | [W][S] |
| **Values framing** | Christian faith-based campaign; 8th-generation Texan | [W][N] |

---

## Part 4: Recommended Data Sources by Use Case

### For Live App Integration (APIs)

| Use Case | Recommended Source | API Available? | Cost |
|----------|--------------------|---------------|------|
| Full ballot by address | **BallotReady** | Yes | Paid (nonprofit discount available) |
| Voting records (Congress) | **GovTrack** | Yes (free) | Free |
| Candidate positions | **VoteSmart** | Yes | Free (non-commercial) |
| Campaign finance | **OpenSecrets / FEC** | Yes (FEC is free) | Free |
| Race ratings | **Cook Political / Sabato** | No public API | Subscription |
| Ballot measures | **Ballotpedia** | Partial | Subscription |
| State/local candidates | **BallotReady** | Yes | Paid |

### For Manual Curation

| Source | Best For |
|--------|----------|
| [Ballotpedia](https://ballotpedia.org) | Comprehensive, nonpartisan candidate profiles |
| [OnTheIssues.org](https://www.ontheissues.org) | Side-by-side candidate position comparisons |
| [ISideWith.com](https://www.isidewith.com) | Position data aggregated from multiple sources |
| [VoteSmart.org](https://www.votesmart.org) | Candidate questionnaires and interest group ratings |
| [Congress.gov](https://www.congress.gov) | Official bill text and vote records |
| [AJC Politics](https://www.ajc.com/politics) / [Texas Tribune](https://www.texastribune.org) | State-level deep reporting |

---

## Part 5: Data Maintenance Plan

| Task | Frequency | Responsible |
|------|-----------|-------------|
| Check for new candidate announcements | Weekly | Editorial team |
| Update positions from debate/interview coverage | After each major event | Editorial team |
| Sync voting records from GovTrack | Monthly | Automated (API) |
| Verify campaign finance data | Monthly | Automated (FEC API) |
| Flag candidates with `NO_POSITION` for follow-up | Bi-weekly | Editorial team |
| Archive retired/withdrawn candidates | As needed | Editorial team |
| Full database audit before election | 30 days before election day | All |

---

## Part 6: Races Still Needed (To Do)

The following competitive 2026 races should be added to the database:

| State | Race | Rating | Priority |
|-------|------|--------|----------|
| Michigan | U.S. Senate (D-Open) | Toss-Up | High |
| Maine | U.S. Senate (R-Collins) | Lean R | High |
| Ohio | U.S. Senate | Lean R | High |
| Alaska | U.S. Senate | Likely R | Medium |
| Pennsylvania | Governor | Lean D | High |
| Wisconsin | Governor | Toss-Up | High |
| All 36 Gov. races | Governor | Various | Medium |
| Competitive U.S. House districts | House | Various | Medium |
| State ballot measures | Ballot measure | N/A | High |

---

*Document version 1.0 — Voter App Project*
*Sources: Ballotpedia, VoteSmart, BallotReady, GovTrack, OpenSecrets, Cook Political Report, AJC, Texas Tribune, Georgia Recorder, NPR, The Hill, NBC News, Reuters*
