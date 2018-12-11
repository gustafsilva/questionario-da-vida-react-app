import React, { Component } from 'react'

import Header from './components/Header'
import QuestionarioDaVida from './components/QuestionarioDaVida'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <QuestionarioDaVida />

        <Footer />
      </div>
    )
  }
}

export default App
