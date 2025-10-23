import React from "react";
import {
  FaFacebook,
  FaHome,
  FaTv,
  FaStore,
  FaUsers,
  FaTh,
  FaFacebookMessenger,
  FaBell,
  FaCaretDown,
  FaSearch,
} from "react-icons/fa";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      {/* LEFT SIDE */}
      <div className="nav__left">
        <FaFacebook className="nav__facebookIcon" />
        <div className="nav__searchBox">
          <FaSearch className="nav__searchIcon" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="nav__searchInput"
          />
        </div>
      </div>

      {/* CENTER ICONS */}
      <div className="nav__center">
        <div className="nav__option nav__option--active">
          <FaHome />
        </div>
        <div className="nav__option">
          <FaTv />
        </div>
        <div className="nav__option">
          <FaStore />
        </div>
        <div className="nav__option">
          <FaUsers />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav__right">
        <img
          src="https://randomuser.me/api/portraits/women/60.jpg"
          alt="User Profile"
          className="nav__profilePic"
        />
        <div className="nav__info">
          <h4>Jenny</h4>
        </div>
        <div className="nav__rightIcons">
          <FaTh className="nav__rightIcon" />
          <FaFacebookMessenger className="nav__rightIcon" />
          <FaBell className="nav__rightIcon" />
          <FaCaretDown className="nav__rightIcon" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
