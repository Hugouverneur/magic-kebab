import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img width="289px" alt="logo" src={require('../../assets/img/logo.png').default}/>
            </div>
        );
    }
}

export default Header;