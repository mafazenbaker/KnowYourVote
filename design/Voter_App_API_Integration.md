# Voter App — API Integration Architecture
### Research & Implementation Guide | August 2026

---

## Overview

The voter app needs four types of live data:

| Data Type | What It Powers |
|-----------|---------------|
| **Ballot data** | Which candidates/races are on a voter's specific ballot |
| **Candidate positions** | Where each candidate stands on the issues |
| **Voting records** | How incumbent legislators actually voted |
| **Campaign finance** | Who's funding each candidate |

No single API covers all four. The recommended stack uses **four complementary APIs**, each best-in-class for its data type.

---

## API Stack Recommendation

```
┌─────────────────────────────────────────────────────────┐
│                    VOTER APP BACKEND                     │
└──────────┬──────────────┬──────────────┬────────────────┘
           │              │              │              │
    ┌──────▼──────┐ ┌─────▼─────┐ ┌────▼────┐ ┌──────▼──────┐
    │ CivicEngine │ │ VoteSmart │ │Congress │ │  OpenFEC    │
    │(BallotReady)│ │    API    │ │  .gov   │ │     API     │
    └─────────────┘ └───────────┘ └─────────┘ └─────────────┘
    Ballot & races  Positions &    Voting       Campaign
    by address      questionnaires  records      finance
```

---

## API 1 — CivicEngine by BallotReady

**Purpose:** The core ballot engine — maps any U.S. address to every race on that voter's ballot, including candidates, ballot measures, and election dates.

