import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../Project/ProjectList';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        const { projects, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6" >
                            <ProjectList projects={projects} />
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <Notification notifications={notifications} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    };
};

export default compose(
    // firestoreConnect(() => ['projects']),
    connect(mapStateToProps, null),
    firestoreConnect([
        { collection: 'projects' },
        { collection: 'notifications', limit: 3 }
    ])
)(Dashboard);