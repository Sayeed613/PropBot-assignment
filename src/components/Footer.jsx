import React from "react";
import { FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8ACC] text-gray-300 mt-8 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section: Contact + Newsletter */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            Get in touch with us
          </h3>
          <p className="text-sm mb-4">
            Have questions or need help finding your dream property? <br />
            Reach out to our team — we’re here to assist you.
          </p>

          {/* Newsletter Input */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row sm:gap-2 bg-white sm:rounded-full overflow-hidden w-full max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-gray-700 outline-none text-sm"
              required
            />
            <button
              type="submit"
              className="bg-blue-800 px-6 py-2 text-sm font-medium text-white hover:bg-blue-900 transition-colors rounded-none sm:rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-6 max-w-6xl mx-auto gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaHome className="text-white" size={20} />
          <span className="text-lg font-bold text-white">PropBot</span>
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/listings" className="hover:text-white">
                Properties
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-white">
                Login
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-white">
                Signup
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} PropBot. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
