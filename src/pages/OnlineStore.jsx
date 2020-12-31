import React, { Component } from "react";
import camiseta1 from "../imgs/camisetas/camiseta1.svg";
import camiseta2 from "../imgs/camisetas/camiseta2.svg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import '../styles/components/footer.css'
import HeaderStore from "../components/HeaderStore";
import "../styles/pages/onlineStore.css";
import data from '../data';
import settings from '../settings'
import coming from  '../styles/pages/coming3.gif'


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

          {
           settings.done ? data.products.map((i) =>
              <Link to={{
                pathname: `/item/${i.id}`
              }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <img style={{ width: '250px' }} src={i.url} alt={i.name}></img>
                  <span className='text-style'>{i.name}</span>
                  <span className='price-style'>R$ {(i.price)}</span>
                </div>
              </Link>
            ) :
           data.products.map((j) =>       
            data.comingProduct.map((i) =>
              
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <img style={{ width: '250px' }} src={i.url} alt={i.name}></img>
                  <span className='text-style'>{i.name}</span>
                  <span className='price-style'>R$ {i.price}</span>
                  </div>
            
                )
              ) 
          }

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
