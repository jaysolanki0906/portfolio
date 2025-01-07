import React from 'react';
import './Scrollable.css';

const Scrollable = ({ children, maxHeight = '100px' }) => {
  return (
    <div className="scrollable" style={{ maxHeight,marginRight:'0px', }}>
      {children}
    </div>
  );
};

export default Scrollable;
