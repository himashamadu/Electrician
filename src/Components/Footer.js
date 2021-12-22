import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Register from "./Components/pages/Register";

function Footer() {
  return (
    <div className="footer-container" id="bottomFooter">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          There are many variations of passages of Lorem Ipsum available{" "}
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">
              <i class="fa fa-phone"> </i> 077412685
            </Link>
            <Link to="/">
              <i class="fa fa-envelope"> </i> md@Support@gmail.com
            </Link>
            <Link to="/">
              {" "}
              <i class="fas fa-city"> </i> Destinations
            </Link>
            <Link to="/">
              <i class="fa fa-fax"> </i> 265 12452 78
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
          <div class="footer-link-items">
            <h2>Welcome</h2>
            <form
              style={{ display: "block" }}
              target="_blank"
              data-hs-cf-bound="true"
            >
              {" "}
              <input
                className="signIN"
                type="text"
                placeholder="Username"
                name="username"
              />{" "}
              <br />
              <input
                className="signIN"
                type="password"
                placeholder="password"
                name="password"
              />{" "}
              <input
                className="btn--outline"
                type="submit"
                value="SIGN-IN"
                name="login_x"
              />
              <Link to={"/Register"} style={{ margin: "20px" }}>
                New User?
              </Link>
            </form>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Electrician
              <i class="fas fa-tools" />
            </Link>
          </div>
          <small class="website-rights">Electrician © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
