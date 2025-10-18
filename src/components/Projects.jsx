import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getProjectImage } from '../constants/images';


const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedProjects, setExpandedProjects] = useState({});
  const [titleRef, titleVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();

  useEffect(() => {
    const fallbackProjects = [
      {
        id: 1,
        title: 'AI Summarizer',
        description: 'An AI-powered application that helps students generate comprehensive study materials',
        category: 'web',
        technologies: ['React', 'Node.js', 'AI'],
        codeLink: 'https://github.com/suresh1319/ai_summarizer',
        stars: 5,
        forks: 2
      },
      {
        id: 2,
        title: 'Pure Care Fitness',
        description: 'A full-stack fitness management web application',
        category: 'web',
        technologies: ['Node.js', 'MongoDB'],
        codeLink: 'https://github.com/suresh1319/PureCare-Fitness',
        stars: 3,
        forks: 1
      }
    ];

    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/suresh1319/repos?sort=stars&per_page=50');
        
        if (!response.ok) {
          throw new Error('GitHub API request failed');
        }
        
        const repos = await response.json();
        
        if (repos.length === 0) {
          setProjects(fallbackProjects);
          return;
        }
        
        const formattedProjects = repos
          .filter(repo => repo.stargazers_count >= 1)
          .map((repo, index) => ({
            id: index + 1,
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            description: repo.description || 'No description available',
            category: repo.language === 'JavaScript' || repo.language === 'TypeScript' ? 'web' : 'app',
            technologies: [repo.language].filter(Boolean),
            codeLink: repo.html_url,
            demoLink: repo.homepage || null,
            stars: repo.stargazers_count || 0,
            forks: repo.forks_count || 0,
            isForked: repo.fork,
            image: getProjectImage(repo.name)
          }));
        
        setProjects(formattedProjects);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  const toggleDescription = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
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

        {loading ? (
          <div className="loading">Loading projects...</div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card card-hover">
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-placeholder" style={{display: 'none'}}>
                    {project.title.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title} {project.isForked && <span className="fork-label">Contributed</span>}</h3>
                  <p>
                    {expandedProjects[project.id] ? project.description : truncateText(project.description)}
                    {project.description.length > 100 && (
                      <span 
                        className="read-more" 
                        onClick={() => toggleDescription(project.id)}
                      >
                        {expandedProjects[project.id] ? ' Read less' : ' Read more'}
                      </span>
                    )}
                  </p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-stats">
                    <span>⭐ {project.stars}</span>
                    <span>🍴 {project.forks}</span>
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
        )}
      </div>
    </section>
  );
};

export default Projects;
