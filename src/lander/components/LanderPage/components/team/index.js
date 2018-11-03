import React from 'react'
import {teachers} from './constants'
import styles from './styles.css'
import landerStyles from '../../styles.css'

const Teacher = ({
  name,
  alias,
  description,
  placeholder,
  imgSrc
}) => {
  return (
    <div className={`${styles.teacher} teacher`}>
      <div className={`${styles.portrait} portrait`}>
        <div className={`${styles.square} square`}>{placeholder}<img src={imgSrc}/></div>
      </div>
      <div className={`${styles.bio} bio`}>
        <div><strong>{name}</strong></div>
        <div><strong>{alias}</strong></div>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default () => (
  <div className={styles.teacherSection}>
    <div className={landerStyles.headerSm}>
      <h3>The CWMS Team</h3>
    </div>
    <div className={`${styles.container} ${landerStyles.container}`}>
      <div className={styles.teacherContainer}>
        {
          teachers.map(teacher => <Teacher key={teacher.name} {...teacher} />)
        }
      </div>
    </div>
  </div>
)
