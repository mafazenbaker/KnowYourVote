import type { Candidate } from "./types";
import { US_STATES } from "./survey";

// ---------------------------------------------------------------------------
// ILLUSTRATIVE SAMPLE CANDIDATES.
//
// These are NOT real people. They are fictional archetypes used to demonstrate
// the matching engine end-to-end. Positions were authored to span the political
// spectrum (with deliberate cross-cutting stances so matches are meaningful).
//
// To go live for a real election, replace this array with vetted data for the
// candidates actually on a voter's ballot — sourced from neutral references such
// as Ballotpedia, Vote Smart, VOTE411 (League of Women Voters), and official
// candidate materials — keeping the same `positions` / `values` keys.
//
// `party` is intentionally never shown during the quiz — only on the results
// screen — so party labels can't bias a voter's answers.
// ---------------------------------------------------------------------------

const SHARED_SOURCES = [
  { label: "Ballotpedia — candidate profile", url: "https://ballotpedia.org" },
  { label: "Vote Smart — issue positions", url: "https://justfacts.votesmart.org" },
  { label: "VOTE411 — League of Women Voters guide", url: "https://www.vote411.org" },
];

export const CANDIDATES: Candidate[] = [
  {
    id: "romero",
    name: "Alex Romero",
    party: "Democratic Party",
    office: "U.S. Senate (sample)",
    state: "PA",
    bio: "A progressive who campaigns on expanding public programs, aggressive climate action, and broadening civil-rights protections.",
    accent: "#1C1847",
    values: { v_govrole: 2, v_freedom: 2, v_environment: 2, v_faith: -2, v_change: 2 },
    positions: {
      hc_coverage: 2, hc_drugs: 2, hc_preexisting: 2, hc_medicaid: 2, hc_costs: 2,
      ec_taxes: 2, ec_wage: 2, ec_spending: 2, ec_trade: 1, ec_labor: 2,
      im_undocumented: 2, im_border: 2, im_levels: 2, im_daca: 2, im_asylum: 2,
      ed_k12: 2, ed_debt: 2, ed_college: 2, ed_curriculum: 2, ed_prek: 2,
      cl_urgency: 2, cl_fossil: 2, cl_renew: 2, cl_carbon: 2, cl_tradeoff: 2,
      cj_police: 1, cj_sentencing: 2, cj_guns: 2, cj_drugs: 2, cj_death: 2,
      so_abortion: 2, so_lgbtq: 2, so_religion: 2, so_voting: 2, so_dei: 2,
      fp_military: 1, fp_aid: 2, fp_intervention: 1, fp_alliances: 2, fp_china: 1,
      ho_afford: 2, ho_zoning: 1, ho_renters: 2, ho_homeless: 2, ho_ownership: 2,
    },
    sources: SHARED_SOURCES,
  },
  {
    id: "bennett",
    name: "Jordan Bennett",
    party: "Democratic Party",
    office: "U.S. House (sample)",
    state: "TX",
    bio: "A pragmatic center-left candidate who favors incremental fixes, protecting existing coverage, and a pro-worker but business-friendly economy.",
    accent: "#F16B64",
    values: { v_govrole: 1, v_freedom: 1, v_environment: 1, v_faith: -1, v_change: 1 },
    positions: {
      hc_coverage: 1, hc_drugs: 1, hc_preexisting: 2, hc_medicaid: 1, hc_costs: 1,
      ec_taxes: 1, ec_wage: 1, ec_spending: 1, ec_trade: -1, ec_labor: 1,
      im_undocumented: 1, im_border: 1, im_levels: 1, im_daca: 2, im_asylum: 1,
      ed_k12: 1, ed_debt: 1, ed_college: 1, ed_curriculum: 1, ed_prek: 1,
      cl_urgency: 1, cl_fossil: 1, cl_renew: 1, cl_carbon: 1, cl_tradeoff: 1,
      cj_police: 1, cj_sentencing: 1, cj_guns: 1, cj_drugs: 1, cj_death: 1,
      so_abortion: 2, so_lgbtq: 1, so_religion: 1, so_voting: 1, so_dei: 1,
      fp_military: -1, fp_aid: 1, fp_intervention: -1, fp_alliances: 1, fp_china: -1,
      ho_afford: 1, ho_zoning: 1, ho_renters: 1, ho_homeless: 1, ho_ownership: 1,
    },
    sources: SHARED_SOURCES,
  },
  {
    id: "whitaker",
    name: "Sam Whitaker",
    party: "Independent",
    office: "Governor (sample)",
    state: "PA",
    bio: "A self-described independent: a fiscal moderate and deficit hawk who leans socially liberal and pitches practical, non-partisan problem-solving.",
    accent: "#AC8798",
    values: { v_govrole: 0, v_freedom: -1, v_environment: 0, v_faith: 0, v_change: 0 },
    positions: {
      hc_coverage: -1, hc_drugs: 1, hc_preexisting: 2, hc_medicaid: -1, hc_costs: -1,
      ec_taxes: -1, ec_wage: 1, ec_spending: -2, ec_trade: -1, ec_labor: -1,
      im_undocumented: 1, im_border: -1, im_levels: 1, im_daca: 1, im_asylum: 1,
      ed_k12: -1, ed_debt: -1, ed_college: -1, ed_curriculum: -1, ed_prek: 1,
      cl_urgency: 1, cl_fossil: -1, cl_renew: 1, cl_carbon: -1, cl_tradeoff: -1,
      cj_police: -1, cj_sentencing: 1, cj_guns: 1, cj_drugs: 1, cj_death: -1,
      so_abortion: 1, so_lgbtq: 1, so_religion: 1, so_voting: -1, so_dei: -1,
      fp_military: -1, fp_aid: -1, fp_intervention: -1, fp_alliances: 1, fp_china: -1,
      ho_afford: 1, ho_zoning: 1, ho_renters: -1, ho_homeless: 1, ho_ownership: 1,
    },
    sources: SHARED_SOURCES,
  },
  {
    id: "kessler",
    name: "Dana Kessler",
    party: "Republican Party",
    office: "U.S. House (sample)",
    state: "TX",
    bio: "A center-right, business-first candidate with a libertarian streak: low taxes and light regulation, but more moderate on some social questions.",
    accent: "#EC2322",
    values: { v_govrole: -1, v_freedom: -2, v_environment: -1, v_faith: 1, v_change: -1 },
    positions: {
      hc_coverage: -1, hc_drugs: 0, hc_preexisting: 1, hc_medicaid: -1, hc_costs: -2,
      ec_taxes: -2, ec_wage: -1, ec_spending: -1, ec_trade: -1, ec_labor: -1,
      im_undocumented: -1, im_border: -1, im_levels: -1, im_daca: 1, im_asylum: -1,
      ed_k12: -2, ed_debt: -1, ed_college: -1, ed_curriculum: -1, ed_prek: -1,
      cl_urgency: -1, cl_fossil: -1, cl_renew: -1, cl_carbon: -1, cl_tradeoff: -1,
      cj_police: -1, cj_sentencing: -1, cj_guns: -1, cj_drugs: 1, cj_death: -1,
      so_abortion: -1, so_lgbtq: 1, so_religion: -1, so_voting: -1, so_dei: -1,
      fp_military: -1, fp_aid: -1, fp_intervention: -1, fp_alliances: 1, fp_china: -1,
      ho_afford: -1, ho_zoning: 1, ho_renters: -2, ho_homeless: -1, ho_ownership: -1,
    },
    sources: SHARED_SOURCES,
  },
  {
    id: "halloway",
    name: "Grant Halloway",
    party: "Republican Party",
    office: "U.S. Senate (sample)",
    state: "PA",
    bio: "A staunch conservative with a populist streak: traditional social values, tough on immigration and crime, protectionist on trade, and wary of foreign entanglements.",
    accent: "#1C1847",
    values: { v_govrole: -2, v_freedom: -2, v_environment: -2, v_faith: 2, v_change: -2 },
    positions: {
      hc_coverage: -2, hc_drugs: -2, hc_preexisting: -1, hc_medicaid: -2, hc_costs: -2,
      ec_taxes: -2, ec_wage: -2, ec_spending: -2, ec_trade: 2, ec_labor: -2,
      im_undocumented: -2, im_border: -2, im_levels: -2, im_daca: -2, im_asylum: -2,
      ed_k12: -2, ed_debt: -2, ed_college: -2, ed_curriculum: -2, ed_prek: -2,
      cl_urgency: -2, cl_fossil: -2, cl_renew: -2, cl_carbon: -2, cl_tradeoff: -2,
      cj_police: -2, cj_sentencing: -2, cj_guns: -2, cj_drugs: -2, cj_death: -2,
      so_abortion: -2, so_lgbtq: -2, so_religion: -2, so_voting: -2, so_dei: -2,
      fp_military: -2, fp_aid: -2, fp_intervention: 1, fp_alliances: -2, fp_china: -2,
      ho_afford: -2, ho_zoning: -1, ho_renters: -2, ho_homeless: -2, ho_ownership: -2,
    },
    sources: SHARED_SOURCES,
  },
];

// ---------------------------------------------------------------------------
// State-based filtering
// ---------------------------------------------------------------------------

/** Candidates whose race is in the given state (2-letter code). */
export function candidatesForState(stateCode: string): Candidate[] {
  return CANDIDATES.filter((c) => c.state === stateCode);
}

/** State codes that currently have at least one sample candidate loaded. */
export const STATES_WITH_CANDIDATES: string[] = Array.from(
  new Set(CANDIDATES.map((c) => c.state)),
).sort();

/** Full state names for the states that have candidates (for empty-state copy). */
export const STATE_NAMES_WITH_CANDIDATES: string[] = STATES_WITH_CANDIDATES.map(
  (code) => US_STATES.find((s) => s.code === code)?.name ?? code,
);
