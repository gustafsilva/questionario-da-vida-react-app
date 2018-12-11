import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'
import { Handle } from 'rc-slider'

const HandleScore = (props) => {
  const { value, dragging, index, ...restProps } = props

  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  )
}

HandleScore.defaultProps = {
  restProps: {}
}

HandleScore.propTypes = {
  value: PropTypes.string.isRequired,
  dragging: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
}

export default HandleScore
