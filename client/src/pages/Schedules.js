import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ScheduleList from '../components/ScheduleList'

export default class Schedules extends Component {
    render() {
        return(
            <div>
                <Header/>
                <ScheduleList/>
                <Footer/>
            </div>
        )
    }
}