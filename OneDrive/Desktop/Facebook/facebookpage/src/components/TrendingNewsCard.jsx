import React from 'react';
import './TrendingNewsCard.css';

function TrendingNewsCard({ title, description, imageUrl }) {
  return (
    <div className="trendingNewsCard">
      <img src={imageUrl || 'https://via.placeholder.com/50'} alt="News thumbnail" className="trendingNewsCard__thumbnail" />
      <div className="trendingNewsCard__content">
        <p className="trendingNewsCard__category">Title</p> {/* This "Title" in the design is likely a fixed label for the section or article category */}
        <h4>{title}</h4>
        <p className="trendingNewsCard__description">{description}</p>
      </div>
    </div>
  );
}

export default TrendingNewsCard;