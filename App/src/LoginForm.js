import React, { useState } from "react";

function LoginForm({ onSuccess, goToRegister }) {
  const [formData, setFormData] = useState({ userId: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.userId || !formData.password) {
      alert("⚠️ Please fill all fields");
      return;
    }

    alert("✅ Login Successful!");
    if (onSuccess) onSuccess(formData);
  };

  return (
    <div style={styles.container}>
      {/* glowing sparkles */}
      <div style={styles.sparkles}></div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.appHeading}>GIGALOGIC AI</h1>
        <h2 style={styles.title}>Login Form</h2>

        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Login</button>

        <p style={styles.text}>
          Don’t have an account?{" "}
          <span style={styles.link} onClick={goToRegister}>Register</span>
        </p>
      </form>

      {/* animations */}
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes sparkleMove {
            0% { transform: translateY(0) scale(1); opacity: 0.8; }
            50% { transform: translateY(-30px) scale(1.2); opacity: 1; }
            100% { transform: translateY(-60px) scale(0.8); opacity: 0.5; }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(-45deg, #0f2027, #203a43, #2c5364)",
    backgroundSize: "400% 400%",
    animation: "gradientBG 12s ease infinite",
    overflow: "hidden",
  },
  sparkles: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: `radial-gradient(circle, rgba(255,215,0,0.8) 2px, transparent 2px)`,
    backgroundSize: "80px 80px",
    animation: "sparkleMove 6s linear infinite",
    pointerEvents: "none",
  },
  form: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "15px",
    boxShadow:
      "0 0 25px rgba(0, 123, 255, 0.8), 0 0 50px rgba(255, 215, 0, 0.6)",
    width: "420px",
    maxWidth: "90%",
    backdropFilter: "blur(10px)",
  },
  appHeading: {
  textAlign: "center",
  marginBottom: "15px",
  fontSize: "36px",
  fontWeight: "bold",
  background: "linear-gradient(90deg, #4a90e2, #ffd700)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "0 0 15px rgba(74,144,226,0.7), 0 0 25px rgba(255,215,0,0.6)"
},
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
    color: "#0d47a1",
    textShadow: "0px 0px 12px rgba(255,215,0,0.9)",
  },
  input: {
    margin: "10px 0",
    padding: "14px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "14px",
    marginTop: "15px",
    backgroundColor: "#0d47a1",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    boxShadow: "0 0 15px rgba(255,215,0,0.9)",
  },
  text: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#0d47a1",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default LoginForm;
