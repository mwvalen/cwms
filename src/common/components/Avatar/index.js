import React from 'react'
import styles from './styles.css'

export default props => {
  return (
    <div className={`${styles.avatar} ${props.className || ''}`}>
      <img src={props.src} />
    </div>
  )
}
