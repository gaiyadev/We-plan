import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
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
                    <h5 className="grey-text text-darken-3"> Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name </label>
                        <input type="text" id="firstName" name="firstName" onChange={this.onChangeHandler} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="lasttName">Last Name </label>
                        <input type="text" id="lasttName" name="lasttName" onChange={this.onChangeHandler} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email </label>
                        <input type="email" id="email" name="email" onChange={this.onChangeHandler} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password </label>
                        <input type="password" id="password" onChange={this.onChangeHandler} name="password" />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" type="submit">Register</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default SignUp;