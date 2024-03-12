import React from "react";
import './LandingContent.css'

const LandingContent = () => {
  return (
    <main>
      <div className="backgroundLayout">
        <div className="backgroundOverlay"></div>
        <div className="backgroundText">
          <h1>
            Good <span>Drink</span> for Good <span>Moments</span>.
            <p>
              <a href="#" className="shopNowBtn">
                Shop Now
              </a>
              <a href="#" className="readMoreBtn">
                Read more
              </a>
            </p>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default LandingContent;
