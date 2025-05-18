import React from 'react';
import '../styles/Education.css';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Graduation in Information Technology',
      institution: 'Malla Reddy Engineering College',
      location: 'Hyderabad, India',
      period: '2023 — Present',
      gpa: '9.38',
      icon: <FaUniversity className="education-icon" />
    },
    {
      id: 2,
      degree: 'UnderGraduation in MPC',
      institution: 'Sri Chaitanya Junior College',
      location: 'Khammam, India',
      period: '2019 — 2021',
      gpa: '9.74',
      icon: <FaGraduationCap className="education-icon" />
    },
    {
      id: 3,
      degree: 'High School',
      institution: 'Fathima High School',
      location: 'Mahabubabad, India',
      period: '2018 — 2019',
      gpa: '10',
      icon: <FaSchool className="education-icon" />
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="section-title" data-aos="fade-down">Education</h2>
        <p className="section-description" data-aos="fade-up">
          My academic journey and qualifications
        </p>

        <div className="education-timeline">
          {educationData.map((item) => (
            <div key={item.id} className="education-item" data-aos="fade-up">
              <div className="education-icon-container">
                {item.icon}
              </div>
              <div className="education-content">
                <h3 className="education-degree">{item.degree}</h3>
                <h4 className="education-institution">{item.institution} <span className="education-gpa">(GPA: {item.gpa})</span></h4>
                <p className="education-location">{item.location}</p>
                <p className="education-period">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
