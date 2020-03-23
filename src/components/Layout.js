import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                
                <Header />

                <div
                    id="outermenu"
                    style={{
                        left: '-100%',
                        top: '0',
                        bottom: '0',
                        position: 'fixed',
                        zIndex: '9999999',
                        background: '#000',
                        width: '256px',
                        maxWidth: '100%'
                    }}
                >
                    <Sidebar />
                </div>
                
                {this.props.children}

                <Footer />

            </React.Fragment>
        )
    }
}
