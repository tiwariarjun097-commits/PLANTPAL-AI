"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Inject Botpress Webchat Script
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    injectScript.async = true;
    document.body.appendChild(injectScript);

    // Delay config injection to ensure inject.js loads first
    injectScript.onload = () => {
      window.botpressWebChat.init({
        "botId": "604ce269-bc71-4cd5-9964-5e9b7c1141a4",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v3.2",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "604ce269-bc71-4cd5-9964-5e9b7c1141a4",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "PlantPal AI",
        "stylesheet": "https://cdn.botpress.cloud/webchat/v3.2/themes/prism.css",
        "enableConversationDeletion": true,
        "theme": "prism",
        "containerWidth": "400px",
        "layoutWidth": "100%",
        "hideWidget": false,
        "disableAnimations": false,
        "showPoweredBy": false
      });
    };
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



