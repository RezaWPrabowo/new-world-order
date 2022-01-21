import React from "react";

import "./banner.scss";

import Logo from "../../assets/logo-2032.png";
import LogoText from "../../assets/2032-made-for-you.png";
import Arrow from "../../assets/down-arrow.png";

const Banner = () => {
  return (
    <div className="banner-container is-flex-column">
      <div className="banner-logo">
        <img src={Logo} alt="" />
      </div>

      <div className="banner-right-content">
        <img src={LogoText} alt="" />

        <p>
          <strong>On your marks! Get set! Wait for it ...</strong>
        </p>

        <p>
          Your journey to the 2032 Olympic Games starts here. Register your
          interest and we'll notify you when applications open!
        </p>

        <div className="banner-button">
          <button>Register your interest</button>
        </div>

        <img src={Arrow} alt="" />
      </div>
    </div>
  );
};

export default Banner;
