import React from "react";
import Crypto from "../assets/trade.png";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        {/* left */}
        <div className="left">
          <img src={Crypto} alt="" />
        </div>

        {/* right */}
        <div className="right">
          <h2>Earn Passive Income With .SkyCo</h2>
          <p>
            Get Up To 12% Annual Rewards On 30+ Digital Assets. Simply hold your
            assets in the app to automatically earn rewards at the end of each
            month with no lockups and no limits.
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter Your Email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
