import axios from 'axios'
import {connect} from 'react-redux'
import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import Course from 'school/components/Course'
import {loadActivities} from 'school/actions/activities'
import {getWeeks} from 'school/util'
import layout from 'common/themes/layout.css'
import landerStyles from 'lander/components/LanderPage/styles.css'
import styles from './styles.css'

const baseUrl = '/assets/school/activities'
const baseIconUrl = '/assets/school'

const CourseAvatar = props => {
  const baseUrl = '/assets/school'
  return (
    <div className={`flex justify-start items-center ${styles.courseAvatar}`}>
      <img src={`${baseUrl}/${props.name}-roll.png`}/>
      <div className={styles.playerCard}>
        <h3><strong>Level: </strong>{props.name}</h3>
        {
          props.user &&
            <div>
              <strong>Player: </strong>
              <span>{`${props.user.personal.firstName} ${props.user.personal.lastName}`}</span>
              <div><Link to="/profile">Edit Profile</Link></div>
            </div>
        }
      </div>
    </div>
  )
}

class CoursePage extends React.Component {
  loadActivities = () => {
    if (!this.props.weeks)  {
      this.props.loadActivities(this.props.level)
        .catch(err => console.log(err))
    }
  }
  componentDidMount () {
    this.loadActivities()
  }
  componentDidUpdate () {
    this.loadActivities()
  }

  render () {
    return (
      <div style={{padding: '40px', paddingTop: '20px'}}
        className={`flex items-center flex-column ${layout.container}`}>
        <img style={{left: '0'}}
          className={styles.flyerBg} src="/assets/flyer-bg.png" />
        <img style={{right: '0'}}
          className={`${styles.flyerBg} ${landerStyles.reverse}`}
          src="/assets/flyer-bg.png" />
        <CourseAvatar user={this.props.user}
          name={this.props.level || "pawn"}/>
        {
          !(this.props.weeks || []).length &&
            <div></div>
        }
        {
          (this.props.weeks || []).length > 0 &&
            <Course name={`${this.props.level} level`}
              index={this.props.index}
              weeks={this.props.weeks}/>
        }
      </div>
    )
  }
}

const mapStateToProps = ({activities, user}, ownProps) => {
  return {
    weeks: getWeeks(activities[ownProps.level]),
    user,
    ...ownProps
  }
}
export default withRouter(
  connect(mapStateToProps, {loadActivities})(CoursePage)
)
