import React, { useState, useEffect } from "react";

const SignUp = ({ setRegisteredUser, setShowSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.includes("@") && password.length >= 6;

  useEffect(() => {
    console.log("SignUp Re-rendered");
  });

  return (
    <div>
      <h2>Sign Up</h2>
      {/* rest unchanged */}
    </div>
  );
};

export default SignUp;