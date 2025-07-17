"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
        botId: "your-bot-id", // 🔁 Replace this with your real bot ID
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "your-bot-id", // 🔁 Replace this too
        lazySocket: true,
        botName: "PlantPal Assistant 🌿",
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <main style={styles.main}>
      <h1 style={styles.heading}>PlantPal AI 🌿</h1>
      <p style={styles.subheading}>
        Ask anything about plants, pests, diseases, or care
      </p>
      <p style={{ marginTop: "40px", color: "#555", fontSize: "1rem" }}>
        👇 Chat icon is at the bottom-right corner.
      </p>
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
};
