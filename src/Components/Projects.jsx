import React from 'react';
import './Project.css';

function Projects() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Title Section */}
            <h1 className="project-title">My Projects</h1>
            <div className="project-tagline">Explore the web development, algorithms, and more! Each project represents a unique concept and implementation.</div>
            
            <div className="main-timeline">
              <div className="timeline">
                <button className="timeline-content">
                  <div className="timeline-icon">
                    <i className="fa fa-globe"></i>
                  </div>
                  <h3 className="title">Shopping Website</h3>
                  <div className="description">
                    I have developed a shopping website using PHP where the admin has full control over product management. The admin can add products and include descriptions for each item. MD5 encryption is used to store data securely in the database, and the website is designed to be user-friendly.<br/>
                    GitHub Link: <a href="https://github.com/jaysolanki0906/shoppingsite" target="_blank" rel="noopener noreferrer">Shopping Website</a>
                  </div>
                  <div className="timeline-year">2020</div>
                </button>
              </div>
              <div className="timeline">
                <button className="timeline-content">
                  <div className="timeline-icon">
                    <i className="fa fa-rocket"></i>
                  </div>
                  <h3 className="title">School Quiz</h3>
                  <div className="description">
                    I have developed a school quiz website similar to Google Forms using JSP, HTML, and CSS. Teachers can add quiz schedules and questions, and students receive automatic results, which are stored in the database. The website is designed to be user-friendly, and teachers can also add students easily.<br/>
                    GitHub Link: <a href="https://github.com/jaysolanki0906/school_quiz" target="_blank" rel="noopener noreferrer">School Quiz</a>
                  </div>
                  <div className="timeline-year">2020</div>
                </button>
              </div>
              <div className="timeline">
                <button className="timeline-content">
                  <div className="timeline-icon">
                    <i className="fa fa-calculator"></i>
                  </div>
                  <h3 className="title">Scientific Calculator</h3>
                  <div className="description">
                    I have developed a scientific calculator in C that performs all operations, including converting radians to degrees. It includes various functionalities, such as square root and trigonometric functions.<br/>
                    GitHub Link: <a href="https://github.com/jaysolanki0906/scientific_calculator" target="_blank" rel="noopener noreferrer">Scientific Calculator</a>
                  </div>
                  <div className="timeline-year">2021</div>
                </button>
              </div>
              <div className="timeline">
                <button className="timeline-content">
                  <div className="timeline-icon">
                    <i className="fa fa-cogs"></i>
                  </div>
                  <h3 className="title">Banker's Algorithm</h3>
                  <div className="description">
                    I have implemented the Banker's Algorithm in C to handle resource allocation and avoid deadlock in operating systems.<br/>
                    GitHub Link: <a href="https://github.com/jaysolanki0906/Bankers_algo" target="_blank" rel="noopener noreferrer">Banker's Algorithm</a>
                  </div>
                  <div className="timeline-year">2023</div>
                </button>
              </div>
              <div className="timeline">
                <button className="timeline-content">
                  <div className="timeline-icon">
                    <i className="fa fa-search"></i>
                  </div>
                  <h3 className="title">Sorting & Searching</h3>
                  <div className="description">
                    I have developed a sorting and searching project in which various algorithms such as Radix Sort, Bubble Sort, and Quick Sort are implemented.<br/>
                    GitHub Link: <a href="https://jaysolanki0906.github.io/sorting-searching/" target="_blank" rel="noopener noreferrer">Sorting & Searching</a>
                  </div>
                  <div className="timeline-year">2023</div>
                </button>
              </div>
              <div className="timeline">
                <button className="timeline-content">
                  <div className="timeline-icon">
                    <i className="fa fa-car"></i>
                  </div>
                  <h3 className="title">Car Rental System</h3>
                  <div className="description">
                    I have developed a car rental system in which customers can book and rent cars, and admins can manage the rental details.<br/>
                    GitHub Link: <a href="https://github.com/jaysolanki0906/carrentalsystem" target="_blank" rel="noopener noreferrer">Car Rental System</a>
                  </div>
                  <div className="timeline-year">2022</div>
                </button>
              </div>
              <div className="timeline">
                <button className="timeline-content">
                  <div className="timeline-icon">
                    <i className="fa fa-tree"></i>
                  </div>
                  <h3 className="title">Wood Viz</h3>
                  <div className="description">
                    A project for visualizing wood types, their characteristics, and various features using a graphical interface.<br/>
                    GitHub Link: <a href="https://github.com/DhavalMaruDSM/WoodViz" target="_blank" rel="noopener noreferrer">Wood Viz</a>
                  </div>
                  <div className="timeline-year">2024</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
