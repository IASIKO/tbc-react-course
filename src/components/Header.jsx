import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="wrap">
        <div className="container">
          <div className="row">
            <div className="contactRow">
              <p>
                <a href="#">
                  <span>+00 1234 567</span>
                </a>
                <a href="#">
                  <span>youremail@email.com</span>
                </a>
              </p>
            </div>

            <div className="authRow">
              <div className="socialMedia">
                <p>
                  <a href="#">FB</a>
                  <a href="#">TW</a>
                  <a href="#">IN</a>
                </p>
              </div>
              <div className="reg">
                <p>
                  <a href="#">sign up</a>
                  <a href="#">log in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navBar">
        <div className="navContainer">
          <a className="navbarBrand" href="#">
            Liquor <span>store</span>
          </a>

          <div className="navBarPages">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div style={{ color: "var(--red)" }}>Cart</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
