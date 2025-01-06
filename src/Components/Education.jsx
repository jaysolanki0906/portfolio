import React from 'react';
import './education.css';
// import Header from './Header.jsx';

function Education() {
  return (
    <div>
      <h1>Academic Background</h1>
      <div className="eductioncontent">Identify the stages of my academic journey.</div>
      <ul>
        <li style={{ '--accent-color': '#41516C' }}>
          <div className="date">2017</div>
          <div className="title">S.S.C.</div>
          <div className="descr">
            I Have score 57.87 percentage in my 10th.I have completd it from Saint Mary's School Upleta.
          </div>
        </li>
        <li style={{ '--accent-color': '#FBCA3E' }}>
          <div className="date">2019</div>
          <div className="title">H.S.C.</div>
          <div className="descr">
            I have score 55.55 percentage in my 12th.I have completd it from Dholakiya School Rajkot.
          </div>
        </li>
        <li style={{ '--accent-color': '#E24A68' }}>
          <div className="date">2022</div>
          <div className="title">Bachlores</div>
          <div className="descr">
            I have 86 percentage in my Bachlore.I have completed it from Dharamsinh Desai University Nadiad.  
          </div>
        </li>
        <li style={{ '--accent-color': '#1B5F8C' }}>
          <div className="date">2025(PERSUING)</div>
          <div className="title">Masters</div>
          <div className="descr">
          I have 8.43 CGPA in my Masters in 3rd sem.I have completed it from Nirma University Ahmedabad.
          </div>
        </li>
      </ul>
      <div className="credits">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm"
        >
        </a>
      </div>
    </div>
  );
}

export default Education;
