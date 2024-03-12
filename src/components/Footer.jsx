import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerWraper">
      <div className="footerContentContainer">
        <div className="footerRow">
          <div className="footerColumn">
            <div>
              <h2>My Account</h2>
              <ul>
                <li>My Account</li>
                <li>Register</li>
                <li>Log in</li>
                <li>My Order</li>
              </ul>
            </div>
          </div>
          <div className="footerColumn">
            <div>
              <h2>Information</h2>
              <ul>
                <li>About us</li>
                <li>Catalog</li>
                <li>Contact us</li>
                <li>Term & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="footerColumn">
            <div>
              <h2>Quick Link</h2>
              <ul>
                <li>New User</li>
                <li>Help Center</li>
                <li>Report Spam</li>
                <li>Faq's</li>
              </ul>
            </div>
          </div>
          <div className="footerColumn">
            <div>
              <h2>Newsletter Subscription</h2>
              <input type="email" placeholder="Email..." />
            </div>
          </div>
        </div>
      </div>
      <div className="footerRulesContainer">
        <div className="rulesContainer">
          <p>
            Copyright © 2024 All rights reserved | This website is made by{" "}
            <a
              href="https://www.linkedin.com/in/giorgi-iaseshvili"
              target="_blank"
            >
              Giorgi Iaseshvili
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
