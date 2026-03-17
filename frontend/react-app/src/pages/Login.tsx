import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      login(res.data);

      // 🔥 redirect op basis van role
      if (res.data.role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      console.error(err);
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-md shadow-lg"
      >

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        {error && (
          <p className="text-red-400 mb-4 text-center">
            {error}
          </p>
        )}

        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 rounded bg-black border border-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label>Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 rounded bg-black border border-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded font-semibold"
        >
          Login
        </button>

      </form>
    </div>
  );
}