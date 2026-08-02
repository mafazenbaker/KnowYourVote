import type {
  Answers,
  Candidate,
  MatchResult,
  AgreementItem,
  Question,
} from "./types";
import { ISSUES, VALUE_AXES } from "./survey";

const MAX_DISTANCE = 4; // range of a -2..+2 axis

/** Importance rating (0..3) at or above which an issue module is shown/scored. */
export const PRIORITY_THRESHOLD = 2;

function agreementFromDistance(distance: number): number {
  return 1 - distance / MAX_DISTANCE; // 0..1
}

/** Nearest choice label to a numeric stance value, for display. */
function labelForValue(question: Question, value: number): string {
  if (!question.choices) return "—";
  let best = question.choices[0];
  let bestDiff = Infinity;
  for (const c of question.choices) {
    if (c.value === undefined) continue;
    const diff = Math.abs(c.value - value);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = c;
    }
  }
  return best.label;
}

/** The issues the voter marked as a priority (rating >= threshold). */
export function priorityIssues(answers: Answers) {
  return ISSUES.filter(
    (issue) => (answers.priorities[issue.id] ?? 0) >= PRIORITY_THRESHOLD,
  );
}

export function scoreCandidate(
  candidate: Candidate,
  answers: Answers,
): MatchResult {
  const chosen = priorityIssues(answers);

  const agreements: AgreementItem[] = [];
  const disagreements: AgreementItem[] = [];
  const breakdown: { issueLabel: string; score: number; weight: number }[] = [];

  let weightedSum = 0;
  let weightTotal = 0;

  for (const issue of chosen) {
    const weight = answers.priorities[issue.id] ?? 0;
    let issueAgreementSum = 0;
    let answeredCount = 0;

    for (const q of issue.questions) {
      const userVal = answers.positions[q.id];
      const candVal = candidate.positions[q.id];
      if (userVal === undefined || candVal === undefined) continue;

      const distance = Math.abs(userVal - candVal);
      issueAgreementSum += agreementFromDistance(distance);
      answeredCount++;

      const item: AgreementItem = {
        issueLabel: issue.label,
        questionText: q.text,
        voterLabel: labelForValue(q, userVal),
        candidateLabel: labelForValue(q, candVal),
        distance,
      };
      if (distance <= 1) agreements.push(item);
      else if (distance >= 3) disagreements.push(item);
    }

    if (answeredCount > 0) {
      const issueScore = issueAgreementSum / answeredCount; // 0..1
      weightedSum += issueScore * weight;
      weightTotal += weight;
      breakdown.push({
        issueLabel: issue.label,
        score: Math.round(issueScore * 100),
        weight,
      });
    }
  }

  const issueMatch = weightTotal > 0 ? weightedSum / weightTotal : 0; // 0..1

  // Values agreement across the five axes.
  let valuesSum = 0;
  let valuesCount = 0;
  for (const axis of VALUE_AXES) {
    const userVal = answers.values[axis.id];
    const candVal = candidate.values[axis.id];
    if (userVal === undefined || candVal === undefined) continue;
    valuesSum += agreementFromDistance(Math.abs(userVal - candVal));
    valuesCount++;
  }
  const valuesMatch = valuesCount > 0 ? valuesSum / valuesCount : 0; // 0..1

  // Blend: issues carry the weight, values act as a secondary axis / tiebreaker.
  // If the voter marked no priority issues, fall back to values only.
  const blended =
    weightTotal > 0 ? 0.85 * issueMatch + 0.15 * valuesMatch : valuesMatch;

  // Rank agreements/disagreements by issue weight, then by strength.
  const byWeight = (a: AgreementItem, b: AgreementItem) => {
    const wa = answers.priorities[issueIdForLabel(a.issueLabel)] ?? 0;
    const wb = answers.priorities[issueIdForLabel(b.issueLabel)] ?? 0;
    return wb - wa;
  };
  agreements.sort((a, b) => byWeight(a, b) || a.distance - b.distance);
  disagreements.sort((a, b) => byWeight(a, b) || b.distance - a.distance);
  breakdown.sort((a, b) => b.weight - a.weight || b.score - a.score);

  return {
    candidate,
    matchPct: Math.round(blended * 100),
    issueMatch: Math.round(issueMatch * 100),
    valuesMatch: Math.round(valuesMatch * 100),
    agreements,
    disagreements,
    breakdown,
  };
}

const LABEL_TO_ID: Record<string, string> = Object.fromEntries(
  ISSUES.map((i) => [i.label, i.id]),
);
function issueIdForLabel(label: string): string {
  return LABEL_TO_ID[label] ?? label;
}

export function rankCandidates(
  answers: Answers,
  candidates: Candidate[],
): MatchResult[] {
  return candidates
    .map((c) => scoreCandidate(c, answers))
    .sort((a, b) => b.matchPct - a.matchPct);
}
