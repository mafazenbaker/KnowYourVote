"use client";

import { useMemo, useState } from "react";
import type { Answers, MatchResult } from "@/lib/types";
import {
  CANDIDATES,
  candidatesForState,
  STATE_NAMES_WITH_CANDIDATES,
} from "@/lib/candidates";
import { rankCandidates, priorityIssues } from "@/lib/scoring";
import { US_STATES } from "@/lib/survey";
import { IssueIcon, BallotIcon, StarIcon } from "./icons";

function matchColor(pct: number) {
  if (pct >= 75) return "#1C1847";
  if (pct >= 55) return "#F16B64";
  return "#AC8798";
}

export default function Results({
  answers,
  onRestart,
}: {
  answers: Answers;
  onRestart: () => void;
}) {
  const [previewAll, setPreviewAll] = useState(false);

  const stateName =
    US_STATES.find((s) => s.code === answers.state)?.name ?? "your state";
  const topIssues = priorityIssues(answers);

  const inState = useMemo(
    () => candidatesForState(answers.state),
    [answers.state],
  );
  const hasStateCandidates = inState.length > 0;

  // Filter to the voter's state unless they've opted to preview the full set.
  const pool = previewAll || !hasStateCandidates ? CANDIDATES : inState;
  const showingFiltered = hasStateCandidates && !previewAll;

  const results = useMemo(
    () => rankCandidates(answers, pool),
    [answers, pool],
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      {/* Real-data sourcing disclaimer */}
      <div className="mb-6 rounded-xl border-l-4 border-brand-red bg-white p-4 text-sm text-brand-navy/80 shadow-card">
        <strong className="text-brand-red">Real candidates, sourced positions.</strong>{" "}
        Positions are mapped from each candidate&apos;s public record, campaign
        materials, and neutral trackers (see the Sources on each card), compiled
        August 2026. Some positions are inferred from a candidate&apos;s voting
        record or platform where no explicit statement was found — always verify
        against official sources before you vote. Currently covers the{" "}
        {STATE_NAMES_WITH_CANDIDATES.join(" and ")} U.S. Senate race.
      </div>

      {/* Header banner */}
      <div className="rounded-2xl bg-brand-navy p-6 text-center text-white">
        <p className="text-sm font-medium text-brand-coral">
          Your ballot · {stateName}
        </p>
        <h1 className="mt-1 font-display text-3xl font-bold">
          {hasStateCandidates ? "Your top matches" : "Your matches"}
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-white/75">
          {showingFiltered
            ? `Showing the ${inState.length} candidate${
                inState.length === 1 ? "" : "s"
              } on the ballot in ${stateName}, ranked by how closely each lines up with the ${
                topIssues.length
              } issue${topIssues.length === 1 ? "" : "s"} you care about most.`
            : `Ranked by how closely each candidate lines up with the ${
                topIssues.length
              } issue${
                topIssues.length === 1 ? "" : "s"
              } you told us matter most, plus your core values.`}
        </p>
        {topIssues.length > 0 && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {topIssues.map((i) => (
              <span
                key={i.id}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm"
              >
                <IssueIcon id={i.id} className="h-4 w-4" /> {i.label}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* No candidates loaded for this state */}
      {!hasStateCandidates && (
        <div className="mt-6 rounded-2xl border border-brand-navy/10 bg-white p-6 text-center shadow-card">
          <BallotIcon className="mx-auto h-8 w-8 text-brand-navy" />
          <h2 className="mt-2 font-display text-xl font-bold text-brand-navy">
            No candidates are loaded for {stateName} yet
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-brand-navy/70">
            This tool currently covers the{" "}
            {STATE_NAMES_WITH_CANDIDATES.join(" and ")} U.S. Senate race. More
            states are added as their candidate data is sourced. For now, here&apos;s
            how your answers would score against the candidates we do have:
          </p>
        </div>
      )}

      {/* State-filter toggle (only when the state actually has candidates) */}
      {hasStateCandidates && (
        <div className="mt-6 flex items-center justify-center gap-2 text-sm">
          <span className="text-brand-navy/60">
            {showingFiltered
              ? `On your ${stateName} ballot`
              : "Showing all loaded candidates"}
          </span>
          <button
            onClick={() => setPreviewAll((p) => !p)}
            className="rounded-full border border-brand-navy/20 px-4 py-1.5 font-semibold text-brand-navy transition hover:bg-brand-navy/5"
          >
            {showingFiltered
              ? "Preview all loaded candidates"
              : `Show only ${stateName} ballot`}
          </button>
        </div>
      )}

      {/* Candidate cards */}
      <div className="mt-6 space-y-4">
        {results.map((r, idx) => (
          <CandidateCard key={r.candidate.id} result={r} rank={idx + 1} />
        ))}
      </div>

      {/* Methodology */}
      <details className="mt-8 rounded-xl border border-brand-navy/10 bg-white p-5 text-sm text-brand-navy/80 shadow-card">
        <summary className="cursor-pointer font-semibold text-brand-navy">
          How the match score is calculated
        </summary>
        <div className="mt-3 space-y-2">
          <p>
            For every issue you marked <em>Important</em> or{" "}
            <em>Top priority</em>, we compare your answer to each candidate's
            position on the same question. Closer answers score higher.
          </p>
          <p>
            Each issue is weighted by how important you said it was, then blended
            into an overall issue score (85%). Your five core values act as a
            secondary axis and tiebreaker (15%).
          </p>
          <p>
            Nothing is hidden: every agreement and disagreement below traces back
            to a specific question, and party labels are only shown here — never
            while you answer.
          </p>
        </div>
      </details>

      <div className="mt-8 text-center">
        <button
          onClick={onRestart}
          className="rounded-full border border-brand-navy/20 px-6 py-3 font-semibold text-brand-navy transition hover:bg-brand-navy/5"
        >
          ↺ Start over
        </button>
      </div>
    </div>
  );
}

function CandidateCard({ result, rank }: { result: MatchResult; rank: number }) {
  const [open, setOpen] = useState(rank === 1);
  const c = result.candidate;
  const color = matchColor(result.matchPct);

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white shadow-card transition ${
        rank === 1 ? "border-brand-navy" : "border-brand-navy/10"
      }`}
    >
      {rank === 1 && (
        <div className="flex items-center justify-center gap-1.5 bg-brand-red px-6 py-2 text-center text-sm font-bold uppercase tracking-wide text-white">
          <StarIcon className="h-4 w-4" /> Closest match
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div
            className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-xl text-xl font-bold text-white"
            style={{ backgroundColor: c.accent }}
            aria-hidden
          >
            {c.name
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-lg font-bold text-brand-navy">{c.name}</h3>
              <span className="text-sm text-brand-navy/60">{c.office}</span>
            </div>
            <p className="text-sm font-medium text-brand-navy/70">{c.party}</p>
            <p className="mt-2 text-sm text-brand-navy/70">{c.bio}</p>
          </div>
        </div>

        {/* score */}
        <div className="mt-5">
          <div className="mb-1 flex items-center justify-between text-sm font-medium text-brand-navy">
            <span>Overall match</span>
            <span style={{ color }}>{result.matchPct}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-brand-navy/10">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${result.matchPct}%`, backgroundColor: color }}
            />
          </div>
          <div className="mt-2 flex gap-4 text-xs text-brand-navy/60">
            <span>Issues: {result.issueMatch}%</span>
            <span>Values: {result.valuesMatch}%</span>
          </div>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-4 text-sm font-semibold text-brand-red hover:underline"
        >
          {open ? "Hide details ▲" : "Why this match? ▼"}
        </button>

        {open && (
          <div className="mt-4 space-y-5 border-t border-brand-navy/10 pt-4">
            {result.agreements.length > 0 && (
              <Section
                title="Where you agree"
                tone="agree"
                items={result.agreements.slice(0, 4)}
              />
            )}
            {result.disagreements.length > 0 && (
              <Section
                title="Where you differ"
                tone="differ"
                items={result.disagreements.slice(0, 4)}
              />
            )}

            {result.breakdown.length > 0 && (
              <div>
                <p className="mb-2 text-sm font-semibold text-brand-navy">
                  Match by issue
                </p>
                <div className="space-y-2">
                  {result.breakdown.map((b) => (
                    <div key={b.issueLabel} className="flex items-center gap-3">
                      <span className="w-28 flex-shrink-0 truncate text-sm text-brand-navy/70">
                        {b.issueLabel}
                      </span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-brand-navy/10">
                        <div
                          className="h-full rounded-full bg-brand-coral"
                          style={{ width: `${b.score}%` }}
                        />
                      </div>
                      <span className="w-10 flex-shrink-0 text-right text-sm text-brand-navy/70">
                        {b.score}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="mb-2 text-sm font-semibold text-brand-navy">
                Sources
              </p>
              <ul className="space-y-1 text-sm">
                {c.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-red hover:underline"
                    >
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
              {c.sourcingNote && (
                <p className="mt-3 rounded-lg bg-brand-paper p-3 text-xs leading-relaxed text-brand-navy/70">
                  <strong className="text-brand-navy">How this was sourced:</strong>{" "}
                  {c.sourcingNote}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Section({
  title,
  tone,
  items,
}: {
  title: string;
  tone: "agree" | "differ";
  items: MatchResult["agreements"];
}) {
  const dot = tone === "agree" ? "bg-green-600" : "bg-brand-red";
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-brand-navy">{title}</p>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="text-sm">
            <div className="flex items-start gap-2">
              <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${dot}`} />
              <div>
                <p className="text-brand-navy/80">
                  {it.questionText}
                  {it.confidence === "low" && (
                    <span
                      title="This position was inferred from the candidate's record or platform, not an explicit statement."
                      className="ml-1.5 whitespace-nowrap rounded-full bg-brand-paper px-1.5 py-0.5 align-middle text-[11px] font-medium text-brand-navy/55"
                    >
                      est.
                    </span>
                  )}
                </p>
                <p className="text-brand-navy/55">
                  You: <em>{it.voterLabel}</em> · Them:{" "}
                  <em>{it.candidateLabel}</em>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
