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
