import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./FriendRequestCard.css";

function FriendRequestCard({ name, profilePic }) {
  return (
    <div className="friendRequestCard">
      <div className="friendRequestCard__header">
        <img
          src={profilePic || "https://randomuser.me/api/portraits/women/45.jpg"}
          alt={name}
          className="friendRequestCard__avatar"
        />
        <div className="friendRequestCard__info">
          <h4>{name}</h4>
          <p><i className="fas fa-user-friends"></i> Friend Request</p>
        </div>
      </div>

      <div className="friendRequestCard__buttons">
        <button className="confirm">
          <i className="fas fa-check"></i> Confirm
        </button>
        <button className="delete">
          <i className="fas fa-times"></i> Delete
        </button>
      </div>
    </div>
  );
}

export default FriendRequestCard;
