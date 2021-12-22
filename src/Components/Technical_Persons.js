import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Technical_Persons.css";

function Technical_Persons() {
  return (
    <div className="Technical-container">
    <img src="./Images/img-2.jpg" alt="Test" style={{position: "fixed",width: "100%"}}/>
            <h1>At Your Service</h1>
            <p>What are you waiting for?</p>

      <div className="Technical-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Technical_Persons;
