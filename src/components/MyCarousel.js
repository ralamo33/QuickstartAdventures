import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import MyOverlayTrigger from "../components/MyOverlayTrigger";
import * as Constants from "../constants";

export default function MyCarouselItem(props) {
   return (
        <Carousel>
            <Carousel.Item>
                <MyOverlayTrigger url={Constants.BUCKET_URL + 'Chase.jpg'}
                 color="yellow" header="Fast-Paced" text={Constants.SIMPLE_TEXT}>
                </MyOverlayTrigger>
            </Carousel.Item>
            <Carousel.Item>
                <MyOverlayTrigger url={Constants.BUCKET_URL + 'Cavern.jpg'}
                 color="red" header="Intense" text={Constants.INTENSE_TEXT}>
                </MyOverlayTrigger>
            </Carousel.Item>
            <Carousel.Item>
                <MyOverlayTrigger url={Constants.BUCKET_URL + 'Workshop.jpg'}
                 color="#ccffff" header="Customizable" text={Constants.CUSTOMIZABLE_TEXT}>
                </MyOverlayTrigger>
            </Carousel.Item>
         </Carousel>
    );
}