import React, { Component } from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import logo from "../imgs/logo.png";
import "../styles/components/header.css";

export class Header extends Component {
  render() {
    return (
      <div style={{ marginBottom: "100px" }}>
        <AppBar className='appbar-style' elevation={0}>
          <div className='header'>
            <div style={{ marginLeft: "0", marginRight: "auto" }}>
              <a href={"/"}>
                <img className='logo-style' src={logo} alt='logo'></img>
              </a>
            </div>
            <div style={{ marginLeft: "auto", marginRight: "0" }}>
              <Toolbar className='appbar-wrapper'>
                <a
                  href={"https://instagram.com/the.scumbags"}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <IconButton>
                    <InstagramIcon className='icon-style'></InstagramIcon>
                  </IconButton>
                </a>
                <a
                  href={"https://facebook.com/thescumbags"}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <IconButton>
                    <FacebookIcon className='icon-style' />
                  </IconButton>
                </a>
                <a
                  href={
                    "https://www.youtube.com/channel/UC-bImr91y27m2lYhWwKEdRw"
                  }
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <IconButton>
                    <YouTubeIcon className='icon-style' />
                  </IconButton>
                </a>
              </Toolbar>
            </div>
          </div>
        </AppBar>
      </div>
    );
  }
}

export default Header;
