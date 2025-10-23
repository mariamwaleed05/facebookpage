import React from 'react';
import './PostCard.css';
import { FaThumbsUp, FaCommentAlt, FaShare, FaEllipsisH } from 'react-icons/fa'; // FontAwesome icons

function PostCard({ userName, userProfilePic, timestamp, text, postImage }) {
  return (
    <div className="postCard">
      <div className="postCard__header">
        <img
          src={userProfilePic || 'https://via.placeholder.com/50'}
          alt={userName}
          className="postCard__avatar"
        />
        <div className="postCard__info">
          <h3>{userName}</h3>
          <p>{timestamp || '2h'}</p>
        </div>
        <FaEllipsisH className="postCard__headerOptions" />
      </div>

      <div className="postCard__body">
        <p className="postCard__text">{text}</p>
        {postImage && (
          <img
            src={postImage}
            alt="Post content"
            className="postCard__image"
          />
        )}
      </div>

      <div className="postCard__footer">
        <div className="postCard__footerOption">
          <FaThumbsUp className="postCard__footerIcon" /> Like
        </div>
        <div className="postCard__footerOption">
          <FaCommentAlt className="postCard__footerIcon" /> Comment
        </div>
        <div className="postCard__footerOption">
          <FaShare className="postCard__footerIcon" /> Share
        </div>
      </div>
    </div>
  );
}

export default PostCard;
