import React from 'react';
import './Nav.css'; // For styling
// You'd typically import icons here, e.g., from react-icons/fa
// import { FaFacebookF, FaHome, FaTv, FaStore, FaUsers } from 'react-icons/fa';

function Nav() {
  return (
    <div className="nav">
      <div className="nav__left">
        {/* Replace with actual Facebook logo icon */}
        <span className="nav__facebookIcon">[Facebook Icon]</span>
        <input type="text" placeholder="Search Facebook" className="nav__searchInput" />
      </div>

      <div className="nav__center">
        <div className="nav__option nav__option--active">
          {/* Replace with actual Home icon */}
          <span className="nav__icon">[Home Icon]</span>
        </div>
        <div className="nav__option">
          {/* Replace with actual Watch icon */}
          <span className="nav__icon">[Watch Icon]</span>
        </div>
        <div className="nav__option">
          {/* Replace with actual Marketplace icon */}
          <span className="nav__icon">[Marketplace Icon]</span>
        </div>
        <div className="nav__option">
          {/* Replace with actual Groups icon */}
          <span className="nav__icon">[Groups Icon]</span>
        </div>
      </div>

      <div className="nav__right">
        {/* Replace with actual User Profile Pic */}
        <img src="https://via.placeholder.com/30/1a77f2/fff?text=J" alt="User Profile" className="nav__profilePic" />
        <div className="nav__info">
          <h4>Jenny</h4>
        </div>
        {/* Replace with actual icons */}
        <span className="nav__rightIcon">[Menu Icon]</span>
        <span className="nav__rightIcon">[Messages Icon]</span>
        <span className="nav__rightIcon">[Notifications Icon]</span>
        <span className="nav__rightIcon">[Dropdown Icon]</span>
      </div>
    </div>
  );
}

export default Nav;