import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <NavLink
        className={({ isActive }) =>
          `${isActive ? ` nav__link-active nav__link` : "nav__link"}`
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? ` nav__link-active nav__link` : "nav__link"}`
        }
        to={"/shop/product/:id"}
      >
        Shop
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? ` nav__link-active nav__link` : "nav__link"}`
        }
        to={"/1"}
      >
        Plant Care
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? ` nav__link-active nav__link` : "nav__link"}`
        }
        to={"/s"}
      >
        Blogs
      </NavLink>
    </div>
  );
};

export default Nav;
