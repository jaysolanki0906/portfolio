import React from 'react';
import './ImageAligned.css';

function ImageTiedWithRope() {
  return (
    <div className="container">
      <div className="rope"></div>
      <img
        src={require('./images/jay.jpg')}
        alt="Tied Image"
        className="tied-image"
      />
    </div>
  );
}

export default ImageTiedWithRope;
