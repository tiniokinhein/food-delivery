import React, { Component } from 'react'
import { MAINMENU } from '../../api'
import { db } from '../../services'
import Spinner from '../../components/Spinner'
import { Link , withRouter } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

class Related extends Component 
{
    state = {
        items: [],
        isLoading: false
    }

    getItems = () => {
        db
        .ref(MAINMENU)
        .orderByChild('id')
        .on('value' , snapshot => {
            let data = []
            snapshot.forEach(snap => {
                data.push(snap.val())
            })
            const allItems = data.reverse()
            this.setState({
                items: allItems,
                isLoading: true
            })
        })
    }

    componentDidMount() {
        this.getItems()
    }

    render() {

        const { items , isLoading } = this.state

        return (
            <>
                {
                    isLoading ? (
                        <div
                            className="bg-light"
                            style={{
                                paddingBottom: '6rem',
                                paddingTop: '6rem'
                            }}
                        >
                            <div className="container">
                                <h2
                                    className="text-uppercase font-weight-bold mb-4"
                                    style={{
                                        fontSize: '2.5rem',
                                        color: '#000'
                                    }}
                                >Related Menus</h2>
                                <div className="row">
                                    {
                                        items.slice(0,4).map((p) => (
                                            <div 
                                                className="col-6 col-sm-6 col-lg-3 my-3"
                                                key={p.id}
                                            >
                                                <Link to={`/menu/${p.slug}`} className="text-decoration-none img-float-hover">
                                                    <div
                                                        style={{
                                                            background: '#ffb001'
                                                        }}
                                                    >
                                                        <img 
                                                            src={p.image} 
                                                            alt={p.title} 
                                                            className="w-100" 
                                                            style={{
                                                                height: '250px',
                                                                objectFit: 'cover'
                                                            }}
                                                        />
                                                    </div>
                                                
                                                    <h2
                                                        className="text-uppercase font-weight-bold my-3"
                                                        style={{
                                                            fontSize: '1.5rem',
                                                            color: '#333'
                                                        }}
                                                    >{p.title}</h2>
                                                </Link>
                                                <p
                                                    className="font-weight-bold text-secondary"
                                                >{p.description.substring(0,60)}...</p>
                                                <h6
                                                    className="font-weight-bold mb-4"
                                                    style={{
                                                        color: '#000'
                                                    }}
                                                >Ks {p.price}</h6>
                                                <Link
                                                    to={`/menu/${p.slug}`}
                                                    className="d-inline-block border-0 rounded-0 px-4 py-2 text-white text-uppercase font-weight-light text-decoration-none"
                                                    style={{
                                                        background: '#000'
                                                    }}
                                                >View <IoIosArrowForward /></Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div 
                            className="bg-light position-relative"
                            style={{
                                height: '560px',
                                paddingBottom: '6rem',
                                paddingTop: '6rem'
                            }}
                        >
                        <Spinner />
                        </div>
                    )
                }
            </>
        )
    }
}

export default withRouter(Related)