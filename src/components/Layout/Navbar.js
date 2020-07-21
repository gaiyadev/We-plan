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
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <div className="container">
                        <Link className=" brand-logo" to="/">WePlan</Link>
                              {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}

                        {links}
                    </div>
                </div>
            </nav >
        </div>

    );
}
const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    };
};
export default connect(mapStateToProps, null)(Navbar);