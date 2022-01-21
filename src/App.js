import React, { Component } from "react";

import { Header, Footer, Body } from "./components/index";

import "./global.scss";

class App extends Component {
  render() {
    return (
      <div className="hero is-fullheight">
        <div className="hero-head">
          <Header />
        </div>

        <body className="has-navbar-fixed-top">
          <Body />

          <div className="hero-foot">
            <Footer />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
