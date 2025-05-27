import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) return null;

  return (
    <div className="navbar bg-base-300 shadow-md px-4 sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          👩‍💻 DevTinder
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex gap-4 text-base items-center">
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>
        <Link to="/requests" className="btn btn-ghost">
          Requests
        </Link>
        <Link to="/connections" className="btn btn-ghost">
          Connections
        </Link>
        <button className="btn btn-ghost relative">
          Notifications
          <span className="badge badge-error absolute top-0 right-0 text-white text-xs">
            3
          </span>
        </button>
      </div>

      {/* Right: Profile dropdown */}
      <div className="flex-none ml-4">
        <div className="dropdown dropdown-end">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <span className="text-sm px-2 py-1">Hi, {user.firstName}</span>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/premium">Premium</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
