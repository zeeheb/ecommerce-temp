import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/pages/home.css";
import { Typography } from "@material-ui/core";

import capaCDgif from "../imgs/cdHomePage.gif";
import windowsXP from "../imgs/windowsXP.png";
import OnlineStoreButtongif from "../imgs/online-store-button.gif";
import OnlineStoreButtonhover from "../imgs/online-store-button-hover.png";
import logo from "../imgs/logo.png";

function Home() {
  return (
    <div id="home">
      <div style={{ display: "flex", background: "black" }}>
        <div style={{ margin: "0 auto" }}>
          <img className="logo-style" src={logo} alt="" />
        </div>
      </div>
      <div class="container-fluid" style={{ marginTop: "150px" }}>
        <div class="row no-gutters" style={{ alignItems: "center" }}>
          <div class="col-sm" className="section1">
            <Typography></Typography>
            <img src={windowsXP} alt="" />
          </div>
          <div class="col-sm" className="section2">
            <Typography class="acesse">Acesse a nossa</Typography>
            <Link to={{ pathname: "/store" }}>
              <img
                class="active"
                src={OnlineStoreButtongif}
                alt=""
                style={{ height: "84px", width: "500px" }}
              />
            </Link>
            <div></div>
            <img
              class="OnlineStoreButtonhover"
              src={OnlineStoreButtonhover}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
