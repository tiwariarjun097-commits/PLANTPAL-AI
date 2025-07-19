"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Inject Botpress webchat script
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script.defer = true;
    script.onload = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          configUrl: "https://files.bpcontent.cloud/2025/07/17/08/20250717083157-RXXE6E0L.json",
        });
      } else {
        console.error("Botpress WebChat failed to load.");
      }
    };
    document.body.appendChild(script);

    // Inject safe styling
    const style = document.createElement("style");
    style.innerHTML = `
      /* Full screen only when chat is open */
      #bp-web-widget.bpw-open {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        z-index: 9999 !important;
      }

      /* Show the chat bubble */
      .bpw-floating-button {
        display: block !important;
      }

      /* Hide powered by footer */
      .bpw-powered-by {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
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

