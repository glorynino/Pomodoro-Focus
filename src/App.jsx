import React from "react";
import "./App.css";

function App() {
  const title = "PomodoroFocus";

  return (
    <div className="h-screen w-screen relative overflow-hidden flex flex-col">
      {/* Accent lumineux */}
      <div className="pointer-events-none absolute inset-0 blur-[120px] opacity-40 bg-gradient-to-br from-sky-500/40 via-indigo-500/30 to-transparent" />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16 flex flex-col gap-16 flex-1 overflow-y-auto scrollbar-hide">
        <section className="flex flex-col items-center text-center gap-6">
          <Animate title={title} />
          <p className="text-lg text-slate-300 max-w-2xl">
            Une application Pomodoro minimaliste et rapide, conçue pour garder
            votre concentration sur Windows. Pas de promesses vides : juste un
            outil en cours de création pour rester efficace.
          </p>

          <div className="flex flex-col items-center gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-lg shadow-sky-900/30 hover:-translate-y-0.5 hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 transition-transform duration-200">
              Available soon on Windows
            </button>
            <span className="text-sm text-slate-400">
              Windows 10 / 11 — Desktop Application
            </span>
          </div>
        </section>

        <section className="space-y-3 text-center">
          <div className="flex justify-center">
            <SectionTitle title="Application in development" />
          </div>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Nous construisons PomodoroFocus avec une approche sobre : un outil
            focalisé sur la productivité, sans artifices. Les premières versions
            seront disponibles dès que l&apos;expérience sera solide.
          </p>
        </section>

        <section className="space-y-4 text-center">
          <div className="flex justify-center">
            <SectionTitle title="Planned features" />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 text-slate-200 max-w-3xl mx-auto">
            {[
              "Custom Pomodoro timer",
              "Automatic breaks",
              "Focus mode",
              "Dark mode",
              "Session statistics",
              "Lightweight and fast",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-sky-500/50 transition-colors"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 text-center">
          <div className="flex justify-center">
            <SectionTitle title="Why Windows first?" />
          </div>
          <ul className="space-y-2 text-slate-200 max-w-3xl mx-auto">
            {[
              "Optimisée pour les environnements de travail Windows (10/11).",
              "Intégration simple avec les workflows bureautiques.",
              "Demande majoritaire de nos premiers utilisateurs.",
              "Focus sur la stabilité avant d'étendre à d'autres plateformes.",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-sky-500/50 transition-colors"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 text-center text-sm text-slate-400 py-6">
        © 2025 PomodoroFocus — Windows Desktop App
      </footer>
    </div>
  );
}

function Animate({ title }) {
  return (
    <div className="flex justify-center">
      <h1 className="text-[62px] sm:text-[74px] leading-tight font-bold text-white drop-shadow-md">
        {title.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block transition-transform duration-300 hover:-translate-y-2 hover:scale-110"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-6 w-1 rounded-full bg-sky-400" aria-hidden="true" />
      <h2 className="text-xl font-semibold text-white">{title}</h2>
    </div>
  );
}

export default App;
