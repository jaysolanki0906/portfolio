import React from 'react';
// import ParticleIcons from './ParticleIcons';
import { BackgroundBeamsDemo } from './BackgroundBeamsDemo';
import './home.css'
import ImageAligned from './ImageAligned';

function Home() {
  return (
    <div className="home-container">
      <div className="background" style={{ margin: 0,padding: 0}}>
        <BackgroundBeamsDemo />
      </div>

      <div className="particles-container" style={{ margin: 0,padding: 0}}>
        {/* <ParticleIcons /> */}
      </div>

      <div className="content" style={{ color:'red'}}>
        <h1>Welcome to My Portfolio</h1>
        <p>Check out my projects below!</p>
        <ImageAligned/>
      </div>
    </div>
  );
}

export default Home;
