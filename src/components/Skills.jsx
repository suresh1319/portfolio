import React from 'react';
import '../styles/Skills.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();

  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', icon: FaPython },
        { name: 'Java', icon: FaJava },
        { name: 'JavaScript', icon: FaJs },
        { name: 'SQL', icon: FaDatabase },
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', icon: FaHtml5 },
        { name: 'CSS', icon: FaCss3Alt },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'React', icon: FaReact },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express.js', icon: SiExpress },
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Firebase', icon: SiFirebase },
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: FaGithub },
        { name: 'VS Code', icon: VscCode },
        { name: 'Python IDE', icon: FaPython },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 ref={titleRef} className={`section-title scroll-animate ${titleVisible ? 'visible' : ''}`}>My Skills</h2>
        <p className="section-description">
          Here are some of the technologies and tools I work with
        </p>

        <div ref={skillsRef} className={`skills-grid scroll-animate ${skillsVisible ? 'visible' : ''}`}>
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-icon">
                      <skill.icon />
                    </span>
                    <span className="skill-name">{skill.name}</span>
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
