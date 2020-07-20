import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card-content  text-darken-3">
            <span className="card-title"> {project.title} </span>
            <p>Posted by {project.authorFirstName} {project.authorLastName} </p>
            <p className="grey-text">3rd sept</p>
        </div>
    );
}

export default ProjectSummary;
