import React, { Component } from 'react'
import HeaderStore from '../components/HeaderStore'
import Footer from '../components/Footer'
import PropTypes from 'prop-types'


export class Item extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <HeaderStore></HeaderStore>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <h1>{this.props.location.itemSpecs ? this.props.location.itemSpecs.preco : 'Sem Item'}</h1>
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

export default Item
