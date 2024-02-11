import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import SignIn from "./SignIn";
import Navbarmain from "./Components/Navbarmain";
import Navbarmain2 from "./Components/Navbarmain2";
import SportsMain from "./sports/sportsmain";
import SignUp from "./signup";
import Recover from "./Recover";
import RecoverUser from "./RecoverUser";
import RecoverPassword from "./RecoverPassword";

function App() {

  return (
    <Router>
      <header>
        <Navbarmain2/>
      </header>
      <body style={{display:"block", paddingBottom:"70px"}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/recover" element={<Recover/>}/>
        <Route path="/recoveruser" element={<RecoverUser/>}/>
        <Route path="/recoverpass" element={<RecoverPassword/>}/>
        <Route path="/sports" element={<SportsMain/>}/>
      </Routes>
      </body>
      <footer style={{position: "fixed", bottom: 0, width:"100%", display: "block"}}>
        <Navbarmain/>
      </footer>
    </Router>
  );
}

export default App;
