import React from 'react';
import '../styles/pages/onlineStore.css';
import Header from '../components/Header';

function OnlineStore() {
  return (
    <div>
      <Header></Header>
      <div>
        <h1>Loja:</h1>
      </div>

      <div class='container'>
        <div className='grid-container'>
          <div class='row no-gutters' style={{ alignItems: 'center' }}>
            <div class='col-lg' className='grid-item'>
              1
            </div>
            <div class='col-lg' className='grid-item'>
              2
            </div>
            <div class='col-lg' className='grid-item'>
              3
            </div>
            <div class='col-lg' className='grid-item'>
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineStore;
