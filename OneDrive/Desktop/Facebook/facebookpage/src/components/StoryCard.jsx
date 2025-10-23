import React from 'react';
import './StoryCard.css';

function StoryCard({ name, bgImage, profilePic }) {
  return (
    <div className="storyCard" style={{ backgroundImage: `url(${bgImage || 'https://via.placeholder.com/150x250/333/fff?text=Story'})` }}>
      <img src={profilePic || 'https://via.placeholder.com/30'} alt={name} className="storyCard__avatar" />
      <h4>{name}</h4>
    </div>
  );
}

export default StoryCard;