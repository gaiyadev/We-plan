import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../Project/ProjectList';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { getProjects } from '../../redux/actions/projectsAction';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.getProjects()
    }
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

const mapStateToProps = state => ({
    projects: state.project.projects
});

export default connect(mapStateToProps, { getProjects})(Dashboard);