import React from "react";
import "./StoryCard.css";

function StoryCard({ name, bgImage, profilePic }) {
  const defaultBg =
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop";
  const defaultProfile =
    "https://randomuser.me/api/portraits/women/68.jpg";

  return (
    <div
      className="storyCard"
      style={{
        backgroundImage: `url(${bgImage || defaultBg})`,
      }}
    >
      <img
        src={profilePic || defaultProfile}
        alt={name}
        className="storyCard__avatar"
      />
      <h4 className="storyCard__name">{name}</h4>
    </div>
  );
}

export default StoryCard;
