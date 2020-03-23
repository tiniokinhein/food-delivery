import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component 
{
    closeMenu() {
        document.getElementById('outermenu').style.left = '-100%'
        document.getElementById('outermenu').style.transition = 'left 0.2s'
    }

    render() {

        const barOne = {
            width: '30px',
            height: '2px',
            background: '#fff',
            display: 'inline-block',
            transform: 'rotate(45deg)',
            position: 'absolute',
            right: '0',
            top: '16px'
        }
        const barTwo = {
            width: '30px',
            height: '2px',
            background: '#fff',
            display: 'inline-block',
            transform: 'rotate(-45deg)'
        }

        return (
            <div
                className="d-table w-100 h-100 p-5"
            >
                <div
                    className="position-absolute"
                    onClick={this.closeMenu} 
                    style={{
                        right: '15px',
                        top: '15px',
                        cursor: 'pointer'
                    }}
                >
                    <span style={barOne} />
                    <span style={barTwo} />
                </div>
                <div className="d-table-cell align-top text-white">
                    <ul 
                        className="list-unstyled text-uppercase font-weight-bold text-uppercase font-weight-bold"
                        style={{
                            fontSize: '1.3rem',
                            lineHeight: '2'
                        }}
                    >
                        <li>
                            <Link 
                                to="/" 
                                onClick={this.closeMenu}
                                className="text-white text-decoration-none"
                            >Home</Link>
                        </li>
                        <li>
                            <Link
                                to="/about-us" 
                                onClick={this.closeMenu}
                                className="text-white text-decoration-none"
                            >About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
