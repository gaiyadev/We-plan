import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignOutLinks';


const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link className=" brand-logo" to="/">WePlan</Link>
                    <SignInLinks />
                    <SignOutLinks />
                </div>
            </div>
        </nav >
    );
}

export default Navbar;