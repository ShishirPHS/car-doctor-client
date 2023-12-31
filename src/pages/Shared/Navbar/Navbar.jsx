import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  // const { user, userSignOut } = useContext(AuthContext);
  const { user, userSignOut } = useAuth();

  const handleSignOut = () => {
    userSignOut().then(() => {
      Swal.fire({
        icon: "success",
        title: "Log Out successful",
      });
    });
  };

  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <NavLink to="/bookings">My Bookings</NavLink>
          </li>
          <li>
            <button onClick={handleSignOut}>Log Out</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-secondary">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
