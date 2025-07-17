"use client";
import React, { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askBot = async () => {
    if (!question) return alert("Please enter a question about your plant!");
    setLoading(true);
    setAnswer("");

    const res = await fetch("https://eo9zdnosphaluwo.m.pipedream.net", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: question }),
    });

    const data = await res.json();
    setAnswer(data.reply || "No reply from AI.");
    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🌿 PlantPal AI</h1>
        <p style={styles.subtitle}>Ask any question about your plant</p>
        <textarea
          style={styles.textarea}
          rows={4}
          placeholder="Why are my hibiscus leaves turning yellow?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button style={styles.button} onClick={askBot} disabled={loading}>
          {loading ? "Analyzing..." : "Ask PlantPal"}
        </button>
        {answer && <div style={styles.answer}>{answer}</div>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #e0f7fa, #f0fff4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
  },
  card: {
    width: "100%",
    maxWidth: "600px",
    background: "#fff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "10px",
    color: "#2e7d32",
  },
  subtitle: {
    fontSize: "1rem",
    marginBottom: "20px",
    color: "#555",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    resize: "none",
  },
  button: {
    padding: "10px 24px",
    fontSize: "1rem",
    borderRadius: "10px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  answer: {
    marginTop: "20px",
    textAlign: "left",
    whiteSpace: "pre-wrap",
    padding: "15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    fontSize: "1rem",
    color: "#333",
  },
};
