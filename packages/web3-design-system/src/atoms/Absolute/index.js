import React from 'react'
import Box from '../Box'
const Absolute = props => <Box {...props}/>

Absolute.defaultProps = {
  relative: false,
  absolute: true,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  absolute: 1,
  height: '100%',
  width: 1,
}

export default Absolute