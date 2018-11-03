import React from 'react'

export default props => {
  return <img style={props.style || {}}
    className={props.className || ''}
    src={`data:image/png;base64,${props.base64}`} />
}
