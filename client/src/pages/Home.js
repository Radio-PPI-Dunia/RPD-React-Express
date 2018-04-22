import React, { Component } from 'react';

// Import Component
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            content: ''
        }
    }

    render(){
        return(
            <div className="container">
                <Header/>
                <div className="container">
                    Content home page
                </div>
                <Footer/>
            </div>
        )
    }
}