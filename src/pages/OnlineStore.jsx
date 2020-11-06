import React, { Component } from "react";
import camiseta1 from "../imgs/camisetas/camiseta1.svg";
import camiseta2 from "../imgs/camisetas/camiseta2.svg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import '../styles/components/footer.css'
import HeaderStore from "../components/HeaderStore";
import "../styles/pages/onlineStore.css";

export class OnlineStore extends Component {

  constructor(props) {
    super(props)

    this.state = {
      itemSpecs: {
        nome: 'Camisa',
        id: 32,
        preco: 35.00
      }
    }
  }

  render() {

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <HeaderStore />
        </div>
        <div style={{ gap: '100px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

          <Link
            to={{
              pathname: `/item/32`,
              itemSpecs: {
                preco: 10
              }
            }}
            style={{ textDecoration: "none" }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img style={{ width: '300px' }} src={camiseta1} alt='camiseta'></img>
              <span className='text-style'>CAMISETA SCUMBAGS</span>
              <span className='price-style'>R$ 35,00</span>
            </div>
          </Link>

          <Link
            to={"/item"}
            style={{ textDecoration: "none" }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img style={{ width: '300px' }} src={camiseta2} alt='camiseta'></img>
              <span className='text-style'>CAMISETA SCUMBAGS</span>
              <span className='price-style'>R$ 35,00</span>
            </div>
          </Link>

          <Link
            to={"/item"}
            style={{ textDecoration: "none" }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img style={{ width: '300px' }} src={camiseta1} alt='camiseta'></img>
              <span className='text-style'>CAMISETA SCUMBAGS</span>
              <span className='price-style'>R$ 35,00</span>
            </div>
          </Link>

          <Link
            to={"/item"}
            style={{ textDecoration: "none" }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img style={{ width: '300px' }} src={camiseta2} alt='camiseta'></img>
              <span className='text-style'>CAMISETA SCUMBAGS</span>
              <span className='price-style'>R$ 35,00</span>
            </div>
          </Link>

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
