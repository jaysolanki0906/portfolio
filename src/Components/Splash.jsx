import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splashscr.css';

function Splash() {
  const [text, setText] = useState('');
  const txt = 'Poortfolio Website'; // Corrected typo
  const speed = 100;

  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to home after 6 seconds
    const timer = setTimeout(() => {
      navigate('/home');
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    // Typing animation
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < txt.length) {
        setText((prev) => prev + txt.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Ensure visibility of text container after fade-in animation
    const textContainer = document.querySelector('.text-container');
    textContainer.style.opacity = '1';
  }, []);

  return (
    <div className="splash-screen">
      <img src={require('./favicon.png')} alt="Not Found" className="imagehwl" />
      <div className="text-container">
        <span className="text-jay">Jay</span>
        <span className="text-solanki">Solanki</span>
      </div>
      <div id="demo">{text}</div>
    </div>
  );
}

export default Splash;
