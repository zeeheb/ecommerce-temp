import React, { Component } from 'react'
import HeaderStore from '../components/HeaderStore'
import Icons from '../components/Icons'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import data from '../data'
import settings from '../settings'
import CircularProgress from '@material-ui/core/CircularProgress';



export class Item extends Component {
  constructor(props) {
    super(props)

    this.state = {
      actualProduct: '',
    }
  }


  componentDidMount() {
    this.checkActual()
  }

  checkActual = () => {

    if(settings.done) {
      data.products.forEach((i) => {
        if (this.props.match && i.id.toString() === this.props.match.params.id) {
          this.setState({ actualProduct: i })
        }
      })
    } 
  }

  render() {

    const { actualProduct } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <HeaderStore></HeaderStore>

        {actualProduct ?
          (
            <div style={{ display: 'flex', flexDirection: 'row', width: '50%', margin: '0 auto' }}>

              <Link to={{ pathname: "/store" }}>
                <span style={{ textDecoration: 'underline' }} className='back-style'>
                  {'< VOLTAR'}
                </span>
              </Link>

              <div style={{ display: 'flex', margin: '0 auto', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <img style={{ width: '350px' }} src={actualProduct.url}></img>
                </div>

                <div style={{ flexDirection: 'column', width: '250px', minHeight: '200px' }}>
                  <div style={{ flexDirection: 'row' }}>
                    <span className='item-detail-text'>{actualProduct.name}</span>
                  </div>

                  <div style={{ flexDirection: 'row' }}>
                    <span className='price-detail-text'>R$ {actualProduct.price}</span>
                  </div>

                  <select style={{ width: '70px', background: 'none' }}>
                    {
                      actualProduct.sizes.map((s) =>
                        <option onClick={() => {
                          this.setState({ size: s })
                        }}
                          value={this.state.size}>{s}</option>
                      )
                    }
                  </select>

                  <div style={{ flexDirection: 'row', margin: '1.5rem 0' }}>
                    <span className='price-style'>{actualProduct.description}</span>
                  </div>
                </div>
              </div>
            </div>
          )
          :
          (
            <div style={{ display: 'flex', flexDirection: 'row', width: '50%', margin: '0 auto' }}>
              <CircularProgress style={{ margin: '0 auto' }}></CircularProgress>
            </div>
          )
        }


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

export default Item
