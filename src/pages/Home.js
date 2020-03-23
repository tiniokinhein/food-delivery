import React, { Component } from 'react'
// import { db } from '../services'
// import { MAINMENU } from '../api'
// import Spinner from '../components/Spinner'
import Slides from '../components/Slides'
import List from '../components/foods/List'

export default class Home extends Component 
{
    render() {
        
        return (
            <>
                <Slides />
                <List />
            </>
        )
    }
}
