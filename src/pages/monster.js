import React, { Component, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as Constants from '../constants';
import Layout from '../layouts/layout';
import EpicImage from '../components/EpicImage';

var myCredentials = { accessKeyId: 'message sean or see dashboard', secretAccessKey: '< see' }; 
var AWS = require("aws-sdk");
let myConfig = new AWS.Config(); 
myConfig.update({region: 'us-east-1'});
myConfig.update({apiVersion: '2006-03-01'});
myConfig.update({credentials: myCredentials});
let s3 = new AWS.S3(myConfig);

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

const LabelWhite = styled.label`
  color: white; 
  text-align: center; 
`;

const InputWhite = styled.input`
  color: white; 
  margin: auto;
  width: 250px; 
  text-align: center;
`;

const NameInput = styled.input`
  width: 350px;
`;

let fileReader;
let fileContent;

const onLoadend = (e) => {
  console.log("getting content");
  const fileContent = fileReader.result;
  console.log("file content:")
  console.log(fileContent);
}

export default class Monster extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', about: '', fileName: ''};
    this.setName = this.setName.bind(this);
    this.setAbout = this.setAbout.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit = () => {
    console.log("submiting");
    let completeInformation = (this.state.fileName != '' && this.state.name != '' && this.state.about != '');
    if (!completeInformation) {
      alert("empty form or failed to upload image");
      return; 
    }
    this.submitImage(); 
    this.postToAPI(); 
  };

  submitImage = () => {
    console.log("uploading image");
    var params = {
      Body: fileContent, 
      Bucket: "monster-images", 
      Key: this.state.fileName, 
      Tagging: `${this.state.fileName}=${this.state.name}`
      }
    s3.putObject(params, function(err, data) {
      if (err) console.log(err, err.stack);
      else console.log(data);
    });
    console.log("done uploading image");
  }

  postToAPI = () => {
    let apiUrl = `${Constants.MONSTER_API}&Message=${this.state.name}_${this.state.about}
    &TopicArn=${Constants.MONSTER_TOPIC_ARN}`;
    console.log("posting to API 2");
    axios.post(
      apiUrl, {}, {
        headers: { 'x-api-key': Constants.MONSTER_API_KEY },
      }
    ).catch((error) => alert(error))
      .then(alert("Monster Submitted"));
    console.log("done posting to API");
  }

  setName = (event) => {
    this.setState({name: event.target.value});
  }

  setAbout = (event) => {
    this.setState({about: event.target.value});
  }
  
  readFile = (file) => {
    console.log("loading file"); 
    fileReader = new FileReader();
    fileReader.onload = onLoadend;
    fileReader.readAsArrayBuffer(file);
    this.state.fileName = file.name; 
    console.log("done");
  };

  render() {

    return (
      <Layout>
        <Title>Create a Monster</Title>
        <Relative>
          <Form onSubmit={this.submit}>
            <br/><br/><br/>
            <label>
              <NameInput placeholder="Monster Name" value={this.state.name} onChange={this.setName} />
            </label>
            <br/>
              <LabelWhite htmlFor="img"> Upload image: </LabelWhite>
              <InputWhite id="img" name="img" type="file" accept="image/*" 
              onChange={e => this.readFile(e.target.files[0])}/>
            <br/>
            <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Monster Description"
              value={this.state.about} onChange={this.setAbout} />
            <br/>
            <input type="submit" value="Submit!" />
          </Form>
          <EpicImage src="https://pop-verse.com/wp-content/uploads/2015/05/Abzan-Houses-MtG-Art-620x330.jpg" />
        </Relative>
      </Layout>
    );
  }

}
