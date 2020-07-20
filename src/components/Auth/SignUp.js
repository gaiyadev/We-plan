import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


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
        const { auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div>
                <Helmet>
                    <title>Create an Account</title>
                </Helmet>
                <div className="container">
                    <form onSubmit={this.onSubmitHandler}>
                        <h5 className="grey-text text-darken-3"> Sign Up</h5>
                        <div className="input-field">
                            <i className="material-icons prefix">account_circle</i>
                            <label htmlFor="firstName">First Name </label>
                            <input type="text" id="firstName" name="firstName" onChange={this.onChangeHandler} />
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix">account_circle</i>
                            <label htmlFor="lasttName">Last Name </label>
                            <input type="text" id="lasttName" name="lasttName" onChange={this.onChangeHandler} />
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix">email</i>
                            <label htmlFor="email">Email </label>
                            <input type="email" id="email" name="email" onChange={this.onChangeHandler} />
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <label htmlFor="password">Password </label>
                            <input type="password" id="password" onChange={this.onChangeHandler} name="password" />
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0" type="submit">Sign Up</button>
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
};
export default connect(mapStateToProps, null)(SignUp);