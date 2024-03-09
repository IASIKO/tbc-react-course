import "./App.css";

function App() {
  return (
    <>
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
                    <a href="#">F</a>
                    <a href="#">T</a>
                    <a href="#">I</a>
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

      <main>
        <div className="backgroundLayout">
          <div className="backgroundOverlay"></div>
          <div className="backgroundText">
            <h1>
              Good <span>Drink</span> for Good <span>Moments</span>.  
            </h1>
          </div>
        </div>
      </main>

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
    </>
  );
}

export default App;
