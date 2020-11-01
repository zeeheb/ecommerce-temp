import React, { Component } from "react";
import camiseta1 from "../imgs/camisetas/camiseta1.svg";
import camiseta2 from "../imgs/camisetas/camiseta2.svg";
import Footer from "../components/Footer";
import '../styles/components/footer.css'
import HeaderStore from "../components/HeaderStore";
import "../styles/pages/onlineStore.css";

export class OnlineStore extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }


  // return (
  //   <div>
  //     <div class='container-fluid'>
  //       <div class='row'>
  //         <HeaderStore />
  //       </div>
  //       <div className='grid-container'>
  //         <div class='row no-gutters' style={{ alignItems: "center" }}>
  //           <div class='col-sm' className='grid-item'>
  //             <img src={camiseta1} alt='camiseta' />
  //           </div>
  //           <div class='col-sm' className='grid-item'>
  //             <img src={camiseta2} alt='camiseta' />
  //           </div>
  //           <div class='col-sm' className='grid-item'>
  //             <img src={camiseta1} alt='camiseta' />
  //           </div>
  //           <div class='col-sm' className='grid-item'>
  //             <img src={camiseta2} alt='camiseta' />
  //           </div>
  //         </div>
  //       </div>
  //       <div class='row'>
  //         <Footer />
  //       </div>
  //     </div>
  //   </div>
  // );

  render() {

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <HeaderStore />
        </div>
        <div style={{ gap: '100px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img style={{ width: '300px' }} src={camiseta1} alt='camiseta'></img>
            <span className='text-style'>CAMISETA SCUMBAGS</span>
            <span className='price-style'>R$ 35,00</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img style={{ width: '300px' }} src={camiseta2} alt='camiseta'></img>
            <span className='text-style'>CAMISETA SCUMBAGS</span>
            <span className='price-style'>R$ 35,00</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img style={{ width: '300px' }} src={camiseta1} alt='camiseta'></img>
            <span className='text-style'>CAMISETA SCUMBAGS</span>
            <span className='price-style'>R$ 35,00</span>

          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img style={{ width: '300px' }} src={camiseta2} alt='camiseta'></img>
            <span className='text-style'>CAMISETA SCUMBAGS</span>
            <span className='price-style'>R$ 35,00</span>
          </div>

        </div>
        <div>
          {
            window.innerWidth > 1400 ?
              (<Footer desktop />) : (<Footer mobile />)
          }
        </div>
      </div>
    )
  }
}

export default OnlineStore;
