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

/** How well-established a mapped position is.
 *  - high:   the candidate has an explicit, documented stance.
 *  - medium: reasonably supported, but partly interpreted.
 *  - low:    inferred from voting record / platform; no explicit statement. */
export type Confidence = "high" | "medium" | "low";

/** A candidate on a ballot. Positions are keyed by question id. */
export interface Candidate {
  id: string;
  name: string;
  party: string; // revealed only on the results screen, never during the quiz
  office: string;
  state: string; // 2-letter code of the state this candidate is running in
  bio: string;
  accent: string; // hex used for the avatar tile
  values: Record<string, number>; // valueAxis.id -> -2..+2
  positions: Record<string, number>; // issue question id -> -2..+2
  /** Per-key confidence, keyed by the same position/value ids. Missing = treat
   *  as "high" (set it explicitly for anything inferred). */
  positionConfidence?: Record<string, Confidence>;
  sources: { label: string; url: string }[];
  /** Transparency note: how positions were compiled, and any caveats. */
  sourcingNote?: string;
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
  confidence?: Confidence; // confidence of the candidate's mapped position
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
