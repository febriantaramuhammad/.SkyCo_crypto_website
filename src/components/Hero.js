import React from "react";
import "./Hero.css";
import Crypto from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* left side */}
        <div className="left">
          <h1>
            Most Trusted And Secure{" "}
            <span className="secondary">Digital Assets Exchange</span>{" "}
          </h1>
          <p>Safe Investment With Our Biometric Verification</p>
          <div className="input-container">
            <input type="email" placeholder="enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
        {/* left side end */}

        {/* right side */}
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="" />
          </div>
        </div>
        {/* right side end*/}
      </div>
    </div>
  );
};

export default Hero;
