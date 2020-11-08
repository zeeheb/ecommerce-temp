import React, { Component } from 'react'
import HeaderStore from '../components/HeaderStore'
import Footer from '../components/Footer'
import PropTypes from 'prop-types'
import data from '../data'
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
        data.products.forEach((i) => {
            if (this.props.match && i.id.toString() === this.props.match.params.id) {
                this.setState({ actualProduct: i })
            }
        })
    }

    render() {

        const { actualProduct } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <HeaderStore></HeaderStore>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {actualProduct ? (<h1>{actualProduct.name}</h1>)
                        :
                        (
                            <CircularProgress></CircularProgress>
                        )}
                </div>

                <div>
                    {
                        window.innerWidth > 1400 ?
                            (<Footer desktop />) : (<Footer mobile />)
                    }
                </div>

            </div >
        )
    }
}

export default Item
