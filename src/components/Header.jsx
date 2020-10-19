import React, { Component } from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import logo from "../imgs/logo.png";

const appbarStyle = {
  background: "none",
};

const appbarWrapper = {
  width: "80%",
  margin: "0 auto",
};

const iconStyle = {
  fontSize: "2rem",
  color: "white",
};

const logoStyle = {
  width: "200px",
  padding: "12px",
};
export class Header extends Component {
  render() {
    return (
      <div>
        <AppBar style={appbarStyle} elevation={0}>
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "0", marginRight: "auto" }}>
              <img style={logoStyle} src={logo}></img>
            </div>
            <div style={{ marginLeft: "auto", marginRight: "0" }}>
              <Toolbar style={appbarWrapper}>
                <a
                  href={"https://instagram.com/the.scumbags"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <InstagramIcon style={iconStyle}></InstagramIcon>
                  </IconButton>
                </a>
                <a
                  href={"https://facebook.com/thescumbags"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <FacebookIcon style={iconStyle} />
                  </IconButton>
                </a>
                <a
                  href={
                    "https://www.youtube.com/channel/UC-bImr91y27m2lYhWwKEdRw"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <YouTubeIcon style={iconStyle} />
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
