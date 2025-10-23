import React from 'react';
import './Home.css'; // Updated CSS import to Home.css
import Nav from '../components/Nav'; // Go up one level (from 'pages' to 'src'), then into 'components'
import FriendRequestCard from '../components/FriendRequestCard';
import WatchNavItem from '../components/WatchNavItem';
import StoryCard from '../components/StoryCard';
import AdCard from '../components/AdCard';
import TrendingNewsCard from '../components/TrendingNewsCard';
import WhatOnYourMind from '../components/WhatOnYourMind';
import SidebarGroup from '../components/SidebarGroup';
import PostCard from '../components/PostCard';
import MainContent from '../components/MainContent';

// Renamed from App to Home
function Home() {
  return (
    <div className="home"> {/* Updated root className */}
      <Nav /> {/* Used the new Nav component */}
      <div className="home__body"> {/* Updated className */}
        <div className="home__sidebarLeft"> {/* Updated className */}
          <div className="home__sidebarSection"> {/* Updated className */}
            {/* Example of a few WatchNavItems */}
            <WatchNavItem text="Watch" />
            <WatchNavItem text="Videos" />
            <WatchNavItem text="Live" />
          </div>
          <div className="home__sidebarSection">
            <h4>Title</h4>
            {/* Example of a few SidebarGroups */}
            <SidebarGroup name="UI / UX Designers & Developers" />
            <SidebarGroup name="Frontend Dev Community" />
          </div>
        </div>

        <div className="home__feed"> {/* Updated className */}
          <div className="home__stories"> {/* Updated className */}
            {/* Example of StoryCards */}
            <StoryCard name="Islam Ali" />
            <StoryCard name="User Two" />
            <StoryCard name="User Three" />
          </div>
          <MainContent />
        </div>

        <div className="home__sidebarRight"> {/* Updated className */}
          <div className="home__sidebarSection"> {/* Updated className */}
            <h4>Sponsored</h4>
            {/* Example of FriendRequestCard or similar ads/suggestions */}
            <FriendRequestCard name="Person A" />
            {/* Example of AdCards, though the design shows different types */}
            <AdCard name="Guy Hawkins" time="4H" />
            <AdCard name="Bessie Cooper" time="6H" />
          </div>
          <div className="home__sidebarSection">
            <h4>Trending News</h4>
            {/* Example of TrendingNewsCards */}
            <TrendingNewsCard title="Twitch apologises as streamers" description="See more" />
            <TrendingNewsCard title="Another big tech headline" description="Read here" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; // Export as Home