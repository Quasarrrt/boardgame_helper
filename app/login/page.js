"use client";
import { useState } from "react";
import { useUnit } from "effector-react";
import { authStore } from "@/app/store/store";
import { handleLogin } from "@/app/utils/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useUnit(authStore);

  const handleLoginClick = async () => {
    try {
      const result = await handleLogin(username, password);
      console.log(result);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLoginClick}>Login</button>
      {isAuthenticated && <p>Logged in successfully!</p>}
    </div>
  );
}

export default Login;
