import React from "react"
import Layout from "../layouts/layout";
import EpicImage from "../components/EpicImage";
import styled from "styled-components";
import {Button} from "react-bootstrap";
import {navigate} from "gatsby";

export default function Leave() {

    const Relative = styled.div`
        position: relative;
    `

    const Title = styled.p`
        text-align: center;
        font-size: 5vw;
        color: #ccffff;
    `

    const MyButton = styled(Button)`
        position: absolute;
        top: 50%;
        font-size: 3vw;
    `

    const LeaveButton = styled(MyButton)`
        left: 65%;
    `

    const StayButton = styled(MyButton)`
        left: 25%;
    `

    return <Layout>
            <Title>Do you really want to leave?</Title>
            <Relative>
                <EpicImage src="https://pop-verse.com/wp-content/uploads/2015/05/Abzan-Houses-MtG-Art-620x330.jpg"></EpicImage>
                <StayButton variant="primary" size="lg" onClick={() => navigate('/')}>Stay</StayButton>
                <LeaveButton variant="danger" size="lg">Leave</LeaveButton>
            </Relative>
           </Layout>
}