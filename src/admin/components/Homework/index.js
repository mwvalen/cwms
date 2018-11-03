import React from 'react'
import {homeworkLinks} from 'admin/constants'
import styles from './styles.css'

const HomeworkLevel = props => {
  return (
    <div>
      <h1>{`${props.level} PDFs`}</h1>
      <div className={styles.weeks}>
        {
          props.weeks.map(name => {
            const href = `/api/admin/pdfs/${props.level}-${name}.pdf`
            return (
              <a target="_blank" href={href}>{
                name.replace(/([a-z])([A-Z])/g, "$1 $2")
              }</a>
            )
          })
        }
      </div>
    </div>
  )
}

export default props => {
  return (
    <div>
      {
        homeworkLinks.map(level => (
          <HomeworkLevel {...level} />
        ))
      }
    </div>
  )
}
