import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card-content  text-darken-3" key={project.id}>
            <span className="card-title"> {project.title} </span>
            <p>Posted by {project.authorFirstName} {project.authorLastName} </p>
            <p className="grey-text">{moment(project.createdAt.toDate()).calendar()} </p>
        </div>
    );
}

export default ProjectSummary;
