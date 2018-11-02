import React, { Component } from 'react';
import '../scss/Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="logo">
                    <h4>Dashboard</h4>
                </div>
                <div className="profile">
                    <div className="img"></div>
                    <div className="edit">
                        Jeremy <i className="fas fa-caret-down"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;