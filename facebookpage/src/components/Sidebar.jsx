import React, { Component } from 'react';
import './Sidebar.css';
import image from './../imgs/image.png';

const Sidebar = () => {
  return (
    <aside className="sidebar-left">
      <button className="confirm-btn">Confirm</button>

      <div className="watch-section">

     <img src={image} />
        <p>Watch</p>
        <ul>
          {[1, 2, 3, 4].map((n) => (
            <li key={n}>
            </li>
          ))}
        </ul>
      </div>

      <h3>Title</h3>
      <ul className="group-list">
        {[1, 2, 3, 4, 5].map((n) => (
          <li key={n}>
            <img src="https://via.placeholder.com/40" alt="" />
            UI / UX Designers & Developers
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
