import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex flex-row justify-center gap-8">
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-rose-600 " : undefined
          }
        >
          About
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive ? "text-rose-600 " : undefined
          }
        >
          Posts
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
