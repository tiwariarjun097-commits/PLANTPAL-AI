"use client";

import Script from "next/script";

export default function HomePage() {
  return (
    <>
      {/* Botpress Chatbot Inject */}
      <Script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js" strategy="afterInteractive" />
      <Script src="https://files.bpcontent.cloud/2025/07/17/08/20250717083157-FK3AX8D4.js" strategy="afterInteractive" />

      <div style={styles.wrapper}>
        <header style={styles.header}>
          <h1 style={styles.logo}>🌿 PlantPal AI</h1>
          <p style={styles.subtitle}>Your nature expert</p>
        </header>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column" as const,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#111",
    color: "#fff",
  },
  header: {
    padding: "20px",
    backgroundColor: "#1b5e20",
    textAlign: "center" as const,
    borderBottom: "2px solid #2e7d32",
    zIndex: 100000,
  },
  logo: {
    margin: 0,
    fontSize: "2rem",
    fontWeight: "bold" as const,
    color: "#fff",
  },
  subtitle: {
    marginTop: "8px",
    fontSize: "1rem",
    color: "#c8e6c9",
  },
};



