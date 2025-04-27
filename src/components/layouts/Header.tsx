import React from "react";
import headerLogo from "../../assets/img/Logo.svg";
import cartIcon from "../../assets/img/cart_icon.svg";
import searchIcon from "../../assets/img/search_icon.svg";
import logoutIcon from "../../assets/img/Logout.svg";
import { Link, NavLink } from "react-router-dom";
import Nav from "../Nav";
import { useAppSelector } from "../../helpers/reduxHelper";
const Header = () => {
  const { itemCounts } = useAppSelector((state) => state.cart);

  return (
    <div className="header">
      <img src={headerLogo} alt="logo" className="logo" />
      <div className="header__nav">
        <Nav />
      </div>
      <div className="header__features">
        <img className="header__icon" src={searchIcon} alt="searchIcon" />
        <div style={{ position: "relative" }}>
          <Link to={"/cart"}>
            <img className="header__icon" src={cartIcon} alt="cartIcon" />
            {itemCounts > 0 && (
              <p className="header__icon-count">{itemCounts}</p>
            )}
          </Link>
        </div>

        <button className="button header__button">
          <img
            src={logoutIcon}
            className="header__logout_icon"
            alt="logout-icon"
          />
          login
        </button>
      </div>
    </div>
  );
};

export default Header;
