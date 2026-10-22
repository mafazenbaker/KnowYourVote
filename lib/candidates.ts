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

  // ----- Texas — 2026 U.S. Senate: Talarico (D) vs. Paxton (R) -----
  {
    id: "talarico-tx-sen",
    name: "James Talarico",
    party: "Democratic Party",
    office: "U.S. Senate — Texas",
    state: "TX",
    bio: "Democratic nominee, former public-school teacher and seminary student running on an economic \"New American Dream\" — lower costs, a healthcare public option, universal child care and pre-K. Pragmatic on energy (keeps Texas oil and gas) and has moderated on some social issues.",
    accent: "#1C1847",
    values: {
      v_govrole: 2, v_freedom: 1, v_environment: 1, v_faith: 0, v_change: 1,
    },
    positions: {
      // Healthcare — public option, medical-debt relief, restore ACA credits
      hc_coverage: 1, hc_drugs: 1, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 1,
      // Economy — repeal GOP tax cuts, tax billionaires/corps, $15 wage
      ec_taxes: 2, ec_wage: 2, ec_spending: 2, ec_trade: 1, ec_labor: 1,
      // Immigration — "orderly, safe" processing, humane asylum, reforms
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      // Education — ex-teacher: public schools, universal pre-K and child care
      ed_k12: 2, ed_debt: 1, ed_college: 1, ed_curriculum: 1, ed_prek: 2,
      // Climate — all-of-the-above: expand renewables, keep TX oil and gas
      cl_urgency: 1, cl_fossil: -1, cl_renew: 2, cl_carbon: 1, cl_tradeoff: 0,
      // Justice — prevention-focused; background checks, close gun-show loophole
      cj_police: 1, cj_sentencing: 1, cj_guns: 1, cj_drugs: 1, cj_death: 0,
      // Social — codify Roe; moderated on trans issues; faith-grounded
      so_abortion: 2, so_lgbtq: 1, so_religion: 1, so_voting: 2, so_dei: 1,
      // Foreign — limited public record
      fp_military: 0, fp_aid: 1, fp_intervention: 1, fp_alliances: 1, fp_china: 0,
      // Housing — lower household costs
      ho_afford: 1, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "medium",
      hc_drugs: "medium", hc_medicaid: "medium", hc_costs: "medium",
      ec_trade: "low", ec_labor: "medium",
      im_undocumented: "medium", im_border: "medium", im_levels: "low",
      im_daca: "medium", im_asylum: "medium",
      ed_debt: "medium", ed_college: "medium", ed_curriculum: "low",
      cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "low", cj_drugs: "low", cj_death: "low",
      so_lgbtq: "medium", so_religion: "medium", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low",
      fp_alliances: "low", fp_china: "low",
      ho_afford: "medium", ho_zoning: "low", ho_renters: "low",
      ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — James Talarico", url: "https://ballotpedia.org/James_Talarico" },
      { label: "Texas Tribune — 2026 Senate Q&A on the issues", url: "https://www.texastribune.org/2026/10/13/talarico-paxton-texas-us-senate-2026-election-q-and-a/" },
      { label: "Texas Tribune — Talarico moderates on some issues", url: "https://www.texastribune.org/2026/09/22/james-talarico-trans-climate-policy-changes-election-2026/" },
      { label: "Smarter.vote — James Talarico", url: "https://smarter.vote/races/tx-senate-2026/james-talarico/" },
    ],
    sourcingNote:
      "Economy, taxes, $15 minimum wage, a healthcare public option, universal pre-K/child care, abortion (codify Roe), and gun background checks are from his campaign platform and reporting. He has moderated on LGBTQ+/trans issues and backs an all-of-the-above energy approach that keeps Texas oil and gas. Foreign policy and several criminal-justice and housing mappings are inferred and lower confidence.",
  },
  {
    id: "paxton-tx-sen",
    name: "Ken Paxton",
    party: "Republican Party",
    office: "U.S. Senate — Texas",
    state: "TX",
    bio: "Republican nominee and Texas Attorney General, a Trump-aligned conservative: near-total abortion restrictions, strong border enforcement (SB 4, 287(g)), A+ gun-rights rating, opposition to the ACA, tax cuts, and expanded oil and gas. Defeated incumbent John Cornyn in the primary.",
    accent: "#EC2322",
    values: {
      v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 2, v_change: -2,
    },
    positions: {
      // Healthcare — led the lawsuit to overturn the ACA; deregulation
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -2, hc_medicaid: -2, hc_costs: -2,
      // Economy — tax cuts and deductions, cut spending, deregulation
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 1, ec_labor: -2,
      // Immigration — finish the wall, SB 4, deport criminal illegal aliens
      im_undocumented: -2, im_border: -2, im_levels: -1, im_daca: -2, im_asylum: -2,
      // Education — school choice/vouchers, parental control, anti-DEI
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      // Climate — expand oil and gas, oppose federal climate regulation
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      // Justice — tough on crime; A+ NRA/GOA, opposed the 2022 gun law
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      // Social — defend the unborn, target trans rights, faith-driven
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      // Foreign — America-first conservative
      fp_military: -1, fp_aid: -2, fp_intervention: -1, fp_alliances: -2, fp_china: -2,
      // Housing — deregulation, but a first-time-buyer tax deduction
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: 1,
    },
    positionConfidence: {
      hc_drugs: "medium",
      ec_wage: "low", ec_trade: "low",
      im_levels: "medium", im_daca: "low", im_asylum: "medium",
      ed_prek: "low",
      cj_drugs: "medium", cj_death: "medium",
      fp_military: "low", fp_aid: "low", fp_intervention: "low",
      fp_alliances: "low", fp_china: "medium",
      ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "medium",
    },
    sources: [
      { label: "Ballotpedia — Ken Paxton", url: "https://ballotpedia.org/Ken_Paxton" },
      { label: "Texas Tribune — 2026 Senate Q&A on the issues", url: "https://www.texastribune.org/2026/10/13/talarico-paxton-texas-us-senate-2026-election-q-and-a/" },
      { label: "OnTheIssues — Ken Paxton", url: "https://www.ontheissues.org/Senate/Ken_Paxton.htm" },
      { label: "Campaign site — kenpaxtonforsenator.com", url: "https://www.kenpaxtonforsenator.com" },
    ],
    sourcingNote:
      "Abortion, immigration/border, guns, ACA opposition, taxes/spending, and energy are from his documented record as Texas AG and his campaign. He declined the Texas Tribune questionnaire, so those answers were compiled from public statements. Legal-immigration levels, labor, several education items, drug/death-penalty, trade, foreign policy, and most housing mappings are inferred from his conservative record and are lower confidence.",
  },

  // ----- Ohio — 2026 U.S. Senate (special): Brown (D) vs. Husted (R) -----
  {
    id: "brown-oh-sen",
    name: "Sherrod Brown",
    party: "Democratic Party",
    office: "U.S. Senate — Ohio",
    state: "OH",
    bio: "Democratic nominee and former longtime U.S. Senator running an economic-populist, pro-labor campaign: protect the ACA and Medicaid, lower drug costs, and a long record of trade protectionism (opposed NAFTA, CAFTA, and the TPP) to defend workers.",
    accent: "#1C1847",
    values: {
      v_govrole: 2, v_freedom: 2, v_environment: 1, v_faith: -1, v_change: 1,
    },
    positions: {
      hc_coverage: 1, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 1,
      ec_taxes: 2, ec_wage: 2, ec_spending: 2, ec_trade: 2, ec_labor: 2,
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      ed_k12: 2, ed_debt: 2, ed_college: 1, ed_curriculum: 1, ed_prek: 1,
      cl_urgency: 1, cl_fossil: 1, cl_renew: 2, cl_carbon: 1, cl_tradeoff: 1,
      cj_police: 1, cj_sentencing: 1, cj_guns: 1, cj_drugs: 1, cj_death: 0,
      so_abortion: 2, so_lgbtq: 2, so_religion: 1, so_voting: 2, so_dei: 1,
      // Foreign — internationalist, but a China trade hawk
      fp_military: 0, fp_aid: 1, fp_intervention: 0, fp_alliances: 1, fp_china: -1,
      ho_afford: 1, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_costs: "medium",
      im_undocumented: "medium", im_border: "low", im_levels: "low",
      im_daca: "medium", im_asylum: "low",
      ed_college: "medium", ed_curriculum: "low", ed_prek: "medium",
      cl_fossil: "medium", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "medium", cj_guns: "medium",
      cj_drugs: "low", cj_death: "low",
      so_lgbtq: "medium", so_religion: "low", so_voting: "medium", so_dei: "low",
      fp_military: "low", fp_aid: "medium", fp_intervention: "low",
      fp_alliances: "low", fp_china: "medium",
      ho_afford: "medium", ho_zoning: "low", ho_renters: "low",
      ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Sherrod Brown", url: "https://ballotpedia.org/Sherrod_Brown" },
      { label: "WKYC/10TV — where Husted and Brown stand on key issues", url: "https://www.10tv.com/article/news/politics/elections/ohio-us-senate-race-2026-jon-husted-sherrod-brown/530-2bf46b68-a2a3-425d-9c44-2a655c74bd60" },
      { label: "NPR — Brown, labor and working-class voters", url: "https://www.npr.org/2026/10/02/nx-s1-5981096/ohio-senate-sherrod-brown-labor-workers" },
      { label: "OnTheIssues — Sherrod Brown", url: "https://www.ontheissues.org/Sherrod_Brown.htm" },
    ],
    sourcingNote:
      "Healthcare (ACA, Medicaid, $35 insulin, drug costs), labor, taxes, and his long trade-protectionist record are well documented from his Senate tenure. Immigration specifics, several criminal-justice and housing items, and most foreign-policy mappings are inferred from his record and are lower confidence.",
  },
  {
    id: "husted-oh-sen",
    name: "Jon Husted",
    party: "Republican Party",
    office: "U.S. Senate — Ohio",
    state: "OH",
    bio: "Republican appointed incumbent (filling JD Vance's seat) and former Ohio lieutenant governor and House speaker. A business-friendly conservative — tax cuts, lighter regulation, a free-market approach to healthcare, and 'champion for life' on abortion. Endorsed by President Trump.",
    accent: "#EC2322",
    values: {
      v_govrole: -2, v_freedom: -1, v_environment: -1, v_faith: 1, v_change: -1,
    },
    positions: {
      hc_coverage: -1, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -1, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -1, ec_trade: 0, ec_labor: -1,
      im_undocumented: -2, im_border: -2, im_levels: -1, im_daca: -1, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -1,
      cl_urgency: -1, cl_fossil: -1, cl_renew: -1, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -1, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -1, so_religion: -1, so_voting: -1, so_dei: -2,
      fp_military: -1, fp_aid: -1, fp_intervention: -1, fp_alliances: -1, fp_china: -2,
      ho_afford: -1, ho_zoning: -2, ho_renters: -2, ho_homeless: -1, ho_ownership: -1,
    },
    positionConfidence: {
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "medium",
      ec_wage: "low", ec_spending: "medium", ec_trade: "low", ec_labor: "medium",
      im_undocumented: "medium", im_border: "medium", im_levels: "low",
      im_daca: "low", im_asylum: "low",
      ed_k12: "medium", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "medium", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Jon Husted", url: "https://ballotpedia.org/Jon_Husted" },
      { label: "WKYC/10TV — where Husted and Brown stand on key issues", url: "https://www.10tv.com/article/news/politics/elections/ohio-us-senate-race-2026-jon-husted-sherrod-brown/530-2bf46b68-a2a3-425d-9c44-2a655c74bd60" },
      { label: "Statehouse News — Husted, Brown on healthcare cost", url: "https://www.statenews.org/government-politics/2025-12-31/ohios-2026-us-senate-race-husted-brown-focus-in-on-health-care-cost" },
    ],
    sourcingNote:
      "Tax cuts/business record, free-market healthcare, abortion ('champion for life'), and election-security emphasis are from his record and campaign. Most other positions are inferred from his conservative, business-friendly profile and are lower confidence; his public issue record is thinner than Brown's.",
  },

  // ----- Georgia — 2026 U.S. Senate: Ossoff (D) vs. Collins (R) -----
  {
    id: "ossoff-ga-sen",
    name: "Jon Ossoff",
    party: "Democratic Party",
    office: "U.S. Senate — Georgia",
    state: "GA",
    bio: "Democratic incumbent and voting-rights champion running on cost of living: reverse Medicaid cuts, protect the ACA, lower costs — and, notably, repeal Trump's tariffs and end the war with Iran. A relative moderate on trade.",
    accent: "#1C1847",
    values: {
      v_govrole: 1, v_freedom: 1, v_environment: 1, v_faith: -1, v_change: 1,
    },
    positions: {
      hc_coverage: 1, hc_drugs: 1, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 1,
      // Economy — wants to REPEAL Trump's tariffs (free-trade lean)
      ec_taxes: 1, ec_wage: 1, ec_spending: 1, ec_trade: -1, ec_labor: 1,
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      ed_k12: 2, ed_debt: 1, ed_college: 1, ed_curriculum: 1, ed_prek: 1,
      cl_urgency: 1, cl_fossil: 1, cl_renew: 2, cl_carbon: 1, cl_tradeoff: 1,
      cj_police: 1, cj_sentencing: 1, cj_guns: 1, cj_drugs: 1, cj_death: 0,
      so_abortion: 2, so_lgbtq: 1, so_religion: 1, so_voting: 2, so_dei: 1,
      fp_military: 0, fp_aid: 1, fp_intervention: 1, fp_alliances: 1, fp_china: 0,
      ho_afford: 1, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "medium", hc_preexisting: "medium", hc_costs: "medium",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "medium", ec_trade: "medium", ec_labor: "low",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_lgbtq: "low", so_religion: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "medium", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Jon Ossoff", url: "https://ballotpedia.org/Jon_Ossoff" },
      { label: "GPB — Ossoff and Collins debate (tariffs, Iran, healthcare)", url: "https://www.gpb.org/news/2026/10/09/ossoff-and-collins-spar-over-tariffs-iran-and-healthcare-in-first-debate" },
      { label: "The Hill — Georgia Senate debate takeaways", url: "https://thehill.com/homenews/campaign/6138009-georgia-senate-debate-ossoff-collins-takeaways/" },
      { label: "OnTheIssues — Jon Ossoff", url: "https://www.ontheissues.org/Jon_Ossoff.htm" },
    ],
    sourcingNote:
      "Abortion (Roe standard), reversing Medicaid cuts, protecting the ACA, voting rights, repealing Trump's tariffs, and ending the Iran war are from debate coverage and his record. Many down-ballot, criminal-justice, education and housing mappings are inferred from his moderate-Democratic record and are lower confidence.",
  },
  {
    id: "collins-ga-sen",
    name: "Mike Collins",
    party: "Republican Party",
    office: "U.S. Senate — Georgia",
    state: "GA",
    bio: "Republican nominee and U.S. Representative, a Trump-aligned conservative: pro-life (backs Georgia's six-week law), a free-market approach to healthcare (calls the ACA a 'disaster'), tax cuts, deregulation, and hardline border security.",
    accent: "#EC2322",
    values: {
      v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 2, v_change: -2,
    },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -2, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 1, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      fp_military: -1, fp_aid: -2, fp_intervention: -1, fp_alliances: -2, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      hc_drugs: "medium", hc_preexisting: "low", hc_medicaid: "medium",
      ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "low",
      im_levels: "medium", im_daca: "low", im_asylum: "medium",
      ed_k12: "medium", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "medium",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Mike Collins", url: "https://ballotpedia.org/Mike_Collins_(Georgia)" },
      { label: "GPB — Ossoff and Collins debate (tariffs, Iran, healthcare)", url: "https://www.gpb.org/news/2026/10/09/ossoff-and-collins-spar-over-tariffs-iran-and-healthcare-in-first-debate" },
      { label: "AJC — Georgia Senate candidates 2026", url: "https://www.ajc.com/georgia-senate-candidates-2026/" },
    ],
    sourcingNote:
      "Abortion (six-week law), free-market healthcare / ACA opposition, tax cuts, deregulation, and hardline border security are from debate coverage and his House record. Most other positions are inferred from his Trump-aligned conservative profile and are lower confidence.",
  },

  // ----- Maryland — 2026 Governor: Moore (D) vs. Cox (R) -----
  // Governor's race: federal-issue mappings (immigration, foreign policy)
  // reflect general political alignment and are lower confidence.
  {
    id: "moore-md-gov",
    name: "Wes Moore",
    party: "Democratic Party",
    office: "Governor — Maryland",
    state: "MD",
    bio: "Democratic incumbent governor seeking a second term on his record: child-poverty reduction, education (the Blueprint), public safety and falling violent crime, middle-class tax cuts, abortion and trans-care protections, a semiautomatic-weapons ban, clean energy, and housing expansion.",
    accent: "#1C1847",
    values: {
      v_govrole: 2, v_freedom: 2, v_environment: 1, v_faith: -1, v_change: 1,
    },
    positions: {
      hc_coverage: 1, hc_drugs: 1, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 1,
      ec_taxes: 1, ec_wage: 2, ec_spending: 2, ec_trade: 0, ec_labor: 1,
      im_undocumented: 1, im_border: 0, im_levels: 0, im_daca: 1, im_asylum: 1,
      ed_k12: 2, ed_debt: 1, ed_college: 1, ed_curriculum: 1, ed_prek: 2,
      cl_urgency: 1, cl_fossil: 1, cl_renew: 2, cl_carbon: 1, cl_tradeoff: 1,
      cj_police: 1, cj_sentencing: 1, cj_guns: 2, cj_drugs: 2, cj_death: 1,
      so_abortion: 2, so_lgbtq: 2, so_religion: 1, so_voting: 2, so_dei: 1,
      fp_military: 0, fp_aid: 0, fp_intervention: 0, fp_alliances: 0, fp_china: 0,
      ho_afford: 1, ho_zoning: 2, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "medium", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "medium", ec_spending: "medium", ec_trade: "low", ec_labor: "low",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "medium", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "medium",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "high", cj_drugs: "medium", cj_death: "low",
      so_lgbtq: "medium", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "medium", ho_zoning: "medium", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Wes Moore", url: "https://ballotpedia.org/Wes_Moore" },
      { label: "Maryland Matters — Moore on abortion & trans-care protections", url: "https://marylandmatters.org/2023/05/03/moore-declares-maryland-a-safe-haven-for-abortion-access-approves-protections-for-trans-health-care/" },
      { label: "Giffords — Wes Moore (gun safety)", url: "https://giffords.org/candidates/wes-moore/" },
      { label: "Smarter.vote — Wes Moore", url: "https://smarter.vote/races/md-governor-2026/wes-moore/" },
    ],
    sourcingNote:
      "Abortion/trans protections, the semiautomatic-weapons ban, cannabis policy, clean energy, housing expansion, and education (the Blueprint) are from his gubernatorial record. This is a governor's race, so federal items (immigration, foreign policy, ACA/Medicare specifics) reflect his general Democratic alignment and are lower confidence.",
  },
  {
    id: "cox-md-gov",
    name: "Dan Cox",
    party: "Republican Party",
    office: "Governor — Maryland",
    state: "MD",
    bio: "Republican nominee and former state delegate, a Trump-aligned conservative running on Maryland's 'affordability crisis': cut taxes and fees, cap property-tax assessments, pro-life, pro-gun (supports constitutional carry, opposes bans), and bringing power plants back online.",
    accent: "#EC2322",
    values: {
      v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 2, v_change: -2,
    },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 0, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -1, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      fp_military: 0, fp_aid: 0, fp_intervention: 0, fp_alliances: 0, fp_china: 0,
      ho_afford: -2, ho_zoning: -1, ho_renters: -2, ho_homeless: -2, ho_ownership: -1,
    },
    positionConfidence: {
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "medium", ec_trade: "low", ec_labor: "low",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "medium", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "medium", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "high", so_lgbtq: "low", so_religion: "medium", so_voting: "medium", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "medium", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Dan Cox", url: "https://ballotpedia.org/Dan_Cox" },
      { label: "The Daily Record — 2026 Maryland governor debate", url: "https://thedailyrecord.com/2026/10/06/governor-debate-wes-moore-dan-cox/" },
      { label: "OnTheIssues — Dan Cox", url: "https://www.ontheissues.org/Dan_Cox.htm" },
      { label: "Smarter.vote — Dan Cox", url: "https://smarter.vote/races/md-governor-2026/dan-cox/" },
    ],
    sourcingNote:
      "Abortion (pro-life, co-sponsored heartbeat bills), guns (constitutional carry, opposes bans), energy (bring power plants back; opposes climate-based utility regulation), and cutting taxes/fees are from his record and campaign. His campaign site is thin on specifics; other positions are inferred from his Trump-aligned conservative profile and are lower confidence. Governor's race, so federal items reflect general alignment.",
  },

  // ----- North Carolina — 2026 U.S. Senate: Cooper (D) vs. Whatley (R) -----
  {
    id: "cooper-nc-sen",
    name: "Roy Cooper",
    party: "Democratic Party",
    office: "U.S. Senate — North Carolina",
    state: "NC",
    bio: "Democratic nominee and popular former two-term governor running as a moderate: expanded Medicaid, vetoed the state's 12-week abortion ban, vows to protect Medicare and Social Security, and campaigns on lowering costs — including ending Trump's tariffs and cutting red tape on housing.",
    accent: "#1C1847",
    values: { v_govrole: 1, v_freedom: 1, v_environment: 1, v_faith: -1, v_change: 1 },
    positions: {
      hc_coverage: 1, hc_drugs: 1, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 1,
      // Economy — "Make Stuff Cost Less"; wants to end Trump's tariffs
      ec_taxes: 1, ec_wage: 1, ec_spending: 1, ec_trade: -1, ec_labor: 1,
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      ed_k12: 2, ed_debt: 1, ed_college: 1, ed_curriculum: 1, ed_prek: 2,
      cl_urgency: 1, cl_fossil: 1, cl_renew: 2, cl_carbon: 1, cl_tradeoff: 1,
      cj_police: 1, cj_sentencing: 1, cj_guns: 1, cj_drugs: 1, cj_death: 0,
      so_abortion: 2, so_lgbtq: 2, so_religion: 1, so_voting: 2, so_dei: 1,
      fp_military: 0, fp_aid: 1, fp_intervention: 1, fp_alliances: 1, fp_china: 0,
      // Housing — cut "red tape" to build more
      ho_afford: 1, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "medium", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "low", ec_trade: "medium", ec_labor: "low",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "medium", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "medium",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_lgbtq: "medium", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "medium", fp_alliances: "low", fp_china: "low",
      ho_afford: "medium", ho_zoning: "medium", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Roy Cooper", url: "https://ballotpedia.org/Roy_Cooper" },
      { label: "Axios — Cooper vs. Whatley", url: "https://www.axios.com/local/charlotte/2026/09/21/north-carolina-senate-race-cooper-whatley-trump" },
      { label: "ABC11 — Cooper, Whatley on affordability & public safety", url: "https://abc11.com/post/cooper-whatley-meet-voters-discuss-affordability-public-safety/19679596/" },
      { label: "OnTheIssues — Roy Cooper", url: "https://www.ontheissues.org/Roy_Cooper.htm" },
    ],
    sourcingNote:
      "Medicaid expansion, the abortion-ban veto, protecting Medicare/Social Security, ending tariffs, and housing deregulation are from his gubernatorial record and campaign. Many down-ballot items are inferred from his moderate-Democratic record and are lower confidence.",
  },
  {
    id: "whatley-nc-sen",
    name: "Michael Whatley",
    party: "Republican Party",
    office: "U.S. Senate — North Carolina",
    state: "NC",
    bio: "Republican nominee and former RNC chair, a close Trump ally: pro-life, defends Trump's tariffs and foreign policy, supports mass deportations and tax cuts, and emphasizes Second Amendment rights and law enforcement.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 2, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -2, hc_medicaid: -2, hc_costs: -2,
      // Economy — defends Trump's tariffs
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 2, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      fp_military: -1, fp_aid: -2, fp_intervention: -2, fp_alliances: -2, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "medium", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "low", ec_trade: "medium", ec_labor: "low",
      im_border: "medium", im_levels: "medium", im_daca: "low", im_asylum: "medium",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "medium", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "medium", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Michael Whatley", url: "https://ballotpedia.org/Michael_Whatley" },
      { label: "Axios — Cooper vs. Whatley", url: "https://www.axios.com/local/charlotte/2026/09/21/north-carolina-senate-race-cooper-whatley-trump" },
      { label: "WCNC — Whatley touts tax cuts", url: "https://www.wcnc.com/article/news/politics/national-politics/michael-whatley-touts-tax-cuts-during-concord-stop-as-cooper-leads-us-senate-race/275-7729dc2a-3153-470c-abb5-a9c7a57ae41e" },
    ],
    sourcingNote:
      "Pro-life stance, defending Trump's tariffs and Iran policy, mass deportations, tax cuts, and 2A/law-enforcement emphasis are from campaign coverage. He is less defined publicly than Cooper, so most other positions are inferred from his Trump-aligned profile and are lower confidence.",
  },

  // ----- Michigan — 2026 U.S. Senate: El-Sayed (D) vs. Rogers (R) -----
  {
    id: "elsayed-mi-sen",
    name: "Abdul El-Sayed",
    party: "Democratic Party",
    office: "U.S. Senate — Michigan",
    state: "MI",
    bio: "Democratic nominee and former Wayne County health director, a progressive (Sanders-backed): expand public health coverage while letting workers keep union/employer plans, abolish medical debt, tax billionaires, strong on labor, abortion rights, and antiwar foreign policy.",
    accent: "#1C1847",
    values: { v_govrole: 2, v_freedom: 2, v_environment: 2, v_faith: -1, v_change: 2 },
    positions: {
      hc_coverage: 2, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 2,
      ec_taxes: 2, ec_wage: 2, ec_spending: 2, ec_trade: 1, ec_labor: 2,
      im_undocumented: 2, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 2,
      ed_k12: 2, ed_debt: 2, ed_college: 2, ed_curriculum: 1, ed_prek: 2,
      cl_urgency: 2, cl_fossil: 2, cl_renew: 2, cl_carbon: 2, cl_tradeoff: 1,
      cj_police: 1, cj_sentencing: 2, cj_guns: 2, cj_drugs: 2, cj_death: 1,
      so_abortion: 2, so_lgbtq: 2, so_religion: 2, so_voting: 2, so_dei: 2,
      fp_military: 2, fp_aid: 1, fp_intervention: 2, fp_alliances: 1, fp_china: 1,
      ho_afford: 2, ho_zoning: 1, ho_renters: 2, ho_homeless: 2, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "medium", hc_preexisting: "medium", hc_medicaid: "medium", hc_costs: "medium",
      ec_wage: "medium", ec_spending: "medium", ec_trade: "low", ec_labor: "medium",
      im_undocumented: "medium", im_border: "low", im_levels: "low", im_daca: "medium", im_asylum: "low",
      ed_k12: "medium", ed_debt: "medium", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_lgbtq: "medium", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "medium", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Abdul El-Sayed", url: "https://ballotpedia.org/Abdul_El-Sayed" },
      { label: "Bridge Michigan — 7 issues defining the race", url: "https://bridgemi.com/michigan-government/mike-rogers-vs-abdul-el-sayed-7-issues-defining-michigans-us-senate-race/" },
      { label: "Michigan Independent — issues driving the election", url: "https://michiganindependent.com/politics/rising-costs-health-insurance-abortion-the-issues-driving-michigans-senate-election" },
    ],
    sourcingNote:
      "Health coverage, abolishing medical debt, taxing billionaires, labor, abortion rights, and antiwar foreign policy are from campaign coverage and debates. Several criminal-justice, education and housing items are inferred from his progressive profile and are lower confidence.",
  },
  {
    id: "rogers-mi-sen",
    name: "Mike Rogers",
    party: "Republican Party",
    office: "U.S. Senate — Michigan",
    state: "MI",
    bio: "Republican nominee and former congressman (ex-House Intelligence chair), now a Trump ally: pro-life, a national-security hawk, backs Trump's 2025 tax law, expanding 'TrumpRx' drug pricing with price transparency, manufacturing jobs, and Second Amendment rights.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -2 },
    positions: {
      // Healthcare — market + price transparency (TrumpRx)
      hc_coverage: -1, hc_drugs: 0, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -1,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 1, ec_labor: -1,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      // Foreign — national-security hawk, China hawk
      fp_military: -2, fp_aid: -1, fp_intervention: -2, fp_alliances: -1, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      hc_coverage: "medium", hc_drugs: "medium", hc_preexisting: "low", hc_medicaid: "medium", hc_costs: "medium",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "medium",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "medium", fp_aid: "low", fp_intervention: "medium", fp_alliances: "low", fp_china: "medium",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Mike Rogers (Michigan)", url: "https://ballotpedia.org/Mike_Rogers_(Michigan)" },
      { label: "Bridge Michigan — 7 issues defining the race", url: "https://bridgemi.com/michigan-government/mike-rogers-vs-abdul-el-sayed-7-issues-defining-michigans-us-senate-race/" },
      { label: "NBC News — first Michigan Senate debate", url: "https://www.nbcnews.com/politics/2026-election/sparks-fly-abdul-el-sayed-mike-rogers-first-michigan-senate-debate-rcna599866" },
    ],
    sourcingNote:
      "Abortion, the Trump tax law, a market-plus-price-transparency drug plan (TrumpRx), manufacturing focus, 2A, and a national-security-hawk foreign policy are from campaign coverage and his House record. Other positions are inferred from his Trump-aligned conservative profile and are lower confidence.",
  },

  // ----- New Hampshire — 2026 U.S. Senate: Pappas (D) vs. Sununu (R) -----
  {
    id: "pappas-nh-sen",
    name: "Chris Pappas",
    party: "Democratic Party",
    office: "U.S. Senate — New Hampshire",
    state: "NH",
    bio: "Democratic nominee and U.S. Representative (NH-01), a moderate running for the seat Jeanne Shaheen is leaving. Openly gay and a strong LGBTQ+ advocate; supports abortion rights, protecting the ACA and Medicare, lower drug costs, and veterans — with New Hampshire's characteristic fiscal moderation.",
    accent: "#1C1847",
    values: { v_govrole: 1, v_freedom: 1, v_environment: 1, v_faith: -1, v_change: 1 },
    positions: {
      hc_coverage: 1, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 1,
      ec_taxes: 1, ec_wage: 1, ec_spending: 1, ec_trade: 0, ec_labor: 1,
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      ed_k12: 1, ed_debt: 1, ed_college: 1, ed_curriculum: 1, ed_prek: 1,
      cl_urgency: 1, cl_fossil: 1, cl_renew: 2, cl_carbon: 1, cl_tradeoff: 1,
      cj_police: 1, cj_sentencing: 1, cj_guns: 1, cj_drugs: 1, cj_death: 0,
      so_abortion: 2, so_lgbtq: 2, so_religion: 1, so_voting: 2, so_dei: 1,
      fp_military: 0, fp_aid: 1, fp_intervention: 0, fp_alliances: 1, fp_china: 0,
      ho_afford: 1, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "medium", hc_preexisting: "medium", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "low", ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "low",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Chris Pappas", url: "https://ballotpedia.org/Chris_Pappas" },
      { label: "NHPR — NH & Maine could decide the Senate", url: "https://www.nhpr.org/politics/2026-10-02/midterms-2026-nh-maine-senate-elections" },
      { label: "OnTheIssues — Chris Pappas", url: "https://www.ontheissues.org/NH/Chris_Pappas.htm" },
    ],
    sourcingNote:
      "LGBTQ+ rights (he is openly gay) and abortion rights are well established; healthcare and drug-pricing votes come from his House record. Detailed 2026 issue positions were limited in reporting, so most other mappings are inferred from his moderate-Democratic record and are lower confidence.",
  },
  {
    id: "sununu-nh-sen",
    name: "John E. Sununu",
    party: "Republican Party",
    office: "U.S. Senate — New Hampshire",
    state: "NH",
    bio: "Republican nominee and former U.S. Senator (2003–2009), a traditional fiscal conservative and defense hawk rather than a populist — favoring tax cuts, restrained spending, free trade, and a strong national defense and alliances.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -1, v_faith: 0, v_change: -1 },
    positions: {
      hc_coverage: -1, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -1, hc_costs: -2,
      // Economy — fiscal conservative, free-trade traditionalist
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: -2, ec_labor: -1,
      im_undocumented: -1, im_border: -2, im_levels: -1, im_daca: -1, im_asylum: -1,
      ed_k12: -1, ed_debt: -2, ed_college: -1, ed_curriculum: -1, ed_prek: -1,
      cl_urgency: -1, cl_fossil: -1, cl_renew: -1, cl_carbon: -1, cl_tradeoff: -1,
      cj_police: -1, cj_sentencing: -1, cj_guns: -2, cj_drugs: -1, cj_death: -1,
      so_abortion: -1, so_lgbtq: -1, so_religion: 0, so_voting: -1, so_dei: -1,
      // Foreign — hawk, but a traditional pro-alliance internationalist
      fp_military: -2, fp_aid: -1, fp_intervention: -2, fp_alliances: 1, fp_china: -2,
      ho_afford: -1, ho_zoning: -2, ho_renters: -2, ho_homeless: -1, ho_ownership: -1,
    },
    positionConfidence: {
      v_faith: "low", v_environment: "low",
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "medium", ec_trade: "medium", ec_labor: "low",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "low", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "medium", fp_aid: "low", fp_intervention: "medium", fp_alliances: "medium", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — John E. Sununu", url: "https://ballotpedia.org/John_E._Sununu" },
      { label: "Bloomberg Government — NH Senate race", url: "https://news.bgov.com/bloomberg-government-news/new-hampshire-senate-race-tests-sununus-appeal-in-trump-era-104" },
      { label: "OnTheIssues — John E. Sununu", url: "https://www.ontheissues.org/John_Sununu.htm" },
    ],
    sourcingNote:
      "Fiscal conservatism, free trade, and a defense-hawk/pro-alliance foreign policy are from his Senate record and profile as a traditional (non-populist) Republican. Social-issue and most down-ballot mappings are inferred and lower confidence — his detailed 2026 positions were limited in reporting.",
  },

  // ----- Minnesota — 2026 U.S. Senate: Flanagan (D) vs. Tafoya (R) -----
  {
    id: "flanagan-mn-sen",
    name: "Peggy Flanagan",
    party: "Democratic Party",
    office: "U.S. Senate — Minnesota",
    state: "MN",
    bio: "Democratic nominee and Minnesota Lt. Governor, a progressive (the DFL's progressive-flank winner) and a prominent Native American leader, running for Tina Smith's open seat: abortion rights, strong labor and public-education support, expanded healthcare, climate action, and opposition to aggressive immigration enforcement.",
    accent: "#1C1847",
    values: { v_govrole: 2, v_freedom: 2, v_environment: 2, v_faith: -1, v_change: 2 },
    positions: {
      hc_coverage: 2, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 2,
      ec_taxes: 2, ec_wage: 2, ec_spending: 2, ec_trade: 1, ec_labor: 2,
      im_undocumented: 2, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 2,
      ed_k12: 2, ed_debt: 2, ed_college: 2, ed_curriculum: 1, ed_prek: 2,
      cl_urgency: 2, cl_fossil: 2, cl_renew: 2, cl_carbon: 2, cl_tradeoff: 1,
      cj_police: 1, cj_sentencing: 2, cj_guns: 2, cj_drugs: 2, cj_death: 1,
      so_abortion: 2, so_lgbtq: 2, so_religion: 2, so_voting: 2, so_dei: 2,
      fp_military: 1, fp_aid: 1, fp_intervention: 1, fp_alliances: 1, fp_china: 0,
      ho_afford: 2, ho_zoning: 1, ho_renters: 2, ho_homeless: 2, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "medium", hc_medicaid: "medium", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "medium", ec_spending: "medium", ec_trade: "low", ec_labor: "medium",
      im_undocumented: "medium", im_border: "low", im_levels: "low", im_daca: "medium", im_asylum: "low",
      ed_k12: "medium", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "medium",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "medium", so_religion: "low", so_voting: "low", so_dei: "medium",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Peggy Flanagan", url: "https://ballotpedia.org/Peggy_Flanagan" },
      { label: "Minnesota Reformer — Flanagan wins DFL primary", url: "https://minnesotareformer.com/2026/08/11/peggy-flanagan-wins-democratic-senate-primary-in-minnesota-in-victory-for-progressive-flank/" },
      { label: "NBC News — Flanagan wins DFL Senate primary", url: "https://www.nbcnews.com/politics/2026-election/progressive-peggy-flanagan-wins-minnesota-democratic-senate-primary-rcna591627" },
    ],
    sourcingNote:
      "Progressive economic, labor, healthcare, education, climate, abortion and immigration positions are from her record as Lt. Governor and her DFL progressive-flank campaign. Several criminal-justice, foreign-policy and housing items are inferred and lower confidence.",
  },
  {
    id: "tafoya-mn-sen",
    name: "Michele Tafoya",
    party: "Republican Party",
    office: "U.S. Senate — Minnesota",
    state: "MN",
    bio: "Republican nominee and former network sports broadcaster, a first-time candidate and conservative: vocal on parental rights in schools and against DEI/CRT, opposed to pandemic mandates, and favoring tax cuts, border enforcement, and gun rights.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 1, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      // Education — parental rights, anti-DEI/CRT (her signature theme)
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -1, so_voting: -2, so_dei: -2,
      fp_military: -1, fp_aid: -2, fp_intervention: -1, fp_alliances: -2, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "low",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "medium", ed_debt: "low", ed_college: "low", ed_curriculum: "medium", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "low", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "medium",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Michele Tafoya", url: "https://ballotpedia.org/Michele_Tafoya" },
      { label: "Washington Post — MN Senate primary (Tafoya wins GOP)", url: "https://www.washingtonpost.com/elections/2026/08/11/minnesota-senate-primary-election-results-live-angie-craig-faces-peggy-flanagan/" },
    ],
    sourcingNote:
      "Parental rights / anti-DEI education stance, opposition to mandates, tax cuts, border enforcement and gun rights are from her public profile and campaign. As a first-time candidate her record is thin, so most other positions are inferred from her conservative profile and are lower confidence.",
  },

  // ----- Iowa — 2026 U.S. Senate: Turek (D) vs. Hinson (R) -----
  {
    id: "turek-ia-sen",
    name: "Josh Turek",
    party: "Democratic Party",
    office: "U.S. Senate — Iowa",
    state: "IA",
    bio: "Democratic nominee, state representative and Paralympic gold medalist running as a working-class, disability-rights champion focused on affordability, protecting healthcare and Medicaid, and lowering costs for Iowans.",
    accent: "#1C1847",
    values: { v_govrole: 2, v_freedom: 2, v_environment: 1, v_faith: -1, v_change: 1 },
    positions: {
      hc_coverage: 2, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 2,
      ec_taxes: 2, ec_wage: 2, ec_spending: 2, ec_trade: 1, ec_labor: 2,
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      ed_k12: 2, ed_debt: 1, ed_college: 1, ed_curriculum: 1, ed_prek: 1,
      cl_urgency: 1, cl_fossil: 1, cl_renew: 2, cl_carbon: 1, cl_tradeoff: 1,
      cj_police: 1, cj_sentencing: 1, cj_guns: 1, cj_drugs: 1, cj_death: 0,
      so_abortion: 2, so_lgbtq: 2, so_religion: 1, so_voting: 2, so_dei: 2,
      fp_military: 0, fp_aid: 1, fp_intervention: 1, fp_alliances: 1, fp_china: 0,
      ho_afford: 1, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "medium", hc_medicaid: "medium", hc_costs: "low",
      ec_taxes: "low", ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "low",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Josh Turek", url: "https://ballotpedia.org/Josh_Turek" },
      { label: "Iowa Capital Dispatch — 2026 voter guide", url: "https://iowacapitaldispatch.com/voter-guides/2026-iowa-primary-election-voter-guide/" },
      { label: "NPR — Iowa primary results", url: "https://www.npr.org/2026/06/02/g-s1-125550/iowa-election-results-josh-turek-zach-lahn" },
    ],
    sourcingNote:
      "Healthcare/Medicaid, disability rights, and an affordability focus are central to his campaign; abortion and labor reflect his Democratic record. As a state legislator his federal record is limited, so most down-ballot and foreign-policy items are inferred and lower confidence.",
  },
  {
    id: "hinson-ia-sen",
    name: "Ashley Hinson",
    party: "Republican Party",
    office: "U.S. Senate — Iowa",
    state: "IA",
    bio: "Republican nominee and U.S. Representative, a Trump-aligned conservative running on tax cuts, border security, and support for Iowa agriculture and biofuels, with a pro-life, pro–Second Amendment record.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 0, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      // Climate — anti-regulation, though supportive of biofuels
      cl_urgency: -2, cl_fossil: -2, cl_renew: -1, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      fp_military: -1, fp_aid: -2, fp_intervention: -1, fp_alliances: -2, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "low",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Ashley Hinson", url: "https://ballotpedia.org/Ashley_Hinson" },
      { label: "Iowa Capital Dispatch — 2026 voter guide", url: "https://iowacapitaldispatch.com/voter-guides/2026-iowa-primary-election-voter-guide/" },
      { label: "OnTheIssues — Ashley Hinson", url: "https://www.ontheissues.org/IA/Ashley_Hinson.htm" },
    ],
    sourcingNote:
      "Tax cuts, border security, biofuels/agriculture, and a pro-life, pro-2A record are from her House tenure and campaign. Most other positions are inferred from her Trump-aligned conservative profile and are lower confidence.",
  },

  // ----- Kentucky — 2026 U.S. Senate: Booker (D) vs. Barr (R) -----
  {
    id: "booker-ky-sen",
    name: "Charles Booker",
    party: "Democratic Party",
    office: "U.S. Senate — Kentucky",
    state: "KY",
    bio: "Democratic nominee and former state representative, an unapologetic progressive ('From the Hood to the Holler'): Medicare for All, a universal basic income, tuition-free public college, federal renter protections, and racial-justice and climate action.",
    accent: "#1C1847",
    values: { v_govrole: 2, v_freedom: 2, v_environment: 2, v_faith: -1, v_change: 2 },
    positions: {
      hc_coverage: 2, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 2,
      ec_taxes: 2, ec_wage: 2, ec_spending: 2, ec_trade: 1, ec_labor: 2,
      im_undocumented: 2, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 2,
      ed_k12: 2, ed_debt: 2, ed_college: 2, ed_curriculum: 1, ed_prek: 2,
      cl_urgency: 2, cl_fossil: 2, cl_renew: 2, cl_carbon: 2, cl_tradeoff: 2,
      cj_police: 2, cj_sentencing: 2, cj_guns: 2, cj_drugs: 2, cj_death: 1,
      so_abortion: 2, so_lgbtq: 2, so_religion: 2, so_voting: 2, so_dei: 2,
      fp_military: 2, fp_aid: 1, fp_intervention: 2, fp_alliances: 1, fp_china: 1,
      ho_afford: 2, ho_zoning: 1, ho_renters: 2, ho_homeless: 2, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_drugs: "medium", hc_preexisting: "medium", hc_medicaid: "medium", hc_costs: "medium",
      ec_taxes: "medium", ec_wage: "medium", ec_trade: "low", ec_labor: "medium",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_curriculum: "low", ed_prek: "medium",
      cl_urgency: "medium", cl_fossil: "medium", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "medium", cj_sentencing: "medium", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "medium", so_religion: "low", so_voting: "medium", so_dei: "medium",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "medium", ho_zoning: "low", ho_renters: "medium", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Charles Booker", url: "https://ballotpedia.org/Charles_Booker_(American_politician)" },
      { label: "LPM — Booker wins Democratic primary", url: "https://www.lpm.org/news/2026-05-19/charles-booker-wins-democratic-primary-for-us-senate-in-kentucky-will-face-barr" },
      { label: "Spectrum News 1 — Booker campaigns statewide", url: "https://spectrumnews1.com/ky/louisville/news/2026/10/11/charles-booker-campaigning" },
    ],
    sourcingNote:
      "Medicare for All, UBI, tuition-free college, renter protections, racial-justice and climate action are from his well-documented progressive platform. Immigration, foreign-policy and some housing items are inferred from that profile and are lower confidence.",
  },
  {
    id: "barr-ky-sen",
    name: "Andy Barr",
    party: "Republican Party",
    office: "U.S. Senate — Kentucky",
    state: "KY",
    bio: "Republican nominee and U.S. Representative (a senior Financial Services member), Trump-endorsed for the seat Mitch McConnell is leaving: tax cuts, deregulation, border security, and a pro-life, pro–Second Amendment, pro-coal record.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 1, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      fp_military: -2, fp_aid: -1, fp_intervention: -1, fp_alliances: -1, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "medium", ec_trade: "low", ec_labor: "low",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "medium", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "medium",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Andy Barr", url: "https://ballotpedia.org/Andy_Barr" },
      { label: "Ballotpedia — 2026 Kentucky U.S. Senate election", url: "https://ballotpedia.org/United_States_Senate_election_in_Kentucky,_2026" },
      { label: "OnTheIssues — Andy Barr", url: "https://www.ontheissues.org/KY/Andy_Barr.htm" },
    ],
    sourcingNote:
      "Tax cuts, deregulation, border security, and a pro-life, pro-2A, pro-coal record are from his House tenure and campaign. Other positions are inferred from his Trump-aligned conservative profile and are lower confidence.",
  },

  // ----- Nebraska — 2026 U.S. Senate: Osborn (I) vs. Ricketts (R) -----
  {
    id: "osborn-ne-sen",
    name: "Dan Osborn",
    party: "Independent",
    office: "U.S. Senate — Nebraska",
    state: "NE",
    bio: "Independent nominee, a former union leader (he led the 2021 Omaha Kellogg's strike) running an economic-populist, anti-corruption campaign. Heterodox: pro-labor, pro-abortion-rights and anti-war, but a gun owner who opposes an assault-weapons ban and backs border security. Vows to caucus with neither party.",
    accent: "#AC8798",
    values: { v_govrole: 1, v_freedom: 1, v_environment: 0, v_faith: -1, v_change: 2 },
    positions: {
      hc_coverage: 1, hc_drugs: 2, hc_preexisting: 1, hc_medicaid: 1, hc_costs: 1,
      // Economy — pro-worker; would not have passed the 2025 tax law
      ec_taxes: 1, ec_wage: 2, ec_spending: 1, ec_trade: 1, ec_labor: 2,
      // Immigration — to the right of Democrats: border security, but anti-wall
      im_undocumented: -1, im_border: 0, im_levels: 0, im_daca: 1, im_asylum: 0,
      ed_k12: 1, ed_debt: 1, ed_college: 1, ed_curriculum: 0, ed_prek: 1,
      cl_urgency: 0, cl_fossil: 0, cl_renew: 1, cl_carbon: 0, cl_tradeoff: 0,
      // Justice — gun owner; opposes an assault-weapons ban
      cj_police: 0, cj_sentencing: 1, cj_guns: -1, cj_drugs: 1, cj_death: 0,
      so_abortion: 2, so_lgbtq: 1, so_religion: 1, so_voting: 1, so_dei: 0,
      // Foreign — opposes the war in Iran
      fp_military: 0, fp_aid: 0, fp_intervention: 2, fp_alliances: 0, fp_china: 0,
      ho_afford: 1, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_govrole: "low", v_freedom: "low", v_environment: "low", v_faith: "low",
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "medium", ec_spending: "low", ec_trade: "low",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "medium", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Dan Osborn", url: "https://ballotpedia.org/Dan_Osborn" },
      { label: "NBC News — Ricketts vs. Osborn debate", url: "https://www.nbcnews.com/politics/2026-election/gop-sen-pete-ricketts-independent-dan-osborn-clash-fiery-nebraska-sena-rcna595645" },
      { label: "Reason — Can Osborn win over libertarians?", url: "https://reason.com/podcast/2026/10/05/can-nebraskas-dan-osborn-win-over-libertarians/" },
    ],
    sourcingNote:
      "Labor (he led a union strike), abortion rights, opposition to an assault-weapons ban, opposition to the Iran war, and a border-security-but-anti-wall stance are documented. As a heterodox independent, many issues don't follow a party line, so numerous positions are inferred and lower confidence — verify before relying on them.",
  },
  {
    id: "ricketts-ne-sen",
    name: "Pete Ricketts",
    party: "Republican Party",
    office: "U.S. Senate — Nebraska",
    state: "NE",
    bio: "Republican incumbent and former two-term governor, a wealthy, staunch conservative: strongly pro-life, pro–Second Amendment, pro-business, favoring tax cuts, border security, and lighter regulation.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 2, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 1, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      fp_military: -2, fp_aid: -1, fp_intervention: -2, fp_alliances: -1, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "medium", ec_trade: "low", ec_labor: "medium",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "medium",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "medium", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "medium",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Pete Ricketts", url: "https://ballotpedia.org/Pete_Ricketts" },
      { label: "NBC News — Ricketts vs. Osborn debate", url: "https://www.nbcnews.com/politics/2026-election/gop-sen-pete-ricketts-independent-dan-osborn-clash-fiery-nebraska-sena-rcna595645" },
      { label: "OnTheIssues — Pete Ricketts", url: "https://www.ontheissues.org/Pete_Ricketts.htm" },
    ],
    sourcingNote:
      "A strongly pro-life, pro-2A, tax-cutting, business-first record is well established from his governorship and Senate tenure (he restored Nebraska's death penalty as governor). Most other positions are inferred from his conservative profile and are lower confidence.",
  },

  // ----- Louisiana — 2026 U.S. Senate: Davis (D) vs. Letlow (R) -----
  {
    id: "davis-la-sen",
    name: "Jamie Davis",
    party: "Democratic Party",
    office: "U.S. Senate — Louisiana",
    state: "LA",
    bio: "Democratic nominee for the seat Bill Cassidy lost in the primary, running in a deeply Republican state. Public policy record is limited; the positions below reflect a mainstream Louisiana-Democratic profile and should be treated as provisional.",
    accent: "#1C1847",
    values: { v_govrole: 1, v_freedom: 1, v_environment: 1, v_faith: -1, v_change: 1 },
    positions: {
      hc_coverage: 1, hc_drugs: 1, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 1,
      ec_taxes: 1, ec_wage: 1, ec_spending: 1, ec_trade: 1, ec_labor: 1,
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      ed_k12: 2, ed_debt: 1, ed_college: 1, ed_curriculum: 1, ed_prek: 1,
      cl_urgency: 1, cl_fossil: 0, cl_renew: 1, cl_carbon: 1, cl_tradeoff: 0,
      cj_police: 1, cj_sentencing: 1, cj_guns: 1, cj_drugs: 1, cj_death: 0,
      so_abortion: 1, so_lgbtq: 1, so_religion: 1, so_voting: 2, so_dei: 1,
      fp_military: 0, fp_aid: 1, fp_intervention: 1, fp_alliances: 1, fp_china: 0,
      ho_afford: 1, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_govrole: "low", v_freedom: "low", v_environment: "low", v_faith: "low", v_change: "low",
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "low", ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "low",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "low", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — 2026 Louisiana U.S. Senate election", url: "https://ballotpedia.org/United_States_Senate_election_in_Louisiana,_2026" },
    ],
    sourcingNote:
      "His individual policy record is thin in public reporting, so these positions are a provisional, inferred mainstream-Democratic profile and are ALL low confidence. Replace with sourced positions from his campaign before relying on this candidate's results.",
  },
  {
    id: "letlow-la-sen",
    name: "Julia Letlow",
    party: "Republican Party",
    office: "U.S. Senate — Louisiana",
    state: "LA",
    bio: "Republican nominee and U.S. Representative (LA-05), Trump-endorsed, who defeated incumbent Bill Cassidy's bid in the primary. A conservative with an education focus: pro-life, pro–Second Amendment, pro-agriculture, favoring tax cuts, school choice, and border security.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 1, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      // Education — her focus area: school choice, parental control
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -1,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      fp_military: -1, fp_aid: -1, fp_intervention: -1, fp_alliances: -1, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "low",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "medium", ed_debt: "low", ed_college: "low", ed_curriculum: "medium", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Julia Letlow", url: "https://ballotpedia.org/Julia_Letlow" },
      { label: "Ballotpedia — 2026 Louisiana U.S. Senate election", url: "https://ballotpedia.org/United_States_Senate_election_in_Louisiana,_2026" },
      { label: "OnTheIssues — Julia Letlow", url: "https://www.ontheissues.org/LA/Julia_Letlow.htm" },
    ],
    sourcingNote:
      "Education focus (school choice), pro-life, pro-2A, tax cuts, agriculture and border security are from her House record and campaign. Other positions are inferred from her Trump-aligned conservative profile and are lower confidence.",
  },

  // ----- Alaska — 2026 U.S. Senate: Peltola (D) vs. Sullivan (R) -----
  // Alaska uses ranked-choice; the general ballot also has two minor
  // candidates (incl. a same-name "Dan J. Sullivan") not profiled here.
  {
    id: "peltola-ak-sen",
    name: "Mary Peltola",
    party: "Democratic Party",
    office: "U.S. Senate — Alaska",
    state: "AK",
    bio: "Democratic nominee and former U.S. Representative, an Alaska Native (Yup'ik) moderate running on 'Fish, Family, Freedom' and affordability. Heterodox: pro-choice and pro-union, but notably gun-friendly and supportive of responsible Alaska oil, gas, and fisheries development.",
    accent: "#1C1847",
    values: { v_govrole: 1, v_freedom: 1, v_environment: 0, v_faith: -1, v_change: 1 },
    positions: {
      hc_coverage: 1, hc_drugs: 1, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 1,
      ec_taxes: 1, ec_wage: 1, ec_spending: 1, ec_trade: 0, ec_labor: 1,
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      ed_k12: 1, ed_debt: 1, ed_college: 1, ed_curriculum: 1, ed_prek: 1,
      // Climate — supports Alaska resource development (cross-cut for a Democrat)
      cl_urgency: 0, cl_fossil: -1, cl_renew: 1, cl_carbon: 0, cl_tradeoff: 0,
      // Justice — gun-friendly Alaskan
      cj_police: 1, cj_sentencing: 1, cj_guns: -1, cj_drugs: 1, cj_death: 0,
      so_abortion: 2, so_lgbtq: 1, so_religion: 1, so_voting: 2, so_dei: 2,
      fp_military: 0, fp_aid: 1, fp_intervention: 1, fp_alliances: 1, fp_china: 0,
      ho_afford: 1, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_govrole: "low", v_freedom: "low", v_environment: "low", v_faith: "low",
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "low", ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "medium",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "medium", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "low", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Mary Peltola", url: "https://ballotpedia.org/Mary_Peltola" },
      { label: "Stateline/Yahoo — Peltola vs. Sullivan", url: "https://www.yahoo.com/news/politics/articles/alaskas-2026-senate-race-know-193147345.html" },
      { label: "Alaska Public — 2026 Senate race", url: "https://alaskapublic.org/news/politics/elections/2026-08-18/u-s-senate-race-will-likely-have-two-dan-sullivans-and-a-mary-peltola" },
    ],
    sourcingNote:
      "Abortion rights, labor, a gun-friendly stance, and support for Alaska resource development are from her House record and campaign brand. As a heterodox moderate many positions don't follow a party line, so several are inferred and lower confidence.",
  },
  {
    id: "sullivan-ak-sen",
    name: "Dan Sullivan",
    party: "Republican Party",
    office: "U.S. Senate — Alaska",
    state: "AK",
    bio: "Republican incumbent and Marine Corps veteran, a conservative and defense hawk: expand Alaska oil and gas, support the military, backed the 2025 Trump tax law, with a pro-life, pro–Second Amendment record.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 1, ec_labor: -1,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      // Foreign — defense hawk (Senate Armed Services)
      fp_military: -2, fp_aid: -1, fp_intervention: -2, fp_alliances: -1, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "medium", ec_trade: "low", ec_labor: "low",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "medium", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "low", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "medium", fp_aid: "low", fp_intervention: "medium", fp_alliances: "low", fp_china: "medium",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Dan Sullivan", url: "https://ballotpedia.org/Dan_Sullivan_(Alaska)" },
      { label: "LiveNOW/Fox — Peltola vs. Sullivan", url: "https://www.livenowfox.com/news/alaskas-2026-senate-race-what-know-about-mary-peltola-vs-dan-sullivan" },
      { label: "OnTheIssues — Dan Sullivan", url: "https://www.ontheissues.org/Dan_Sullivan.htm" },
    ],
    sourcingNote:
      "Oil and gas development, military/defense, the 2025 tax law, and a pro-life, pro-2A record are from his Senate tenure and campaign. Most other positions are inferred from his conservative profile and are lower confidence.",
  },

  // ----- New Mexico — 2026 U.S. Senate: Luján (D) vs. Marker (R) -----
  {
    id: "lujan-nm-sen",
    name: "Ben Ray Luján",
    party: "Democratic Party",
    office: "U.S. Senate — New Mexico",
    state: "NM",
    bio: "Democratic incumbent and former U.S. House assistant speaker, a mainstream progressive running on restoring stripped programs and lowering costs: expand healthcare and lower drug prices, climate and public-lands protection (he moved to ban uranium mining in the Chama watershed), broadband, and immigration reform.",
    accent: "#1C1847",
    values: { v_govrole: 2, v_freedom: 2, v_environment: 2, v_faith: -1, v_change: 1 },
    positions: {
      hc_coverage: 1, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 1,
      ec_taxes: 2, ec_wage: 2, ec_spending: 2, ec_trade: 1, ec_labor: 2,
      im_undocumented: 2, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 2,
      ed_k12: 2, ed_debt: 2, ed_college: 1, ed_curriculum: 1, ed_prek: 2,
      cl_urgency: 2, cl_fossil: 1, cl_renew: 2, cl_carbon: 1, cl_tradeoff: 1,
      cj_police: 1, cj_sentencing: 1, cj_guns: 1, cj_drugs: 1, cj_death: 1,
      so_abortion: 2, so_lgbtq: 2, so_religion: 1, so_voting: 2, so_dei: 2,
      fp_military: 0, fp_aid: 1, fp_intervention: 1, fp_alliances: 1, fp_china: 0,
      ho_afford: 2, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "medium", hc_preexisting: "medium", hc_medicaid: "medium", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "medium", ec_spending: "medium", ec_trade: "low", ec_labor: "medium",
      im_undocumented: "medium", im_border: "low", im_levels: "low", im_daca: "medium", im_asylum: "low",
      ed_k12: "medium", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "medium", so_religion: "low", so_voting: "medium", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "medium", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Ben Ray Luján", url: "https://ballotpedia.org/Ben_Ray_Luján" },
      { label: "KUNM — Luján seeks reelection", url: "https://www.kunm.org/public-health-new-mexico/2026-10-19/election-2026-ben-ray-lujan-seeks-reelection-to-the-u-s-senate" },
      { label: "Source NM — 2026 U.S. Senate", url: "https://sourcenm.com/2026/09/11/new-mexico-election-2026-us-senator/" },
    ],
    sourcingNote:
      "Healthcare/drug pricing, climate and public-lands protection, taxes, labor and immigration reform are from his Senate record and campaign. Some criminal-justice, foreign-policy and housing items are inferred from his mainstream-Democratic record and are lower confidence.",
  },
  {
    id: "marker-nm-sen",
    name: "Larry Marker",
    party: "Republican Party",
    office: "U.S. Senate — New Mexico",
    state: "NM",
    bio: "Republican write-in nominee and former oil-and-gas operator challenging Sen. Luján in a strongly Democratic state (the state GOP did not field a ballot candidate). His policy record is limited; positions below reflect a conservative, energy-industry profile and are provisional.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -1 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 0, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      // Climate — former oil & gas operator
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      fp_military: -1, fp_aid: -2, fp_intervention: -1, fp_alliances: -1, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      v_govrole: "low", v_freedom: "low", v_faith: "low", v_change: "low",
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "low", ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "low",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "medium", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "low", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "KRQE — Marker looks to unseat Luján", url: "https://www.krqe.com/news/politics-government/elections/republican-larry-marker-looks-to-unseat-ben-ray-lujan-in-u-s-senate-race/" },
      { label: "Source NM — 2026 U.S. Senate", url: "https://sourcenm.com/2026/09/11/new-mexico-election-2026-us-senator/" },
    ],
    sourcingNote:
      "A write-in challenger with a limited public record; his energy-industry background supports a conservative, pro-fossil-fuel profile, but nearly all positions here are inferred and low confidence. Replace with sourced positions from his campaign before relying on this candidate's results.",
  },

  // ----- Colorado — 2026 U.S. Senate: Hickenlooper (D) vs. Baisley (R) -----
  {
    id: "hickenlooper-co-sen",
    name: "John Hickenlooper",
    party: "Democratic Party",
    office: "U.S. Senate — Colorado",
    state: "CO",
    bio: "Democratic incumbent and former governor/brewery owner, a pragmatic dealmaker running on lowering grocery and housing costs. Opposed Trump's tariffs and the GOP spending bill, and is a vocal critic of ICE enforcement tactics.",
    accent: "#1C1847",
    values: { v_govrole: 1, v_freedom: 1, v_environment: 1, v_faith: -1, v_change: 1 },
    positions: {
      hc_coverage: 1, hc_drugs: 1, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 1,
      // Economy — opposed Trump's tariffs (free-trade lean) and the GOP spending bill
      ec_taxes: 1, ec_wage: 1, ec_spending: 1, ec_trade: -1, ec_labor: 1,
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      ed_k12: 1, ed_debt: 1, ed_college: 1, ed_curriculum: 1, ed_prek: 1,
      cl_urgency: 1, cl_fossil: 1, cl_renew: 2, cl_carbon: 1, cl_tradeoff: 1,
      cj_police: 1, cj_sentencing: 1, cj_guns: 1, cj_drugs: 1, cj_death: 1,
      so_abortion: 2, so_lgbtq: 2, so_religion: 1, so_voting: 2, so_dei: 1,
      fp_military: 0, fp_aid: 1, fp_intervention: 1, fp_alliances: 1, fp_china: 0,
      ho_afford: 1, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "medium", hc_medicaid: "medium", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "medium", ec_trade: "medium", ec_labor: "low",
      im_undocumented: "medium", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "medium",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "medium", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "medium", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — John Hickenlooper", url: "https://ballotpedia.org/John_Hickenlooper" },
      { label: "Axios Denver — Hickenlooper vs. Baisley voter guide", url: "https://www.axios.com/local/denver/2026/10/17/hickenlooper-baisley-us-senate-colorado-voter-guide" },
      { label: "CPR — Colorado U.S. Senate voter guide", url: "https://www.cpr.org/2026/09/24/vg-2026-colorado-us-senate-voter-guide/" },
    ],
    sourcingNote:
      "Opposition to Trump's tariffs and the GOP spending bill, criticism of ICE tactics, and healthcare/abortion positions are from his record and campaign. As a pragmatic moderate several items are inferred and lower confidence.",
  },
  {
    id: "baisley-co-sen",
    name: "Mark Baisley",
    party: "Republican Party",
    office: "U.S. Senate — Colorado",
    state: "CO",
    bio: "Republican nominee and state senator campaigning for 'small and frugal government': fiscal restraint, government accountability, support for Trump's tariffs and the GOP spending bill, and an immigration approach that deports dangerous immigrants while letting vetted legal immigrants stay.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      // Economy — frugal government; supports Trump's tariffs
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 2, ec_labor: -2,
      // Immigration — deport dangerous, but allow vetted legal immigrants
      im_undocumented: -1, im_border: -2, im_levels: -1, im_daca: -1, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      fp_military: -1, fp_aid: -2, fp_intervention: -1, fp_alliances: -1, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "medium", ec_trade: "medium", ec_labor: "low",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "low", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Mark Baisley", url: "https://ballotpedia.org/Mark_Baisley" },
      { label: "Colorado Politics — Baisley vs. Hickenlooper", url: "https://www.coloradopolitics.com/2026/10/02/mark-baisley-john-hickenlooper-us-senate/" },
      { label: "Axios Denver — voter guide", url: "https://www.axios.com/local/denver/2026/10/17/hickenlooper-baisley-us-senate-colorado-voter-guide" },
    ],
    sourcingNote:
      "Frugal-government fiscal stance, support for Trump's tariffs and the GOP spending bill, and his nuanced immigration position are from campaign coverage. Most other positions are inferred from his conservative profile and are lower confidence.",
  },

  // ----- Virginia — 2026 U.S. Senate: Warner (D) vs. Mizusawa (R) -----
  {
    id: "warner-va-sen",
    name: "Mark Warner",
    party: "Democratic Party",
    office: "U.S. Senate — Virginia",
    state: "VA",
    bio: "Democratic incumbent and former governor/tech entrepreneur, a centrist dealmaker and Intelligence Committee leader seeking a final term: focused on healthcare and reining in AI, fiscally moderate, pro-choice, and a noted national-security and China hawk.",
    accent: "#1C1847",
    values: { v_govrole: 1, v_freedom: 1, v_environment: 1, v_faith: -1, v_change: 1 },
    positions: {
      hc_coverage: 1, hc_drugs: 1, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 1,
      ec_taxes: 1, ec_wage: 1, ec_spending: 1, ec_trade: 0, ec_labor: 1,
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      ed_k12: 1, ed_debt: 1, ed_college: 1, ed_curriculum: 1, ed_prek: 1,
      cl_urgency: 1, cl_fossil: 1, cl_renew: 1, cl_carbon: 1, cl_tradeoff: 1,
      cj_police: 1, cj_sentencing: 1, cj_guns: 1, cj_drugs: 1, cj_death: 0,
      so_abortion: 2, so_lgbtq: 2, so_religion: 1, so_voting: 2, so_dei: 1,
      // Foreign — Intelligence Committee; a China/national-security hawk (cross-cut)
      fp_military: 0, fp_aid: 1, fp_intervention: 0, fp_alliances: 1, fp_china: -1,
      ho_afford: 1, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "medium", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "medium", ec_trade: "low", ec_labor: "low",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "medium", fp_china: "medium",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Mark Warner", url: "https://ballotpedia.org/Mark_Warner" },
      { label: "Virginia Mercury — Warner seeks a final term", url: "https://virginiamercury.com/2026/10/14/warner-seeks-a-final-term-as-mizusawa-makes-his-case-for-change/" },
      { label: "OnTheIssues — Mark Warner", url: "https://www.ontheissues.org/Mark_Warner.htm" },
    ],
    sourcingNote:
      "Healthcare, AI regulation, fiscal moderation, abortion rights, and a China/national-security-hawk posture are from his Senate record. Many down-ballot items are inferred from his centrist-Democratic record and are lower confidence.",
  },
  {
    id: "mizusawa-va-sen",
    name: "Bert Mizusawa",
    party: "Republican Party",
    office: "U.S. Senate — Virginia",
    state: "VA",
    bio: "Republican nominee and retired Army Major General (and former CIA senior advisor), running as a Trump-aligned conservative and national-security hawk. His detailed policy record is limited, so the positions below are provisional.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 1, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      // Foreign — career military; a defense hawk
      fp_military: -2, fp_aid: -1, fp_intervention: -2, fp_alliances: -1, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      v_govrole: "low", v_freedom: "low", v_environment: "low", v_faith: "low",
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "low", ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "low",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "low", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "medium", fp_aid: "low", fp_intervention: "medium", fp_alliances: "low", fp_china: "medium",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Bert Mizusawa", url: "https://ballotpedia.org/Bert_Mizusawa" },
      { label: "Virginia Mercury — Warner vs. Mizusawa", url: "https://virginiamercury.com/2026/10/14/warner-seeks-a-final-term-as-mizusawa-makes-his-case-for-change/" },
    ],
    sourcingNote:
      "A Trump-aligned conservative and career-military national-security hawk; foreign-policy/defense and border positions fit that profile, but he left policy questionnaires unanswered, so most positions are inferred and low confidence. Verify before relying on this candidate's results.",
  },

  // ----- South Carolina — 2026 U.S. Senate: Andrews (D) vs. Graham (R) -----
  // Incumbent Lindsey Graham died in July 2026; his appointed successor
  // Darline Graham is the Republican nominee.
  {
    id: "andrews-sc-sen",
    name: "Annie Andrews",
    party: "Democratic Party",
    office: "U.S. Senate — South Carolina",
    state: "SC",
    bio: "Democratic nominee and pediatrician running on healthcare and gun safety: expand coverage and Medicaid, lower costs, protect abortion rights, and act on gun violence (a signature issue after treating injured children).",
    accent: "#1C1847",
    values: { v_govrole: 2, v_freedom: 2, v_environment: 1, v_faith: -1, v_change: 1 },
    positions: {
      hc_coverage: 2, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 2,
      ec_taxes: 1, ec_wage: 2, ec_spending: 1, ec_trade: 1, ec_labor: 1,
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      ed_k12: 2, ed_debt: 1, ed_college: 1, ed_curriculum: 1, ed_prek: 2,
      cl_urgency: 1, cl_fossil: 1, cl_renew: 2, cl_carbon: 1, cl_tradeoff: 1,
      // Justice — gun-safety advocate (signature)
      cj_police: 1, cj_sentencing: 1, cj_guns: 2, cj_drugs: 1, cj_death: 1,
      so_abortion: 2, so_lgbtq: 2, so_religion: 1, so_voting: 2, so_dei: 1,
      fp_military: 0, fp_aid: 1, fp_intervention: 1, fp_alliances: 1, fp_china: 0,
      ho_afford: 1, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "medium", hc_medicaid: "medium", hc_costs: "low",
      ec_taxes: "low", ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "low",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "medium", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Annie Andrews", url: "https://ballotpedia.org/Annie_Andrews" },
      { label: "Post and Courier — who's challenging for the SC seat", url: "https://www.postandcourier.com/politics/who-running-us-senate-sc-against-graham/article_d0a446aa-4183-47aa-828c-bab0083dfbd7.html" },
      { label: "NBC News — SC Senate debate", url: "https://www.nbcnews.com/politics/2026-election/south-carolina-senate-rivals-spar-iran-war-ai-trump-fiery-debate-rcna602590" },
    ],
    sourcingNote:
      "Healthcare (she is a pediatrician), gun safety, and abortion rights are central to her campaign. Many down-ballot and foreign-policy items are inferred from her Democratic profile and are lower confidence.",
  },
  {
    id: "graham-sc-sen",
    name: "Darline Graham",
    party: "Republican Party",
    office: "U.S. Senate — South Carolina",
    state: "SC",
    bio: "Republican nominee appointed to the seat after Sen. Lindsey Graham's death in 2026, then winning the special primary runoff. A conservative aligned with the state GOP and President Trump; as a newly appointed figure her independent policy record is limited, so positions here are provisional.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 1, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      fp_military: -2, fp_aid: -1, fp_intervention: -2, fp_alliances: -1, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      v_govrole: "low", v_freedom: "low", v_environment: "low", v_faith: "low", v_change: "low",
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "low", ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "low",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — 2026 South Carolina U.S. Senate election", url: "https://ballotpedia.org/2026_United_States_Senate_election_in_South_Carolina" },
      { label: "Al Jazeera — Trump boosts Graham in SC", url: "https://www.aljazeera.com/news/2026/10/21/trump-heads-to-south-carolina-to-boost-senator-darline-graham-in-race" },
    ],
    sourcingNote:
      "A newly appointed Republican aligned with the state GOP and President Trump; a conservative profile is a reasonable baseline but her independent record is thin, so nearly all positions are inferred and low confidence. Verify before relying on this candidate's results.",
  },

  // ----- Massachusetts — 2026 U.S. Senate: Markey (D) vs. Deaton (R) -----
  {
    id: "markey-ma-sen",
    name: "Ed Markey",
    party: "Democratic Party",
    office: "U.S. Senate — Massachusetts",
    state: "MA",
    bio: "Democratic incumbent and leading progressive, co-author of the Green New Deal. A climate champion who also backs Medicare for All, taxing the wealthy, strong labor and tenant protections, abortion rights, and an antiwar, pro-disarmament foreign policy.",
    accent: "#1C1847",
    values: { v_govrole: 2, v_freedom: 2, v_environment: 2, v_faith: -2, v_change: 2 },
    positions: {
      hc_coverage: 2, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 2,
      ec_taxes: 2, ec_wage: 2, ec_spending: 2, ec_trade: 1, ec_labor: 2,
      im_undocumented: 2, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 2,
      ed_k12: 2, ed_debt: 2, ed_college: 2, ed_curriculum: 1, ed_prek: 2,
      // Climate — Green New Deal co-author (signature)
      cl_urgency: 2, cl_fossil: 2, cl_renew: 2, cl_carbon: 2, cl_tradeoff: 2,
      cj_police: 2, cj_sentencing: 2, cj_guns: 2, cj_drugs: 2, cj_death: 2,
      so_abortion: 2, so_lgbtq: 2, so_religion: 2, so_voting: 2, so_dei: 2,
      // Foreign — antiwar, nuclear-disarmament advocate
      fp_military: 2, fp_aid: 1, fp_intervention: 2, fp_alliances: 1, fp_china: 1,
      ho_afford: 2, ho_zoning: 1, ho_renters: 2, ho_homeless: 2, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "medium", hc_preexisting: "medium", hc_medicaid: "medium", hc_costs: "medium",
      ec_taxes: "medium", ec_wage: "medium", ec_spending: "medium", ec_trade: "low", ec_labor: "medium",
      im_undocumented: "medium", im_border: "low", im_levels: "low", im_daca: "medium", im_asylum: "low",
      ed_k12: "medium", ed_debt: "medium", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_fossil: "medium", cl_carbon: "medium", cl_tradeoff: "medium",
      cj_police: "low", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "medium", so_religion: "low", so_voting: "medium", so_dei: "medium",
      fp_military: "medium", fp_aid: "low", fp_intervention: "medium", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "medium", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Ed Markey", url: "https://ballotpedia.org/Ed_Markey" },
      { label: "Boston Globe — 2026 Massachusetts voter guide", url: "https://apps.bostonglobe.com/elections/massachusetts/voter-guide/" },
      { label: "OnTheIssues — Ed Markey", url: "https://www.ontheissues.org/MA/Ed_Markey.htm" },
    ],
    sourcingNote:
      "Climate (he co-authored the Green New Deal), Medicare for All, taxing the wealthy, labor, tenant protections, abortion rights, and disarmament/antiwar foreign policy are from his long, well-documented Senate record. A handful of down-ballot items are inferred and lower confidence.",
  },
  {
    id: "deaton-ma-sen",
    name: "John Deaton",
    party: "Republican Party",
    office: "U.S. Senate — Massachusetts",
    state: "MA",
    bio: "Republican nominee, an attorney and crypto-industry advocate (he previously challenged Elizabeth Warren) running as a moderate, libertarian-leaning Republican: lower taxes and lighter regulation, but notably moderate on abortion (opposes a national ban) in a deep-blue state.",
    accent: "#EC2322",
    values: { v_govrole: -1, v_freedom: -2, v_environment: -1, v_faith: 0, v_change: -1 },
    positions: {
      hc_coverage: -1, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -1, hc_costs: -2,
      ec_taxes: -2, ec_wage: -1, ec_spending: -2, ec_trade: -1, ec_labor: -1,
      im_undocumented: -1, im_border: -1, im_levels: -1, im_daca: 0, im_asylum: -1,
      ed_k12: -1, ed_debt: -2, ed_college: -1, ed_curriculum: -1, ed_prek: -1,
      cl_urgency: -1, cl_fossil: -1, cl_renew: -1, cl_carbon: -1, cl_tradeoff: -1,
      cj_police: -1, cj_sentencing: 0, cj_guns: -1, cj_drugs: 0, cj_death: -1,
      // Social — moderate: opposes a national abortion ban
      so_abortion: 1, so_lgbtq: 0, so_religion: 1, so_voting: -1, so_dei: -1,
      fp_military: -1, fp_aid: -1, fp_intervention: -1, fp_alliances: 0, fp_china: -1,
      ho_afford: -1, ho_zoning: -1, ho_renters: -2, ho_homeless: -1, ho_ownership: -1,
    },
    positionConfidence: {
      v_govrole: "low", v_environment: "low", v_faith: "low", v_change: "low",
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "medium", ec_trade: "low", ec_labor: "low",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — John Deaton", url: "https://ballotpedia.org/John_Deaton" },
      { label: "Turn to 10 — Markey vs. Deaton debate", url: "https://turnto10.com/news/local/markey-takes-on-challenger-deaton-in-debate-for-us-senator-seat-in-massachusetts-oct-13-2026" },
    ],
    sourcingNote:
      "Lower taxes, lighter regulation, a libertarian lean, and a moderate abortion stance (opposing a national ban) are from his 2024 and 2026 campaigns. Many positions are inferred from that moderate-Republican profile and are lower confidence.",
  },

  // ----- Tennessee — 2026 U.S. Senate: Bradshaw (D) vs. Hagerty (R) -----
  {
    id: "bradshaw-tn-sen",
    name: "Marquita Bradshaw",
    party: "Democratic Party",
    office: "U.S. Senate — Tennessee",
    state: "TN",
    bio: "Democratic nominee and Memphis environmental-justice activist (in a 2020 rematch), running on environmental justice, affordable healthcare and Medicaid, good-paying jobs, and abortion rights.",
    accent: "#1C1847",
    values: { v_govrole: 2, v_freedom: 2, v_environment: 2, v_faith: -1, v_change: 2 },
    positions: {
      hc_coverage: 2, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 2,
      ec_taxes: 2, ec_wage: 2, ec_spending: 2, ec_trade: 1, ec_labor: 2,
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      ed_k12: 2, ed_debt: 2, ed_college: 1, ed_curriculum: 1, ed_prek: 2,
      // Climate — environmental-justice activist (signature)
      cl_urgency: 2, cl_fossil: 2, cl_renew: 2, cl_carbon: 2, cl_tradeoff: 2,
      cj_police: 1, cj_sentencing: 2, cj_guns: 1, cj_drugs: 2, cj_death: 1,
      so_abortion: 2, so_lgbtq: 2, so_religion: 1, so_voting: 2, so_dei: 2,
      fp_military: 1, fp_aid: 1, fp_intervention: 1, fp_alliances: 1, fp_china: 0,
      ho_afford: 2, ho_zoning: 1, ho_renters: 2, ho_homeless: 2, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "medium", hc_medicaid: "medium", hc_costs: "low",
      ec_taxes: "low", ec_wage: "medium", ec_spending: "low", ec_trade: "low", ec_labor: "medium",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_fossil: "medium", cl_renew: "medium", cl_carbon: "medium", cl_tradeoff: "medium",
      cj_police: "low", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "medium",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Marquita Bradshaw", url: "https://ballotpedia.org/Marquita_Bradshaw" },
      { label: "WPLN — Hagerty vs. Bradshaw rematch", url: "https://wpln.org/post/u-s-sen-bill-hagerty-will-face-democratic-challenger-marquita-bradshaw-for-a-second-time/" },
      { label: "Nashville Banner — Bradshaw wins primary", url: "https://nashvillebanner.com/2026/08/06/marquita-bradshaw-bill-hagerty-tennessee-senate-rematch/" },
    ],
    sourcingNote:
      "Environmental justice/climate is her signature, alongside healthcare, jobs and abortion rights. Many down-ballot and foreign-policy items are inferred from her progressive profile and are lower confidence.",
  },
  {
    id: "hagerty-tn-sen",
    name: "Bill Hagerty",
    party: "Republican Party",
    office: "U.S. Senate — Tennessee",
    state: "TN",
    bio: "Republican incumbent, businessman and former U.S. Ambassador to Japan, a Trump ally: tax cuts and deregulation, border security, a strong-defense and China-hawk foreign policy, and a pro-life, pro–Second Amendment record.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 1, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      fp_military: -2, fp_aid: -1, fp_intervention: -1, fp_alliances: -1, fp_china: -2,
      ho_afford: -2, ho_zoning: -2, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    positionConfidence: {
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "medium", ec_trade: "low", ec_labor: "low",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "medium", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "medium",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Bill Hagerty", url: "https://ballotpedia.org/Bill_Hagerty" },
      { label: "Tennessee Lookout — 2026 U.S. Senate", url: "https://tennesseelookout.com/voter-guides/contests/2026-u-s-senate/" },
      { label: "OnTheIssues — Bill Hagerty", url: "https://www.ontheissues.org/TN/Bill_Hagerty.htm" },
    ],
    sourcingNote:
      "Tax cuts, deregulation, border security, a China-hawk/strong-defense posture, and a pro-life, pro-2A record are from his Senate tenure and diplomatic background. Most other positions are inferred from his Trump-aligned conservative profile and are lower confidence.",
  },

  // ----- Oregon — 2026 U.S. Senate: Merkley (D) vs. Smith (R) -----
  {
    id: "merkley-or-sen",
    name: "Jeff Merkley",
    party: "Democratic Party",
    office: "U.S. Senate — Oregon",
    state: "OR",
    bio: "Democratic incumbent and leading progressive, a Green New Deal co-sponsor: aggressive climate action, Medicare for All, taxing the wealthy, strong labor and campaign-finance reform, abortion rights, and an antiwar foreign policy.",
    accent: "#1C1847",
    values: { v_govrole: 2, v_freedom: 2, v_environment: 2, v_faith: -1, v_change: 2 },
    positions: {
      hc_coverage: 2, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 2,
      ec_taxes: 2, ec_wage: 2, ec_spending: 2, ec_trade: 1, ec_labor: 2,
      im_undocumented: 2, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 2,
      ed_k12: 2, ed_debt: 2, ed_college: 2, ed_curriculum: 1, ed_prek: 2,
      cl_urgency: 2, cl_fossil: 2, cl_renew: 2, cl_carbon: 2, cl_tradeoff: 2,
      cj_police: 2, cj_sentencing: 2, cj_guns: 2, cj_drugs: 2, cj_death: 2,
      so_abortion: 2, so_lgbtq: 2, so_religion: 2, so_voting: 2, so_dei: 2,
      fp_military: 2, fp_aid: 1, fp_intervention: 2, fp_alliances: 1, fp_china: 1,
      ho_afford: 2, ho_zoning: 1, ho_renters: 2, ho_homeless: 2, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "medium", hc_preexisting: "medium", hc_medicaid: "medium", hc_costs: "medium",
      ec_taxes: "medium", ec_wage: "medium", ec_spending: "medium", ec_trade: "low", ec_labor: "medium",
      im_undocumented: "medium", im_border: "low", im_levels: "low", im_daca: "medium", im_asylum: "medium",
      ed_k12: "medium", ed_debt: "medium", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_fossil: "high", cl_carbon: "medium", cl_tradeoff: "medium",
      cj_police: "low", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "medium", so_religion: "low", so_voting: "medium", so_dei: "medium",
      fp_military: "medium", fp_aid: "low", fp_intervention: "medium", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "medium", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Jeff Merkley", url: "https://ballotpedia.org/Jeff_Merkley" },
      { label: "KLCC — Merkley vs. Smith", url: "https://www.klcc.org/politics-government/2026-10-17/sen-merkley-dodges-retirement-republican-challenger-smith" },
      { label: "OnTheIssues — Jeff Merkley", url: "https://www.ontheissues.org/OR/Jeff_Merkley.htm" },
    ],
    sourcingNote:
      "Climate (Green New Deal co-sponsor), Medicare for All, taxing the wealthy, labor, campaign-finance reform, abortion rights, and antiwar foreign policy are from his well-documented Senate record. A few down-ballot items are inferred and lower confidence.",
  },
  {
    id: "smith-or-sen",
    name: "David Brock Smith",
    party: "Republican Party",
    office: "U.S. Senate — Oregon",
    state: "OR",
    bio: "Republican nominee and Oregon state senator from the rural coast, a conservative focused on natural-resource industries (timber, fishing), lighter regulation and lower taxes, with a pro-life, pro–Second Amendment record.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 0, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      // Climate — natural-resource (timber/fishing) focus
      cl_urgency: -2, cl_fossil: -2, cl_renew: -1, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -1,
      so_abortion: -2, so_lgbtq: -2, so_religion: -1, so_voting: -2, so_dei: -2,
      fp_military: -1, fp_aid: -1, fp_intervention: -1, fp_alliances: -1, fp_china: -1,
      ho_afford: -1, ho_zoning: -2, ho_renters: -2, ho_homeless: -1, ho_ownership: -1,
    },
    positionConfidence: {
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "low", ec_trade: "low", ec_labor: "low",
      im_undocumented: "low", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "medium", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "medium",
      cj_police: "low", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — David Brock Smith", url: "https://ballotpedia.org/David_Brock_Smith" },
      { label: "Oregon Capital Chronicle — 2026 U.S. Senate", url: "https://oregoncapitalchronicle.com/voter-guides/contests/2026-general-u-s-senate/" },
    ],
    sourcingNote:
      "A natural-resource-focused, lower-tax, pro-life, pro-2A conservative from his Oregon legislative record. His national-issue positions are inferred from that profile and are mostly lower confidence.",
  },

  // ----- California — 2026 Governor: Becerra (D) vs. Hilton (R) -----
  // Governor's race: federal-issue mappings reflect general alignment.
  {
    id: "becerra-ca-gov",
    name: "Xavier Becerra",
    party: "Democratic Party",
    office: "Governor — California",
    state: "CA",
    bio: "Democratic nominee for the open governorship (Newsom is term-limited), former U.S. Health and Human Services Secretary and California Attorney General. A healthcare and immigrant-rights champion who backs expanding coverage, climate action, labor, abortion rights, and housing investment.",
    accent: "#1C1847",
    values: { v_govrole: 2, v_freedom: 2, v_environment: 2, v_faith: -1, v_change: 1 },
    positions: {
      hc_coverage: 2, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 2,
      ec_taxes: 2, ec_wage: 2, ec_spending: 2, ec_trade: 1, ec_labor: 2,
      // Immigration — as AG he repeatedly sued to defend immigrants (signature)
      im_undocumented: 2, im_border: 1, im_levels: 2, im_daca: 2, im_asylum: 2,
      ed_k12: 2, ed_debt: 2, ed_college: 2, ed_curriculum: 1, ed_prek: 2,
      cl_urgency: 2, cl_fossil: 2, cl_renew: 2, cl_carbon: 2, cl_tradeoff: 2,
      cj_police: 1, cj_sentencing: 2, cj_guns: 2, cj_drugs: 2, cj_death: 2,
      so_abortion: 2, so_lgbtq: 2, so_religion: 1, so_voting: 2, so_dei: 2,
      fp_military: 0, fp_aid: 1, fp_intervention: 1, fp_alliances: 1, fp_china: 0,
      ho_afford: 2, ho_zoning: 1, ho_renters: 2, ho_homeless: 2, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "medium", hc_preexisting: "medium", hc_medicaid: "medium", hc_costs: "medium",
      ec_taxes: "medium", ec_wage: "medium", ec_spending: "low", ec_trade: "low", ec_labor: "medium",
      im_undocumented: "medium", im_border: "low", im_levels: "medium", im_daca: "medium", im_asylum: "medium",
      ed_k12: "medium", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "medium",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "low", cj_sentencing: "low", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "medium", so_religion: "low", so_voting: "medium", so_dei: "medium",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "medium", ho_zoning: "low", ho_renters: "low", ho_homeless: "medium", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Xavier Becerra", url: "https://ballotpedia.org/Xavier_Becerra" },
      { label: "CalMatters — 2026 governor candidates", url: "https://calmatters.org/california-voter-guide-2026/governor/" },
      { label: "KQED — California governor voter guide", url: "https://www.kqed.org/voterguide/california/governor" },
    ],
    sourcingNote:
      "Healthcare (ex-HHS Secretary), immigrant rights (ex-AG), climate, labor, and abortion rights are from his record. This is a governor's race, so federal items reflect his general Democratic alignment and are lower confidence.",
  },
  {
    id: "hilton-ca-gov",
    name: "Steve Hilton",
    party: "Republican Party",
    office: "Governor — California",
    state: "CA",
    bio: "Republican nominee, a businessman and conservative commentator running on cutting taxes, spending and regulation to grow the economy — and on eliminating California's climate programs to lower gas and electricity costs. A populist outsider aligned with President Trump.",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -1 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 0, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      // Climate — campaigns on eliminating climate programs (signature)
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      fp_military: -1, fp_aid: -1, fp_intervention: -1, fp_alliances: -1, fp_china: -2,
      // Housing — deregulate to build
      ho_afford: -2, ho_zoning: -1, ho_renters: -2, ho_homeless: -2, ho_ownership: -1,
    },
    positionConfidence: {
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "low", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "medium", ec_trade: "low", ec_labor: "low",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "medium", ed_prek: "low",
      cl_urgency: "medium", cl_fossil: "medium", cl_renew: "medium", cl_carbon: "medium", cl_tradeoff: "medium",
      cj_police: "medium", cj_sentencing: "low", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "low", so_lgbtq: "low", so_religion: "low", so_voting: "low", so_dei: "medium",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "medium", ho_zoning: "low", ho_renters: "low", ho_homeless: "medium", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Steve Hilton", url: "https://ballotpedia.org/Steve_Hilton" },
      { label: "CalMatters — 2026 governor candidates", url: "https://calmatters.org/california-voter-guide-2026/governor/" },
      { label: "KQED — California governor voter guide", url: "https://www.kqed.org/voterguide/california/governor" },
    ],
    sourcingNote:
      "Cutting taxes/spending/regulation and eliminating climate programs are central campaign themes. This is a governor's race, so federal items reflect his general conservative alignment and are lower confidence.",
  },

  // ----- New York — 2026 Governor: Hochul (D) vs. Blakeman (R) -----
  {
    id: "hochul-ny-gov",
    name: "Kathy Hochul",
    party: "Democratic Party",
    office: "Governor — New York",
    state: "NY",
    bio: "Democratic incumbent governor seeking reelection on child care, public safety paired with gun-safety laws, defending Medicaid, abortion rights, and climate — with pragmatic, sometimes centrist moves (she rolled back parts of bail reform and navigated the NYC migrant influx).",
    accent: "#1C1847",
    values: { v_govrole: 2, v_freedom: 2, v_environment: 1, v_faith: -1, v_change: 1 },
    positions: {
      hc_coverage: 1, hc_drugs: 1, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 1,
      ec_taxes: 1, ec_wage: 2, ec_spending: 2, ec_trade: 0, ec_labor: 1,
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      ed_k12: 2, ed_debt: 1, ed_college: 1, ed_curriculum: 1, ed_prek: 2,
      cl_urgency: 1, cl_fossil: 1, cl_renew: 2, cl_carbon: 1, cl_tradeoff: 1,
      // Justice — gun-safety laws, but tempered bail reform
      cj_police: 1, cj_sentencing: 0, cj_guns: 2, cj_drugs: 1, cj_death: 0,
      so_abortion: 2, so_lgbtq: 2, so_religion: 1, so_voting: 2, so_dei: 1,
      fp_military: 0, fp_aid: 1, fp_intervention: 1, fp_alliances: 1, fp_china: 0,
      ho_afford: 2, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    positionConfidence: {
      v_faith: "low",
      hc_coverage: "medium", hc_drugs: "low", hc_preexisting: "medium", hc_medicaid: "medium", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "medium", ec_spending: "medium", ec_trade: "low", ec_labor: "low",
      im_undocumented: "medium", im_border: "low", im_levels: "low", im_daca: "low", im_asylum: "medium",
      ed_k12: "medium", ed_debt: "low", ed_college: "low", ed_curriculum: "low", ed_prek: "medium",
      cl_urgency: "medium", cl_fossil: "low", cl_renew: "medium", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "medium", cj_sentencing: "medium", cj_guns: "medium", cj_drugs: "low", cj_death: "low",
      so_abortion: "medium", so_lgbtq: "medium", so_religion: "low", so_voting: "low", so_dei: "low",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "medium", ho_zoning: "medium", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Kathy Hochul", url: "https://ballotpedia.org/Kathy_Hochul" },
      { label: "NYS Focus — the NY governor's race", url: "https://nysfocus.com/2026/10/14/new-york-governors-race-hochul-blakeman" },
      { label: "ABC7 NY — Hochul vs. Blakeman on crime & child care", url: "https://abc7ny.com/post/2026-ny-governor-race-hochul-blakeman-clash-crime-child-care/19956451/" },
    ],
    sourcingNote:
      "Child care, gun-safety laws, defending Medicaid, abortion rights, and climate are from her record, which also has centrist moves (bail-reform rollback, migrant-influx caution). Governor's race, so federal items reflect general alignment and are lower confidence.",
  },
  {
    id: "blakeman-ny-gov",
    name: "Bruce Blakeman",
    party: "Republican Party",
    office: "Governor — New York",
    state: "NY",
    bio: "Republican nominee and Nassau County Executive, Trump-endorsed, running on crime and public safety, tax cuts, cooperation with federal immigration enforcement, and 'parental rights' (he restricted transgender athletes in county facilities).",
    accent: "#EC2322",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 1, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -1, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 0, ec_labor: -1,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -1,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -1, cl_carbon: -2, cl_tradeoff: -2,
      // Justice — crime/public-safety focus, pro-police, anti-bail-reform
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -1,
      so_abortion: -1, so_lgbtq: -2, so_religion: -1, so_voting: -1, so_dei: -2,
      fp_military: -1, fp_aid: -1, fp_intervention: -1, fp_alliances: -1, fp_china: -1,
      ho_afford: -1, ho_zoning: -2, ho_renters: -2, ho_homeless: -1, ho_ownership: -1,
    },
    positionConfidence: {
      hc_coverage: "low", hc_drugs: "low", hc_preexisting: "low", hc_medicaid: "medium", hc_costs: "low",
      ec_taxes: "medium", ec_wage: "low", ec_spending: "medium", ec_trade: "low", ec_labor: "low",
      im_undocumented: "medium", im_border: "medium", im_levels: "low", im_daca: "low", im_asylum: "low",
      ed_k12: "low", ed_debt: "low", ed_college: "low", ed_curriculum: "medium", ed_prek: "low",
      cl_urgency: "low", cl_fossil: "low", cl_renew: "low", cl_carbon: "low", cl_tradeoff: "low",
      cj_police: "medium", cj_sentencing: "medium", cj_guns: "low", cj_drugs: "low", cj_death: "low",
      so_abortion: "low", so_lgbtq: "medium", so_religion: "low", so_voting: "low", so_dei: "medium",
      fp_military: "low", fp_aid: "low", fp_intervention: "low", fp_alliances: "low", fp_china: "low",
      ho_afford: "low", ho_zoning: "low", ho_renters: "low", ho_homeless: "low", ho_ownership: "low",
    },
    sources: [
      { label: "Ballotpedia — Bruce Blakeman", url: "https://ballotpedia.org/Bruce_Blakeman" },
      { label: "NYS Focus — the NY governor's race", url: "https://nysfocus.com/2026/10/14/new-york-governors-race-hochul-blakeman" },
      { label: "ABC7 NY — Hochul vs. Blakeman on crime & child care", url: "https://abc7ny.com/post/2026-ny-governor-race-hochul-blakeman-clash-crime-child-care/19956451/" },
    ],
    sourcingNote:
      "Crime/public-safety emphasis, tax cuts, cooperation with ICE, and 'parental rights' (restricting transgender athletes) are from his record and campaign. Governor's race, so federal items reflect general conservative alignment and are lower confidence.",
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
