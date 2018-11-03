import React from 'react'
import styles from './styles.css'

export default () => (
  <svg width="50px"  height="50px"
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid"
  style={{background: "none"}}>
  <circle cx="50" cy="50" fill="none" stroke="#fff"
  strokeWidth="10" r="35"
  strokeDasharray="164.93361431346415 56.97787143782138"
  transform="rotate(227.832 50 50)">
  <animateTransform attributeName="transform"
  type="rotate" calcMode="linear"
  values="0 50 50;360 50 50"
  keyTimes="0;1" dur="1s" begin="0s"
  repeatCount="indefinite"></animateTransform></circle>
  </svg>
)
