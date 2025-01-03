import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Splash from './Components/Splash';
import Home from './Components/Home'; // Create a Home component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Handle unknown routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
