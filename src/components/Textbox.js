import React from "react";
import styled from "styled-components";
import * as Constants from "../constants";

export default function Textbox() {
    
    const Text = styled.div`
        color: #ccffff;
        font-size: 0.7em;
        max-width: 80vw;
        margin: auto;
        text-align: center;
    `

    return <Text>
                {Constants.DESCRIPTION}
           </Text>

}