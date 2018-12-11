import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'

const ListItem = (props) => {
  const { areasDaVida, updateScore } = props;

  return areasDaVida.map(areaDaVida => (
    <Item nome={areaDaVida.nome} score={areaDaVida.score} updateScore={updateScore} key={areaDaVida.nome} />
  ))
}

ListItem.propTypes = {
  areasDaVida: PropTypes.array.isRequired,
  updateScore: PropTypes.func.isRequired
}

export default ListItem
