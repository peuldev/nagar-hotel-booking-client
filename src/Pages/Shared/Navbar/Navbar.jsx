import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  const navLinkis = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink to="/restaurant">Restaurant</NavLink>
      </li>
      <li>
        <NavLink to="shop">Shop</NavLink>
      </li>
    </>
  );
  return (
    <div>
      {/* nav start  */}
      <div className="bg-base-100 border-b border-b-border">
        <div className="max-w-7xl mx-auto font-secondary">
          <div className="flex justify-between items-center mx-2 text-[#181b20]">
            <div className="flex py-2">
              <a href="https://en.wikipedia.org/wiki/Call_centre">
                <h4>1111-2222-3333</h4>
              </a>
              <a href="https://en.wikipedia.org/wiki/Dhaka">
                <h4 className="ms-5">Dhaka Bangladesh</h4>
              </a>
            </div>
            <div className="border p-3 border-b-0 border-t-0 border-border">
              <Link to="/login">
                <h3>My Account</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* nav end  */}
      <div className="bg-base-100">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinkis}
              </ul>
            </div>
            <Link to="/">
              <a className="text-2xl font-semibold cursor-pointer">NAGAR</a>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base">{navLinkis}</ul>
          </div>
          <div className="navbar-end">
            <Link to="/rooms">
              <a className=" bg-blue hover:bg-info text-white px-5 py-2 rounded-full cursor-pointer text-base">
                {" "}
                Book now
              </a>
            </Link>
            <div className="grid place-items-center">
              <a className="text-2xl lg:ml-5 ml-2 cursor-pointer ">
                <HiOutlineShoppingBag />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
