import React, { Component } from "react";
import fbHover from "../styles/components/icons/fb-hover.svg";
import igHover from "../styles/components/icons/ig-hover.svg";
import spHover from "../styles/components/icons/sp-hover.svg";
import ytHover from "../styles/components/icons/yt-hover.svg";
import fb from "../styles/components/icons/fb.svg";
import ig from "../styles/components/icons/ig.svg";
import sp from "../styles/components/icons/sp.svg";
import yt from "../styles/components/icons/yt.svg";

export class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      igSrc: ig,
      fbSrc: fb,
      spSrc: sp,
      ytSrc: yt,
    };
  }

  render() {
    return (
      <div style={{ margin: "0 auto" }}>
        <div class="container"></div>
        <div class="row">
          <div class="col-sm" style={{ padding: "10px" }}>
            <button>
              <a
                href={"https://facebook.com/thescumbags"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  onMouseOver={() => this.setState({ fbSrc: fbHover })}
                  onMouseOut={() => this.setState({ fbSrc: fb })}
                  src={this.state.fbSrc}
                  alt=""
                ></img>
              </a>
            </button>
          </div>

          <div class="col-sm" style={{ padding: "10px" }}>
            <button>
              <a
                href={"https://instagram.com/the.scumbags"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  onMouseOver={() => this.setState({ igSrc: igHover })}
                  onMouseOut={() => this.setState({ igSrc: ig })}
                  src={this.state.igSrc}
                  alt=""
                ></img>
              </a>
            </button>
          </div>
          <div class="col-sm" style={{ padding: "10px" }}>
            <button>
              <a
                href={
                  "https://www.youtube.com/channel/UC-bImr91y27m2lYhWwKEdRw"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  onMouseOver={() => this.setState({ ytSrc: ytHover })}
                  onMouseOut={() => this.setState({ ytSrc: yt })}
                  src={this.state.ytSrc}
                  alt=""
                ></img>
              </a>
            </button>
          </div>
          <div class="col-sm" style={{ padding: "10px" }}>
            <button>
              <a
                href={"https://open.spotify.com/artist/4h2cZ1HMMIMuBIHR1Uke0q"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  onMouseOver={() => this.setState({ spSrc: spHover })}
                  onMouseOut={() => this.setState({ spSrc: sp })}
                  src={this.state.spSrc}
                  alt=""
                ></img>
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Icons;
