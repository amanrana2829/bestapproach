import { useState } from "react";
import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';

import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import "../assets/css/frontend/login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
 // should log: /login1

    router.post(route('loginSubmit'), {
      email,
      password,
      remember: rememberMe,
    }, {
      onSuccess: () => {
      router.get(route('dashboard'));
      },
      onError: (errors) => {
        setError(errors.email || errors.password || "Login failed");
      },
      onFinish: () => {
        setLoading(false);
      }
    });
  };

  const handleForgotPassword = () => {
  //  router.visit("/forgot-password");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-3/4">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Welcome!
      </h1>
      <form className="space-y-4" onSubmit={handleLogin}>
        <div className="relative">
          <FaEnvelope className="absolute left-2 top-3 text-white" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer h-10 w-full bg-transparent border-b-2 border-gray-400 text-white placeholder-white pl-10 focus:outline-none focus:border-white"
            placeholder="Email"
            required
          />
        </div>

        <div className="relative">
          <FaLock className="absolute left-2 top-3 text-white" />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer h-10 w-full bg-transparent border-b-2 border-gray-400 text-white placeholder-white pl-10 focus:outline-none focus:border-white"
            placeholder="Password"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-3 text-white"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="w-4 h-4 text-indigo-600 bg-gray-800 border-gray-500 rounded"
          />
          <label htmlFor="rememberMe" className="ml-2 text-white text-sm">
            Remember me
          </label>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          className="w-full py-2 bg-white text-indigo-600 text-lg font-bold uppercase rounded-full hover:bg-gray-200"
          disabled={loading}
        >
          {loading ? <FaSpinner className="animate-spin mx-auto" /> : "Login"}
        </button>
      </form>

      <button
        type="button"
        className="block text-center text-sm text-white mt-4 hover:underline"
        onClick={handleForgotPassword}
      >
        Forgot Password?
      </button>
    </div>
  );
};

export default LoginForm;
