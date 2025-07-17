export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={styles.body}>{children}</body>
    </html>
  );
}

const styles = {
  body: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
  },
};
