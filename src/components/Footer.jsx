import React, { Component } from 'react'
import footerStreet from '../imgs/footerStreet.png'
import Icons from '../components/Icons'
import skate from '../imgs/skate.svg'
import { Divider } from '@material-ui/core';
import skategif from '../imgs/skate.gif'

export class Footer extends Component {
 
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { props } = this;
  }

  render() {

    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '60px', borderTop: 'solid #3b2a51', borderWidth: '2px', padding: '15px' }}>
          <Icons></Icons>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', width: '100%' }}>
            <img style={{ width: '100%' }} src={footerStreet}></img>
          </div>
          <div style={{ position: 'absolute', width: '100%' }}>
            <marquee direction='right' scrollamount='30' >
              <img style={{ width: '15%' }} src={skategif}></img>
            </marquee>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
