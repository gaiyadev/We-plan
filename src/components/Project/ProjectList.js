import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
    console.log(projects)

    return (
        <div className="project-list section">
            <div className="card z-depth project-summary">
                {
                    projects && projects.map(project => {
                        return <ProjectSummary key={project.id} project={project} />
                    })
                }
            </div>
        </div>
    );
};

export default ProjectList;