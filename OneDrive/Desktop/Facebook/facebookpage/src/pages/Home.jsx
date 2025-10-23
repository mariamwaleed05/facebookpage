import React from 'react';
import './Home.css'; 
import Nav from '../components/Nav'; 
import FriendRequestCard from '../components/FriendRequestCard';
import WatchNavItem from '../components/WatchNavItem';
import StoryCard from '../components/StoryCard';
import AdCard from '../components/AdCard';
import TrendingNewsCard from '../components/TrendingNewsCard';
import WhatOnYourMind from '../components/WhatOnYourMind';
import SidebarGroup from '../components/SidebarGroup';
import PostCard from '../components/PostCard';
import MainContent from '../components/MainContent';


function Home() {
  return (
    <div className="home"> 
      <Nav /> 
      <div className="home__body"> 
        <div className="home__sidebarLeft">
          <div className="home__sidebarSection"> 
         
            <WatchNavItem text="Watch" />
            <WatchNavItem text="Videos" />
            <WatchNavItem text="Live" />
          </div>
          <div className="home__sidebarSection">
            <h4>Title</h4>
    
            <SidebarGroup name="UI / UX Designers & Developers" />
                      <SidebarGroup name="UI / UX Designers & Developers" />
            <SidebarGroup name="UI / UX Designers & Developers" />
            <SidebarGroup name="UI / UX Designers & Developers" />
            <SidebarGroup name="UI / UX Designers & Developers" />
            <SidebarGroup name="Frontend Dev Community" />
          </div>
        </div>

        <div className="home__feed"> 
          <div className="home__stories"> 
         
            <StoryCard name="Islam Ali" />
            <StoryCard name="User Two" />
            <StoryCard name="User Three" />
                        <StoryCard name="User Three" />
            <StoryCard name="User Three" />

          </div>
          <MainContent />
        </div>

        <div className="home__sidebarRight"> 
          <div className="home__sidebarSection"> 
            <h4>Sponsored</h4>
            <FriendRequestCard name="Person A" />
            <AdCard name="Guy Hawkins" time="4H" />
            <AdCard name="Bessie Cooper" time="6H" />
          </div>
          <div className="home__sidebarSection">
            <h4>Trending News</h4>
            <TrendingNewsCard title="Twitch apologises as streamers" description="See more" />
            <TrendingNewsCard title="Another big tech headline" description="Read here" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 