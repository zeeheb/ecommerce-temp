import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/pages/home.css";
import { Typography } from "@material-ui/core";

import capaCDgif from "../imgs/cdHomePage.gif";
import windowsXP from "../imgs/windowsXP.png";
import OnlineStoreButtongif from "../imgs/online-store-button.gif";
import OnlineStoreButtonhover from "../imgs/online-store-button-hover.png";
<<<<<<< HEAD
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
=======
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
>>>>>>> 5ca94b9ac39ff5d9b7b5ac6bd39ebd07cf413f05
            <Link to={{ pathname: "/store" }}>
              <img
                class="active"
                src={OnlineStoreButtongif}
<<<<<<< HEAD
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
=======
                alt=''
                className='online-store-button'
              />
            </Link>
            <div>
              <img src={atIcon} className='at' alt=''></img>
              <img src={cartIcon} className='cart' alt=''></img>
            </div>
>>>>>>> 5ca94b9ac39ff5d9b7b5ac6bd39ebd07cf413f05
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
