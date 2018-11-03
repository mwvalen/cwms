import React from 'react'

export default props => {
  return (
    <div>
      <span>{props.name}</span><br />
      <span>{props.address}</span><br />
      <span>{props.phone}</span>
    </div>
  )
}
