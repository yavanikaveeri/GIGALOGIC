import React, { useState } from "react";

function RegistrationForm({ onSuccess, goToLogin }) {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    countryCode: "+91",
    phoneNo: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.userId ||
      !formData.name ||
      !formData.phoneNo ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("⚠️ Please fill all fields");
      return;
    }

    if (formData.phoneNo.length !== 10) {
      alert("⚠️ Phone number must be 10 digits");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("⚠️ Passwords do not match");
      return;
    }

    alert("✅ Registration Successful!");
    if (onSuccess) onSuccess();
  };

  return (
    <div style={styles.container}>
      {/* glowing sparkles */}
      <div style={styles.sparkles}></div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.appHeading}>GIGALOGIC AI</h1>
        <h2 style={styles.title}>Registration Form</h2>

        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Phone Number with Country Code */}
        <div style={styles.phoneContainer}>
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            style={styles.countryCode}
          >
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+61">🇦🇺 +61</option>
            <option value="+81">🇯🇵 +81</option>
          </select>
          <input
            type="tel"
            name="phoneNo"
            placeholder="Phone Number"
            value={formData.phoneNo}
            onChange={handleChange}
            style={styles.phoneInput}
            maxLength="10"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        {/* ✅ Password with Eye Toggle */}
        <div style={styles.passwordContainer}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.passwordInput}
          />
          <span
            style={styles.eyeIcon}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        {/* ✅ Confirm Password with Eye Toggle */}
        <div style={styles.passwordContainer}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.passwordInput}
          />
          <span
            style={styles.eyeIcon}
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button type="submit" style={styles.button}>
          Register
        </button>

        <p style={styles.text}>
          Already have an account?{" "}
          <span style={styles.link} onClick={goToLogin}>
            Login
          </span>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
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
    width: "450px",
    padding: "40px",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.6)",
    display: "flex",
    flexDirection: "column"
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
    marginBottom: "25px",
    fontSize: "28px",
    color: "#333",
    textShadow: "0 0 10px rgba(255,215,0,0.7)"
  },
  input: {
    margin: "12px 0",
    padding: "14px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px"
  },
  phoneContainer: {
    display: "flex",
    alignItems: "center",
    margin: "12px 0",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#fff"
  },
  countryCode: {
    width: "100px",
    padding: "14px",
    border: "none",
    borderRight: "1px solid #ccc",
    fontSize: "16px",
    backgroundColor: "#f9f9f9",
    cursor: "pointer"
  },
  phoneInput: {
    flex: 1,
    padding: "14px",
    border: "none",
    fontSize: "16px",
    outline: "none"
  },
  passwordContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    margin: "12px 0"
  },
  passwordInput: {
    flex: 1,
    padding: "14px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px"
  },
  eyeIcon: {
    position: "absolute",
    right: "12px",
    cursor: "pointer",
    fontSize: "18px"
  },
  button: {
    padding: "14px",
    marginTop: "20px",
    backgroundColor: "#4a90e2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  },
  text: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "14px",
    color: "#555"
  },
  link: {
    color: "#4a90e2",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default RegistrationForm;
