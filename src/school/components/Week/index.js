import React from 'react'
import {activityAssetUrl} from 'school/constants'
import Activity from '../Activity'
import styles from './styles.css'

export default props => {
  return (
    <div className={styles.week}>
      {
        props.showName &&
          <h1>{`Week ${props.index}: ${props.name}`}</h1>
      }
      <div className={`flex flex-wrap ${styles.activities}`}>
        {
          props.activities.map(activity => {
            return (
              <Activity baseUrl={activity.baseUrl || activityAssetUrl}
                className={styles.tile}
                key={activity.id} {...activity} />
            )
          })
        }
      </div>
    </div>
  )
}
