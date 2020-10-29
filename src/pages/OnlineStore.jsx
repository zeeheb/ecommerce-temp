import React from "react";
import camiseta1 from "../imgs/camisetas/camiseta1.svg";
import camiseta2 from "../imgs/camisetas/camiseta2.svg";

import HeaderStore from "../components/HeaderStore";
import "../styles/pages/onlineStore.css";

function OnlineStore() {
  return (
    <div>
      <HeaderStore />
      <div>
        <h1>Loja:</h1>
      </div>

      <div class='container-fluid'>
        <div className='grid-container'>
          <div class='row no-gutters' style={{ alignItems: "center" }}>
            <div class='col-sm' className='grid-item'>
              <img src={camiseta1} alt='camiseta' />
            </div>
            <div class='col-sm' className='grid-item'>
              <img src={camiseta2} alt='camiseta' />
            </div>
            <div class='col-sm' className='grid-item'>
              <img src={camiseta1} alt='camiseta' />
            </div>
            <div class='col-sm' className='grid-item'>
              <img src={camiseta2} alt='camiseta' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineStore;
