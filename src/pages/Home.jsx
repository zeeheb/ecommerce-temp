import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/pages/home.css";
import { Typography } from "@material-ui/core";

import capaCDgif from "../imgs/cdHomePage.gif";
import windowsXP from "../imgs/windowsXP.png";
import OnlineStoreButtongif from "../imgs/online-store-button.gif";
import OnlineStoreButtonhover from "../imgs/online-store-button-hover.png";
import cartIcon from "../imgs/carrinho/carrinho.gif";
import atIcon from "../imgs/@.gif";

function Home() {
  return (
    <div id='home'>
      <Header />
      <div class='flex-container'>
        <div className='section1'>
          <img src={windowsXP} alt='' />
        </div>
        <div className='section2'>
          <div>
            <Typography
              style={{
                display: "flex",
                alignText: "center",
                flexDirection: "column",
                marginLeft: "50px",
              }}
              class='acesse'
            >
              Acesse a nossa
            </Typography>
            <Link to={{ pathname: "/store" }}>
              <img
                class='active'
                src={OnlineStoreButtongif}
                alt=''
                className='online-store-button'
              />
            </Link>
            <div>
              <img src={atIcon} className='at' alt=''></img>
              <img src={cartIcon} className='cart' alt=''></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
