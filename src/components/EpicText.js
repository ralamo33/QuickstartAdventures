import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import epicTextStyle from "./epic-text.module.css";

export default function EpicText(props) {
    const text = props.text;
    return (
        <div>
            <p className={epicTextStyle.epic-text}>{text}</p>
        </div>
    )
}