import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux';


const Navbar = props => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignInLinks profile={profile} />
        : <SignOutLinks />

    return (
        <nav>
            <div className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link className=" brand-logo" to="/">WePlan</Link>
                    {links}
                </div>
            </div>
        </nav >
    );
}
const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    };
};
export default connect(mapStateToProps, null)(Navbar);