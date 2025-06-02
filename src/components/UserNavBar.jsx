import axios from "axios";
import { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const UserNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (!user) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      } border-b border-gray-600`}
    >
      <div className="container mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Code className="h-8 w-8 text-pink-500 mr-2" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              DevTinder
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4 text-base items-center">
            <Link to="/feed" className="btn btn-ghost">
              Home
            </Link>
            <Link to="/requests" className="btn btn-ghost">
              Requests
            </Link>
            <Link to="/connections" className="btn btn-ghost">
              Connections
            </Link>

            {/* Desktop Profile Dropdown */}
            <div className="dropdown dropdown-center">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoUrl} alt="User" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-gray-700 rounded-box w-42"
              >
                
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (includes profile options) */}
        {isMenuOpen && (
          <div className="md:hidden  flex flex-col ml-auto gap-1 w-36 h-60  bg-gray-800 rounded-md text-white shadow-lg">
            <Link
              to="/feed"
              onClick={() => setIsMenuOpen(false)}
              className="btn btn-ghost justify-start text-left"
            >
              Home
            </Link>
            <Link
              to="/requests"
              onClick={() => setIsMenuOpen(false)}
              className="btn btn-ghost justify-start text-left"
            >
              Requests
            </Link>
            <Link
              to="/connections"
              onClick={() => setIsMenuOpen(false)}
              className="btn btn-ghost justify-start text-left"
            >
              Connections
            </Link>
            <Link
              to="/profile"
              onClick={() => setIsMenuOpen(false)}
              className="btn btn-ghost justify-start text-left"
            >
              Profile
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleLogout();
              }}
              className="btn btn-ghost justify-start text-left"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default UserNavBar;
