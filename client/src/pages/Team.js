import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Team extends Component {
    render() {
        return(
            <div>
                <Header/>
                <h2>Sobat Siar & Sobat Kru</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur earum exercitationem, incidunt modi non obcaecati pariatur soluta! Adipisci aliquid culpa fugiat nesciunt, quaerat quas repudiandae similique? Adipisci obcaecati quo tempora.</p>
                <Footer/>
            </div>
        )
    }
}