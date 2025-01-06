import React from 'react';
import './Scrollable.css';

const Scrollable = ({ children, maxHeight = '400px' }) => {
  return (
    <div className="scrollable" style={{ maxHeight }}>
      {children}
    </div>
  );
};

export default Scrollable;
