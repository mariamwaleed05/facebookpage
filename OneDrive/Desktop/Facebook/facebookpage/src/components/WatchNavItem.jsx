import React from 'react';
import './WatchNavItem.css';
// import { FaPlayCircle } from 'react-icons/fa'; // Example icon

function WatchNavItem({ text }) {
  return (
    <div className="watchNavItem">
      {/* <FaPlayCircle className="watchNavItem__icon" /> */}
      <span className="watchNavItem__icon">[Play Icon]</span>
      <span>{text}</span>
    </div>
  );
}

export default WatchNavItem;