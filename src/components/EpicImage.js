import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EpicImage(props) {
    const image = props.image;
    const header = props.header;
    const colorClass = props.color;
    return (
        <div>
         <h3 className={colorClass}>{header}</h3>
         <img src={image} alt="Failed to load"></img>
        </div>
    )
}