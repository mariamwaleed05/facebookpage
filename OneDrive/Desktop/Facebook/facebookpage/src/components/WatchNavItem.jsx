import React from "react";
import "./WatchNavItem.css";
import { FaPlayCircle } from "react-icons/fa";

function WatchNavItem({ text }) {
  return (
    <div className="watchNavItem">
      <FaPlayCircle className="watchNavItem__icon" />
      <span className="watchNavItem__text">{text}</span>
    </div>
  );
}

export default WatchNavItem;
