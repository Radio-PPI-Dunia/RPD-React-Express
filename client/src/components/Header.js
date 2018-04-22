import React, { Component } from 'react';
import Navigation from './Navigation';

export default class Header extends Component {
    render() {
        return (
            <div>
                <h2>Header</h2>
                <p>Logo</p>
                <Navigation/>
            </div>
        )
    }
}