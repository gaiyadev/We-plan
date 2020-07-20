import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';


const ProjectSummary = props => {
    // const { id } = props.match.params;
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />

    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title" > {project.title} </span>
                        <p>
                            {project.content}
                        </p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">{project.authorFirstName} {project.authorLastName}
                        <div >@nd Setempber 33</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project..</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    };
};

export default compose(
    firestoreConnect(() => ['projects']),
    connect(mapStateToProps, null),

    // firestoreConnect([
    //     { collection: 'projects' }
    // ])
)(ProjectSummary);