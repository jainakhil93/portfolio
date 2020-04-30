import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured/index";
import VenueNfo from "./components/venueNfo";
import Highlight from "./components/Highlights";
import Pricing from "./components/pricing";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Featured />
        <VenueNfo />
        <Highlight />
        <Pricing />
      </div>
    );
  }
}

export default App;
