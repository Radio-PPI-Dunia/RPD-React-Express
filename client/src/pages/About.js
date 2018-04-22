import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class About extends Component {
    render() {
        return(
            <div>
                <Header/>
                <h2>About Radio PPI Dunia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut eligendi esse maiores minus praesentium rem similique? Consectetur cumque, ea id itaque neque, nulla quam quia quo tempora, veniam voluptate.</p>
                <Footer/>
            </div>
        )
    }
}