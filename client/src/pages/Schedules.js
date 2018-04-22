import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ScheduleList from '../components/ScheduleList';

export default class Schedules extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="center-align">
                    <h2>Jadwal Siaran</h2>
                    <Link to="/programs" className="btn">
                        Program Radio PPI Dunia
                    </Link>
                </div>
                <ScheduleList/>
                <Footer/>
            </div>
        )
    }
}