// import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css";
// import AWS from "aws-sdk/dist/aws-sdk-react-native";

// export default function Photos() {
//    AWS.config.region = 'us-east-1';
//    AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:e32ab341-6346-460c-9c64-8464fac0a3cf'});
//    return (
//         <div>
//                 <div id="textToSynth">
//       <input autoFocus size="23" type="text" id="textEntry" value="It's very good to meet you." onChange={changeText}/>
//       <button className="btn default" onClick={speakText}>Synthesize</button>
//       <p id="result">Enter text above then click Synthesize</p>
//     </div>
//     <audio id="audioPlayback" controls>
//       <source id="audioSource" type="audio/mp3" src="" />
//     </audio>
//         </div>
//     )
// }

// function changeText(text) {
//     document.getElementById('textEntry').value = text;
// }

// function speakText() {
//     // Create the JSON parameters for getSynthesizeSpeechUrl
//             const speechParams = {
//                 OutputFormat: "mp3",
//                 SampleRate: "16000",
//                 Text: "",
//                 TextType: "text",
//                 VoiceId: "Matthew"
//             };
//     speechParams.Text = document.getElementById("textEntry").value;
//     var polly = new AWS.Polly({apiVersion: '2016-06-10'});
//             var signer = new AWS.Polly.Presigner(speechParams, polly)
//             // Create presigned URL of synthesized speech file
//             signer.getSynthesizeSpeechUrl(speechParams, function(error, url) {
//             if (error) {
//                 document.getElementById('result').innerHTML = error;
//             } else {
//                 document.getElementById('audioSource').src = url;
//                 document.getElementById('audioPlayback').load();
//                 document.getElementById('result').innerHTML = "Speech ready to play.";
//             }
//         });
// }