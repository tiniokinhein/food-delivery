import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Layout from './components/Layout'

class App extends React.Component 
{
  
  render() {
    return(
      <React.Fragment>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
