import React from "react";
import "./AdCard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function AdCard({ name, time, profilePic }) {
  return (
    <div className="adCard">
      <div className="adCard__header">
        <img
          src={profilePic || "https://randomuser.me/api/portraits/men/45.jpg"}
          alt={name}
          className="adCard__avatar"
        />
        <div className="adCard__info">
          <h4>{name}</h4>
          <p>
            <i className="fas fa-clock"></i> {time}
          </p>
        </div>
      </div>

      <div className="adCard__actions">
        <button className="adCard__confirmButton">
          <i className="fas fa-user-check"></i> Confirm
        </button>
        <button className="adCard__deleteButton">
          <i className="fas fa-user-times"></i> Delete
        </button>
      </div>
    </div>
  );
}

export default AdCard;
