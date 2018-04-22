import React, { Component } from 'react';

// Import Component
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sliders from '../components/Sliders';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            content: ''
        }
    }

    render(){
        return(
            <div className="row">
                <Header/>
                <Sliders/>
                <div className="col s6">
                    <p className="body-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam animi blanditiis,
                        delectus eveniet ex explicabo facilis itaque molestiae mollitia optio pariatur perspiciatis placeat
                        quam reprehenderit repudiandae saepe tenetur voluptas.</p>
                </div>
                <div className="col s6">
                    <p className="body-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam animi blanditiis,
                        delectus eveniet ex explicabo facilis itaque molestiae mollitia optio pariatur perspiciatis placeat
                        quam reprehenderit repudiandae saepe tenetur voluptas.</p>
                </div>
                <Footer/>
            </div>
        )
    }
}