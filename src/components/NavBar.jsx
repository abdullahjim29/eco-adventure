import { Link, NavLink } from "react-router-dom";
import logo2 from '../assets/logo2.png'
import { useContext } from "react";
import { AuthContext } from "../layouts/AuthProvider";

const NavBar = () => {
  const {logOutUser, user} = useContext(AuthContext);
    const links = 
    <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/update-profile'>Update Profile</NavLink></li>
        <li><NavLink to='/user-profile'>User Profile</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to='/'>
        <div className="w-[180px]">
        <img className="w-full " src={logo2} alt="" />
        </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
           {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <Link onClick={logOutUser} to='/auth/login' className="btn bg-[#583CEA] text-white px-8 text-lg rounded-lg py-6">Log Out</Link> : <Link to='/auth/login' className="btn bg-[#583CEA] text-white px-8 text-lg rounded-lg py-6">Login</Link>
        }
      </div>
    </div>
  );
};

export default NavBar;
