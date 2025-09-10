// Construction.js
import React from "react";

function Constructionpage({ user, onLogout }) {
  return (

    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🚧 Under Construction 🚧</h2>
        <p style={styles.text}>
          Welcome, <strong>{user?.name || user?.userId}</strong>!  
          This page is currently under construction. Stay tuned!
        </p>
        <button onClick={onLogout} style={styles.button}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f7fa"
  },
  card: {
    width: "400px",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  title: {
    marginBottom: "20px",
    color: "#333"
  },
  text: {
    marginBottom: "20px",
    fontSize: "16px",
    color: "#555"
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  }
};

export default Constructionpage;
