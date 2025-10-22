import React, { Component } from 'react';
import './CustomNav.css';

const CustomNav = () => {
  return (
    <>
 
      <header className="navbar">
        <div className="logo">f</div>
        <div className="nav-icons">
        <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDUyNjg1IiBkPSJNNCAxOXYtOXEwLS40NzUuMjEzLS45dC41ODctLjdsNi00LjVxLjUyNS0uNCAxLjItLjR0MS4yLjRsNiA0LjVxLjM3NS4yNzUuNTg4LjdUMjAgMTB2OXEwIC44MjUtLjU4OCAxLjQxM1QxOCAyMWgtM3EtLjQyNSAwLS43MTItLjI4OFQxNCAyMHYtNXEwLS40MjUtLjI4OC0uNzEyVDEzIDE0aC0ycS0uNDI1IDAtLjcxMi4yODhUMTAgMTV2NXEwIC40MjUtLjI4OC43MTNUOSAyMUg2cS0uODI1IDAtMS40MTItLjU4N1Q0IDE5Ii8+PC9zdmc+'></img>
          <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDUyNjg1IiBkPSJNNCAxOXYtOXEwLS40NzUuMjEzLS45dC41ODctLjdsNi00LjVxLjUyNS0uNCAxLjItLjR0MS4yLjRsNiA0LjVxLjM3NS4yNzUuNTg4LjdUMjAgMTB2OXEwIC44MjUtLjU4OCAxLjQxM1QxOCAyMWgtM3EtLjQyNSAwLS43MTItLjI4OFQxNCAyMHYtNXEwLS40MjUtLjI4OC0uNzEyVDEzIDE0aC0ycS0uNDI1IDAtLjcxMi4yODhUMTAgMTV2NXEwIC40MjUtLjI4OC43MTNUOSAyMUg2cS0uODI1IDAtMS40MTItLjU4N1Q0IDE5Ii8+PC9zdmc+'></img>
          <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDUyNjg1IiBkPSJNNCAxOXYtOXEwLS40NzUuMjEzLS45dC41ODctLjdsNi00LjVxLjUyNS0uNCAxLjItLjR0MS4yLjRsNiA0LjVxLjM3NS4yNzUuNTg4LjdUMjAgMTB2OXEwIC44MjUtLjU4OCAxLjQxM1QxOCAyMWgtM3EtLjQyNSAwLS43MTItLjI4OFQxNCAyMHYtNXEwLS40MjUtLjI4OC0uNzEyVDEzIDE0aC0ycS0uNDI1IDAtLjcxMi4yODhUMTAgMTV2NXEwIC40MjUtLjI4OC43MTNUOSAyMUg2cS0uODI1IDAtMS40MTItLjU4N1Q0IDE5Ii8+PC9zdmc+'></img>
          <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDUyNjg1IiBkPSJNNCAxOXYtOXEwLS40NzUuMjEzLS45dC41ODctLjdsNi00LjVxLjUyNS0uNCAxLjItLjR0MS4yLjRsNiA0LjVxLjM3NS4yNzUuNTg4LjdUMjAgMTB2OXEwIC44MjUtLjU4OCAxLjQxM1QxOCAyMWgtM3EtLjQyNSAwLS43MTItLjI4OFQxNCAyMHYtNXEwLS40MjUtLjI4OC0uNzEyVDEzIDE0aC0ycS0uNDI1IDAtLjcxMi4yODhUMTAgMTV2NXEwIC40MjUtLjI4OC43MTNUOSAyMUg2cS0uODI1IDAtMS40MTItLjU4N1Q0IDE5Ii8+PC9zdmc+'></img>
        </div>
      </header>

      <aside className="sidebar-left">
      <button className="confirm-btn">Confirm</button>

      <div className="watch-section">
        <p> Watch</p>
                <p> Watch</p>
        <p> Watch</p>
        <p> Watch</p>

        <ul>
          
        </ul>
      </div>


      <h3>Titles</h3>
      <ul className="group-list">
        <li><img src="https://i.pravatar.cc/40?img=11" alt="" /> UI / UX Designers</li>
        <li><img src="https://i.pravatar.cc/40?img=12" alt="" /> Frontend Devs</li>
        <li><img src="https://i.pravatar.cc/40?img=13" alt="" /> Product Managers</li>
      </ul>
    </aside>

    </>
  );
};

export default CustomNav;