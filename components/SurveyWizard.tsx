"use client";

import { useMemo, useState } from "react";
import type { Answers, Issue, Phase, Question } from "@/lib/types";
import {
  BACKGROUND_PHASE,
  ECONOMIC_PHASE,
  STATE_PICK_PHASE,
  STATE_PHASE,
  VOTING_PHASE,
  VALUE_AXES,
  ISSUES,
  US_STATES,
} from "@/lib/survey";
import { PRIORITY_THRESHOLD } from "@/lib/scoring";
import {
  STATES_WITH_CANDIDATES,
  STATE_NAMES_WITH_CANDIDATES,
} from "@/lib/candidates";
import { IssueIcon } from "./icons";

type Step =
  | { kind: "phase"; phase: Phase; label: string }
  | { kind: "values"; label: string }
  | { kind: "priorities"; label: string }
  | { kind: "issue"; issue: Issue; label: string };

const PRIORITY_LABELS = [
  { v: 0, label: "Not important" },
  { v: 1, label: "Somewhat" },
  { v: 2, label: "Important" },
  { v: 3, label: "Top priority" },
];

function emptyAnswers(): Answers {
  const values: Record<string, number> = {};
  VALUE_AXES.forEach((a) => (values[a.id] = 0));
  const priorities: Record<string, number> = {};
  ISSUES.forEach((i) => (priorities[i.id] = 0));
  return { context: {}, values, priorities, positions: {}, state: "" };
}

