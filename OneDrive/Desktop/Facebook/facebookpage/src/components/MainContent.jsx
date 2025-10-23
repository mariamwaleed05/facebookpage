import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./MainContent.css";
import WhatOnYourMind from "./WhatOnYourMind";
import PostCard from "./PostCard";

function MainContent() {
  return (
    <div className="mainContent">
      {/* "What's on your mind?" input area */}
      <WhatOnYourMind userName="Jenny" />

      {/* Example Post 1 */}
      <PostCard
        userName="Albert Flores"
        userProfilePic="https://randomuser.me/api/portraits/men/21.jpg"
        timestamp="1h"
        text="Enjoying the stunning views at Moraine Lake today! Nature's beauty truly is unparalleled. 🏔️ #NatureLover #MoraineLake #Travel"
        postImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      />

      {/* Example Post 2 */}
      <PostCard
        userName="Jane Doe"
        userProfilePic="https://randomuser.me/api/portraits/women/32.jpg"
        timestamp="3h"
        text="Just wrapped up my latest React project! So much learning and problem-solving. Feeling accomplished! ✨ #ReactDev #CodingLife"
        postImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
      />

      {/* Example Post 3 */}
      <PostCard
        userName="John Smith"
        userProfilePic="https://randomuser.me/api/portraits/men/45.jpg"
        timestamp="5h"
        text="A productive morning coding session calls for a strong coffee. What's your go-to coding beverage? ☕ #CoffeeBreak #Developer"
        postImage="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
      />
    </div>
  );
}

export default MainContent;
