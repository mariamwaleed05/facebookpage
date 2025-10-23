import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-left">
      <button className="confirm-btn">Confirm</button>
      <div className="watch-links">
        <p>Watch</p>
        <p>Watch</p>
        <p>Watch</p>
        <p>Watch</p>
      </div>

      <h3>Title</h3>
      <div className="group-item">
        <img src="/group.png" alt="group" />
        <p>UI / UX Designers & Developers</p>
      </div>
      <div className="group-item">
        <img src="/group.png" alt="group" />
        <p>UI / UX Designers & Developers</p>
      </div>
      <div className="group-item">
        <img src="/group.png" alt="group" />
        <p>UI / UX Designers & Developers</p>
      </div>
      <div className="group-item">
        <img src="/group.png" alt="group" />
        <p>UI / UX Designers & Developers</p>
      </div>
      <div className="group-item">
        <img src="/group.png" alt="group" />
        <p>UI / UX Designers & Developers</p>
      </div>
    </div>
  );
}

export default Sidebar;
