import React from 'react'

export default props => {
  return (
    <div className={props.className || ''} onMouseEnter={props.onMouseEnter}>
      <img style={{width: "100%"}} src={`/assets/rollover-${props.name}${props.active ? '-active' : ''}.png`} />
    </div>
  )
}
