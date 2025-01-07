import React from 'react';
import './Certifications.css'; // CSS for styling

function Certifications() {
  return (
    <div className="container">
      <h1 className='headingcerti'>My Certificates</h1>
      <h2 className='h2cerri'>Showcasing My Achievements and Skills, One Certificate at a Time!</h2>
      <div className='abcxyz'>Software Engineer Certificate from HackerRank</div>
      <div className="certificate-section">
        <div className="box">
          <b>
            <img
              src={require('./images/software_engineer.jpg')}
              alt="Software Engineer Certificate"
            />
            <p>Software Engineer Intern</p>
          </b>
        </div>
      </div>
      <div className='abcxyz'>SQL Advanced Certification from HackerRank</div>

      <div className="certificate-section">
        <div className="box">
          <b>
            <img
              src={require('./images/sql.jpg')}
              alt="SQL Certificate"
            />
            <p>SQL Advanced Certification</p>
          </b>
        </div>
      </div>

      <div className='abcxyz'>Problem Solving Certificate from HackerRank </div>
      <div className="certificate-section">
        <div className="box">
          <b>
            <img
              src={require('./images/problem_solving.jpg')}
              alt="Problem Solving Certificate"
            />
            <p>Problem Solving Certificate</p>
          </b>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
