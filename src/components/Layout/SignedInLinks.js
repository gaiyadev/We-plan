import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';

const SignInLinks = props => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li> <NavLink to="/create" >New Project</NavLink></li>
            <li><Link onClick={props.signOut}> SignOut</Link> </li>
            <li> <NavLink to="/" className="btn btn-floating pink ligthen-1" >
                {props.profile.initials}
            </NavLink></li>
        </ul >
    );
}
const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    };
}

export default connect(null, mapDispatchToProps)(SignInLinks);