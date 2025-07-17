"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    setAnswer("Thinking...");

    try {
      const res = await fetch("https://eo9hhupyw2lugu4.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      });

      const data = await res.json();

      if (data.advice) {
        setAnswer(data.advice);
      } else {
        setAnswer("Sorry, I couldn’t understand the plant question.");
      }
    } catch (error) {
      setAnswer("Something went wrong. Please try again later.");
    }
  };

  return (
    <main style={styles.main}>
      <h1 style={styles.heading}>PlantPal AI 🌿</h1>
      <p style={styles.subheading}>Ask anything about your plant</p>
      <textarea
        placeholder="Why are my hibiscus leaves turning yellow?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={styles.textarea}
      />
      <button onClick={handleAsk} style={styles.button}>
        Ask PlantPal
      </button>
      {answer && <p style={styles.answer}>{answer}</p>}
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
  textarea: {
    width: "100%",
    height: "100px",
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "18px",
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
