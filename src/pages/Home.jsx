import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/home.css";
import { Typography } from "@material-ui/core";

import capaCDgif from "../imgs/cdHomePage.gif";
import windowsXP from "../imgs/windowsXP.png";
import onlineStoreButtongif from "../imgs/online-store-button.gif";
import onlineStoreButtonhover from "../imgs/online-store-button-hover.png";
import logo from "../imgs/logo.png";
import atGif from "../imgs/atGif.gif";
import cartGif from "../imgs/carrinho/carrinho.gif";

function Home() {
  const [storeButton, setStoreButton] = useState(onlineStoreButtongif);

  return (
    <div id="home">
      <div style={{ display: "flex", background: "black" }}>
        <div style={{ margin: "0 auto" }}>
          <img className="logo-style" src={logo} alt="" />
        </div>
      </div>
      <div style={{ marginTop: "150px" }}>
        <div style={{ alignItems: "center", display: "flex" }}>
          <div className="section1">
            <img src={windowsXP} alt="" />
          </div>
          <div className="section2">
            <Typography class="acesse">Acesse a nossa</Typography>
            <Link to={{ pathname: "/store" }}>
              <div className="OnlineStoreButton">
                <div>
                  <img
                    onMouseOver={() => setStoreButton(onlineStoreButtonhover)}
                    onMouseOut={() => setStoreButton(onlineStoreButtongif)}
                    src={storeButton}
                    alt=""
                  ></img>
                </div>
              </div>
            </Link>
            <div
              style={{
                display: "flex",
                margin: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  margin: "0 auto",
                }}
              >
                <div>
                  <img
                    src={atGif}
                    alt=""
                    style={{
                      height: "83.2px",
                      width: "79.2px",
                      margin: "20px",
                    }}
                  />
                </div>
                <div>
                  <img
                    src={cartGif}
                    alt=""
                    style={{
                      height: "134.3997344970703px",
                      width: "111.99977111816406px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
