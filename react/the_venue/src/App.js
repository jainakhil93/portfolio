import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured/index";
import VenueNfo from "./components/venueNfo";
import Highlight from "./components/Highlights";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Featured />
        <VenueNfo />
        <Highlight />
      </div>
    );
  }
}

export default App;
