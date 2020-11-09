import React, { Component } from 'react'
import footerStreet from '../imgs/footerStreet.png'
import Icons from '../components/Icons'
import skate from '../imgs/skate.svg'

export class Footer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { props } = this;
  }

  render() {

    return (
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '60px', borderTop: 'solid #3b2a51', borderWidth: '2px', padding: '15px' }}>
        <Icons />
        <footer>
          <img src={footerStreet} alt='street' className={this.props.desktop ? 'footer-image' : 'image-resp'}></img>

          <div style={{ display: 'flex', margin: '0 auto', width: '10px' }}>
            <img src={skate} className={this.props.desktop ? 'ft-gif' : 'gif-resp'}></img>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
