"use client";

import React, { useState } from "react";

export default function HomePage() {
  const tabs = [
    {
      id: "economy",
      label: "Economy",
      content:
        "Add your position on jobs, wages, taxes, cost of living, and opportunity.",
    },
    {
      id: "healthcare",
      label: "Healthcare",
      content:
        "Add your position on affordability, access, insurance, and public health.",
    },
    {
      id: "education",
      label: "Education",
      content:
        "Add your position on schools, college, student debt, and workforce training.",
    },
    {
      id: "environment",
      label: "Environment",
      content:
        "Add your position on energy, conservation, infrastructure, and climate resilience.",
    },
    {
      id: "rights",
      label: "Rights & Freedoms",
      content:
        "Add your position on civil liberties, privacy, equality, and constitutional rights.",
    },
    {
      id: "foreign",
      label: "Foreign Policy",
      content:
        "Add your position on diplomacy, defense, trade, alliances, and national security.",
    },
  ];

  const [activeTab, setActiveTab] = useState("economy");
  const active = tabs.find((tab) => tab.id === activeTab);

  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
      color: "#111111",
      minHeight: "100vh",
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "0 20px",
    },
    header: {
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #dddddd",
    },
    headerInner: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    hero: {
      padding: "60px 0",
    },
    heroGrid: {
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: "24px",
    },
    card: {
      backgroundColor: "#ffffff",
      border: "1px solid #dddddd",
      borderRadius: "16px",
      padding: "24px",
    },
    buttonRow: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      marginTop: "20px",
    },
    darkButton: {
      display: "inline-block",
      backgroundColor: "#111111",
      color: "#ffffff",
      textDecoration: "none",
      padding: "12px 16px",
      borderRadius: "10px",
    },
    lightButton: {
      display: "inline-block",
      backgroundColor: "#ffffff",
      color: "#111111",
      textDecoration: "none",
      padding: "12px 16px",
      borderRadius: "10px",
      border: "1px solid #cccccc",
    },
    section: {
      padding: "50px 0",
    },
    tabsWrap: {
      display: "grid",
      gridTemplateColumns: "280px 1fr",
      gap: "20px",
    },
    tabButton: {
      width: "100%",
      textAlign: "left",
      padding: "12px 14px",
      borderRadius: "10px",
      border: "none",
      marginBottom: "8px",
      cursor: "pointer",
      backgroundColor: "transparent",
      color: "#111111",
    },
    activeTabButton: {
      backgroundColor: "#111111",
      color: "#ffffff",
    },
    footerBlock: {
      backgroundColor: "#111111",
      color: "#ffffff",
      padding: "50px 0",
      marginTop: "20px",
    },
    smallLabel: {
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "2px",
      color: "#666666",
      marginBottom: "10px",
    },
    nav: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
    },
    navLink: {
      color: "#111111",
      textDecoration: "none",
    },
    whiteLink: {
      color: "#ffffff",
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div>
            <div style={styles.smallLabel}>Movement</div>
            <h1 style={{ margin: 0 }}>American Alliance</h1>
          </div>

          <nav style={styles.nav}>
            <a href="#manifesto" style={styles.navLink}>Manifesto</a>
            <a href="#stances" style={styles.navLink}>Stances</a>
            <a href="#join" style={styles.navLink}>Get Involved</a>
          </nav>
        </div>
      </header>

      <main>
        <section style={styles.hero}>
          <div style={styles.container}>
            <div style={styles.heroGrid}>
              <div style={styles.card}>
                <div style={styles.smallLabel}>A simple home for your ideas</div>
                <h2 style={{ fontSize: "44px", lineHeight: 1.1, marginTop: 0 }}>
                  A clear message, a public manifesto, and issue-based stances.
                </h2>
                <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
                  American Alliance exists to bring together disenfranchised voters
                  from the right, left, and middle around the biggest issues facing
                  the country.
                </p>

                <div style={styles.buttonRow}>
                  <a href="#manifesto" style={styles.darkButton}>
                    Read the Manifesto
                  </a>
                  <a href="#stances" style={styles.lightButton}>
                    Explore Stances
                  </a>
                  <a
                    href="https://discord.gg/nytSThatG"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.lightButton}
                  >
                    Join the Discord
                  </a>
                </div>
              </div>

              <div style={styles.card}>
                <div style={styles.smallLabel}>Core Principles</div>
                <div style={{ display: "grid", gap: "12px" }}>
                  {[
                    "National unity",
                    "Honest government",
                    "Economic fairness",
                    "Common-ground politics",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        border: "1px solid #e5e5e5",
                        borderRadius: "12px",
                        padding: "14px",
                      }}
                    >
                      <strong>{item}</strong>
                      <div style={{ marginTop: "6px", color: "#555555" }}>
                        Replace this with your own one-sentence principle later.
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="manifesto" style={{ ...styles.section, backgroundColor: "#ffffff", borderTop: "1px solid #dddddd", borderBottom: "1px solid #dddddd" }}>
          <div style={styles.container}>
            <div style={styles.smallLabel}>Manifesto</div>
            <h2 style={{ marginTop: 0, fontSize: "36px" }}>Our Vision</h2>
            <p style={{ fontSize: "18px", lineHeight: 1.7, maxWidth: "850px" }}>
              Write your manifesto here later. Keep it simple at first: what is
              broken, what American Alliance believes, and what should change.
            </p>
          </div>
        </section>

        <section id="stances" style={styles.section}>
          <div style={styles.container}>
            <div style={styles.smallLabel}>Stances</div>
            <h2 style={{ marginTop: 0, fontSize: "36px" }}>Where we stand</h2>

            <div style={styles.tabsWrap}>
              <div style={styles.card}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      ...styles.tabButton,
                      ...(activeTab === tab.id ? styles.activeTabButton : {}),
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div style={styles.card}>
                <div style={styles.smallLabel}>Issue Area</div>
                <h3 style={{ marginTop: 0, fontSize: "28px" }}>{active.label}</h3>
                <p style={{ fontSize: "18px", lineHeight: 1.6 }}>{active.content}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="join" style={styles.footerBlock}>
          <div style={styles.container}>
            <h2 style={{ marginTop: 0, fontSize: "36px" }}>Get Involved</h2>
            <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
              Join the community, invite others, and help shape the platform.
            </p>
            <a
              href="https://discord.gg/nytSThatG"
              target="_blank"
              rel="noreferrer"
              style={styles.whiteLink}
            >
              Join our Discord
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
