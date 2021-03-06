import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { signIn } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import SimpleReactValidator from 'simple-react-validator';



class SIgnIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.validator = new SimpleReactValidator();
    }
    onSubmitHandler = event => {
        event.preventDefault();
        if (this.state.email === '' | this.state.password === '') return false;

        if (!this.validator.allValid()) {
            this.validator.showMessages();
            this.props.history.push('/signin');
        }
        this.props.signIn(this.state);
        NotificationManager.success('Login successfully');
        this.props.history.push('/');
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div>
                <Helmet>
                    <title>Login to Account</title>
                </Helmet>
                <div className="container">
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                        <h5 className="grey-text text-darken-3"> Sign In</h5>
                        <div className="input-field">
                            <i className="material-icons prefix">email</i>
                            <label htmlFor="email">Email </label>
                            <input type="email" value={this.state.email} id="email" name="email" onChange={this.onChangeHandler} />
                            {this.validator.message('email', this.state.email, 'required|email', { className: 'red-text' })}
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <label htmlFor="password">Password </label>
                            <input type="password" id="password" onChange={this.onChangeHandler} name="password" />
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0" type="submit">Sign in</button>
                            <NotificationContainer />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    };
};

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SIgnIn);