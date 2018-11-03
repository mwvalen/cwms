import {connect} from 'react-redux'
import React from 'react'
import {uniq} from 'lodash/fp'
import styles from './styles.css'

const seasons = [
  'winter',
  'spring',
  'summer',
  'fall'
]

const formatYear = year => parseInt(year) + 1900

const RegistrationLink = props => {
  const href = `/api/admin/student-courses/${props.season}/${props.year}`
  return (
    <div className={styles.registrationLink}>
      <h1>{seasons[props.season]} {formatYear(props.year)}</h1>
      <div>
        <a target="_blank" href={href}>{
          `Download ${seasons[props.season]} ${formatYear(props.year)} Registration List`
        }</a>
      </div>
    </div>
  )
}

const Registration =  props => {
  if (props.coursesError) {
    return <div>Error loading courses</div>
  }
  if (props.courses.length < 1) {
    return (
      <div>Loading courses...</div>
    )
  }
  const seasonList =
    uniq(props.courses.map(({season, year}) => `${season}/${year}`))
      .sort((a, b) => {
        const aVals = a.split('/')
        const bVals = b.split('/')
        const diff = aVals[1] - bVals[1]
        return diff ? diff : aVals[0] - bVals[0]
      })
  return (
    <div>
      {
        seasonList.map(entry => {
          const [season, year] = entry.split('/')
          return (
            <RegistrationLink key={entry} season={season} year={year} />
          )
        })
      }
    </div>
  )
}

const mapStateToProps = ({courses}) => {
  return {
    courses: courses.courses,
    error: courses.coursesError
  }
}

export default connect(mapStateToProps, {})(Registration)
