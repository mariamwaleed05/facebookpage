import React from 'react';
import './WhatOnYourMind.css';
// import { FaVideo, FaPhotoVideo, FaSmile } from 'react-icons/fa'; // Example icons

function WhatOnYourMind({ userName = 'Jenny', userProfilePic = 'https://via.placeholder.com/50/FFC0CB/fff?text=J' }) {
  return (
    <div className="whatOnYourMind">
      <div className="whatOnYourMind__top">
        <img src={userProfilePic} alt={userName} className="whatOnYourMind__avatar" />
        <input
          type="text"
          placeholder={`What's on your mind, ${userName}?`}
          className="whatOnYourMind__input"
        />
      </div>
      <div className="whatOnYourMind__bottom">
        <div className="whatOnYourMind__option">
          {/* <FaVideo className="whatOnYourMind__icon whatOnYourMind__icon--video" /> */}
          <span className="whatOnYourMind__icon whatOnYourMind__icon--video">[Video Icon]</span>
          <span>Live video</span>
        </div>
        <div className="whatOnYourMind__option">
          {/* <FaPhotoVideo className="whatOnYourMind__icon whatOnYourMind__icon--photo" /> */}
          <span className="whatOnYourMind__icon whatOnYourMind__icon--photo">[Photo Icon]</span>
          <span>Photo/video</span>
        </div>
        <div className="whatOnYourMind__option">
          {/* <FaSmile className="whatOnYourMind__icon whatOnYourMind__icon--feeling" /> */}
          <span className="whatOnYourMind__icon whatOnYourMind__icon--feeling">[Feeling Icon]</span>
          <span>Feeling/activity</span>
        </div>
      </div>
    </div>
  );
}

export default WhatOnYourMind;