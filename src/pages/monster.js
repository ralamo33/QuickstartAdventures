import React, { Component, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as Constants from '../constants';
import Layout from '../layouts/layout';
import EpicImage from '../components/EpicImage';

const Form = styled.form`
  width: 100%;
  position: absolute;
  text-align: center;  
`;

const Relative = styled.div`
  position: relative;
`;

const Title = styled.p`
  text-align: center;
  font-size: 5vw;
  color: #ccffff;
`;

const NameInput = styled.input`
  width: 350px;
`;

export default class Monster extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', about: ''};
    this.setName = this.setName.bind(this);
    this.setAbout = this.setAbout.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit = (event) => {
    event.preventDefault();
    apiUrl = `${Constants.MONSTER_API}&Message=${this.state.name}_${this.state.about}`;
    axios.post(
      apiUrl, {}, {
        headers: { 'x-api-key': Constants.MONSTER_API_KEY },
      },
    ).catch((error) => alert(error))
      .then(alert('Monster Submitted'))
      .catch((error) => alert(error));
  };

  setName = (event) => {
    this.setState({name: event.target.value});
  }

  setAbout = (event) => {
    this.setState({about: event.target.value});
  }

  render() {

    return (
      <Layout>
        <Title>Create a Monster</Title>
        <Relative>
          <Form onSubmit={this.submit}>
            <br /><br /><br/>
            <label>
              <NameInput placeholder="Monster Name" value={this.state.name} onChange={this.setName} />
            </label>
            <br /><textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Monster Description"
              value={this.state.about} onChange={this.setAbout} />
            <br /><input type="submit" value="Onwards" />
          </Form>
          <EpicImage src="https://pop-verse.com/wp-content/uploads/2015/05/Abzan-Houses-MtG-Art-620x330.jpg" />
        </Relative>
      </Layout>
    );
  }

}