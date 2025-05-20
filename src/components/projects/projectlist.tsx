import React from 'react';
import '../../styles.css';
import './projects.css';

type Project = {
    title: string;
    description: string;
    image?: string;
    links?: { label: string; url: string }[]; // Add links property
};

type ProjectsProps = {
    projects: Project[];
};

const ProjectList: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <>
            {projects.map((project, idx) => (
                <li className="project" key={idx}>
                    <div className="project-bg"></div>
                    <div className="project-content">
                        <div className="project-text">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            {project.links && project.links.length > 0 && (
                                <div className="project-links" style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                    {project.links.map((link, linkIdx) => (
                                        <a 
                                            key={linkIdx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link btn"
                                        >
                                                {link.label}
                                            
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="project-image">
                            {project.image ? (
                                <img className="project-image" src={project.image} alt={`${project.title} Screenshot`} />
                            ) : (
                                <div className="project-image" style={{ background: '#6a778a', width: '100%', height: '100%' }}></div>
                            )}
                        </div>
                    </div>
                </li>
            ))}
        </>
    );
};

export default ProjectList;