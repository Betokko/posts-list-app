import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="flex flex-row justify-end gap-4 py-4 px-16 shadow-md">
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-rose-600 ' : undefined
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive ? 'text-rose-600 ' : undefined
          }
        >
          Posts
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
