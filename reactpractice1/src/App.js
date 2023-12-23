import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import SignIn from "./SignIn";
import Navbarmain from "./Components/Navbarmain";
import Navbarmain2 from "./Components/Navbarmain2";
import SportsMain from "./sports/sportsmain";

function App() {
  return (
    <Router>
      <Navbarmain2/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/sports" element={<SportsMain/>}/>
      </Routes>
      <Navbarmain/>
    </Router>
  );
}

export default App;
