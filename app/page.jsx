"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Inject Botpress WebChat Engine
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script1.defer = true;
    document.body.appendChild(script1);

    // Inject your WebChat config (dark theme, your bot ID)
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/07/17/08/20250717083157-FK3AX8D4.js";
    script2.defer = true;
    document.body.appendChild(script2);

    // Inject CSS override to make the chat full screen
    const style = document.createElement("style");
    style.innerHTML = `
      #bp-web-widget {
        bottom: 0 !important;
        right: 0 !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        z-index: 9999 !important;
      }
      .bpw-floating-button {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.logo}>🌿 PlantPal AI</h1>
        <p style={styles.subtitle}>Your full-screen plant care assistant</p>
      </header>
    </div>
  );
}

const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    backgroundColor: "#000", // behind the bot if it takes time to load
  },
  header: {
    position: "absolute",
    zIndex: 99999,
    top: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  logo: {
    margin: 0,
    fontSize: "2rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1rem",
    marginTop: 4,
    color: "#ccc",
  },
};
