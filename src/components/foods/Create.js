import React, { Component } from 'react'
import CKEditor from 'ckeditor4-react'
import { TYPES } from '../../api'
import { db } from '../../services'

export default class Create extends Component 
{
    state = {
        title: '',
        slug: '',
        description: '',
        image: '',
        price: '',
        type: {},
        foods: []
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    createFood = () => {

    }

    fetchFoods = () => {
        db
        .ref(TYPES)
        .on('value', snapshot => {
            let allFoods = []
            snapshot.forEach(snap => {
                allFoods.push(snap.val())
            })
            this.setState({
                foods: allFoods
            })
        })
    }

    componentDidMount() {
        this.fetchFoods()
    }

    render() {

        const { foods } = this.state

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
                                    <label className="text-white text-uppercase">Price</label>
                                    <input 
                                        type="text"
                                        name="price"
                                        className="form-control rounded-0 border border-white text-white shadow-none bg-transparent"
                                        value={this.state.price}
                                        onChange={this.handleChange.bind(this)}
                                        style={{
                                            height: '50px'
                                        }}
                                    />
                                </div>     
                            </div>                       
                        </div>
                        <div className="form-group">
                            <label className="text-white text-uppercase">Image</label>
                            <input 
                                type="text"
                                name="image"
                                className="form-control rounded-0 border border-white text-white shadow-none bg-transparent"
                                value={this.state.image}
                                onChange={this.handleChange.bind(this)}
                                style={{
                                    height: '50px'
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-white text-uppercase">Description</label>
                            <CKEditor 
                                data={this.state.description} 
                                name="description"
                                id="description"
                                value={this.state.description}
                                onChange={e => this.setState({ description: e.editor.getData() })}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-white text-uppercase">Types</label>
                            <select
                                name="type"
                                value={this.state.type}
                                onChange={this.handleChange.bind(this)}
                                className="custom-select rounded-0 bg-transparent border border-white text-white shadow-none"
                                style={{
                                    height: '50px'
                                }}
                            >
                                {
                                    foods.map((p) => (
                                        <option key={p.slug}>{p.title}</option>
                                    ))
                                }
                            </select>
                            {/* {
                                foods.map((p) => (
                                    <div 
                                        className="custom-control custom-checkbox mb-3"
                                        key={p.slug}
                                    >
                                        <input 
                                            type="checkbox" 
                                            className="custom-control-input" 
                                            id={p.slug}
                                            value={p.slug}
                                            onChange={this.handleChange.bind(this)}
                                            required 
                                        />
                                        <label 
                                            className="custom-control-label text-white"
                                            htmlFor={p.slug}
                                        >{p.title}</label>
                                    </div>
                                ))
                            } */}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
