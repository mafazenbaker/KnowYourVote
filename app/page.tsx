"use client";

import { useState } from "react";
import type { Answers } from "@/lib/types";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import SurveyWizard from "@/components/SurveyWizard";
import Results from "@/components/Results";

type Screen = "landing" | "survey" | "results";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [answers, setAnswers] = useState<Answers | null>(null);

  return (
    <main className="min-h-screen bg-brand-paper">
      <Header compact={screen !== "landing"} />

      {screen === "landing" && <Landing onStart={() => setScreen("survey")} />}

      {screen === "survey" && (
        <SurveyWizard
          onComplete={(a) => {
            setAnswers(a);
            setScreen("results");
          }}
        />
      )}

      {screen === "results" && answers && (
        <Results
          answers={answers}
          onRestart={() => {
            setAnswers(null);
            setScreen("landing");
          }}
        />
      )}

      <footer className="border-t border-brand-navy/10 bg-white py-6 text-center text-xs text-brand-navy/50">
        KnowTheVote · A nonpartisan tool to help you decide · Your answers stay
        in your browser
      </footer>
    </main>
  );
}
