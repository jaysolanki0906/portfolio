import React from 'react';
import ParticleIcons from './ParticleIcons.jsx';
import { BackgroundBeamsDemo } from './BackgroundBeamsDemo';
import './home.css';
import ImageAligned from './ImageAligned';
import Header from './Header.jsx';

function Home() {
  function download()
  {
    const pdfUrl = "Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "./Resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }
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
        <i className="slim-text" style={{fontWeight:1}}>Hello Everyone!</i>
        <div class="name-container">
          <span class="animation name">Jay Solanki</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="name">Here...</span>
      </div>
      </div>
      <div className='intorcontent'>
      Hello, I’m Jay Solanki, an MCA student at Nirma University with expertise in Java, Python, ReactJS, and PHP. I have experience in web development, machine learning projects, and internships, complemented by certifications in cloud computing.
      </div>
      <div >
        
        <button className='DownloadResumeButton' onClick={download}>
          Download <span className='animation'>Resume</span>
          </button>
      </div>
      <div>
        <Header/>
      </div>
    </div>
  );
}

export default Home;
