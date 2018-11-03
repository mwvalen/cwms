import React from 'react'
import styles from './styles.css'

export default props => {
  return (
    <span className={`${styles.separator} ${props.className || ''}`}> | </span>
  )
}
