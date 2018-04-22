import React, { Component } from 'react';
import Navigation from './Navigation';
import Logo from '../images/logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src={Logo} width="100px" alt="logo"/>
                <Navigation/>
            </div>
        )
    }
}