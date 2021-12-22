import React from "react";
import "../../App.css";
import "../Popup.css";
import Footer from "../Footer";
import { useState } from "react";
import Popup from "./Popup";

export default function Technical_Person() {
  //const [popUpMenu, setPopUpMenu] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <h1 className="Technical_Person">TECHNICAL PERSON</h1>

      <h2>Our Team</h2>

      <div class="row">
        <div class="column">
          <div class="card">
            <img src="./Images/img-p3.png" alt="Jane" />
            <div class="container">
             <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <div>
                <button class="button"  onClick={togglePopup}>Contact</button>
                 
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <ul className="drop-down">
                            <li>
                              <i class="fa fa-fax"> </i> 04441 5512
                            </li>
                            <br/>
                            <li>
                              <i class="fa fa-phone"> </i> 2512 45231
                            </li>
                            <br/>
                            <li>
                              <i class="far fa-building"> </i> No 512,PPP,Tyhs,02
                              HH
                            </li>
                          </ul>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="./Images/img-p2.png" alt="Mike" />
            <div class="container">
              <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
              <div>
                <button class="button"  onClick={togglePopup}>Contact</button>
                 
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <ul className="drop-down">
                            <li>
                              <i class="fa fa-fax"> </i> 04441 5512
                            </li>
                            <br/>
                            <li>
                              <i class="fa fa-phone"> </i> 2512 45231
                            </li>
                            <br/>
                            <li>
                              <i class="far fa-building"> </i> No 512,PPP,Tyhs,02
                              HH
                            </li>
                          </ul>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="./Images/img-p3.png" alt="Jane" />
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO and Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
              <div>
                <button class="button"  onClick={togglePopup}>Contact</button>
                 
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <ul className="drop-down">
                            <li>
                              <i class="fa fa-fax"> </i> 04441 5512
                            </li>
                            <br/>
                            <li>
                              <i class="fa fa-phone"> </i> 2512 45231
                            </li>
                            <br/>
                            <li>
                              <i class="far fa-building"> </i> No 512,PPP,Tyhs,02
                              HH
                            </li>
                          </ul>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <div class="card">
            <img src="./Images/img-p3.png" alt="Jane" />
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO and Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
              <div>
                <button class="button"  onClick={togglePopup}>Contact</button>
                 
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <ul className="drop-down">
                            <li>
                              <i class="fa fa-fax"> </i> 04441 5512
                            </li>
                            <br/>
                            <li>
                              <i class="fa fa-phone"> </i> 2512 45231
                            </li>
                            <br/>
                            <li>
                              <i class="far fa-building"> </i> No 512,PPP,Tyhs,02
                              HH
                            </li>
                          </ul>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img className="imageSize" src="./Images/img-p2.png" alt="Mike" />
            <div class="container">
              <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
              <div>
                <button class="button"  onClick={togglePopup}>Contact</button>
                 
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <ul className="drop-down">
                            <li>
                              <i class="fa fa-fax"> </i> 04441 5512
                            </li>
                            <br/>
                            <li>
                              <i class="fa fa-phone"> </i> 2512 45231
                            </li>
                            <br/>
                            <li>
                              <i class="far fa-building"> </i> No 512,PPP,Tyhs,02
                              HH
                            </li>
                          </ul>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="./Images/img-p3.png" alt="John" />
            <div class="container">
              <h2>John Doe</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
              <div>
                <button class="button"  onClick={togglePopup}>Contact</button>
                 
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <ul className="drop-down">
                            <li>
                              <i class="fa fa-fax"> </i> 04441 5512
                            </li>
                            <br/>
                            <li>
                              <i class="fa fa-phone"> </i> 2512 45231
                            </li>
                            <br/>
                            <li>
                              <i class="far fa-building"> </i> No 512,PPP,Tyhs,02
                              HH
                            </li>
                          </ul>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <div class="card">
            <img src="./Images/img-p3.png" alt="Jane" />
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO and Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
              <div>
                <button class="button"  onClick={togglePopup}>Contact</button>
                 
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <ul className="drop-down">
                            <li>
                              <i class="fa fa-fax"> </i> 04441 5512
                            </li>
                            <br/>
                            <li>
                              <i class="fa fa-phone"> </i> 2512 45231
                            </li>
                            <br/>
                            <li>
                              <i class="far fa-building"> </i> No 512,PPP,Tyhs,02
                              HH
                            </li>
                          </ul>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img className="imageSize" src="./Images/img-p2.png" alt="Mike" />
            <div class="container">
              <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
              <div>
                <button class="button"  onClick={togglePopup}>Contact</button>
                 
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <ul className="drop-down">
                            <li>
                              <i class="fa fa-fax"> </i> 04441 5512
                            </li>
                            <br/>
                            <li>
                              <i class="fa fa-phone"> </i> 2512 45231
                            </li>
                            <br/>
                            <li>
                              <i class="far fa-building"> </i> No 512,PPP,Tyhs,02
                              HH
                            </li>
                          </ul>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="./Images/img-p3.png" alt="John" />
            <div class="container">
              <h2>John Doe</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
              <div>
                <button class="button"  onClick={togglePopup}>Contact</button>
                 
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <ul className="drop-down">
                            <li>
                              <i class="fa fa-fax"> </i> 04441 5512
                            </li>
                            <br/>
                            <li>
                              <i class="fa fa-phone"> </i> 2512 45231
                            </li>
                            <br/>
                            <li>
                              <i class="far fa-building"> </i> No 512,PPP,Tyhs,02
                              HH
                            </li>
                          </ul>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <div class="card">
            <img src="./Images/img-p3.png" alt="Jane" />
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO and Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
              <div>
                <button class="button"  onClick={togglePopup}>Contact</button>
                 
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <ul className="drop-down">
                            <li>
                              <i class="fa fa-fax"> </i> 04441 5512
                            </li>
                            <br/>
                            <li>
                              <i class="fa fa-phone"> </i> 2512 45231
                            </li>
                            <br/>
                            <li>
                              <i class="far fa-building"> </i> No 512,PPP,Tyhs,02
                              HH
                            </li>
                          </ul>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img className="imageSize" src="./Images/img-p2.png" alt="Mike" />
            <div class="container">
              <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
              <div>
                <button class="button"  onClick={togglePopup}>Contact</button>
                 
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <ul className="drop-down">
                            <li>
                              <i class="fa fa-fax"> </i> 04441 5512
                            </li>
                            <br/>
                            <li>
                              <i class="fa fa-phone"> </i> 2512 45231
                            </li>
                            <br/>
                            <li>
                              <i class="far fa-building"> </i> No 512,PPP,Tyhs,02
                              HH
                            </li>
                          </ul>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="./Images/img-p3.png" alt="John" />
            <div class="container">
              <h2>John Doe</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
              <div>
                <button class="button"  onClick={togglePopup}>Contact</button>
                 
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <ul className="drop-down">
                            <li>
                              <i class="fa fa-fax"> </i> 04441 5512
                            </li>
                            <br/>
                            <li>
                              <i class="fa fa-phone"> </i> 2512 45231
                            </li>
                            <br/>
                            <li>
                              <i class="far fa-building"> </i> No 512,PPP,Tyhs,02
                              HH
                            </li>
                          </ul>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
