import React, { Component } from 'react'
import footerStreet from '../imgs/footerStreet.png'
import Icons from '../components/Icons'


export class Footer extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: '0 auto', width: '50%', display: 'flex' }}>
          <Icons />
        </div>
        <footer>
          <img src={footerStreet} alt='street' className='image-resp'></img>
        </footer>
      </div>
    )
  }
}

export default Footer
