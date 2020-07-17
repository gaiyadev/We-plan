import React, { Component } from 'react';

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
        console.log(this.state)


    }

    onChangeHandler = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmitHandler}>
                    <h5 className="grey-text text-darken-3"> Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title </label>
                        <input type="text" id="title" name="title" onChange={this.onChangeHandler} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Project Content </label>
                        <textarea id="content" name="content" className="materialize-textarea"></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" type="submit">Create</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default CreateProject;