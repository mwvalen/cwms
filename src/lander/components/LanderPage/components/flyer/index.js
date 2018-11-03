import React from 'react'
import Button from '../button'
import styles from './styles.css'

export default ({history}) => (
  <div className={styles.flyer}>
    <img className={styles.imgLeft} src="assets/lander/flyer-bg.png" />
    <img className={styles.imgRight} src="assets/lander/flyer-bg.png"/>
    <div className={styles.introContainer}>
      <img id="logo" className={`${styles.introLogo} intro-logo`}
        src="assets/lander/logo.png" alt="gaming-logo"/>
      <div className={`${styles.signalling} signalling`}>
        <h2>Our mission</h2>
        <p> Equip children across the Greater Toronto Area with
          logical, mathematical and emotional skills that will aid
          them throughout life.  We do this by teaching them a game that
          has been played, studied and appreciated for centuries.
        </p>
        <Button label="Register now" handleOnClick={
          () => history.push('/register')
        }></Button>
      </div>
    </div>
  </div>
)
