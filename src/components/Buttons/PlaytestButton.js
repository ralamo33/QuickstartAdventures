import React from "react"
import ClickToOpen from "./ClickToOpen"
import buttonClasses from "./ClickToOpen.module.css"
import * as Constants from "../../constants";

export default function PlaytestButton() {

    const apiUrlFunction = (email) => Constants.PLAYTEST_API + "&Message=" + email;

    const playtestButton = <ClickToOpen variant="warning" size={buttonClasses.independentBlack} 
                                text={Constants.PLAYTEST_BUTTON_TEXT} title={Constants.PLAYTEST_MODAL_TITLE}
                                apiUrlFunction={apiUrlFunction} apiKey={Constants.PLAYTEST_API_KEY}/>

    return playtestButton; 
}