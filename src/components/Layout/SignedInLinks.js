import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLinks = () => {
    return (
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li> <NavLink to="/" >New Project</NavLink></li>
            <li> <NavLink to="/" >Logout</NavLink></li>
            <li> <NavLink to="/" className="btn btn-floating pink ligthen-1" >GO</NavLink></li>
        </ul>
    );
}

export default SignInLinks;