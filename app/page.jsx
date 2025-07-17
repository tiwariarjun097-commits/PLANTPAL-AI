"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Inject first script (Botpress engine)
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script1.defer = true;
    document.body.appendChild(script1);

    // Inject second script (Your bot config + theme)
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/07/17/08/20250717083157-FK3AX8D4.js";
    script2.defer = true;
    document.body.appendChild(script2);
  }, []);

  return (
    <main style={styles.main}>
      <h1 style={styles.heading}>🌿 PlantPal AI</h1>
      <p style={styles.subheading}>Ask me anything about plants, care, and diseases.</p>
      <p style={styles.note}>💬 Chatbot is in the bottom-right corner.</p>
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
    backgroundColor: "#f0f0f0",
    borderRadius: "12px",
    boxShadow: "0 0 12px rgba(0, 0, 0, 0.05)",
    marginTop: "60px",
  },
  heading: {
    fontSize: "2.4rem",
    marginBottom: "10px",
    color: "#2e7d32",
  },
  subheading: {
    fontSize: "1.2rem",
    marginBottom: "25px",
    color: "#444",
  },
  note: {
    fontSize: "1rem",
    marginTop: "30px",
    color: "#666",
  },
};
