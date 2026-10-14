"use client";

import { useRef, useState } from "react";
import type { MatchResult, AgreementItem } from "@/lib/types";

type Msg = { role: "you" | "bot"; text: string };

// ---------------------------------------------------------------------------
// A fully client-side assistant. It answers questions about the voter's own
// results using the already-computed match data — nothing is sent anywhere.
// ---------------------------------------------------------------------------

function pct(n: number) {
  return `${Math.round(n)}%`;
}

function partyOf(name: string, party: string) {
  return `${name} (${party})`;
}

function itemLine(it: AgreementItem) {
  const est = it.confidence === "low" ? " [est.]" : "";
  return `• ${it.questionText} — you: ${it.voterLabel}; them: ${it.candidateLabel}${est}`;
}

function findCandidate(query: string, results: MatchResult[]) {
  const q = query.toLowerCase();
  return results.find((r) => {
    const full = r.candidate.name.toLowerCase();
    const last = full.split(" ").slice(-1)[0];
    return q.includes(full) || (last.length > 3 && q.includes(last));
  });
}

function summarize(r: MatchResult): string {
  const c = r.candidate;
  const lines = [
    `${partyOf(c.name, c.party)} · ${c.office} — ${pct(r.matchPct)} overall match (issues ${pct(r.issueMatch)}, values ${pct(r.valuesMatch)}).`,
  ];
  if (r.agreements.length) {
    lines.push("", "Where you agree most:");
    r.agreements.slice(0, 3).forEach((it) => lines.push(itemLine(it)));
  }
  if (r.disagreements.length) {
    lines.push("", "Where you differ most:");
    r.disagreements.slice(0, 3).forEach((it) => lines.push(itemLine(it)));
  }
  return lines.join("\n");
}

function buildAnswer(
  raw: string,
  results: MatchResult[],
  stateName: string,
  topIssues: { label: string }[],
): string {
  const q = raw.toLowerCase().trim();
  const top = results[0];
  if (!top) {
    return "I don't see any results to talk about yet — take the survey first.";
  }
  const named = findCandidate(raw, results);

  // How the score works
  if (
    (q.includes("how") || q.includes("what")) &&
    (q.includes("calculat") ||
      q.includes("score") ||
      q.includes("work") ||
      q.includes("match percent") ||
      q.includes("%"))
  ) {
    return [
      "Your match score blends two things:",
      "• Issues (85%): for every issue you rated Important or Top priority, I compare your answer to each candidate's position on the same question. Closer answers score higher, and issues you cared about more are weighted more.",
      "• Values (15%): your five core-value sliders act as a secondary axis and tiebreaker.",
      "",
      "Each candidate card's “Why this match?” shows the issue-by-issue breakdown behind the number.",
    ].join("\n");
  }

  // Estimated / confidence
  if (
    q.includes("est") ||
    q.includes("confiden") ||
    q.includes("sure") ||
    q.includes("accurate") ||
    q.includes("reliab")
  ) {
    const target = named ?? top;
    const lowItems = [...target.agreements, ...target.disagreements].filter(
      (it) => it.confidence === "low",
    );
    const base =
      "Positions tagged “est.” were inferred from a candidate's voting record or platform, not an explicit statement — treat those with extra caution and check the sources on the card.";
    if (lowItems.length) {
      return [
        base,
        "",
        `For ${target.candidate.name}, the estimated points among your top issues include:`,
        ...lowItems.slice(0, 4).map(itemLine),
      ].join("\n");
    }
    return `${base}\n\nNone of ${target.candidate.name}'s positions on your top issues are estimated — they're all from the documented record.`;
  }

  // Sources
  if (
    q.includes("source") ||
    q.includes("where") && (q.includes("data") || q.includes("from")) ||
    q.includes("cited") ||
    q.includes("ballotpedia")
  ) {
    const target = named ?? top;
    const labels = target.candidate.sources.map((s) => s.label).join("; ");
    return `${target.candidate.name}'s positions are compiled from public records and neutral trackers: ${labels}. Open the Sources list on the card for clickable links. Everything is a point-in-time snapshot — verify before you vote.`;
  }

  // Top issues / priorities
  if (
    q.includes("top issue") ||
    q.includes("my issue") ||
    q.includes("priorit") ||
    (q.includes("what") && q.includes("matter"))
  ) {
    if (!topIssues.length)
      return "You didn't mark any issues as Important or Top priority, so the match leaned on your core values.";
    return `You told me these issues matter most: ${topIssues
      .map((i) => i.label)
      .join(", ")}. Those drove the ranking — candidates are scored most heavily on them.`;
  }

  // Compare top two
  if (q.includes("compare") || q.includes(" vs") || q.includes("versus") || q.includes("difference between")) {
    if (results.length < 2) return "There's only one candidate loaded for this race.";
    const [a, b] = results;
    const lines = [
      `${partyOf(a.candidate.name, a.candidate.party)} — ${pct(a.matchPct)} vs ${partyOf(b.candidate.name, b.candidate.party)} — ${pct(b.matchPct)}.`,
    ];
    if (a.agreements[0]) lines.push("", `${a.candidate.name} lines up with you most on: ${a.agreements[0].questionText}`);
    if (b.agreements[0]) lines.push(`${b.candidate.name} lines up with you most on: ${b.agreements[0].questionText}`);
    return lines.join("\n");
  }

  // Disagreements
  if (q.includes("disagree") || q.includes("differ") || q.includes("against") || q.includes("worst") || q.includes("avoid")) {
    const target = named ?? top;
    if (!target.disagreements.length)
      return `You don't have any strong disagreements with ${target.candidate.name} on your top issues.`;
    return [
      `Where you differ from ${target.candidate.name}:`,
      ...target.disagreements.slice(0, 5).map(itemLine),
    ].join("\n");
  }

  // Agreements
  if (q.includes("agree") || q.includes("common") || q.includes("align")) {
    const target = named ?? top;
    if (!target.agreements.length)
      return `You don't have strong agreements with ${target.candidate.name} on your top issues.`;
    return [
      `Where you agree with ${target.candidate.name}:`,
      ...target.agreements.slice(0, 5).map(itemLine),
    ].join("\n");
  }

  // Why top / best match, or a named candidate's "why"
  if (
    q.includes("why") ||
    q.includes("closest") ||
    q.includes("best match") ||
    q.includes("top match") ||
    q.includes("number one") ||
    q.includes("rank")
  ) {
    const target = named ?? top;
    const rank = results.indexOf(target) + 1;
    const place = rank === 1 ? "your closest match" : `ranked #${rank} of ${results.length}`;
    return [
      `${target.candidate.name} is ${place} at ${pct(target.matchPct)} because of how your answers line up on the issues you care about.`,
      "",
      summarize(target),
    ].join("\n");
  }

  // A candidate was named with no clear intent → summarize them
  if (named) return summarize(named);

  // Greetings / help / fallback
  return [
    `I can answer questions about your ${stateName} results. Try asking:`,
    "• Why is " + top.candidate.name + " my closest match?",
    "• Where do I disagree with " + top.candidate.name + "?",
    "• Compare the top two candidates",
    "• What are my top issues?",
    "• Which positions are estimated?",
    "• How is the match calculated?",
  ].join("\n");
}

