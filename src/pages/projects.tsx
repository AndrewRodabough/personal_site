import React from 'react';
import '../styles.css';
import { project_list } from '../components/projects/projects';

const Projects: React.FC = () => {
    return (
        <>
            <main>
                {project_list()}
            </main>
        </>
    );
};

export default Projects;