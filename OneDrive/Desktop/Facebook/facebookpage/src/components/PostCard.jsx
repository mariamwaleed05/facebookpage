import React from 'react';
import './PostCard.css';
// import { FaThumbsUp, FaCommentAlt, FaShare } from 'react-icons/fa'; // Example icons

function PostCard({ userName, userProfilePic, timestamp, text, postImage }) {
  return (
    <div className="postCard">
      <div className="postCard__header">
        <img src={userProfilePic || 'https://via.placeholder.com/50'} alt={userName} className="postCard__avatar" />
        <div className="postCard__info">
          <h3>{userName}</h3>
          <p>{timestamp || '2h'}</p> {/* Example: 2 hours ago */}
        </div>
        {/* Replace with actual ellipsis icon */}
        <span className="postCard__headerOptions">[Ellipsis Icon]</span>
      </div>

      <div className="postCard__body">
        <p className="postCard__text">{text}</p>
        <img src={postImage || 'https://via.placeholder.com/600x400'} alt="Post content" className="postCard__image" />
      </div>

      <div className="postCard__footer">
        <div className="postCard__footerOption">
          {/* <FaThumbsUp /> */}
          <span className="postCard__footerIcon">[Like Icon]</span> Like
        </div>
        <div className="postCard__footerOption">
          {/* <FaCommentAlt /> */}
          <span className="postCard__footerIcon">[Comment Icon]</span> Comment
        </div>
        <div className="postCard__footerOption">
          {/* <FaShare /> */}
          <span className="postCard__footerIcon">[Share Icon]</span> Share
        </div>
      </div>
    </div>
  );
}

export default PostCard;