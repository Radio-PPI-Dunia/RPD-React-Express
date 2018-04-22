import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component{
    render(){
        return(
            <div>
                <NavLink exact={true} activeClassName="active-link" to="/">Home</NavLink>
                <NavLink to="/about" activeClassName="active-link">About</NavLink>
                <NavLink to="/schedules" activeClassName="active-link">Jadwal Siaran</NavLink>
                <NavLink to="/team" activeClassName="active-link">SS & SK</NavLink>
            </div>
        )
    }
}
