import React from 'react'
import Button from '../button'
import styles from './styles.css'
import landerStyles from '../../styles.css'

export default ({history}) => (
  <div className={`${styles.campSection} campSection`}>
    <div className={styles.halo}></div>
    <div className={`${styles.container} ${landerStyles.container}`}>
      <div className={styles.portrait}>
        <div className={`${styles.circle} circle`}>
        </div>
      </div>
      <div className={`${styles.info} info`}>
        <h2>Summer camp fills up fast. Get in before the popsicles melt!</h2>
        <p>Register for summer camp now to take advantage of our early bird pricing.
        Summer camp is a week of chess instruction, tournaments,
        outdoor activities, friendship and happy memories.</p>
        <Button label="Sign up"
          style={{margin: '0'}}
          handleOnClick={
          () => history.push('/register')
        }></Button>
      </div>
    </div>
  </div>
)
