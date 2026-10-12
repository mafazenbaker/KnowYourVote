export default function Landing({ onStart }: { onStart: () => void }) {
  return (
    <div className="animate-fade-up">
      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-center">
          <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-brand-coral">
            Find your match before you fill in the ballot
          </p>
          <h1
            className="mx-auto max-w-3xl text-[2.59rem] font-bold leading-tight sm:text-[3.45rem]"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            Answer a few questions.
            <br />
            See which candidates relate to you.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[0.9rem] text-white/80">
            KnowTheVote walks you through a short, neutral survey about your
            life, your values, and the issues you care about — then compares
            your answers to the candidates on your ballot and explains{" "}
            <em>why</em> each one was suggested.
          </p>
          <button
            onClick={onStart}
            className="mt-8 rounded-full bg-brand-red px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-brand-coral/50"
          >
            Start the survey →
          </button>
          <p className="mt-4 text-sm text-white/60">
            Takes about 5 minutes · No sign-up · Your answers never leave your
            browser
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-center font-display text-2xl font-bold text-brand-navy">
          How it works
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "1",
              t: "Tell us about you",
              d: "Your background, economic situation, core values, and the state where you're registered to vote.",
            },
            {
              n: "2",
              t: "Rank what matters",
              d: "Pick the issues you care about most. We only ask deeper questions about the ones you choose.",
            },
            {
              n: "3",
              t: "See your matches",
              d: "A ranked list of candidates with a match score, where you agree and disagree, and the sources behind it.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-card"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-navy text-lg font-bold text-white">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-navy">
                {s.t}
              </h3>
              <p className="mt-2 text-brand-navy/70">{s.d}</p>
            </div>
          ))}
        </div>

        {/* Neutrality note */}
        <div className="mx-auto mt-10 max-w-2xl rounded-xl border-l-4 border-brand-coral bg-white p-5 text-sm text-brand-navy/80 shadow-card">
          <strong className="text-brand-navy">Built to be neutral.</strong>{" "}
          Questions use plain, non-leading language, no party labels appear while
          you answer, and every candidate is measured against the same questions
          and the same sources.
        </div>
      </section>
    </div>
  );
}
