import React from 'react'
import styles from './styles.css'

export default ({
  label,
  handleOnClick,
  style={}
}) => (
  <button style={style}
    onClick={handleOnClick}
    className={styles.button}>
    {label}
  </button>
)
