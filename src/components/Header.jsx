import React, { Component } from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import logo from '../imgs/logo.png'

const appbarStyle = {
    background: 'none'
};

const appbarWrapper = {
    width: '80%',
    margin: '0 auto'
};

const iconStyle = {
    fontSize: '2rem',
    color: 'white',
};


const logoStyle = {
    width: '200px',
    padding: '12px'
}
export class Header extends Component {

    render() {
        return (
            <div>
                <AppBar style={appbarStyle} elevation={0}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginLeft: '0', marginRight: 'auto' }}>
                            <img style={logoStyle} src={logo}></img>
                        </div>
                        <div style={{ marginLeft: 'auto', marginRight: '0' }}>
                            <Toolbar style={appbarWrapper}>
                                <IconButton>
                                    <InstagramIcon style={iconStyle} />
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon style={iconStyle} />
                                </IconButton>
                                <IconButton>
                                    <YouTubeIcon style={iconStyle} />
                                </IconButton>
                            </Toolbar>
                        </div>
                    </div>
                </AppBar>
            </div >
        )
    }
}

export default Header
