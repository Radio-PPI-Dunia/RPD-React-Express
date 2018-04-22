import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SlidersClient extends Component{
    constructor(props){
        super(props);

        this.state = {
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
            }
        }
    }

    // TODO: get data from server
    getData() {
        return [
            {_id: 1, src: ''},
            {_id: 1, src: ''},
            {_id: 1, src: ''}
        ]
    }

    renderData() {
        return this.getData().map(({ _id, src }) =>{
            return (
                <div>
                    <img src={src} width="100%" alt={src} key={_id}/>
                </div>
            )
        })
    }

    render(){
        return(
            <Slider {...this.state.settings}>
                {this.renderData()}
            </Slider>
        )
    }
}