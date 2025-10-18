import React, { useState } from 'react';
import '../styles/Projects.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import imageGenerator from '../assets/images/projects/image-generator.png';
import pureCareFitness from '../assets/images/projects/purecarefitness.png';
import snapStudy from '../assets/images/projects/ai_summarizer.png';


const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [titleRef, titleVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: 'SnapStudy',
      description:
        'An AI-powered application that helps students generate comprehensive study materials from various sources. Upload documents, provide links, or input text to automatically generate notes, summaries, flashcards, quizzes, and more.',
      image: snapStudy,
      category: 'app',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Firebase', 'AI Integration'],
      codeLink: 'https://github.com/suresh1319/ai_summarizer',
    },
    {
      id: 2,
      title: 'Pure Care Fitness',
      description:
        'A full-stack fitness management web application that connects users with fitness trainers and local gyms. The platform provides real-time chat, user authentication, service listings, and reviews.',
      image: pureCareFitness,
      category: 'web',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt', 'EJS'],
      codeLink: 'https://github.com/suresh1319/PureCare-Fitness',
    },
    {
      id: 3,
      title: 'Image Generator',
      description:
        "A full-stack web application using the MERN stack that generates images via Stability AI's API. Enables users to create, share, search, and download AI-generated images.",
      image: imageGenerator,
      category: 'web',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Cloudinary'],
      codeLink: 'https://github.com/suresh1319/IMAGE_GENERATOR',
    },
    {
      id: 4,
      title: 'Todo App',
      description: 'A full-stack web application using the MERN stack that allows you to Add your Todo with their Priorities',
      category: 'web',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      demoLink: 'https://todo-frontend-5x6z.onrender.com',
      codeLink: 'https://github.com/suresh1319/Todo-Frontend',
    },
    {
      id: 5,
      title: 'Collab Code Editor',
      description: 'A full-stack web application using the MERN stack that allows you to do collaborative coding',
      category: 'web',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io'],
      codeLink: 'https://github.com/suresh1319/Collab-Code-Editor',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 ref={titleRef} className={`section-title scroll-animate ${titleVisible ? 'visible' : ''}`}>My Projects</h2>
        <p className="section-description">
          Here are some of the projects I've worked on
        </p>

        <div className="project-filters">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
            All
          </button>
          <button className={filter === 'web' ? 'active' : ''} onClick={() => setFilter('web')}>
            Web
          </button>
          <button className={filter === 'app' ? 'active' : ''} onClick={() => setFilter('app')}>
            App
          </button>
        </div>

        <div ref={projectsRef} className={`projects-grid scroll-animate ${projectsVisible ? 'visible' : ''}`}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card card-hover">
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <div className="image-placeholder">{project.title.charAt(0)}</div>
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
