import React from 'react';
import './MainContent.css'; // Link to its CSS file
import WhatOnYourMind from './WhatOnYourMind'; // Child component
import PostCard from './PostCard'; // Child component

function MainContent() {
  return (
    <div className="mainContent">
      {/* The "What's on your mind?" section */}
      <WhatOnYourMind userName="Jenny" />

      {/* Example Posts - you would typically fetch these from an API */}
      <PostCard
        userName="Albert Flores"
        userProfilePic="https://via.placeholder.com/50/FF4500/fff?text=AF" // Example profile pic
        timestamp="1h"
        text="Enjoying the stunning views at Moraine Lake today! Nature's beauty truly is unparalleled. 🏔️ #NatureLover #MoraineLake #Travel"
        postImage="https://via.placeholder.com/600x400/87CEEB/fff?text=Moraine+Lake+View" // Example post image
      />
      <PostCard
        userName="Jane Doe"
        userProfilePic="https://via.placeholder.com/50/6A5ACD/fff?text=JD"
        timestamp="3h"
        text="Just wrapped up my latest React project! So much learning and problem-solving. Feeling accomplished! ✨ #ReactDev #CodingLife"
        postImage="https://via.placeholder.com/600x400/90EE90/fff?text=React+Project"
      />
      <PostCard
        userName="John Smith"
        userProfilePic="https://via.placeholder.com/50/1E90FF/fff?text=JS"
        timestamp="5h"
        text="A productive morning coding session calls for a strong coffee. What's your go-to coding beverage? ☕ #CoffeeBreak #Developer"
        postImage="https://via.placeholder.com/600x400/D3D3D3/000?text=Coffee+and+Code"
      />
      {/* You can add more PostCard components here as needed */}
    </div>
  );
}

export default MainContent;