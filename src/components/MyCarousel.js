import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import MyOverlayTrigger from "../components/MyOverlayTrigger";
import * as Constants from "../constants";
import classes from "./OverlayTrigger.module.css";

export default function MyCarouselItem(props) {
   return (
        <Carousel>
            <Carousel.Item>
                <MyOverlayTrigger url={Constants.BUCKET_URL + 'Chase.jpg'}
                 colorClass={classes.yellow} imageClass={classes.chase} textClass={classes.yellowBackground}
                 header="Fast-Paced" text={Constants.SIMPLE_TEXT}>
                </MyOverlayTrigger>
            </Carousel.Item>
            <Carousel.Item>
                <MyOverlayTrigger url={Constants.BUCKET_URL + 'Cavern.jpg'}
                 colorClass={classes.red} imageClass={classes.cavern} textClass={classes.redBackground}
                 header="Intense" text={Constants.INTENSE_TEXT}>
                </MyOverlayTrigger>
            </Carousel.Item>
            <Carousel.Item>
                <MyOverlayTrigger url={Constants.BUCKET_URL + 'Workshop.jpg'}
                 colorClass={classes.blue} imageClass={classes.workshop} textClass={classes.blueBackground}
                 header="Modular" text={Constants.CUSTOMIZABLE_TEXT}>
                </MyOverlayTrigger>
            </Carousel.Item>
         </Carousel>
    );
}