import React from 'react'

export default props => {
  return (
    <span>
      {props.date.toLocaleTimeString([], {hour12: props.hour12,
        hour: '2-digit', minute:'2-digit', timeZone: 'America/New_York'})}
    </span>
  )
}
