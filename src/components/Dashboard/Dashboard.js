import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../Project/ProjectList';
import { Helmet } from 'react-helmet';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <ProjectList />
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

export default Dashboard;