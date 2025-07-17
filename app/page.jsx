"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script.defer = true;
    script.setAttribute(
      "data-bp-config",
      "https://files.bpcontent.cloud/2025/07/17/08/20250717083157-RXXE6E0L.json"
    );
    document.body.appendChild(script);
  }, []);

  return (
    <main style={styles.main}>
      <h1 style={styles.heading}>PlantPal AI 🌿</h1>
      <p style={styles.subheading}>
        Ask anything about your plant, garden, or farming.
      </p>
      <p style={styles.tip}>💬 Chatbot is available in the bottom-right corner.</p>
    </main>
  );
}

const styles = {
  main: {
    padding: "40px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)",
    marginTop: "60px",
  },
  heading: {
    fontSize: "2.2rem",
    marginBottom: "10px",
    color: "#2e7d32",
  },
  subheading: {
    fontSize: "1.2rem",
    marginBottom: "25px",
    color: "#555",
  },
  tip: {
    fontSize: "1rem",
    marginTop: "30px",
    color: "#666",
  },
};




