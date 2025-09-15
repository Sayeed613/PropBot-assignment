import { useState, useEffect } from "react";
import { FaHome, FaArrowRight, FaArrowLeft, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const authPage = location.pathname === "/login" || location.pathname === "/signup";
  const pageTitle = location.pathname === "/login" ? "Login" : location.pathname === "/signup" ? "Signup" : "";

  // Auth Pages Navbar
  if (authPage) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-white h-16 flex justify-between items-center px-4 md:px-10 shadow">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 border px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <FaArrowLeft />
          <h1 className="sm:block hidden">Home</h1>
        </button>

        <h1 className="font-bold text-xl">{pageTitle}</h1>

        <Link
          to="/about"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700"
        >
          <h1 className="sm:block hidden"> About Us</h1>
          <FaArrowRight />
        </Link>
      </nav>
    );
  }

  // Default Navbar
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white h-16 flex justify-between items-center px-4 md:px-10 shadow">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <FaHome className="text-black" size={20} />
        <h1 className="font-bold text-lg md:text-xl">PropBot</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <p className="hover:text-blue-500 cursor-pointer">Buy</p>
        <p className="hover:text-blue-500 cursor-pointer">Rent</p>
        <p className="hover:text-blue-500 cursor-pointer">Sell</p>
        <p className="hover:text-blue-500 cursor-pointer">About Us</p>
        <p className="hover:text-blue-500 cursor-pointer">Contact Us</p>
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex items-center gap-2">
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-1 rounded-3xl text-white hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <div className="flex items-center gap-2 bg-blue-600 px-3 py-1 rounded-3xl text-white">
            <Link to="/login">Login</Link>
            <span>/</span>
            <div className="flex items-center gap-1">
              <Link to="/signup">Signup</Link>
              <span className="border border-white rounded-full p-1 flex items-center justify-center">
                <FaArrowRight size={6} />
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 ">
          <h2 className="font-bold text-lg">Menu</h2>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 border-b">Home</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 border-b">Buy</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 border-b">Rent</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 border-b">Sell</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 border-b">About Us</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 border-b">Contact Us</Link>

          {user ? (
            <button
              onClick={() => { handleLogout(); setMenuOpen(false); }}
              className="bg-red-600 px-4 py-1 rounded-3xl text-white hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-blue-600 sm:px-3 px-9 py-1 rounded-3xl text-white">
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <span>/</span>
              <div className="flex items-center gap-1">
                <Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link>
                <span className="border border-white rounded-full p-1 flex items-center justify-center">
                  <FaArrowRight size={10} />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay background */}
      {menuOpen && <div className="fixed inset-0  bg-opacity-40 z-40" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
