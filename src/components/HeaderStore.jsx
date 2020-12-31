import React, { Component } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../imgs/carrinho/carrinho.gif";
import logo from "../imgs/logo.png";
import "../styles/components/headerStore.css";

export class Header extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          background: "black",
          height: "80px",
        }}
      >
        <div style={{ flex: 2 }}>
          <Link to="/">
            <img className="logo-style" src={logo} alt="" />
          </Link>
        </div>
        <div style={{ flex: 7 }} />
        <div style={{ flex: 3 }}>
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <div className="appbar-wrapper1">
              <img src={cartIcon} alt="cart" height="66px" width="52px" />
              MEU CARRINHO
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
