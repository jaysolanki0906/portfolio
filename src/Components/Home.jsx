import React from 'react';
import ParticleIcons from './ParticleIcons.jsx';
import { BackgroundBeamsDemo } from './BackgroundBeamsDemo';
import './home.css';
import ImageAligned from './ImageAligned';
import Header from './Header.jsx';

function Home() {
  return (
    <div className="home-container">
      <div className="background" style={{ height: '105%', width: '105%' }}>
        <BackgroundBeamsDemo />
      </div>

      <div className="particles-container" style={{ zIndex: 1 }}>
        <ParticleIcons />
      </div>

      <div className="image-background">
        <ImageAligned />
      </div>
      <div className="text-content">
        <h1>Hello, This is Jay Solaki</h1>
      </div>
      <div>
        <Header/>
      </div>
    </div>
  );
}

export default Home;
