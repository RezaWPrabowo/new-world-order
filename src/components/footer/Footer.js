import React from "react";
import "./footer.scss";

import Logo from "../../assets/logo-queensland.png";

const Footer = () => {
  return (
    <>
      <div className="footer-desktop is-flex">
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>

        <div className="footer-title">
          <strong>Queensland</strong> Goverment
        </div>
      </div>

      <div className="footer-mobile-ext">
        <p>
          Help | Copyright | Disclaimer | Privacy | Right to information |
          Accessibility | Jobs in Queensland Goverment | Tagalog (Other
          languages)
        </p>

        <p>&copy; The State of Queensland 1995-2021</p>

        <p>Queensland Goverment</p>
      </div>
    </>
  );
};

export default Footer;
