import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './store/store'
import './assets/scss/style.scss'
import './assets/scss/media.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const rootElement = document.getElementById('root')

const initialState = {}

ReactDOM.render(
    <Provider store={store(initialState)} >
        <App />
    </Provider>, rootElement
)

serviceWorker.register()
