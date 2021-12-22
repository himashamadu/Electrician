import React, { useState, useEffect, useRef  } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link as Link1 } from 'react-scroll';

function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0, 
    behavior: 'smooth',
  });
}

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1060) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container" >
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Electrician
            <i class='fas fa-tools' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Technical_Persons" className="nav-links" onClick={closeMobileMenu}>
              Technical Persons
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Our_Services" className="nav-links" onClick={closeMobileMenu}>
              OurSerivices
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleScroll}>
              Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Payment_Details" className="nav-links" onClick={closeMobileMenu}>
              Payment Details
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About_Us" className="nav-links" onClick={closeMobileMenu}>
              About Us
              </Link>
            </li>
            <li>
              <Link1 
              activeClass="active" to="cardTest" spy={true} smooth={true}
                className='nav-links-mobile '
                onClick={closeMobileMenu}
              >
                Search Problem
              </Link1>
            </li>
          </ul>
          <Link1 activeClass="active" to="cardTest" spy={true} smooth={true}> {button && <Button buttonStyle='btn--outline'>Search Problem</Button> }</Link1> 
        </div>
      </nav>
    </>
  );
}


export default Navbar;
