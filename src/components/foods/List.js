import React, { Component } from 'react'
import { db } from '../../services'
import { FOODS } from '../../api'
import Spinner from '../Spinner'
import { Link } from 'react-router-dom'

export default class List extends Component 
{
    state = {
        items: [],
        isLoading: false
    }

    getItems = () => {
        db
        .ref(FOODS)
        .orderByChild('id')
        .on('value' , snapshot => {
            let allItems = []
            snapshot.forEach(snap => {
                allItems.push(snap.val())
            })
            const newItems = allItems.reverse()
            this.setState({
                items: newItems,
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
                            className="py-5 bg-light"
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-3 my-4">
                                        <strong className="text-secondary">Featured</strong>
                                        <p
                                            className="font-weight-bold mb-4 mt-4"
                                            style={{
                                                color: '#ffb001',
                                                fontSize: '3rem',
                                                lineHeight: '1'
                                            }}
                                        >Special <span style={{fontSize:'2rem',lineHeight:'1.5',color:'#333'}}>summer offers</span></p>
                                        <Link 
                                            to="/"
                                            className="text-decoration-none font-weight-bold text-uppercase"
                                            style={{
                                                fontSize: '1rem',
                                                color: '#000'
                                            }}
                                        >View All Offers</Link>
                                    </div>
                                    {
                                        items.map((p) => (
                                            <div className="col-12 col-md-4 col-lg-3 my-4">
                                                <img 
                                                    src={p.image} 
                                                    alt={p.title} 
                                                    className="w-100 h-100" 
                                                    style={{
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="py-5 position-relative"
                            style={{
                                height: '343px'
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
