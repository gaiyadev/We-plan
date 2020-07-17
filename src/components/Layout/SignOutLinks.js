import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLinks = () => {
    return (
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li> <NavLink to="/" >Signup Project</NavLink></li>
            <li> <NavLink to="/" >Login</NavLink></li>
        </ul>
    );
}

export default SignOutLinks;