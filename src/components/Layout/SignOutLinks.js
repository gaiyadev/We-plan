import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLinks = () => {
    return (
        <ul id="nav-mobile" className="right hide-on-med">
            <li> <NavLink to="/signup" >Signup</NavLink></li>
            <li> <NavLink to="/signin" >Signin</NavLink></li>
        </ul>
    );
}

export default SignOutLinks;