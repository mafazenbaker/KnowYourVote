// Core data types for the BallotMatch survey + matching engine.

/** A selectable answer. `value` is the stance on this question's -2..+2 axis
 *  (only present for scored questions used in matching). */
export interface Choice {
  id: string;
  label: string;
  value?: number; // -2 .. +2
}

export type QuestionType =
  | "single" // pick one choice
  | "multi" // pick many choices (context only, not scored)
  | "scale" // -2..+2 slider with left/right anchors (value axes)
  | "state" // US state picker
  | "text"; // free text (context only)

export interface Question {
  id: string;
  text: string;
  help?: string;
  type: QuestionType;
  choices?: Choice[];
  optional?: boolean;
  // For "scale" questions:
  leftLabel?: string;
  rightLabel?: string;
}

/** A non-branching phase (background, economic, values, state, voting behavior). */
export interface Phase {
  id: string;
  title: string;
  subtitle: string;
  questions: Question[];
}

/** A policy area. Its module questions are only shown if the voter rates it a
 *  priority in the ranking step. Each question is scored against candidates. */
export interface Issue {
  id: string;
  label: string;
  icon: string; // emoji
  blurb: string;
  questions: Question[]; // every choice carries a `value`
}

export interface ValueAxis {
  id: string;
  text: string;
  leftLabel: string;
  rightLabel: string;
}

/** An illustrative candidate. Positions are keyed by question id. */
export interface Candidate {
  id: string;
  name: string;
  party: string; // revealed only on the results screen, never during the quiz
  office: string;
  bio: string;
  accent: string; // hex used for the avatar tile
  values: Record<string, number>; // valueAxis.id -> -2..+2
  positions: Record<string, number>; // issue question id -> -2..+2
  sources: { label: string; url: string }[];
}

/** The full set of answers a voter accumulates. */
export interface Answers {
  // phaseId/questionId -> choiceId | choiceId[] | number (scale) | string (text)
  context: Record<string, string | string[] | number>;
  values: Record<string, number>; // axisId -> -2..+2
  priorities: Record<string, number>; // issueId -> 0..3 importance
  positions: Record<string, number>; // question id -> -2..+2
  state: string;
}

export interface AgreementItem {
  issueLabel: string;
  questionText: string;
  voterLabel: string;
  candidateLabel: string;
  distance: number; // 0..4
}

export interface MatchResult {
  candidate: Candidate;
  matchPct: number; // 0..100 blended
  issueMatch: number; // 0..100
  valuesMatch: number; // 0..100
  agreements: AgreementItem[];
  disagreements: AgreementItem[];
  breakdown: { issueLabel: string; score: number; weight: number }[];
}
