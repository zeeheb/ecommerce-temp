import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/home.css";
import { Typography } from "@material-ui/core";

import capaCDgif from "../imgs/cdHomePage.gif";
import capaCDpng from "../imgs/cdHomePage.png";
import windowsXP from "../imgs/windowsXP.png";
import onlineStoreButtongif from "../imgs/online-store-button.gif";
import onlineStoreButtonhover from "../imgs/online-store-button-hover.png";
import logo from "../imgs/logo.png";
import atGif from "../imgs/atGif.gif";
import cartGif from "../imgs/carrinho/carrinho.gif";
import Icons from "../components/Icons";

function Home() {
  const [storeButton, setStoreButton] = useState(onlineStoreButtongif);
  const [capaCDanim, setCapaCDanim] = useState(capaCDpng);

  return (
    <div id="home">
      <div style={{ display: "flex", background: "black" }}>
        <div style={{ margin: "0 auto" }}>
          <img className="logo-style" src={logo} alt="" />
        </div>
      </div>
      <div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            position: "relative",
            marginTop: "-70px",
          }}
        >
          <div className="section1">
            <img src={windowsXP} alt="" style={{ width: "550px" }} />
          </div>
          <div>
            <img
              onMouseOver={() => setCapaCDanim(capaCDgif)}
              onMouseOut={() => setCapaCDanim(capaCDpng)}
              src={capaCDanim}
              alt=""
              style={{
                position: "absolute",
                top: "30px",
                left: "90px",
                width: "700px",
              }}
            />
          </div>
          <div className="section2">
            <Typography class="acesse">Acesse a nossa</Typography>
            <Link to={{ pathname: "/store" }}>
              <div className="OnlineStoreButton">
                <div>
                  <img
                    // onMouseOver={() => setStoreButton(onlineStoreButtonhover)}
                    // onMouseOut={() => setStoreButton(onlineStoreButtongif)}
                    src={storeButton}
                    alt=""
                    style={{ width: "350px" }}
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
                      width: "60px",
                      margin: "20px",
                    }}
                  />
                </div>
                <div>
                  <img
                    src={cartGif}
                    alt=""
                    style={{
                      width: "90px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "65px",
          padding: "15px",
        }}
      >
        <Icons></Icons>
      </div>
    </div>
  );
}

export default Home;
