import React from 'react';
import './particle.css';

const ParticleIcons = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh', width: '100vw' }}>
      <div className="animation-container">
        <img src={require('./images/R.png')} alt="React" className="floating-icon" style={{ top: '20%', left: '30%' }} />
        <img src={require('./images/html.jpg')} alt="HTML5" className="floating-icon" style={{ top: '18%', left: '40%' }} />
        <img src={require('./images/css.png')} alt="CSS3" className="floating-icon" style={{ top: '20%', left: '60%' }} />
        <img src={require('./images/Aws.png')} alt="AWS" className="floating-icon" style={{ top: '25%', left: '80%' }} />
        <img src={require('./images/c.png')} alt="C" className="floating-icon" style={{ top: '30%', left: '30%' }} />
        <img src={require('./images/CPP.png')} alt="C++" className="floating-icon" style={{ top: '35%', left: '50%',width:'8%',height:'10%' }} />
        <img src={require('./images/github.png')} alt="GitHub" className="floating-icon" style={{ top: '40%', left: '70%' }} />
        <img src={require('./images/java.png')} alt="Java" className="floating-icon" style={{ top: '50%', left: '90%' }} />
        <img src={require('./images/JavaScript.png')} alt="JavaScript" className="floating-icon" style={{ top: '55%', left: '30%',width:'8%' }} />
        <img src={require('./images/MongoDB.png')} alt="MongoDB" className="floating-icon" style={{ top: '60%', left: '50%' }} />
        <img src={require('./images/phpMyAdmin.png')} alt="phpMyAdmin" className="floating-icon" style={{ top: '65%', left: '70%' }} />
        <img src={require('./images/Ubuntu.png')} alt="Ubuntu" className="floating-icon" style={{ top: '75%', left: '20%' }} />
        <img src={require('./images/tf.png')} alt="TensorFlow" className="floating-icon" style={{ top: '85%', left: '40%' }} />
      </div>
    </div>
  );
};

export default ParticleIcons;
