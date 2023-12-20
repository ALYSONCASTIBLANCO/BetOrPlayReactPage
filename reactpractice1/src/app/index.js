import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from '../reportWebVitals';
import Navbarmain2 from './Components/Navbarmain2';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarmain from './Components/Navbarmain';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbarmain2></Navbarmain2>
    <Home/>
    <Navbarmain></Navbarmain>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
