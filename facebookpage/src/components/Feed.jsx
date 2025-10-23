import React from "react";
import "./Feed.css";


const Feed = () => {
  return (
    <div className="feed">
   
      <div className="story__reel">
        <div className="story">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop"
            alt=""
          />
          <div className="story__avatar">
   
          </div>
          <h4 className="story__name">Islam Ali</h4>
        </div>

        <div className="story">
          <img
            src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&h=400&fit=crop"
            alt=""
          />
          <div className="story__avatar">
          
          </div>
          <h4 className="story__name">Islam Ali</h4>
        </div>

        <div className="story">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=400&fit=crop"
            alt=""
          />
          <div className="story__avatar">
        
          </div>
          <h4 className="story__name">Islam Ali</h4>
        </div>

        <div className="story">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop"
            alt=""
          />
          <div className="story__avatar">
          </div>
          <h4 className="story__name">Islam Ali</h4>
        </div>
      </div>

      {/* Message Sender */}
      <div className="message__sender">
        <div className="message__sender__top">
          <input placeholder="What's on your mind, Jenny?" />
        </div>
        <div className="message__sender__bottom">
          <div className="message__sender__option">
            <span className="icon" style={{ color: "#f3425f" }}>
              🎥
            </span>
            <span>Live video</span>
          </div>
          <div className="message__sender__option">
            <span className="icon" style={{ color: "#45bd62" }}>
              📷
            </span>
            <span>Photo/Video</span>
          </div>
          <div className="message__sender__option">
            <span className="icon" style={{ color: "#f7b928" }}>
              😊
            </span>
            <span>Feeling/activity</span>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="post">
        <div className="post__top">
          <div className="post__avatar">
          </div>
          <div className="post__info">
            <h3>Albert Flores</h3>
            <p>Just now</p>
          </div>
          <div className="post__options">⋯</div>
        </div>
        <div className="post__image">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
            alt=""
          />
        </div>
      </div>

      <div className="post">
        <div className="post__top">
          <div className="post__avatar">
          </div>
          <div className="post__info">
            <h3>Albert Flores</h3>
            <p>2 hours ago</p>
          </div>
          <div className="post__options">⋯</div>
        </div>
        <div className="post__image">
          <img
            src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=400&fit=crop"
            alt=""
          />
        </div>
      </div>

      <div className="post">
        <div className="post__top">
          <div className="post__avatar">
          </div>
          <div className="post__info">
            <h3>Albert Flores</h3>
            <p>5 hours ago</p>
          </div>
          <div className="post__options">⋯</div>
        </div>
        <div className="post__image">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;