export default function ResultsChat({
  results,
  stateName,
  topIssues,
}: {
  results: MatchResult[];
  stateName: string;
  topIssues: { label: string }[];
}) {
  const top = results[0];
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: top
        ? `Hi! Ask me anything about your results — like why ${top.candidate.name} ranked where they did, where you agree or differ, or how the score works.`
        : "Take the survey and I can answer questions about your matches.",
    },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = buildAnswer(trimmed, results, stateName, topIssues);
    setMessages((m) => [
      ...m,
      { role: "you", text: trimmed },
      { role: "bot", text: reply },
    ]);
    setInput("");
    // Scroll the thread to the latest after render.
    requestAnimationFrame(() => {
      if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
    });
  }

  const suggestions = top
    ? [
        `Why is ${top.candidate.name} my closest match?`,
        `Where do I disagree with ${top.candidate.name}?`,
        "Compare the top two",
        "Which positions are estimated?",
      ]
    : [];

  return (
    <div className="mt-8 rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-card sm:p-6">
      <h2 className="font-display text-xl font-bold text-brand-navy">
        Ask about your results
      </h2>
      <p className="mt-1 text-sm text-brand-navy/60">
        A built-in assistant that answers from your own results. It runs entirely
        in your browser — nothing you type is sent anywhere.
      </p>

      <div
        ref={listRef}
        className="mt-4 max-h-80 space-y-3 overflow-y-auto rounded-xl bg-brand-paper/60 p-4"
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.role === "you" ? "flex justify-end" : "flex justify-start"}
          >
            <div
              className={
                "max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed " +
                (m.role === "you"
                  ? "bg-brand-navy text-white"
                  : "bg-white text-brand-navy/90 shadow-sm")
              }
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {suggestions.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="rounded-full border border-brand-navy/15 bg-white px-3 py-1.5 text-xs font-medium text-brand-navy/80 transition hover:border-brand-navy/40"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="mt-3 flex items-center gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about your results…"
          className="flex-1 rounded-full border border-brand-navy/15 px-4 py-2.5 text-sm text-brand-navy outline-none focus:border-brand-navy/40"
        />
        <button
          type="submit"
          className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-brand-coral/50"
        >
          Ask
        </button>
      </form>
    </div>
  );
}
