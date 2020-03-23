import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { FaFacebook , FaInstagram , FaTwitter } from "react-icons/fa"

export default class Footer extends Component 
{
    render() {
        return (
            <div
                className="bg-white py-5 border-top"
            >
                <div className="container">

                    <div className="row mt-5">
                        <div className="col-12 col-lg-4 my-3 my-lg-0">
                            <div className="d-flex">
                                <ul className="list-unstyled text-uppercase font-weight-bold mb-0" style={{lineHeight:'2em'}}>
                                    <li><Link to="/" className="text-decoration-none text-dark">Menu</Link></li>
                                    <li><Link to="/" className="text-decoration-none text-dark">About us</Link></li>
                                    <li><Link to="/" className="text-decoration-none text-dark">Delivery</Link></li>
                                </ul>
                                <ul className="list-unstyled text-uppercase font-weight-bold ml-auto mb-0" style={{lineHeight:'2em'}}>
                                    <li><Link to="/" className="text-decoration-none text-dark">Lists</Link></li>
                                    <li><Link to="/" className="text-decoration-none text-dark">Kishrus</Link></li>
                                    <li><Link to="/" className="text-decoration-none text-dark">Special Offers</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 my-3 my-lg-0 text-center">
                            <Link 
                                to="/"
                                className="text-decoration-none text-dark font-weight-bold text-uppercase"
                                style={{
                                    fontSize: '1.5rem',
                                    letterSpacing: '2px'
                                }}
                            ><span style={{color:'#e642f5'}}>F</span><span style={{color:'#4287f5'}}>o</span><span style={{color:'#42f5c8'}}>o</span><span style={{color:'#a74713'}}>d</span></Link>
                            <div
                                className="text-center mt-3"
                                style={{
                                    fontSize: '1.5rem'
                                }}
                            >
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="" style={{color: '#000'}}><FaFacebook /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3" style={{color: '#000'}}><FaInstagram /></a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="" style={{color: '#000'}}><FaTwitter /></a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 my-3 my-lg-0">
                            <form>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="ENTER E-MAIL"
                                    className="w-100 form-control border-top-0 border-left-0 border-right-0 border-bottom rounded-0 px-0 shadow-none"
                                    style={{
                                        height: '55px'
                                    }}
                                />
                                <button
                                    type="submit"
                                    className="w-100 btn btn-transparent border-0 rounded-0 text-left font-weight-bold text-uppercase px-0 shadow-none"
                                    style={{
                                        color: '#000',
                                        height: '55px'
                                    }}
                                >
                                    Subscribe <span className="float-right"><IoIosArrowForward /></span>
                                </button>
                            </form>
                        </div>
                    </div>

                    <p className="text-center text-muted mb-0 mt-5 font-weight-bold" style={{fontSize:'12px'}}>
                        &copy; {new Date().getFullYear()} <Link to="/" className="text-decoration-none text-dark">FOOD</Link>. All Rights Reserved
                    </p>
                </div>
            </div>
        )
    }
}
