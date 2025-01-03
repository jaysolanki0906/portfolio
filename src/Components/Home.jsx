import React from 'react';
import ParticleIcons from './ParticleIcons.jsx';
import { BackgroundBeamsDemo } from './BackgroundBeamsDemo';
import './home.css'
import ImageAligned from './ImageAligned';

function Home() {
  return (
    <div className="home-container">
      <div className="background" style={{ height: '105%', width: '105%' }}>
        <BackgroundBeamsDemo />
      </div>

      <div className="particles-container" style={{ zIndex:1,}} >
        <ParticleIcons />
      </div>

      <div className="content" style={{ color:'red'}}>
        <div style={{marginLeft:"-75%"}}>
        <ImageAligned />
        </div>
      </div>
    </div>
  );
}

export default Home;
