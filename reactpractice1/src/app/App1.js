import React from "react";
import Home from "./Home";
import Aboutus from "./aboutus";
import SignIn from "./signin";
import Navbarmain from "./Components/Navbarmain";
import Navbarmain2 from "./Components/Navbarmain2";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
export default function App1(){
    return(
        <Router>
           <Navbarmain2></Navbarmain2>
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="aboutus" element={<Aboutus/>}/>
               <Route path="signin" element={<SignIn/>}/>
           </Routes>
           <Navbarmain></Navbarmain> 
        </Router>

    );

}