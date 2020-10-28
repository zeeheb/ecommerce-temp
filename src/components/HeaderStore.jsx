import React, { Component } from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import "../styles/components/headerStore.css";
import cartIcon from "../imgs/carrinho/carrinho.gif";

export class Header extends Component {
  render() {
    return (
      <div style={{ marginBottom: "60px" }}>
        <AppBar className='appbar-style' elevation={0}>
          <div className='header'>
            <div style={{ marginLeft: "0", marginRight: "auto" }}>
              <a href={"/"}>
                <img className='logo-style' src={logo} alt='logo'></img>
              </a>
            </div>
            <div style={{ marginLeft: "auto", marginRight: "0" }}>
              <Toolbar className='appbar-wrapper'>
                <Link to={"/Cart"} target='_blank' rel='noopener noreferrer'>
                  <IconButton>
                    <img src={cartIcon} alt='cart' height='86px' width='72px' />
                    <typography className='my-cart'>MEU CARRINHO</typography>
                  </IconButton>
                </Link>
              </Toolbar>
            </div>
          </div>
        </AppBar>
      </div>
    );
  }
}

export default Header;
