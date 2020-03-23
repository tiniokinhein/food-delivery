import React, { Component } from 'react'
import { db } from '../../services'

export default class Types extends Component 
{
    state = {
        title: '',
        slug: '',
        detail: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    createTypes = () => {
        const data = {
            title : this.state.title,
            slug : this.state.title.toLowerCase().replace(/\s+/g,"-"),
            detail : this.state.detail
        }

        db.ref(`/Types/${data.slug}`).set(data, () => {
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div
                style={{
                    padding: '10rem 0'
                }}
                className="bg-info"
            >
                <div className="container">
                    <form>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label className="text-white text-uppercase">Title</label>
                                    <input 
                                        type="text"
                                        name="title"
                                        className="form-control rounded-0 border border-white text-white shadow-none bg-transparent"
                                        value={this.state.title}
                                        onChange={this.handleChange.bind(this)}
                                        style={{
                                            height: '50px'
                                        }}
                                    />
                                </div>
                                <div className="col">
                                    <label className="text-white text-uppercase">Slug</label>
                                    <input 
                                        type="text"
                                        name="slug"
                                        className="form-control rounded-0 border border-white text-white shadow-none bg-transparent"
                                        value={this.state.slug}
                                        onChange={this.handleChange.bind(this)}
                                        style={{
                                            height: '50px'
                                        }}
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div className="form-group">
                            <label className="text-white text-uppercase">Detail</label>
                            <textarea 
                                rows="5"
                                name="detail"
                                className="form-control rounded-0 border border-white text-white shadow-none bg-transparent"
                                value={this.state.detail}
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-light text-uppercase font-weight-bold text-dark shadow-none rounded-0 border-0 px-5 py-3"
                                type="submit"
                                onClick={this.createTypes}
                            >
                                Create New
                            </button>
                        </div>
                    </form>
                </div>                
            </div>
        )
    }
}
