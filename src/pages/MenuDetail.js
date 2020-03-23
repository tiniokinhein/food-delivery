import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { db } from '../services'
import { MAINMENU } from '../api'
import Spinner from '../components/Spinner'
import Related from '../components/menus/Related'

class MenuDetail extends Component 
{
    state = {
        menu: null
    }

    getMenu = () => {
        const slug = this.props.match.params.slug
        db
        .ref(MAINMENU+`/${slug}`)
        .on('value' , snapshot => {
            const data = snapshot.val()
            this.setState({
                menu: data
            })
        })
        window.scrollTo(0,0)
    }

    componentDidMount() {
        this.getMenu()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.slug !== this.props.match.params.slug) {
            this.getMenu()
        }
    }

    render() {

        const { menu } = this.state

        return (
            <>
                {
                    menu ? (
                        <div
                            style={{
                                background: '#ffb001',
                                paddingTop: '6rem',
                                paddingBottom: '6rem'
                            }}
                            className="ss-wrapper mn-bg position-relative"
                            key={menu.id}
                        >
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                                        <img
                                            src={menu.image}
                                            alt={menu.title}
                                            className="w-100"
                                            style={{
                                                objectFit: 'cover',
                                                height: '50vh',
                                                minHeight: '300px'
                                            }}
                                        />
                                    </div>
                                    <div className="col-12 col-lg-8 mb-3 mb-lg-0">
                                        <h1
                                            className="text-uppercase font-weight-bold mb-2"
                                            style={{
                                                fontSize: '2rem',
                                                color: '#fff'
                                            }}
                                        >{menu.title}</h1>
                                        <h4
                                            className="font-weight-bold mb-4"
                                            style={{
                                                color: '#000'
                                            }}
                                        >Ks {menu.price}</h4>
                                        <p
                                            style={{
                                                fontSize: '17px',
                                                lineHeight: '1.8',
                                                fontWeight: 'bold',
                                                color: '#333'
                                            }}
                                        >{menu.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                <Related />
            </>
        )
    }
}

export default withRouter(MenuDetail)