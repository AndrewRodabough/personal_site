import React from 'react';
import '../../styles.css';
import './projects.css';
import ProjectList from './projectlist';

const projects = [
  {
    title: "Assignment Scheduler",
    description: "Advanced Task Scheduler. This project involved using HTML, CSS, and JavaScript to create a responsive web application.",
    image: "./public/assignment.png",
    links: [
      { label: "GitHub", url: "https://startup.assignmentscheduler.com/" },
      { label: "Live Site", url: "https://www.startup.assignmentscheduler.com" }
    ]
  },
  {
    title: "Portfolio Site",
    description: "This website you are viewing. This site was made using Vite, React, and TypeScript",
    image: "./public/portfolio.png",
    links: [
      { label: "GitHub", url: "https://github.com/AndrewRodabough/personal_site" }
    ]
  },
  {
    title: "Project 3",
    description: "Description of project 3. This project involved using HTML, CSS, and JavaScript to create a responsive web application.",
  }
];

const Projects: React.FC = () => {
  return (
    <section className="temp projects" id="projects">
      <h1>Projects</h1>
      <ul className="projects-container">
        <ProjectList projects={projects} />
      </ul>
    </section>
  );
};

export default Projects;