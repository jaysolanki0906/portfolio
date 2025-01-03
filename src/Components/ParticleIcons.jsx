import React, { useEffect } from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import './particle.css';

const ParticleIcons = () => {
  useEffect(() => {
    const icons = document.querySelectorAll('.floating-icon');
    const iconSize = 70; // Adjusted icon size for collision detection

    const isOverlapping = (x1, y1, x2, y2) => {
      return Math.abs(x1 - x2) < iconSize && Math.abs(y1 - y2) < iconSize;
    };

    const placeIcon = (icon) => {
      let randomX, randomY;
      let attempts = 0;

      do {
        randomX = Math.random() * (window.innerWidth - iconSize);
        randomY = Math.random() * (window.innerHeight - iconSize);
        attempts++;
      } while (
        Array.from(icons).some((otherIcon) => {
          if (otherIcon === icon) return false; // Skip itself
          const rect = otherIcon.getBoundingClientRect();
          return isOverlapping(randomX, randomY, rect.left, rect.top);
        }) && attempts < 100 // Limit attempts to avoid infinite loops
      );

      // Ensure icons stay within screen boundaries
      icon.style.left = `${Math.max(0, Math.min(randomX, window.innerWidth - iconSize))}px`;
      icon.style.top = `${Math.max(0, Math.min(randomY, window.innerHeight - iconSize))}px`;
    };

    icons.forEach((icon) => placeIcon(icon));

    const handleResize = () => {
      icons.forEach((icon) => placeIcon(icon));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const icons = document.querySelectorAll('.floating-icon');
      const randomFadeIcons = new Set();

      while (randomFadeIcons.size < 3 && randomFadeIcons.size < icons.length) {
        randomFadeIcons.add(Math.floor(Math.random() * icons.length));
      }

      icons.forEach((icon, index) => {
        if (randomFadeIcons.has(index)) {
          icon.classList.add('fading-icon');
          icon.classList.remove('visible-icon');
        } else {
          icon.classList.remove('fading-icon');
          icon.classList.add('visible-icon');
        }
      });
    }, 5000); // Change every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh', width: '100vw' }}>
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: { value: 8, density: { enable: true, value_area: 700 } },
            line_linked: { enable: false },
            move: { speed: 1, out_mode: 'out' },
            shape: {
              type: ['image', 'circle'],
              image: [
                { src: '/R.png', height: 20, width: 23 },
                { src: '/R.png', height: 20, width: 20 },
                { src: '/R.png', height: 20, width: 20 },
              ],
            },
            color: { value: '#CCC' },
            size: {
              value: 30,
              random: false,
              anim: { enable: true, speed: 4, size_min: 10, sync: false },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="animation-container">
        <img src={require('./images/R.png')} alt="React" className="floating-icon visible-icon" />
        <img src={require('./images/html.jpg')} alt="HTML5" className="floating-icon visible-icon" />
        <img src={require('./images/css.png')} alt="CSS3" className="floating-icon visible-icon" />
        <img src={require('./images/Aws.png')} alt="AWS" className="floating-icon visible-icon" />
        <img src={require('./images/c.png')} alt="C" className="floating-icon visible-icon" style={{ width: '3%' }} />
        <img src={require('./images/CPP.png')} alt="C++" className="floating-icon visible-icon" style={{ width: '5%' }} />
        <img src={require('./images/github.png')} alt="GitHub" className="floating-icon visible-icon" />
        <img src={require('./images/java.png')} alt="Java" className="floating-icon visible-icon" />
        <img src={require('./images/JavaScript.png')} alt="JavaScript" className="floating-icon visible-icon" style={{ width: '8%' }} />
        <img src={require('./images/MongoDB.png')} alt="MongoDB" className="floating-icon visible-icon" />
        <img src={require('./images/phpMyAdmin.png')} alt="phpMyAdmin" className="floating-icon visible-icon" />
        <img src={require('./images/Ubuntu.png')} alt="Ubuntu" className="floating-icon visible-icon" />
        <img src={require('./images/tf.png')} alt="TensorFlow" className="floating-icon visible-icon" />
      </div>
    </div>
  );
};

export default ParticleIcons;
