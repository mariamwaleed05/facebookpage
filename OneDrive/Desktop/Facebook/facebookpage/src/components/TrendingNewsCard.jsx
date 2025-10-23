import React from "react";
import "./TrendingNewsCard.css";

function TrendingNewsCard({ title, description, imageUrl }) {
  return (
    <div className="trendingNewsCard">
      <img
        src={
          imageUrl ||
          "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop"
        }
        alt="News thumbnail"
        className="trendingNewsCard__thumbnail"
      />
      <div className="trendingNewsCard__content">
        <p className="trendingNewsCard__category">Trending</p>
        <h4 className="trendingNewsCard__title">{title}</h4>
        <p className="trendingNewsCard__description">{description}</p>
      </div>
    </div>
  );
}

export default TrendingNewsCard;
