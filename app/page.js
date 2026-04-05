"use client";
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
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f7f7f7", minHeight: "100vh", color: "#111" }}>
      <header style={{ background: "#fff", borderBottom: "1px solid #ddd", padding: "20px 30px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ margin: 0, fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#666" }}>Movement</p>
            <h1 style={{ margin: "5px 0 0", fontSize: "32px" }}>American Alliance</h1>
          </div>
          <nav style={{ display: "flex", gap: "20px" }}>
            <a href="#manifesto">Manifesto</a>
            <a href="#stances">Stances</a>
            <a href="#join">Get Involved</a>
          </nav>
        </div>
      </header>

      <main>
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 30px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          <div>
            <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#666" }}>A simple home for your ideas</p>
            <h2 style={{ fontSize: "48px", lineHeight: 1.1, marginTop: "10px" }}>
              A clear message, a public manifesto, and easy-to-read policy stances.
            </h2>
            <p style={{ fontSize: "18px", color: "#444", maxWidth: "600px" }}>
              American Alliance exists to bring together disenfranchised voters from the right, left, and middle around the biggest issues facing the country.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
              <a href="#manifesto" style={{ padding: "12px 18px", background: "#111", color: "#fff", borderRadius: "10px", textDecoration: "none" }}>
                Read the Manifesto
              </a>
              <a href="#stances" style={{ padding: "12px 18px", background: "#fff", color: "#111", border: "1px solid #ccc", borderRadius: "10px", textDecoration: "none" }}>
                Explore Stances
              </a>
              <a href="https://discord.gg/nytSThatG" target="_blank" rel="noreferrer" style={{ padding: "12px 18px", background: "#fff", color: "#111", border: "1px solid #ccc", borderRadius: "10px", textDecoration: "none" }}>
                Join the Discord
              </a>
            </div>
          </div>

          <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "20px", padding: "30px" }}>
            <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#666" }}>Core Principles</p>
            {["Principle One", "Principle Two", "Principle Three", "Principle Four"].map((item) => (
              <div key={item} style={{ border: "1px solid #e5e5e5", borderRadius: "14px", padding: "15px", marginTop: "12px" }}>
                <h3 style={{ margin: 0 }}>{item}</h3>
                <p style={{ marginTop: "6px", color: "#555" }}>Add a one-sentence explanation for this principle.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="manifesto" style={{ background: "#fff", borderTop: "1px solid #ddd", borderBottom: "1px solid #ddd" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 30px" }}>
            <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#666" }}>Manifesto</p>
            <h2 style={{ fontSize: "38px", marginTop: "10px" }}>Our Vision</h2>
            <p style={{ color: "#444", fontSize: "18px" }}>(Write your manifesto here later)</p>
          </div>
        </section>

        <section id="stances" style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 30px" }}>
          <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>Where we stand</h2>
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "20px" }}>
            <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "20px", padding: "12px" }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 14px",
                    marginBottom: "8px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    background: activeTab === tab.id ? "#111" : "transparent",
                    color: activeTab === tab.id ? "#fff" : "#111"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "20px", padding: "30px" }}>
              <h3 style={{ fontSize: "28px", marginTop: 0 }}>{active.label}</h3>
              <p style={{ color: "#444", fontSize: "18px" }}>{active.content}</p>
            </div>
          </div>
        </section>

        <section id="join" style={{ background: "#111", color: "#fff" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 30px" }}>
            <h2 style={{ fontSize: "38px", marginBottom: "15px" }}>Get Involved</h2>
            <a href="https://discord.gg/nytSThatG" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
              Join our Discord
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
