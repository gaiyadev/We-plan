import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { createProject } from '../../redux/actions/projectsAction';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Redirect } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';


class CreateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
        this.validator = new SimpleReactValidator();

    }

    onSubmitHandler = event => {
        event.preventDefault();
        const { title, content } = this.state;
        if (title === '' | content === '') return false;
        if (!this.validator.allValid()) {
            this.validator.showMessages();
            this.props.history.push('/create');

        }
        const createProject = {
            title: title,
            content: content
        };
        //createProject using redux
        this.props.createProject(createProject);
        NotificationManager.success('Project added successfully');
        this.props.history.push('/');
    }


    onChangeHandler = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }


    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div>
                <Helmet>
                    <title>Create a new Project</title>
                </Helmet>
                <div className="container">
                    <form onSubmit={this.onSubmitHandler}>
                        <h5 className="grey-text text-darken-3"> Create Project</h5>
                        <div className="input-field">
                            <i className="material-icons prefix">topic</i>
                            <label htmlFor="title">Title </label>
                            <input type="text" id="title" onBlur={() => this.validator.showMessageFor('title')} value={this.state.title} name="title" onChange={this.onChangeHandler} />
                            {this.validator.message('title', this.state.title, 'required|alpha|min:4|max:120', { className: 'red-text' })}

                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix">textsms</i>
                            <label htmlFor="content">Project Content </label>
                            <textarea id="content" onBlur={() => this.validator.showMessageFor('content')} value={this.state.content} onChange={this.onChangeHandler} name="content" className="materialize-textarea"></textarea>
                            {this.validator.message('content', this.state.content, 'required|alpha|min:4|max:1020', { className: 'red-text' })}
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0" type="submit">Create</button>
                            <NotificationContainer />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    };
}

const mapDispatchToProps = dispatch => ({
    createProject: (project) => dispatch(createProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);