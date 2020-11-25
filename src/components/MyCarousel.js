import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import MyOverlayTrigger from "../components/MyOverlayTrigger";
import * as Constants from "../constants";

export default function MyCarouselItem(props) {
   return (
        <Carousel>
            <Carousel.Item>
                <MyOverlayTrigger url="https://i.pinimg.com/originals/45/46/7e/45467e47f8c1404816d60859c966cb10.jpg"
                 color="yellow" header="Fast-Paced" text={Constants.SIMPLE_TEXT}>
                </MyOverlayTrigger>
            </Carousel.Item>
            <Carousel.Item>
                <MyOverlayTrigger url="https://i.pinimg.com/originals/df/59/76/df5976ef387c9a6954fcab9185af763b.jpg"
                 color="red" header="Intense" text={Constants.INTENSE_TEXT}>
                </MyOverlayTrigger>
            </Carousel.Item>
            <Carousel.Item>
                <MyOverlayTrigger url="https://i.pinimg.com/originals/b5/b2/9f/b5b29f5fbf39373627c27cd8151f9bb3.jpg"
                 color="#ccffff" header="Customizable" text={Constants.CUSTOMIZABLE_TEXT}>
                </MyOverlayTrigger>
            </Carousel.Item>
         </Carousel>
    );
}