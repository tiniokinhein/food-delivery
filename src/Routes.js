import React from 'react'
import HOC from './HOC'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Create from './components/foods/Create'
import Types from './components/foods/Types'
import MenuDetail from './pages/MenuDetail'

const Routes = () => (
    <HOC>
        <Route exact path="/" component={Home} />
        <Route path="/menu/:slug" component={MenuDetail} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/foods/create" component={Create} />
        <Route path="/create-type" component={Types} />
    </HOC>
)

export default Routes