export default function SurveyWizard({
  onComplete,
}: {
  onComplete: (answers: Answers) => void;
}) {
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [index, setIndex] = useState(0);
  const [showError, setShowError] = useState(false);

  // Build the (dynamic) list of steps. Issue modules appear only for issues the
  // voter marked as a priority.
  const steps = useMemo<Step[]>(() => {
    const priorityIssues = ISSUES.filter(
      (i) => (answers.priorities[i.id] ?? 0) >= PRIORITY_THRESHOLD,
    );
    return [
      { kind: "phase", phase: STATE_PICK_PHASE, label: "Your state" },
      { kind: "phase", phase: BACKGROUND_PHASE, label: "About you" },
      { kind: "phase", phase: ECONOMIC_PHASE, label: "Economics" },
      { kind: "values", label: "Your values" },
      { kind: "priorities", label: "Your priorities" },
      ...priorityIssues.map(
        (issue): Step => ({ kind: "issue", issue, label: issue.label }),
      ),
      { kind: "phase", phase: STATE_PHASE, label: "Your area" },
      { kind: "phase", phase: VOTING_PHASE, label: "Voting history" },
    ];
  }, [answers.priorities]);

  const step = steps[Math.min(index, steps.length - 1)];
  const isLast = index === steps.length - 1;
  const progress = Math.round((index / steps.length) * 100);

  // State-gate helpers (first step).
  const onStatePick = step.kind === "phase" && step.phase.id === "statepick";
  const stateUnsupported =
    !!answers.state && !STATES_WITH_CANDIDATES.includes(answers.state);
  const stateName =
    US_STATES.find((s) => s.code === answers.state)?.name ?? "that state";

  // ---- answer setters -----------------------------------------------------
  const setContext = (qid: string, val: string | string[] | number) => {
    // The state question drives ballot filtering, so it lives on answers.state
    // (and is mirrored into context for completeness).
    if (qid === "state") {
      const code = String(val);
      setAnswers((a) => ({
        ...a,
        state: code,
        context: { ...a.context, state: code },
      }));
      return;
    }
    setAnswers((a) => ({ ...a, context: { ...a.context, [qid]: val } }));
  };
  const setValue = (axisId: string, v: number) =>
    setAnswers((a) => ({ ...a, values: { ...a.values, [axisId]: v } }));
  const setPriority = (issueId: string, v: number) =>
    setAnswers((a) => ({ ...a, priorities: { ...a.priorities, [issueId]: v } }));
  const setPosition = (qid: string, v: number) =>
    setAnswers((a) => ({ ...a, positions: { ...a.positions, [qid]: v } }));

  // ---- validation ---------------------------------------------------------
  function stepComplete(s: Step): boolean {
    if (s.kind === "phase" && s.phase.id === "statepick") {
      // Must pick a state we actually have candidate data for.
      return (
        !!answers.state && STATES_WITH_CANDIDATES.includes(answers.state)
      );
    }
    if (s.kind === "phase") {
      return s.phase.questions.every((q) => {
        if (q.optional) return true;
        if (q.type === "state") return !!answers.state;
        const v = answers.context[q.id];
        if (q.type === "multi") return Array.isArray(v) && v.length > 0;
        if (q.type === "text") return typeof v === "string" && v.trim() !== "";
        return v !== undefined && v !== "";
      });
    }
    if (s.kind === "values") return true;
    if (s.kind === "priorities")
      return ISSUES.some(
        (i) => (answers.priorities[i.id] ?? 0) >= PRIORITY_THRESHOLD,
      );
    if (s.kind === "issue")
      return s.issue.questions.every((q) => answers.positions[q.id] !== undefined);
    return true;
  }

  function next() {
    if (!stepComplete(step)) {
      setShowError(true);
      return;
    }
    setShowError(false);
    if (isLast) {
      onComplete(answers);
      return;
    }
    setIndex((i) => i + 1);
    scrollTop();
  }
  function back() {
    setShowError(false);
    if (index === 0) return;
    setIndex((i) => i - 1);
    scrollTop();
  }
  function scrollTop() {
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      {/* progress */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm font-medium text-brand-navy/70">
          <span>
            Step {index + 1} of {steps.length} · {step.label}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-brand-navy/10">
          <div
            className="h-full rounded-full bg-brand-red transition-all duration-300"
            style={{ width: `${Math.max(progress, 4)}%` }}
          />
        </div>
      </div>

      <div key={index} className="animate-fade-up">
        {step.kind === "phase" && (
          <PhaseView
            phase={step.phase}
            answers={answers}
            setContext={setContext}
          />
        )}
        {step.kind === "values" && (
          <ValuesView answers={answers} setValue={setValue} />
        )}
        {step.kind === "priorities" && (
          <PrioritiesView answers={answers} setPriority={setPriority} />
        )}
        {step.kind === "issue" && (
          <IssueView
            issue={step.issue}
            answers={answers}
            setPosition={setPosition}
          />
        )}
      </div>

      {/* State not covered yet — shown as soon as an unsupported state is picked */}
      {onStatePick && stateUnsupported && (
        <div className="mt-6 rounded-xl border-l-4 border-brand-red bg-white p-4 text-sm text-brand-navy/80 shadow-card">
          <strong className="text-brand-red">
            Candidate information for {stateName} isn&apos;t available yet.
          </strong>{" "}
          KnowYourVote currently covers{" "}
          {STATE_NAMES_WITH_CANDIDATES.join(", ").replace(/, ([^,]*)$/, " and $1")}.
          Choose one of those to continue — we&apos;re adding more states as their
          candidate data is sourced.
        </div>
      )}

      {showError && !stepComplete(step) && !(onStatePick && stateUnsupported) && (
        <p className="mt-6 rounded-lg bg-brand-red/10 px-4 py-3 text-sm font-medium text-brand-red">
          {step.kind === "priorities"
            ? "Please mark at least one issue as “Important” or “Top priority” so we can match you."
            : onStatePick
              ? "Please select your state to continue."
              : "Please answer the required questions before continuing."}
        </p>
      )}

      {/* nav */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={back}
          disabled={index === 0}
          className="rounded-full px-5 py-3 font-semibold text-brand-navy/70 transition hover:bg-brand-navy/5 disabled:invisible"
        >
          ← Back
        </button>
        <button
          onClick={next}
          className="rounded-full bg-brand-red px-8 py-3 font-semibold text-white shadow-md transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-brand-coral/50"
        >
          {isLast ? "See my matches →" : "Next →"}
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-views
// ---------------------------------------------------------------------------
function CardShell({
  title,
  subtitle,
  children,
}: {
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-card sm:p-8">
      <h2 className="font-display text-2xl font-bold text-brand-navy">{title}</h2>
      {subtitle && <p className="mt-2 text-brand-navy/70">{subtitle}</p>}
      <div className="mt-6 space-y-8">{children}</div>
    </div>
  );
}

function QuestionLabel({ q }: { q: Question }) {
  return (
    <div>
      <p className="font-semibold text-brand-navy">
        {q.text}{" "}
        {q.optional && (
          <span className="text-sm font-normal text-brand-navy/50">
            (optional)
          </span>
        )}
      </p>
      {q.help && <p className="mt-1 text-sm text-brand-navy/60">{q.help}</p>}
    </div>
  );
}

function PhaseView({
  phase,
  answers,
  setContext,
}: {
  phase: Phase;
  answers: Answers;
  setContext: (qid: string, val: string | string[] | number) => void;
}) {
  return (
    <CardShell title={phase.title} subtitle={phase.subtitle}>
      {phase.questions.map((q) => (
        <div key={q.id}>
          <QuestionLabel q={q} />
          <div className="mt-3">
            {q.type === "state" ? (
              <select
                value={answers.state}
                onChange={(e) => setContext("state", e.target.value)}
                className="w-full rounded-xl border border-brand-navy/20 bg-white px-4 py-3 text-brand-navy focus:border-brand-navy focus:outline-none"
              >
                <option value="">Select your state…</option>
                {US_STATES.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name}
                  </option>
                ))}
              </select>
            ) : q.type === "text" ? (
              <textarea
                value={(answers.context[q.id] as string) ?? ""}
                onChange={(e) => setContext(q.id, e.target.value)}
                rows={3}
                placeholder="Type your answer…"
                className="w-full rounded-xl border border-brand-navy/20 bg-white px-4 py-3 text-brand-navy focus:border-brand-navy focus:outline-none"
              />
            ) : q.type === "multi" ? (
              <div className="grid gap-2 sm:grid-cols-2">
                {q.choices!.map((c) => {
                  const arr = (answers.context[q.id] as string[]) ?? [];
                  const on = arr.includes(c.id);
                  return (
                    <button
                      key={c.id}
                      onClick={() =>
                        setContext(
                          q.id,
                          on ? arr.filter((x) => x !== c.id) : [...arr, c.id],
                        )
                      }
                      className={choiceClass(on)}
                    >
                      <Check on={on} /> {c.label}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="grid gap-2 sm:grid-cols-2">
                {q.choices!.map((c) => {
                  const on = answers.context[q.id] === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setContext(q.id, c.id)}
                      className={choiceClass(on)}
                    >
                      <Check on={on} /> {c.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ))}
    </CardShell>
  );
}

function ValuesView({
  answers,
  setValue,
}: {
  answers: Answers;
  setValue: (axisId: string, v: number) => void;
}) {
  return (
    <CardShell
      title="Your core values"
      subtitle="Slide toward the statement that fits you better. The middle means you feel torn or neutral — that's fine."
    >
      {VALUE_AXES.map((axis) => (
        <div key={axis.id}>
          <p className="font-semibold text-brand-navy">{axis.text}</p>
          <input
            type="range"
            min={-2}
            max={2}
            step={1}
            value={answers.values[axis.id] ?? 0}
            onChange={(e) => setValue(axis.id, Number(e.target.value))}
            className="brand-range mt-5 w-full"
          />
          <div className="mt-2 flex justify-between gap-4 text-sm text-brand-navy/70">
            <span className="max-w-[45%] text-left">{axis.leftLabel}</span>
            <span className="max-w-[45%] text-right">{axis.rightLabel}</span>
          </div>
        </div>
      ))}
    </CardShell>
  );
}

function PrioritiesView({
  answers,
  setPriority,
}: {
  answers: Answers;
  setPriority: (issueId: string, v: number) => void;
}) {
  return (
    <CardShell
      title="What matters most to you?"
      subtitle="Rate how important each issue is. We'll ask deeper questions only about the ones you mark Important or Top priority."
    >
      <div className="space-y-4">
        {ISSUES.map((issue) => (
          <div
            key={issue.id}
            className="rounded-xl border border-brand-navy/10 p-4"
          >
            <div className="flex items-center gap-2">
              <IssueIcon id={issue.id} className="h-6 w-6 flex-shrink-0 text-brand-navy" />
              <div>
                <p className="font-semibold text-brand-navy">{issue.label}</p>
                <p className="text-sm text-brand-navy/60">{issue.blurb}</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {PRIORITY_LABELS.map((p) => {
                const on = (answers.priorities[issue.id] ?? 0) === p.v;
                return (
                  <button
                    key={p.v}
                    onClick={() => setPriority(issue.id, p.v)}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                      on
                        ? "border-brand-navy bg-brand-navy text-white"
                        : "border-brand-navy/15 bg-white text-brand-navy/70 hover:border-brand-navy/40"
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </CardShell>
  );
}

function IssueView({
  issue,
  answers,
  setPosition,
}: {
  issue: Issue;
  answers: Answers;
  setPosition: (qid: string, v: number) => void;
}) {
  return (
    <CardShell
      title={
        <span className="inline-flex items-center gap-2">
          <IssueIcon id={issue.id} className="h-7 w-7 text-brand-navy" />
          {issue.label}
        </span>
      }
      subtitle="Pick the option closest to your view for each question."
    >
      {issue.questions.map((q) => (
        <div key={q.id}>
          <QuestionLabel q={q} />
          <div className="mt-3 grid gap-2">
            {q.choices!.map((c) => {
              const on = answers.positions[q.id] === c.value;
              return (
                <button
                  key={c.id}
                  onClick={() => setPosition(q.id, c.value!)}
                  className={choiceClass(on)}
                >
                  <Check on={on} /> {c.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </CardShell>
  );
}

// ---------------------------------------------------------------------------
// bits
// ---------------------------------------------------------------------------
function choiceClass(on: boolean) {
  return `flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-brand-navy transition ${
    on
      ? "border-brand-navy bg-brand-navy/5 ring-1 ring-brand-navy"
      : "border-brand-navy/15 bg-white hover:border-brand-navy/40"
  }`;
}

function Check({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden
      className={`grid h-5 w-5 flex-shrink-0 place-items-center rounded-full border text-xs ${
        on
          ? "border-brand-navy bg-brand-navy text-white"
          : "border-brand-navy/30 text-transparent"
      }`}
    >
      ✓
    </span>
  );
}
