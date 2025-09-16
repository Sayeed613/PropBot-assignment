import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      // Firebase sign-in
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save session in localStorage (or sessionStorage if not remembered)
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem(
        "user",
        JSON.stringify({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          name: userCredential.user.displayName,
        })
      );

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full mt-2 overflow-hidden">
      {/* Form */}
      <div className="flex-[0.4] flex flex-col justify-center p-8 md:p-16 gap-6 bg-white">
        <h1 className="font-bold text-3xl mb-6 text-center md:text-left">
          Welcome Back
        </h1>

        {error && <p className="text-red-600">{error}</p>}

        <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
          {/* Email */}
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AiOutlineMail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
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

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="accent-blue-600"
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-sm">or continue with</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Logins */}
        <div className="flex justify-center gap-6">
          <button className="p-3  hover:bg-gray-100">
            <FaApple className="text-4xl text-black" />
          </button>
          <button className="p-3  hover:bg-gray-100">
            <FaGoogle className="text-4xl text-red-500" />
          </button>
          <button className="p-3  hover:bg-gray-100">
            <FaFacebook className="text-4xl text-blue-600" />
          </button>
        </div>

        {/* Signup Redirect */}
        <p className="mt-6 text-gray-600 text-center ">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold">
            Create one
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
