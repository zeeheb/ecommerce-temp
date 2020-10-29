import React, { Component } from 'react'
import fbHover from '../styles/components/icons/fb-hover.svg'
import igHover from '../styles/components/icons/ig-hover.svg'
import spHover from '../styles/components/icons/sp-hover.svg'
import ytHover from '../styles/components/icons/yt-hover.svg'
import fb from '../styles/components/icons/fb.svg'
import ig from '../styles/components/icons/ig.svg'
import sp from '../styles/components/icons/sp.svg'
import yt from '../styles/components/icons/yt.svg'






export class Icons extends Component {
  render() {
    return (
      <div style={{ margin: '0 auto' }}>
        <div class='container'></div>
        <div class='row'>

          <div class='col-sm' style={{ padding: '10px' }}>
            <button>
              <a href={"https://facebook.com/thescumbags"}
                target='_blank'
                rel='noopener noreferrer'>
                <img src={fb}></img>
              </a>
            </button>
          </div>

          <div class='col-sm' style={{ padding: '10px' }} >
            <button>
              <a href={"https://instagram.com/the.scumbags"}
                target='_blank'
                rel='noopener noreferrer'>
                <img src={ig}></img>
              </a>
            </button>
          </div>
          <div class='col-sm' style={{ padding: '10px' }}>
            <button>
              <a href={"https://www.youtube.com/channel/UC-bImr91y27m2lYhWwKEdRw"}
                target='_blank'
                rel='noopener noreferrer'>
                <img src={yt}></img>
              </a>
            </button>
          </div>
          <div class='col-sm' style={{ padding: '10px' }}>
            <button>
              <a href={"https://facebook.com/thescumbags"}
                target='_blank'
                rel='noopener noreferrer'>
                <img src={sp}></img>
              </a>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Icons





