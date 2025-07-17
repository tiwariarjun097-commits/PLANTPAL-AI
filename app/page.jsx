"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(null);
  const [status, setStatus] = useState("");

  const handleAsk = async () => {
    setStatus("Thinking...");
    setResponse(null);

    try {
      const res = await fetch("https://eo9hhupyw2lugu4.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      });

      const data = await res.json();

      if (data?.data) {
        setResponse(data.data);
        setStatus("✅ Answer ready!");
      } else if (data?.advice) {
        setResponse({ solution: data.advice }); // fallback
        setStatus("✅ Answer ready!");
      } else {
        setStatus("❌ Sorry, I couldn’t understand the plant question.");
      }
    } catch (error) {
      setStatus("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <main style={styles.main}>
      <h1 style={styles.heading}>PlantPal AI 🌾</h1>
      <p style={styles.subheading}>Ask about plants, crops, or farming issues</p>

      <textarea
        placeholder="Why are my tomato leaves curling?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={styles.textarea}
      />
      <button onClick={handleAsk} style={styles.button}>
        Ask PlantPal
      </button>

      {status && <p style={styles.status}>{status}</p>}

      {response && (
        <div style={styles.answerBox}>
          <h3 style={styles.answerHeading}>Answer:</h3>
          {response.diagnosis && (
            <p><strong>Diagnosis:</strong> {response.diagnosis}</p>
          )}
          {response.solution && (
            <p><strong>Solution:</strong> {response.solution}</p>
          )}
          {response.timeline && (
            <p><strong>Timeline:</strong> {response.timeline}</p>
          )}
          {response.severity && (
            <p><strong>Severity:</strong> {response.severity}</p>
          )}
          {response.preventive_care && (
            <p><strong>Preventive Care:</strong> {response.preventive_care}</p>
          )}
          {response.additional_resources && (
            <p><strong>Resources:</strong> {response.additional_resources.join(", ")}</p>
          )}
        </div>
      )}
    </main>
  );
}

const styles = {
  main: {
    padding: "40px",
    maxWidth: "650px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    marginTop: "60px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.4rem",
    marginBottom: "8px",
    color: "#2e7d32",
  },
  subheading: {
    fontSize: "1.1rem",
    marginBottom: "20px",
    color: "#444",
  },
  textarea: {
    width: "100%",
    height: "110px",
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "16px",
    resize: "none",
  },
  button: {
    padding: "10px 26px",
    fontSize: "1rem",
    borderRadius: "10px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  status: {
    marginTop: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  answerBox: {
    marginTop: "30px",
    padding: "20px",
    textAlign: "left",
    backgroundColor: "#f1f8e9",
    borderRadius: "12px",
    maxHeight: "300px",
    overflowY: "auto",
    color: "#2e7d32",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.05)",
  },
  answerHeading: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    color: "#33691e",
  }
};

