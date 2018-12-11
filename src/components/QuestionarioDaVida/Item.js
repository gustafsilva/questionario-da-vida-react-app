import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'rc-slider'

import HandleScore from './HandleScore'

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

class Item extends Component {
  static propTypes = {
    nome: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    updateScore: PropTypes.func.isRequired
  }

  setScore = (newScore) => {
    const { nome, updateScore } = this.props

    updateScore(nome, newScore)
  }

  render() {
    const { nome, score } = this.props

    return (
      <div>
        <h3>
          {nome} - Score: <b>{score}</b>
        </h3>
        <Slider
          min={0}
          max={10}
          defaultValue={score}
          handle={HandleScore}
          onChange={(newScore) => this.setScore(newScore)}
        />
      </div>
    )
  }
}

export default Item
