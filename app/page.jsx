"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Load Botpress scripts only once
    const existingBot = document.getElementById("botpress-script");
    if (!existingBot) {
      const script = document.createElement("script");
      script.id = "botpress-script";
      script.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
      script.defer = true;
      document.body.appendChild(script);

      const config = document.createElement("script");
      config.src = "https://files.bpcontent.cloud/2025/07/17/08/20250717083157-FK3AX8D4.js";
      config.defer = true;
      document.body.appendChild(config);
    }
  }, []);

  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <h1 style={styles.logo}>🌿 PlantPal AI</h1>
        <p style={styles.subtitle}>Your nature expert</p>
      </header>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#111",
    color: "#fff",
  },
  header: {
    padding: "20px",
    backgroundColor: "#1b5e20",
    textAlign: "center",
    borderBottom: "2px solid #2e7d32",
  },
  logo: {
    margin: 0,
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    marginTop: "8px",
    fontSize: "1rem",
    color: "#c8e6c9",
  },
};
