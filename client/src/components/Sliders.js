import React, { Component } from 'react';
import Slider from 'react-slick';

import Banner1 from '../images/AADK 2018 1280x680.png';
import Banner2 from '../images/banner web Ngopi yuk.jpg';
import Banner3 from '../images/WEB.jpg';

export default class Sliders extends Component{
    constructor(props){
        super(props);

        this.state = {
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
            }
        }
    }
    render(){
        // Mockup data banner
        // TODO: retrieve data from server
        return(
            <Slider {...this.state.settings}>
                <div>
                    <img src={Banner1} width="100%" alt="Banner 1"/>
                </div>
                <div>
                    <img src={Banner2} width="100%" alt="Banner 1"/>
                </div>
                <div>
                    <img src={Banner3} width="100%" alt="Banner 1"/>
                </div>
            </Slider>
        )
    }
}