import React from 'react';
import './AdCard.css';

function AdCard({ name, time, profilePic }) {
  return (
    <div className="adCard">
      <div className="adCard__header">
        <img src={profilePic || 'https://via.placeholder.com/40'} alt={name} className="adCard__avatar" />
        <div className="adCard__info">
          <h4>{name}</h4>
          <p>{time}</p>
        </div>
      </div>
      <div className="adCard__actions">
        <button className="adCard__confirmButton">Confirm</button>
        <button className="adCard__deleteButton">Delete</button>
      </div>
    </div>
  );
}

export default AdCard;