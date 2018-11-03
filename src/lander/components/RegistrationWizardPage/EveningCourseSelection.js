import {connect} from 'react-redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import EveningCourseTable from './EveningCourseTable'
import {registerCourses} from 'lander/actions/registration'
import LocationMap from 'common/components/Location/LocationMap'
import landerStyles from './styles.css'

const daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

const getCourseDay = ({classes}) => daysOfTheWeek[new Date(classes[0].startTime).getDay() - 1]

const CourseGrouping = ({courses, handleSignup}) => {
  const day = getCourseDay(courses[0])
  return (
    <div style={{padding: '20px 0'}}>
      <h1>{day}</h1>
      <div style={{marginBottom: '20px'}}>
        <EveningCourseTable courses={courses} handleSignup={handleSignup} />
      </div>
      <hr />
    </div>
  )
}

const customSortCompare = (a, b) => {
  if (a.soldOut !== b.soldOut) {
    return a.soldOut ? 1 : -1
  }
  return (
    new Date(a.classes[0].startTime).getTime()
      - new Date(b.classes[0].startTime).getTime()
  )
}

class EveningCourseSelection extends React.Component {
  handleSignup = course => {
    this.props.registerCourses([course])
    this.props.history.push('/register/info')
  }
  render () {
    const courseKeys = Object.keys(this.props.courses)
    return (
      <div style={{width: '80%', margin: 'auto', paddingBottom: '40px'}}>
        <div style={{textAlign: 'center', width: '80%', margin: 'auto'}}>
          <div>
            <img src="/assets/shield.png" alt="shield" style={{width: '200px'}} />
          </div>
          <h1>
            CWMS Evening and Weekend Programs
          </h1>
          <p style={{fontSize: '18px'}}>
            Below are a list of Chess with Mr. S evening and weekend classes. Click the
            Sign up button to register for the program of your choice.  Do not hesitate to
            <a href="/contactus"> Contact us </a> if you have any questions.
          </p>
        </div>
        {
          courseKeys.length === 0 &&
            <div>No courses found!</div>
        }
        {
          courseKeys.length > 0 &&
            courseKeys.map(key => {
              return (
                <CourseGrouping
                  key={key}
                  handleSignup={this.handleSignup}
                  courses={
                    this.props.courses[key]
                      .sort(customSortCompare)
                  } />
              )
            })
        }
      </div>
    )
  }
}

const mapStateToProps = ({courses={}}) => {
  return {
    courses: (courses.courses || [])
      .filter(({afterSchool}) => afterSchool)
      .reduce((groupBy, course) => {
        const day = getCourseDay(course)
        return {
          ...groupBy,
          [day]: groupBy[day]
            ? groupBy[day].concat(course)
            : [course]
        }
      }, {})
  }
}

export default withRouter(
  connect(mapStateToProps, {registerCourses})(EveningCourseSelection)
)
