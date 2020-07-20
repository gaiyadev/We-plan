import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { signIn } from '../../redux/actions/authActions';
import { connect } from 'react-redux';


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
        this.props.signIn(this.state);
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        const { authError } = this.props;
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
                            <input type="email" id="email" name="email" onChange={this.onChangeHandler} />
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <label htmlFor="password">Password </label>
                            <input type="password" id="password" onChange={this.onChangeHandler} name="password" />
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0" type="submit">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SIgnIn: (creds) => dispatch(signIn(creds))
    };
};

const mapStateToProps = state => {
    return {
        authError: state.auth.authError
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SIgnIn);