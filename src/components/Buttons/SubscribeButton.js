import React from "react"
import ClickToOpen from "./ClickToOpen"
import buttonClasses from "./ClickToOpen.module.css"
import * as Constants from "../../constants";

export default function PlaytestButton() {

    const playtestButton = <ClickToOpen variant="warning" size={buttonClasses.independentBlack} 
                                text={Constants.PLAYTEST_BUTTON_TEXT}/>

    return playtestButton; 
}