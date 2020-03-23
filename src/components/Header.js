import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IoIosSearch } from 'react-icons/io'
import { AiOutlineShopping } from 'react-icons/ai'
import Sticky from 'react-sticky-el'

export default class Header extends Component 
{

    showMenu() {
        document.getElementById('outermenu').style.left = '0%'
        document.getElementById('outermenu').style.transition = 'left 0.3s'
    }

    render() {

        const styleSpan = {
            width: '20px',
            height: '3px',
            background: '#333',
            display: 'block',
            margin: '5px 0'
        }

        return (
            <div 
                className="position-absolute"
                style={{
                    left: '0',
                    top: '0',
                    right: '0',
                    zIndex: '9999999'
                }}
            >
                <Sticky topOffset={200} >
                    <header
                        className="bg-transparent py-3 inner-sticky"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-3 align-self-center">
                                    <div
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        onClick={this.showMenu}
                                    >
                                        <span style={styleSpan} />
                                        <span style={styleSpan} />
                                        <span style={styleSpan} />
                                    </div>
                                </div>
                                <div className="col-6 text-center px-0">
                                    <Link 
                                        to="/"
                                        className="text-decoration-none text-dark font-weight-bold text-uppercase"
                                        style={{
                                            fontSize: '1.5rem',
                                            letterSpacing: '2px'
                                        }}
                                    ><span style={{color:'#e642f5'}}>F</span><span style={{color:'#4287f5'}}>o</span><span style={{color:'#42f5c8'}}>o</span><span style={{color:'#a74713'}}>d</span></Link>
                                </div>
                                <div className="col-3 align-self-center">
                                    <div className="d-flex justify-content-end">
                                        <div className="mr-2 mr-sm-4"><IoIosSearch size='1.5em' color='#000' /></div>
                                        <div className=""><AiOutlineShopping size='1.5em' color='#000' /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </Sticky>
            </div>
        )
    }
}
