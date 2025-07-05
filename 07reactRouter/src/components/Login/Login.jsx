import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-200">
      <form
        onSubmit={handleSubmit}
        className="bg-purple-500 p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center text-blue-100 mb-6">
          Login to Code-Connect
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-white font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-white font-medium" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-white">Remember me</span>
          </label>
          <a href="#" className="text-sm text-white hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
        >
          Login
        </button>

        <p className="mt-6 text-center text-sm text-white">
          Don’t have an account?{" "}
          <a href="/register" className="text-white hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
