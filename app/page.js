import React from "react";

export default function PoliticalMovementWebsite() {
  const tabs = [
    { id: "economy", label: "Economy", content: "Summarize your position on jobs, wages, taxes, and opportunity." },
    { id: "healthcare", label: "Healthcare", content: "Explain your stance on healthcare access, affordability, and public health." },
    { id: "education", label: "Education", content: "Describe your goals for schools, higher education, and workforce training." },
    { id: "environment", label: "Environment", content: "Outline your environmental priorities, energy plan, and conservation goals." },
    { id: "rights", label: "Rights & Freedoms", content: "State your principles around civil rights, liberties, privacy, and equal treatment." },
    { id: "foreign", label: "Foreign Policy", content: "Share your views on diplomacy, defense, trade, and global cooperation." },
  ];

  const [activeTab, setActiveTab] = React.useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">Movement</p>
            <h1 className="text-2xl md:text-3xl font-bold">American Alliance</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#manifesto" className="hover:underline">Manifesto</a>
            <a href="#stances" className="hover:underline">Stances</a>
            <a href="#join" className="hover:underline">Get Involved</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">A simple home for your ideas</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              A clear message, a public manifesto, and easy-to-read policy stances.
            </h2>
            <p className="text-lg text-neutral-600 max-w-xl">
              American Alliance exists to bring together disenfranchised voters from the right, left, and middle around the biggest issues facing the country.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#manifesto" className="rounded-2xl bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow hover:opacity-90">
                Read the Manifesto
              </a>
              <a href="#stances" className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-100">
                Explore Stances
              </a>
              <a
                href="https://discord.gg/nytSThatG"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-100"
              >
                Join the Discord
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg border border-neutral-200">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-4">Core Principles</p>
            <div className="grid gap-4">
              {["Principle One", "Principle Two", "Principle Three", "Principle Four"].map((item) => (
                <div key={item} className="rounded-2xl border border-neutral-200 p-4">
                  <h3 className="font-semibold">{item}</h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    Add a one-sentence explanation for this principle.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="manifesto" className="border-t border-b bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-3">Manifesto</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-neutral-700">
              (Write your manifesto here later)
            </p>
          </div>
        </section>

        <section id="stances" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-3xl font-bold mb-6">Where we stand</h2>

          <div className="grid lg:grid-cols-[280px_1fr] gap-6">
            <div className="bg-white border rounded-3xl p-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 mb-2 rounded ${
                    activeTab === tab.id ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="bg-white border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">{active.label}</h3>
              <p>{active.content}</p>
            </div>
          </div>
        </section>

        <section id="join" className="bg-black text-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <a href="https://discord.gg/nytSThatG" target="_blank" rel="noreferrer" className="underline">
              Join our Discord
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
