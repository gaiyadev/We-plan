import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux';


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
const mapStateToProps = state => {
    return {

    };
};
export default connect(mapStateToProps, null)(Navbar);