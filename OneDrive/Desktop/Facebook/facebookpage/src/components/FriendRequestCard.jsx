import React from 'react';
import './FriendRequestCard.css';

function FriendRequestCard({ name, profilePic }) {
  return (
    <div className="friendRequestCard">
      <div className="friendRequestCard__content">
        <img src={profilePic || 'https://via.placeholder.com/50'} alt={name} className="friendRequestCard__avatar" />
        <div className="friendRequestCard__info">
          <h4>{name}</h4>
          {/* Assuming a basic text like "Friend Request" */}
          <p>Friend Request</p>
        </div>
      </div>
      <button className="friendRequestCard__confirmButton">Confirm</button>
    </div>
  );
}

export default FriendRequestCard;