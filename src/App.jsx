import React, { Component } from 'react'
import Navbar from './components/Navbar/CustomNavbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home'

import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div id='main'>

          <Navbar />
          <Route exact path='/' component={Home} />
          <Footer />
        </div>
      
      </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    )
  }
}

export default App
