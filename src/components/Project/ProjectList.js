import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            <div className="card z-depth project-summary">
                {
                    projects && projects.map(project => {
                        return (
                            <Link to={'/project' + project.id}>
                                <ProjectSummary key={project.id} project={project} />
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ProjectList;