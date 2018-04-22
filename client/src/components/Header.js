import React, { Component } from 'react';
import Navigation from './Navigation';

export default class Header extends Component {
    render() {
        return (
            <div>
                <h2>Logo</h2>
                <Navigation/>
            </div>
        )
    }
}