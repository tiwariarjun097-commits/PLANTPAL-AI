"use client";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Inject Botpress engine
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
        botId: "604ce269-bc71-4cd5-9964-5e9b7c1141a4",
        clientId: "8622cd8d-19a7-4dc9-9dac-19421836817f",
        configuration: {
          version: "v1",
          botName: "PlantPal Assistant",
          botDescription: "I provide expert guidance on plant care, small-scale farming, and gardening. Ask me about diagnosing plant problems, watering, pests, fertilizing, and sustainable growing methods.",
          color: "#3276EA",
          themeMode: "dark",
          fontFamily: "inter",
          radius: 4,
          feedbackEnabled: true,
          footer: "[⚡ by Botpress](https://botpress.com/?from=webchat)",
          additionalStylesheetUrl: "https://files.bpcontent.cloud/2025/07/19/09/20250719092220-ORDCC44J.css"
        }
      });
    };
    document.body.appendChild(script);

    // Fullscreen styling
    const style = document.createElement("style");
    style.innerHTML = `
      #bp-web-widget {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 9999 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
      .bpw-floating-button {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#000" }}>
      <h1 style={{ textAlign: "center", color: "white", padding: "20px" }}>
        🌿 PlantPal AI Chatbot
      </h1>
    </div>
  );
}
