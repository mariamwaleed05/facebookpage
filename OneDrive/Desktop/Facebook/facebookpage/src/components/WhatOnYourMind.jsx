import React from "react";
import "./WhatOnYourMind.css";
import { FaVideo, FaPhotoVideo, FaSmile } from "react-icons/fa";

function WhatOnYourMind({
  userName = "Jenny",
  userProfilePic = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
}) {
  return (
    <div className="whatOnYourMind">
      <div className="whatOnYourMind__top">
        <img
          src={userProfilePic}
          alt={userName}
          className="whatOnYourMind__avatar"
        />
        <input
          type="text"
          placeholder={`What's on your mind, ${userName}?`}
          className="whatOnYourMind__input"
        />
      </div>

      <div className="whatOnYourMind__divider" />

      <div className="whatOnYourMind__bottom">
        <div className="whatOnYourMind__option">
          <FaVideo className="whatOnYourMind__icon whatOnYourMind__icon--video" />
          <span>Live video</span>
        </div>

        <div className="whatOnYourMind__option">
          <FaPhotoVideo className="whatOnYourMind__icon whatOnYourMind__icon--photo" />
          <span>Photo/video</span>
        </div>

        <div className="whatOnYourMind__option">
          <FaSmile className="whatOnYourMind__icon whatOnYourMind__icon--feeling" />
          <span>Feeling/activity</span>
        </div>
      </div>
    </div>
  );
}

export default WhatOnYourMind;
