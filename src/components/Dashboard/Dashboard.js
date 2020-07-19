import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../Project/ProjectList';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <ProjectList projects={projects} />
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <Notification />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects
    };
};

export default compose(
    connect(mapStateToProps, null),
    // firestoreConnect([
    //     { collection: 'projects' }
    // ])
)(Dashboard);