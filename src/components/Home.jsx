import React, { Component } from "react";
import Header from "./Header";
import estampa2 from "../imgs/estampa2.png";
import "../styles/Home.css";


const rootStyle = {
  overflow: 'hidden',
  minHeight: "100vh",
  width: "100%",
  // backgroundImage: `url(${estampa2})`,
  backgroundColor: "#22213C",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const estampaStyle = {
  width: "500px",
  margin: 'auto',
  display: 'block',
};

const buttonStyle = {
  borderRadius: '10px',
  margin: 'auto',
  width: '200px',
  fontFamily: 'Brianne',
  fontSize: '100px',
  textAlign: 'center',
  border: 'solid',
  // borderColor: 'black',
  marginTop: '20px',
  marginBottom: '10px',
  borderColor: this ? this.state.colors[0] : 'black'
}


export class Home extends Component {

  constructor(props) {
    super(props);


  }

  componentDidMount() {

  }


  render() {
    return (
      <div style={rootStyle} >
        <Header></Header>,
        <div>
          <img src={estampa2} style={estampaStyle}></img>
          <div style={buttonStyle}>
            <span>Store</span>
          </div>
        </div>
      </div >
    );
  }
}

export default Home;
