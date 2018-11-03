import React from 'react'
import styles from './styles.css'

export default props => {
  return (
    <div className={`flex flex-column items-center ${styles.instructions}`}>
      <img src="/assets/pieces/cwms/bN.png"/>
      <h2>Instructions</h2>
      <p>{props.instructions}</p>
    </div>
  )
}
