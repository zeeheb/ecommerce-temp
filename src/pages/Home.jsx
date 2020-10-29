import React from "react";
import { Link } from "react-router-dom";
import capaCD from "../imgs/cdHomePage.png";
import Header from "../components/Header";
import "../styles/pages/home.css";
import { Typography } from "@material-ui/core";

import capaCDgif from "../imgs/cdHomePage.gif";
import windowsXP from "../imgs/windowsXP.png";
import OnlineStoreButtongif from "../imgs/online-store-button.gif";
import OnlineStoreButtonhover from "../imgs/online-store-button-hover.png";

function Home() {
  return (
    <div id='home'>
      <Header />
      <div class='container-fluid' style={{ marginTop: "150px" }}>
        <div class='row no-gutters' style={{ alignItems: "center" }}>
          <div class='col-sm' className='section1'>
            <img class='static' src={capaCD} alt='' />

            <Typography></Typography>
            <img src={windowsXP} alt='' />
          </div>
          <div class='col-sm' className='section2'>
            <Typography class='acesse'>Acesse a nossa</Typography>
            <img
              class='active'
              src={OnlineStoreButtongif}
              alt=''
              style={{ height: "84px", width: "500px" }}
            />
            <div></div>
            <img
              class='active'
              src={OnlineStoreButtonhover}
              alt=''
              style={{ left: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
