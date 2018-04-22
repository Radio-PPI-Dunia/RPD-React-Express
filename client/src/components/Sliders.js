import React, { Component } from 'react';
import Slider from 'react-slick';

import Banner from '../images/AADK 2018 1280x680.png';

export default class Sliders extends Component{
    constructor(props){
        super(props);

        this.state = {
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    }
    render(){
        return(
            <Slider {...this.state.settings}>
                <div>
                    <img src={Banner} width="100%" alt="Banner 1"/>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
            </Slider>
        )
    }
}