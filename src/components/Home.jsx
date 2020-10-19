import React, { Component } from "react";
import Header from "./Header";
import estampa2 from "../imgs/estampa2.png";

const rootStyle = {
  minHeight: "100vh",
  width: "100%",
  backgroundImage: `url(${estampa2})`,
  backgroundColor: "#22213C",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const estampaStyle = {
  width: "300px",
};

export class Home extends Component {
  render() {
    return (
      <div style={rootStyle}>
        <Header></Header>
      </div>
    );
  }
}

export default Home;
