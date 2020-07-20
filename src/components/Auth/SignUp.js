import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../redux/actions/authActions';
import { NotificationContainer, NotificationManager } from 'react-notifications';



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
        this.props.signUp(this.state);
        NotificationManager.success('Account creatted successfully');

    }

    onChangeHandler = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div>
                <Helmet>
                    <title>Create an Account</title>
                </Helmet>
                <div className="container">
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                        <h5 className="grey-text text-darken-3"> Sign Up</h5>
                        <div className="input-field">
                            <i className="material-icons prefix">account_circle</i>
                            <label htmlFor="firstName">First Name </label>
                            <input type="text" id="firstName" name="firstName" onChange={this.onChangeHandler} />
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix">account_circle</i>
                            <label htmlFor="lastName">Last Name </label>
                            <input type="text" id="lastName" name="lastName" onChange={this.onChangeHandler} />
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
        auth: state.firebase.auth,
        authError: state.auth.authError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);