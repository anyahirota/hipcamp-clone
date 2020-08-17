import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    navButtons() {
        const notLoggedIn = () => (
            <ul className="nav-button-list">
                <li className="nav-buttons"><Link to="/login">Log in</Link></li>
                <li className="nav-buttons"><Link to="/signup">Sign up</Link></li>
                <li className="demo-button"><Link to="/demo">Demo</Link></li>
            </ul>
        );
        const loggedIn = () => (
            <ul className="nav-button-list">
                <li className="nav-buttons">Trips</li>
                <li className="nav-buttons">Saves</li>
                <li className="bear-dropdown-button">
                    <p>icon</p>
                    <ul className="bear-dropdown" >
                        <li>
                            <button className="dropdown-button" onClick={this.props.logout}>Log Out</button>
                        </li>
                    </ul>
                </li>
            </ul>
        );
        return this.props.currentUser ? loggedIn() : notLoggedIn();
    }

    render() {
        return (
            <nav className="nav-bar">
                <h1 className="logo">
                    LOGO
                </h1>
                {this.navButtons()}
            </nav>
        )
    }
}

export default NavBar; 