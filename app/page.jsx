"use client";

export default function HomePage() {
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <h1 style={styles.logo}>🌿 PlantPal AI</h1>
        <p style={styles.subtitle}>Your smart plant care assistant</p>
      </header>

      <iframe
        src="https://plantpal-ai-black.vercel.app"
        style={styles.iframe}
        title="PlantPal AI Chatbot"
      />
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    height: "100vh",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#111", // dark background
    color: "#fff",
  },
  header: {
    padding: "20px",
    backgroundColor: "#1b5e20", // dark green
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
  iframe: {
    flex: 1,
    border: "none",
    width: "100%",
  },
};

