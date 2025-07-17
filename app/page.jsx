
"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const handleAsk = async () => {
    setAnswer("");
    setError("");

    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }

    try {
      const res = await fetch("https://eoa7n67dkbe4097.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      });

      const data = await res.json();
      const ai = data?.data?.ai_response;

      if (ai) {
        const responseText = `🌿 Diagnosis: ${ai.diagnosis}

🧪 Solution:
- ${ai.solution.join("\n- ")}

📆 Timeline: ${ai.timeline}

🛡️ Preventive Care:
${ai.preventive_care}`;

        setAnswer(responseText);
      } else {
        setError("⚠️ Could not find AI response.");
      }
    } catch (err) {
      setError("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <main style={styles.main}>
      <h1 style={styles.heading}>PlantPal AI 🌿</h1>
      <p style={styles.subheading}>Ask anything about your plant or farming</p>

      <textarea
        placeholder="Why are my hibiscus leaves turning yellow?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={styles.textarea}
      />

      <button onClick={handleAsk} style={styles.button}>
        Ask PlantPal
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {answer && (
        <div style={styles.answerBox}>
          <h3 style={styles.answerHeading}>🌱 PlantPal’s Advice:</h3>
          <pre style={styles.answerText}>{answer}</pre>
        </div>
      )}
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
  answerBox: {
    marginTop: "30px",
    textAlign: "left",
    backgroundColor: "#e8f5e9",
    border: "1px solid #c8e6c9",
    borderRadius: "10px",
    padding: "20px",
    whiteSpace: "pre-wrap",
  },
  answerHeading: {
    marginBottom: "10px",
    color: "#1b5e20",
    fontSize: "1.1rem",
  },
  answerText: {
    fontSize: "1rem",
    color: "#333",
    lineHeight: "1.5",
  },
  error: {
    marginTop: "20px",
    color: "#d32f2f",
    fontWeight: "bold",
  },
};




