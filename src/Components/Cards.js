import React, {useState,useEffect} from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from "../Search";



function Cards() {

  const elecProblems = [
  "ABS SURGES",
  "BDK STRIKES",
  "HOUSE DAMGE",
  "POWER LINES",
  "MICROSOUND",
  "FREQUENT ELECTRICAL SURGES",
];

  return (
    <div className="cards" id="cardTest">
      <h1>Check out Common Electrical Problems</h1>
      <br/>
      <Search placeholder="Enter Problem" handleChange={e=>(e.target.value)}/>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <p>
            <h3>1. FREQUENT ELECTRICAL SURGES</h3>
            <br></br>
              Electrical surges can be caused by anything from lightning
              strikes, damage to power lines, faulty appliances and bad
              electrical wiring in the house. While an actual surge only lasts a
              microsecond, frequent surges can damage the electrical components
              connected to your home, degrading their life expectancy
              significantly. If you experience frequent electrical surges, the
              culprit is probably an electrical device connected to the home
              grid or the wiring itself. Try removing any cheaply made devices
              or powerboards from the outlet to see if this prevents the surges.
              Otherwise, it might be time to consult a professional electrician.
            </p>
           
          </ul>
          <ul className="cards__items">
            
            <p>
            <h3>1. ABS SURGES</h3>
            <br></br>
              Electrical surges can be caused by anything from lightning
              strikes, damage to power lines, faulty appliances and bad
              electrical wiring in the house. While an actual surge only lasts a
              microsecond, frequent surges can damage the electrical components
              connected to your home, degrading their life expectancy
              significantly. If you experience frequent electrical surges, the
              culprit is probably an electrical device connected to the home
              grid or the wiring itself. Try removing any cheaply made devices
              or powerboards from the outlet to see if this prevents the surges.
              Otherwise, it might be time to consult a professional electrician.
            </p>
           
          </ul>
          <ul className="cards__items">
            
            <p>
            <h3>1. BDK STRIKES</h3>
            <br></br>
              Electrical surges can be caused by anything from lightning
              strikes, damage to power lines, faulty appliances and bad
              electrical wiring in the house. While an actual surge only lasts a
              microsecond, frequent surges can damage the electrical components
              connected to your home, degrading their life expectancy
              significantly. If you experience frequent electrical surges, the
              culprit is probably an electrical device connected to the home
              grid or the wiring itself. Try removing any cheaply made devices
              or powerboards from the outlet to see if this prevents the surges.
              Otherwise, it might be time to consult a professional electrician.
            </p>
           
          </ul>
          <ul className="cards__items">
            
            <p>
            <h3>1. HOUSE DAMGE</h3>
            <br></br>
              Electrical surges can be caused by anything from lightning
              strikes, damage to power lines, faulty appliances and bad
              electrical wiring in the house. While an actual surge only lasts a
              microsecond, frequent surges can damage the electrical components
              connected to your home, degrading their life expectancy
              significantly. If you experience frequent electrical surges, the
              culprit is probably an electrical device connected to the home
              grid or the wiring itself. Try removing any cheaply made devices
              or powerboards from the outlet to see if this prevents the surges.
              Otherwise, it might be time to consult a professional electrician.
            </p>
           
          </ul>
          <ul className="cards__items">
            
            <p>
            <h3>1. POWER LINES</h3>
            <br></br>
              Electrical surges can be caused by anything from lightning
              strikes, damage to power lines, faulty appliances and bad
              electrical wiring in the house. While an actual surge only lasts a
              microsecond, frequent surges can damage the electrical components
              connected to your home, degrading their life expectancy
              significantly. If you experience frequent electrical surges, the
              culprit is probably an electrical device connected to the home
              grid or the wiring itself. Try removing any cheaply made devices
              or powerboards from the outlet to see if this prevents the surges.
              Otherwise, it might be time to consult a professional electrician.
            </p>
           
          </ul>
          <ul className="cards__items">
            
            <p>
            <h3>1. MICROSOUND</h3>
            <br></br>
              Electrical surges can be caused by anything from lightning
              strikes, damage to power lines, faulty appliances and bad
              electrical wiring in the house. While an actual surge only lasts a
              microsecond, frequent surges can damage the electrical components
              connected to your home, degrading their life expectancy
              significantly. If you experience frequent electrical surges, the
              culprit is probably an electrical device connected to the home
              grid or the wiring itself. Try removing any cheaply made devices
              or powerboards from the outlet to see if this prevents the surges.
              Otherwise, it might be time to consult a professional electrician.
            </p>
           
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./Images/img-3.jpg"
              text="See the Different"
              label="Our_Serivices"
              path="/Our_Serivices"
            />
            <CardItem
              src="./Images/img-1.jpg"
              text="Test Test Test"
              label="Technical Persons"
              path="/Technical_Persons"
            />
            <CardItem
              src="./Images/img-1.jpg"
              text="Test Test Test"
              label="Technical Persons"
              path="/Technical_Persons"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
