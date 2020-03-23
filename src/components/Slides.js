import React, { Component } from 'react'
import { db } from '../services'
import { MAINMENU } from '../api'
import Spinner from './Spinner'
import Slider from 'react-slick'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'


export default class Slides extends Component 
{
    state = {
        products: [],
        isLoading: false
    }

    getProducts = () => {
        db
        .ref(MAINMENU)
        .orderByChild('id')
        .on('value' , snapshot => {
            let allProducts = []
            snapshot.forEach(snap => {
                allProducts.push(snap.val())
            })
            const newProducts = allProducts.reverse()
            this.setState({ 
                products: newProducts,
                isLoading: true
            })
        })
    }

    componentDidMount() {
        this.getProducts()
        window.scrollTo(0,0)
    }

    next() {
        this.slider.slickNext()
    }

    previous() {
        this.slider.slickPrev()
    }

    render() {

        const { products , isLoading } = this.state

        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            fade: true,
            speed: 1000,
            customPaging: i => (
                <div
                    style={{
                        color: "#000",
                    }}
                    className="font-weight-bold"
                >
                    0{i + 1}
                </div>
            )
        }

        return (
            <div
                style={{
                    background: '#ffb001'
                }}
                className="ss-wrapper"
            >
                { 
                    isLoading ? (
                        <>
                            <Slider {...settings} ref={c => (this.slider = c)}>
                                {
                                    products.slice(0,4).map(product => (
                                        <div 
                                            key={product.id}
                                            className="position-relative mb-m-5px"
                                        >
                                            <div 
                                                className="position-absolute"
                                                style={{
                                                    left: '0',
                                                    top: '0',
                                                    right: '0',
                                                    bottom: '0',
                                                    zIndex: '9'
                                                }}
                                            >
                                                <div className="container h-100 px-5">
                                                    <div className="d-table h-100">
                                                        <div className="d-table-cell align-middle px-5">
                                                            <h1
                                                                className="text-white font-weight-bold display-4 mb-3"
                                                            >{product.title}</h1>
                                                            <p
                                                                className="font-weight-bold mb-0 col-12 col-lg-8 px-0 mb-4"
                                                                style={{
                                                                    color: '#000',
                                                                    fontSize: '2rem'
                                                                }}
                                                            >{product.description.substring(0,30)}</p>
                                                            <Link
                                                                to={`/menu/${product.slug}`}
                                                                className="border-0 rounded-0 px-4 py-2 text-white text-uppercase font-weight-light text-decoration-none"
                                                                style={{
                                                                    background: '#000'
                                                                }}
                                                            >View Menu <IoIosArrowForward /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <img 
                                                src={product.image} 
                                                alt={product.title} 
                                                style={{
                                                    width: '100%',
                                                    height: '100vh',
                                                    minHeight: '600px',
                                                    objectFit: 'cover'
                                                }}
                                            />                                
                                        </div>
                                    ))
                                }
                            </Slider>  

                            <div
                                className="position-absolute"
                                style={{
                                    left: '0',
                                    top: '40%',
                                    right: '0',
                                    bottom: '40%'
                                }}
                            >
                                <div
                                    className="container h-100"
                                >
                                    <div className="d-table w-100 h-100">
                                        <div className="d-table-cell align-middle">
                                            <button 
                                                className="p-0 btn btn-transparent border-0 rounded-0 shadow-none font-weight-bold text-uppercase position-relative" 
                                                style={{
                                                    color: '#000',
                                                    transform: 'rotate(-90deg)',
                                                    left: '-28px'
                                                }}
                                                onClick={this.previous.bind(this)}
                                            >
                                                Prev &#10230;
                                            </button>
                                            <button 
                                                className="p-0 btn btn-transparent border-0 rounded-0 shadow-none font-weight-bold text-uppercase float-right position-relative"  
                                                style={{
                                                    color: '#000',
                                                    transform: 'rotate(90deg)',
                                                    right: '-25px'
                                                }}
                                                onClick={this.next.bind(this)}
                                            >
                                                Next &#10230;
                                            </button>
                                        </div>
                                    </div>
                                </div>    
                            </div> 
                        </>
                    ) : (
                        <div
                            style={{
                                width: '100%',
                                height: '100vh',
                                minHeight: '600px'
                            }}
                        >
                            <Spinner /> 
                        </div>
                    )
                }
            </div>
        )
    }
}
