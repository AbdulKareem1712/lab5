import React, { useState } from "react";
import "./Auth.css";

const SignIn = ({ setIsAuthenticated, setShowSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email && password;

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>React Authentication Project</h1>
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={!isValid}>
            Login
          </button>
        </form>

        <p className="switch-text" onClick={() => setShowSignUp(true)}>
          Don't have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;