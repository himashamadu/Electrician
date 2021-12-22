import React from "react";
import "./App.css";
import Home from "./Components/pages/Home";
import Our_Services from "./Components/pages/Our_Services";
import About_Us from "./Components/pages/About_Us";
import Payment_Details from "./Components/pages/Payment_Details";
import Technical_Person from "./Components/pages/Technical_Person";
import Search_Problem from "./Components/pages/Search_Problem";
import Register from "./Components/pages/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/Our_Services" element={<Our_Services/>}  />
          <Route path="/About_Us" element={<About_Us/>}  />
          <Route path="/Payment_Details" element={<Payment_Details/>}  />
          <Route path="/Technical_Persons" element={<Technical_Person/>}  />
          <Route path="/Search_Problem" element={<Search_Problem/>}  />
          <Route path="/Register" element={<Register/>}  />
       
        </Routes>
      </Router>
    </>
  );
}

export default App;
