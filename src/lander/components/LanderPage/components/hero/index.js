import React from 'react'
import Button from '../button'
import styles from './styles.css'

export default ({history}) => (
  <div className={styles.heroSection}>
    <div className={styles.bg}></div>
    <div className={styles.video}>
      <video loop={true} autoPlay={true} muted={true}>
        <source type="video/mp4" src="/assets/lander/banner.mov" />
      </video>
    </div>
    <div className={styles.info}>
      <div style={{opacity: '0.6', width: '40%', margin: 'auto'}}>
        <img src="/assets/shield.png" style={{width: '100%'}}/>
      </div>
      <h1>Chess with Mr. S</h1>
      <h2>
        Learn to succeed in the game of life
      </h2>
      <Button label="Register now"
        style={{margin: 'auto'}}
        handleOnClick={
        () => history.push('/register')
      }></Button>
    </div>
  </div>
)
