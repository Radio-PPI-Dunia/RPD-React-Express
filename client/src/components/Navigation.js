import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component{
    render(){
        return(
            <div>
                <NavLink exact={true} to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/team">SS & SK</NavLink>
                <NavLink to="/schedules">Schedules</NavLink>
            </div>
        )
    }
}
