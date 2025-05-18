import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 75 },
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'React', level: 75 },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 75 },
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'GitHub', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Python IDE', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title" data-aos="fade-down">My Skills</h2>
        <p className="section-description" data-aos="fade-up">
          Here are some of the technologies and tools I work with
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category" data-aos="fade-up">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
