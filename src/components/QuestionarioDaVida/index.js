import React, { Component } from 'react'

import LisItem from './ListItem'

class QuestionarioDaVida extends Component {
  state = {
    areasDaVida: [
      { nome: 'Relações Íntimas/Casamento', score: 5 },
      { nome: 'Maernidade/Paternidade', score: 5 },
      { nome: 'Relações Familiares', score: 5 },
      { nome: 'Amizade/Relações Sociais', score: 5 }
    ]
  }

  updateScore = (nome, newScore) => {
    const areasDaVida = this.state.areasDaVida.map(areaDaVida => {
      if (areaDaVida.nome === nome) {
        areaDaVida.score = newScore;
      }

      return areaDaVida;
    })

    this.setState({
      areasDaVida
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='section'>
          <LisItem areasDaVida={this.state.areasDaVida} updateScore={this.updateScore} />
        </div>
      </div>
    )
  }
}


export default QuestionarioDaVida
