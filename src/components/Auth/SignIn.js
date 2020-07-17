import React, { Component } from 'react';

class SIgnIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    <h5 className="grey-text text-darken-3"> Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email </label>
                        <input type="email" id="email" name="email" onChange={this.onChangeHandler} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password </label>
                        <input type="password" id="password" onChange={this.onChangeHandler} name="password" />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" type="submit">Login</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default SIgnIn;