**Developer Portal:** [developers.civicengine.com](https://developers.civicengine.com)
**API Type:** GraphQL (single endpoint)
**Base URL:** `https://api.civicengine.com/graphql`
**Auth:** API key in request header

### What It Returns
- Every race on a voter's ballot (federal, state, local)
- Candidate profiles: name, party, bio, photo, website, social media
- Candidate issue stances (curated from campaign platforms)
- Endorsements
- Ballot measure full text and summaries
- Election dates, polling place info, registration deadlines

### Key Queries

**1. Get ballot by address**
```graphql
query GetBallot($address: String!, $electionDate: String) {
  ballotByAddress(
    address: $address
    electionDate: $electionDate
  ) {
    elections {
      name
      date
      races {
        name
        level          # federal | state | local
        candidates {
          name
          party
          bio
          website
          photo_url
          stances {
            issue
            statement
            source
          }
          endorsements {
            name
            type
          }
        }
        ballot_measures {
          title
          summary
          yesStatement
          noStatement
        }
      }
    }
  }
}
```

**2. Get single candidate profile**
```graphql
query GetCandidate($id: ID!) {
  candidate(id: $id) {
    name
    party
    bio
    website
    positions {
      topic
      position
      source
    }
    endorsements {
      organization
      date
    }
  }
}
```

**3. Get officeholders for a location**
```graphql
query GetOfficeholders($lat: Float!, $lng: Float!) {
  officeholdersByLocation(lat: $lat, lng: $lng) {
    name
    title
    party
    district
    termEnd
  }
}
```

### Coverage
- All 50 states
- Federal, state, and local races
- Ballot measures at all levels
- Updated continuously through election day

### Pricing
- **Nonprofit / civic tech:** Contact for discounted/free access
- **Commercial:** Custom pricing based on volume
- **Contact:** organizations.ballotready.org
- ⚠️ *No public pricing listed — request a demo/quote before budgeting*

### Recent Updates (June 2025)
- OCD-ID integration: standardized geographic IDs across all jurisdictions
- New filtering tools for targeted data pulls
- Improved state and local race coverage

---

## API 2 — VoteSmart API

**Purpose:** Deep policy positions, candidate questionnaires, and interest group ratings. The most comprehensive source for *where a candidate stands* on issues.

**Developer Docs:** [votesmart-api.stoplight.io](https://votesmart-api.stoplight.io/docs/votesmart-api)
**Legacy Docs:** [api.votesmart.org/docs](https://api.votesmart.org/docs/)
**API Type:** REST
**Base URL:** `https://api.votesmart.org/`
**Auth:** API key as query parameter (`?key=YOUR_KEY`)
**Response format:** JSON or XML

### Getting an API Key
Register at [votesmart.org/share/api](https://www.votesmart.org/share/api)
- Free for **non-commercial and civic use**
- Contact for commercial licensing

### Key Endpoints

**1. Search candidates**
```
GET /candidates/getByLastname.json
  ?lastName=Ossoff
  &stageOfOffice=S     # S=Senate, H=House, G=Governor
  &key=YOUR_KEY

Response includes: candidateId, firstName, lastName, party, state, district
```

**2. Get candidate bio**
```
GET /candidatebio/getBio.json
  ?candidateId=135703
  &key=YOUR_KEY

Response: name, party, education, profession, family, photo
```

**3. Get candidate positions (from questionnaires)**
```
GET /candidatePositions/getByCandidate.json
  ?candidateId=135703
  &key=YOUR_KEY

Response: array of {categoryName, position, description, timespan}
```

**4. Get voting record**
```
GET /votes/getByOfficial.json
  ?candidateId=135703
  &officeId=6          # 6=US Senate
  &key=YOUR_KEY

Response: array of {billTitle, vote, date, billNumber}
```

**5. Get interest group ratings**
```
GET /rating/getCandidateRating.json
  ?candidateId=135703
  &key=YOUR_KEY

Response: array of {sigId, sigName, rating, ratingName, timespan}
# SIG = Special Interest Group (NRA, ACLU, ADA, AFL-CIO, etc.)
```

**6. Get categories (issue taxonomy)**
```
GET /categories/getCategories.json
  ?key=YOUR_KEY

Response: master list of all issue categories (Healthcare, Economy, etc.)
```

### Mapping VoteSmart Categories to App Issues

| App Issue | VoteSmart Category IDs |
|-----------|------------------------|
| Healthcare | 25 (Health Care), 46 (Abortion) |
| Economy | 4 (Budget), 18 (Jobs/Employment), 39 (Taxes) |
| Immigration | 27 (Immigration) |
| Education | 19 (Education) |
| Climate | 15 (Environment), 21 (Energy) |
| Gun Policy | 26 (Guns) |
| Foreign Policy | 22 (Foreign Policy) |
| Social Issues | 31 (Civil Rights), 32 (LGBTQ) |

### Interest Group Ratings to Surface

| Rating Source | What It Signals | ID |
|--------------|-----------------|-----|
| NRA | Gun rights stance | 1043 |
| Brady Campaign | Gun control stance | varies |
| ACLU | Civil liberties | 838 |
| ADA (Americans for Democratic Action) | Progressive score | 64 |
| ACU (American Conservative Union) | Conservative score | 3 |
| AFL-CIO | Labor/union support | 39 |
| League of Conservation Voters | Climate/environment | 889 |
| NAACP | Civil rights | 1047 |
| NARAL | Abortion access support | 49 |
| National Right to Life | Anti-abortion stance | 1149 |

---

## API 3 — Congress.gov API

**Purpose:** Official, authoritative source for congressional voting records, bill sponsorship, and committee assignments for all current and past members of Congress.

> ⚠️ *GovTrack's API was discontinued in summer 2026. Use Congress.gov (Library of Congress) instead — it now includes House Roll Call Votes added in May 2025.*

**Developer Docs:** [api.congress.gov](https://api.congress.gov)
**GitHub:** [github.com/LibraryOfCongress/api.congress.gov](https://github.com/LibraryOfCongress/api.congress.gov)
**API Type:** REST
**Base URL:** `https://api.congress.gov/v3/`
**Auth:** API key as query param (`?api_key=YOUR_KEY`)
**Cost:** Free (government API)

### Getting an API Key
Sign up at [api.congress.gov](https://api.congress.gov) — instant free key.

### Key Endpoints

**1. Get member info**
```
GET /v3/member/{bioguideId}
  ?api_key=YOUR_KEY

# bioguideId examples: O000174 (Ossoff), M001244 (Moody)
Response: name, party, state, terms, depiction (photo), url
```

**2. Get member's sponsored legislation**
```
GET /v3/member/{bioguideId}/sponsored-legislation
  ?api_key=YOUR_KEY
  &limit=20

Response: bills sponsored with title, status, date
```

**3. Get member's voting record**
```
# Senate votes
GET /v3/member/{bioguideId}/senate-votes
  ?api_key=YOUR_KEY
  &limit=50

# House votes (added May 2025)
GET /v3/member/{bioguideId}/house-votes
  ?api_key=YOUR_KEY
  &limit=50

Response: vote position (Yea/Nay/Not Voting), bill, date, result
```

**4. Get a specific vote (roll call)**
```
GET /v3/vote/{congress}/{chamber}/{session}/{rollCallNumber}
  ?api_key=YOUR_KEY

Response: question, description, result, individual member votes
```

**5. Get all votes in a Congress/session**
```
GET /v3/vote/{congress}/{chamber}
  ?api_key=YOUR_KEY
  &limit=250

Response: list of all roll call votes with descriptions
```

### Useful BioguideIDs for Current Database Candidates

| Candidate | BioguideID |
|-----------|-----------|
| Jon Ossoff (D-GA) | O000174 |
| Ashley Moody (R-FL) | M001244 |
| Mike Collins (R-GA) | C001120 |

---

## API 4 — OpenFEC (Federal Election Commission)

**Purpose:** Official campaign finance data — who's donating to each candidate, PAC connections, total fundraising, and spending.

**Developer Docs:** [api.open.fec.gov/developers](https://api.open.fec.gov/developers/)
**GitHub:** [github.com/fecgov/openFEC](https://github.com/fecgov/openFEC)
**API Type:** REST
**Base URL:** `https://api.open.fec.gov/v1/`
**Auth:** API key as query param (`?api_key=YOUR_KEY`)
**Cost:** Free
**Update frequency:** Nightly (electronic filings: every 15 min)

### Getting an API Key
Register at [api.open.fec.gov](https://api.open.fec.gov) — instant free key.
Demo key available (`DEMO_KEY`) for testing with rate limits.

### Key Endpoints

**1. Search candidates**
```
GET /v1/candidates/search/
  ?name=Jon+Ossoff
  &state=GA
  &election_year=2026
  &api_key=YOUR_KEY

Response: candidate_id, name, party, state, total_receipts, total_disbursements
```

**2. Get candidate financial totals**
```
GET /v1/candidate/{candidate_id}/totals/
  ?api_key=YOUR_KEY

# candidate_id example: S0GA00593 (Ossoff)
Response: receipts, disbursements, cash_on_hand, debt, coverage_end_date
```

**3. Get top donors**
```
GET /v1/schedules/schedule_a/
  ?committee_id=C00635896
  &sort=-contribution_receipt_amount
  &per_page=10
  &api_key=YOUR_KEY

Response: contributor_name, contribution_receipt_amount, contributor_employer
```

**4. Get PAC/outside spending**
```
GET /v1/schedules/schedule_e/
  ?candidate_id=S0GA00593
  &api_key=YOUR_KEY

Response: committee_name, expenditure_amount, support_oppose_indicator
```

**5. Find candidate committee ID**
```
GET /v1/candidate/{candidate_id}/committees/
  ?api_key=YOUR_KEY

Response: committee_id, name, designation (principal, authorized, etc.)
```

### FEC Candidate IDs for Current Database

| Candidate | FEC Candidate ID |
|-----------|-----------------|
| Jon Ossoff (D-GA) | S0GA00593 |
| Ken Paxton (R-TX) | S6TX00614 *(verify — new filing)* |
| James Talarico (D-TX) | S6TX00622 *(verify — new filing)* |

> Always look up IDs via `/v1/candidates/search/` rather than hardcoding — IDs change when candidates file for new races.

### ProPublica Campaign Finance API (Supplement)
For easier daily-updated donor and PAC data:
**Docs:** [projects.propublica.org/api-docs/campaign-finance](https://projects.propublica.org/api-docs/campaign-finance/)
- Free, requires API key registration
- Updates every 15 minutes for electronic filings
- Easier query structure than raw FEC API

---

## Data Flow Architecture

```
VOTER ENTERS ADDRESS
         │
         ▼
┌─────────────────────┐
│  CivicEngine API    │ ──► Returns: races, candidates, ballot measures
│  (ballot lookup)    │           for that specific address
└─────────────────────┘
         │
         │  For each candidate returned:
         ▼
┌─────────────────────┐
│   App Cache/DB      │ ──► Check: do we have this candidate's data?
│   (Redis / Postgres)│         If YES → serve from cache
└─────────────────────┘         If NO → fetch from APIs below
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌────────┐  ┌─────────────┐
│VoteSmart│  │Congress.gov │  ──► Merge positions + voting record
│positions│  │voting record│      into unified candidate profile
└────────┘  └─────────────┘
                  │
                  ▼
          ┌─────────────┐
          │  OpenFEC    │  ──► Append campaign finance summary
          │  campaign $ │
          └─────────────┘
                  │
                  ▼
       ┌──────────────────┐
       │  MATCHING ENGINE │  ──► Compare voter profile to candidate
       │  (app logic)     │      data → generate match %
       └──────────────────┘
                  │
                  ▼
           RESULTS PAGE
```

---

## Caching Strategy

API calls are slow and rate-limited. Cache aggressively.

| Data Type | Cache Duration | Why |
|-----------|---------------|-----|
| Ballot by address | 24 hours | Changes rarely mid-cycle |
| Candidate bio/positions | 7 days | Platforms don't change daily |
| Voting records | 7 days | Congress doesn't vote daily |
| Campaign finance totals | 24 hours | Filed nightly by FEC |
| Election dates | Until election day | Static |
| Race ratings | 48 hours | Cook/Sabato update weekly |

**Recommended stack:**
- **Redis** for hot-path caching (ballot lookups, active candidates)
- **PostgreSQL** for persisted candidate database
- **Background jobs** (cron) to refresh stale cache entries nightly

---

## Rate Limits

| API | Rate Limit | Notes |
|-----|-----------|-------|
| CivicEngine | Contact for limits | Based on plan |
| VoteSmart | 5,000 req/day (free tier) | Sufficient for most apps |
| Congress.gov | 5,000 req/hour | Very generous |
| OpenFEC | 1,000 req/hour (with key) | 40/hour with DEMO_KEY |
| ProPublica | 5,000 req/day | Free |

---

## Error Handling

```javascript
// Example: Graceful degradation when an API is unavailable
async function getCandidateData(candidateId) {
  const cached = await redis.get(`candidate:${candidateId}`)
  if (cached) return JSON.parse(cached)

  try {
    const [positions, votes, finance] = await Promise.allSettled([
      fetchVoteSmart(candidateId),
      fetchCongressGov(candidateId),
      fetchOpenFEC(candidateId)
    ])

    // Use whatever succeeded; mark what failed as NO_DATA
    const profile = {
      positions: positions.status === 'fulfilled'
        ? positions.value
        : { status: 'unavailable' },
      votes: votes.status === 'fulfilled'
        ? votes.value
        : { status: 'unavailable' },
      finance: finance.status === 'fulfilled'
        ? finance.value
        : { status: 'unavailable' }
    }

    await redis.setex(`candidate:${candidateId}`, 86400, JSON.stringify(profile))
    return profile

  } catch (err) {
    // Fall back to manually curated database entry
    return await db.query('SELECT * FROM candidates WHERE id = $1', [candidateId])
  }
}
```

---

## Implementation Phases

### Phase 1 — Foundation (Weeks 1–2)
- [ ] Register for all four API keys (VoteSmart, Congress.gov, OpenFEC, CivicEngine)
- [ ] Set up PostgreSQL schema from candidate database doc
- [ ] Build ballot lookup endpoint using CivicEngine
- [ ] Test address → ballot → candidates flow end-to-end

### Phase 2 — Position Data (Weeks 3–4)
- [ ] Pull VoteSmart positions for all candidates in database
- [ ] Map VoteSmart category IDs to app's issue taxonomy
- [ ] Pull Congress.gov voting records for all incumbents
- [ ] Build position merge logic (VoteSmart + Congress + manual curation)

### Phase 3 — Finance & Ratings (Week 5)
- [ ] Pull OpenFEC finance summaries per candidate
- [ ] Pull VoteSmart interest group ratings (NRA, ACLU, LCV, etc.)
- [ ] Surface top 3 donors + outside spending on results page

### Phase 4 — Caching & Scale (Week 6)
- [ ] Implement Redis caching layer
- [ ] Set up nightly refresh cron jobs
- [ ] Add graceful degradation / fallback to curated DB
- [ ] Load test address lookup at scale

### Phase 5 — State & Local (Ongoing)
- [ ] Extend CivicEngine queries to state legislature races
- [ ] Add ballot measure parsing and framing
- [ ] Build state-specific data for local candidates (school board, DA, etc.)

---

## API Quick-Start Checklist

```
□ CivicEngine:   Sign up at organizations.ballotready.org
                 → Request demo / nonprofit access
                 → API key → test GraphQL at developers.civicengine.com

□ VoteSmart:     Register at votesmart.org/share/api
                 → API key in 1–2 business days
                 → Test: api.votesmart.org/candidates/getByLastname.json
                          ?lastName=Ossoff&key=YOUR_KEY

□ Congress.gov:  Sign up at api.congress.gov
                 → Instant API key
                 → Test: api.congress.gov/v3/member/O000174?api_key=YOUR_KEY

□ OpenFEC:       Sign up at api.open.fec.gov
                 → Instant API key
                 → Test: api.open.fec.gov/v1/candidates/search/
                          ?name=Ossoff&state=GA&api_key=YOUR_KEY
```

---

## Cost Summary

| API | Cost | Notes |
|-----|------|-------|
| Congress.gov | **Free** | Government API, no limits |
| OpenFEC | **Free** | Government API |
| VoteSmart | **Free** (non-commercial) | Contact for commercial |
| CivicEngine | **Custom quote** | Nonprofit discount available |
| ProPublica | **Free** | Registration required |
| **Total (MVP)** | **~$0–$500/month** | Depends on CivicEngine plan |

The biggest unknown is CivicEngine pricing. For a voter-education app (nonprofit or civic purpose), they have historically offered free or heavily discounted access. Commercial apps pay based on API call volume.

---

*Document version 1.0 — Voter App Project*
*Sources: developers.civicengine.com, votesmart-api.stoplight.io, api.congress.gov, api.open.fec.gov, projects.propublica.org, Library of Congress, FEC.gov*
