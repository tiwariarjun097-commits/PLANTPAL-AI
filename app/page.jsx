"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script.defer = true;
    script.onload = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          botId: "604ce269-bc71-4cd5-9964-5e9b7c1141a4",
          clientId: "604ce269-bc71-4cd5-9964-5e9b7c1141a4",
          hostUrl: "https://cdn.botpress.cloud/webchat/v3.2",
          messagingUrl: "https://messaging.botpress.cloud",
          botName: "PlantPal AI",
          showPoweredBy: false,
          enableConversationDeletion: true,
          themeName: "prism",
          stylesheet: "https://cdn.botpress.cloud/webchat/v3.2/themes/prism.css",
          composerPlaceholder: "Ask me anything about plants...",
        });
      } else {
        console.error("Botpress WebChat failed to load.");
      }
    };
    document.body.appendChild(script);
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

