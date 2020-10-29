import React from "react";
import { Link } from "react-router-dom";
import estampa2 from "../imgs/estampa2.png";

import Header from "../components/Header";
import "../styles/pages/home.css";

function Home() {
  return (
    <div id='home'>
      <Header />
      <div className='content-wrapper'>
        <main>
          <img src={estampa2} className='estampa-style' alt='logo'></img>
        </main>
        <div>
          <Link to='/store'>
            <span className='go-to-store'>Store</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
