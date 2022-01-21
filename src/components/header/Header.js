import React from "react";
import "./header.scss";

import Logo from "../../assets/icon-header.png";

const Header = () => {
  return (
    <nav className="header-container is-flex">
      <div className="header-title">Queensland Academy of Sport</div>

      <div className="header-button">
        <button>Register now</button>
      </div>

      <div className="header-logo">
        <img src={Logo} alt="" />
      </div>
    </nav>
  );
};

export default Header;
