"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Inject Botpress Engine
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script1.defer = true;
    document.body.appendChild(script1);

    // Inject Config
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/07/17/08/20250717083157-FK3AX8D4.js";
    script2.defer = true;
    document.body.appendChild(script2);

    // Wait for WebChat to load, then show it full screen
    const interval = setInterval(() => {
      if (window.botpressWebChat) {
        window.botpressWebChat.sendEvent({ type: "show" });
        clearInterval(interval);
      }
    }, 500);

    // Fullscreen Styles
    const style = document.createElement("style");
    style.innerHTML = `
      #bp-web-widget {
        all: unset;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
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
    backgroundColor: "#000",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden",
  },
  header: {
    position: "absolute",
    zIndex: 99999,
    top: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#fff",
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

