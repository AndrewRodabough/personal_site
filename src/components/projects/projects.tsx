import '../../styles.css';
import './projects.css';
import ProjectList from './projectlist';

const projects = [
  {
    title: "WIP - Assignment Scheduler",
    description: "Advanced Task Scheduler. This project involved using HTML, CSS, and JavaScript to create a responsive web application.",
    image: "/assignment.png",
    links: [
      { label: "GitHub", url: "https://github.com/AndrewRodabough/AssignmentScheduler" },
      { label: "Live Site", url: "https://startup.assignmentscheduler.com" }
    ]
  },
  {
    title: "Portfolio Site",
    description: "This website you are viewing. This site was made using Vite, React, and TypeScript",
    image: "/portfolio.png",
    links: [
      { label: "GitHub", url: "https://github.com/AndrewRodabough/personal_site" }
    ]
  },
  {
    title: "Lawfirm Billing System",
    description: "A Commisioned billing application to expeditie billing of clients' phone calls. Integrated with office 365. Built using Microsoft Access",
    image: "/billing.png",
    links: [
      { label: "Learn More", url: "/billing" },
    ]
  }
];

export const project_list = () => {
  return (
    <ProjectList projects={projects} />
  )
}

export const Projects = () => {
  return (
    <section className="temp projects" id="projects">
      <h1>Projects</h1>
      <ul className="projects-container">
        {project_list()}
      </ul>
      <a href="./projects" className="morelink" style={{ marginTop: '1rem', alignSelf: 'center' }}>
        View All Projects
      </a>
    </section>
  );
};

export default Projects;