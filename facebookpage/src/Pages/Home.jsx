import React from 'react';
import './Home.css'
import Feed from './../components/Feed.jsx';
import CustomNav from './../components/CustomNav.jsx';
import Sidebar from './../components/Sidebar.jsx';

const Home = () => {
    return ( 
        <>
        <CustomNav/>
        <div className='big'>
           <Feed/>
          <Sidebar/>
        </div>
        </>
     );
}
 
export default Home;