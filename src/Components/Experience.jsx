import React from 'react';
import './Experience.scss';

function Experience() {
  return (
    <div>
      <script
        src="https://kit.fontawesome.com/fc596df623.js"
        crossorigin="anonymous"
      ></script>

      <h2>Internship Exprience</h2>
      <h1>Entering the real world and tackling challenging projects.</h1>

      <div className="timeline">
        <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
          <div className="timeline__event__icon"></div>
          <div className="timeline__event__date">Dec-Apr 2021-2022</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Cretive Werk Designs</div>
            <div className="timeline__event__description">
              <div>Developed a web application during an internship as a Full Stack Web Developer, using the MVC architecture, PHP, CodeIgniter, and MySQL. Integrated Google Maps API and Google Auth for features like user registration, login, car booking, tour packages, payments, invoices, FAQs, and reviews.</div>
            </div>
          </div>
        </div>

        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div className="timeline__event__icon"></div>
          <div className="timeline__event__date">Apr-Jul 2024</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Internship At ADS Vision</div>
            <div className="timeline__event__description">
              <div>During your internship as a Backend Engineer, you worked on core PHP, implemented PHP Mailer, and used Git for version control. You were part of a 4-member team that developed the "Wood Viz" project, which focused on billing and goods management. </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Experience;
