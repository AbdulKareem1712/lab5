import React, { useState, useEffect } from "react";

const SignIn = ({ setIsAuthenticated, setShowSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isValid = email !== "" && password !== "";

  useEffect(() => {
    console.log("SignIn Re-rendered");
  });

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
      setError("Invalid Credentials");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {/* rest unchanged */}
    </div>
  );
};

export default SignIn;