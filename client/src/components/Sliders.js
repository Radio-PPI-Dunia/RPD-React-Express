import React, {Component} from "react";
import Slider from "react-slick";
import Banner1 from "../images/AADK 2018 1280x680.png";
import Banner2 from "../images/banner web Ngopi yuk.jpg";
import Banner3 from "../images/WEB.jpg";

export default class Sliders extends Component {
    constructor(props) {
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

    // TODO: get data from server
    getData() {
        return [
            {_id: 1, src: Banner1},
            {_id: 1, src: Banner2},
            {_id: 1, src: Banner3}
        ]
    }

    renderData() {
        return this.getData().map(({_id, src}) => {
            return (
                <div>
                    <img src={src} alt={src} width="100%" key={_id}/>
                </div>
            )
        })
    }

    render() {
        // Mockup data banner
        // TODO: retrieve data from server
        return (
            <Slider {...this.state.settings}>
                {this.renderData()}
            </Slider>
        )
    }
}