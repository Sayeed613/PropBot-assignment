import React, { useState } from "react";
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      // Sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Save user session in localStorage
      localStorage.setItem("user", JSON.stringify({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        name: userCredential.user.displayName,
      }));

      // Redirect to homepage
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Form */}
      <div className="flex-[0.4] flex flex-col justify-center p-8 md:p-16 gap-6 bg-white">
        <h1 className="font-bold text-3xl mb-6 text-center md:text-left">Welcome Back</h1>

        {error && <p className="text-red-600">{error}</p>}

        <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
          {/* Email */}
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Password */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border p-3 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-gray-600 text-center md:text-left">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Image */}
      <div className="flex-1 hidden md:flex h-full">
        <img
          src="https://wallpapercave.com/wp/wp7605656.jpg"
          alt="Login"
          className="w-full h-[90vh] object-cover rounded-l-2xl"
        />
      </div>
    </div>
  );
};

export default LoginPage;
