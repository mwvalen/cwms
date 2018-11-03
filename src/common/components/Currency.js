import React from 'react'

export default (props) => {
  const formatCurrency = (cents, currency) => {
    let value = (props.cents / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: props.currency || 'USD',
      minimumFractionDigits: 2
    })
    return cents >= 0 ? value : `(${value.slice(1)})`
  }

  return (
    <span style={props.style}>
      {formatCurrency(props.cents, props.currency)}
    </span>
  )
}
