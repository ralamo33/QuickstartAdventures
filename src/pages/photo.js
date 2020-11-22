// import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css";
// import AWS from "aws-sdk/dist/aws-sdk-react-native";
// import Layout from "../layouts/layout";

// export default function Photos() {
//     let [responseData, setResponseData] = React.useState('');

//     React.useEffect(() => {
//         AWS.config.region = 'us-east-1';
//         AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:e32ab341-6346-460c-9c64-8464fac0a3cf'});

//         const s3 = new AWS.S3({
//             apiVersion: '2006-03-01',
//             params: {Bucket: 'remember-the-ralamo-images'}
//         });
//         const params = {
//             Bucket: 'remember-the-ralamo-images',
//         };
//         let images = [];
//         s3.listObjectsV2(params, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 return [];
//             } else {
//                 data.Contents.map((content) => {
//                     return <img alt="Ryan" src={urlHeader + content.Key}></img>
//                 }).then((images) => {
//                     return images;
//                 })
//             }
//         }).then((images) => {
//             setResponseData(images);
//             console.log(images);
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     }, [setResponseData, responseData]);
//         const urlHeader = 'https://remember-the-ralamo-images.s3.amazonaws.com/';
//   return (
//     <Layout>
//       <h1>HEllo</h1>
//       {responseData}
//    </Layout>)
// }

// function getImages() {
//    AWS.config.region = 'us-east-1';
//    AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:e32ab341-6346-460c-9c64-8464fac0a3cf'});

//    const s3 = new AWS.S3({
//        apiVersion: '2006-03-01',
//        params: {Bucket: 'remember-the-ralamo-images'}
//    });
//    const params = {
//        Bucket: 'remember-the-ralamo-images',
//    };
//    const urlHeader = 'https://remember-the-ralamo-images.s3.amazonaws.com/';
//    let images = [];
//    s3.listObjectsV2(params, (err, data) => {
//        if (err) {
//         console.log(err, err.stack);
//        } else {
//         images = data.Contents.map(content => {
//             return <img alt="Ryan" src={urlHeader + content.Key}></img>
//         });
//         return images;
//     }
// }
// }