import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { createProject } from '../../redux/actions/projectsAction';
import { connect } from 'react-redux';

class CreateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    onSubmitHandler = event => {
        event.preventDefault();
        const { title, content } = this.state;
        const createProject = {
            title: title,
            content: content
        };
        //createProject using redux
        this.props.createProject(createProject);
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }


    render() {
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
                            <input type="text" id="title" name="title" onChange={this.onChangeHandler} />
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix">textsms</i>
                            <label htmlFor="content">Project Content </label>
                            <textarea id="content" onChange={this.onChangeHandler} name="content" className="materialize-textarea"></textarea>
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0" type="submit">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, { createProject })(CreateProject);