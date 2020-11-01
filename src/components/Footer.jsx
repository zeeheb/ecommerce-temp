import React, { Component } from 'react'
import footerStreet from '../imgs/footerStreet.png'
import Icons from '../components/Icons'


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
        <div style={{ margin: '0 auto', width: '50%', display: 'flex', marginTop: '80px' }}>
          <Icons />
        </div>
        <footer>
          <img src={footerStreet} alt='street' className={this.props.desktop ? 'footer-image' : 'image-resp'}></img>
        </footer>
      </div>
    )
  }
}

export default Footer
