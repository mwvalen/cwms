import {connect} from 'react-redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs'
import EveningCourseTable from './EveningCourseTable'
import {registerCourses} from 'lander/actions/registration'
import LocationMap from 'common/components/Location/LocationMap'
import landerStyles from './styles.css'

const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const daysOfTheWeekSortOrder = {
  'Saturday' : 0,
  'Sunday' : 1,
  'Monday' : 2,
  'Tuesday' : 3,
  'Wednesday' : 4,
  'Thursday' : 5,
  'Friday' : 6
}

const getCourseDay = ({classes}) =>
  daysOfTheWeek[new Date(classes[0].startTime).getDay()]

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

const getSortedCourseKeys = (courses) => {
  if (!courses || !Object.keys(courses).length) {
    return
  }
  return Object.keys(courses).sort(customWeekdaySort)
}

const customWeekdaySort = (a, b) => daysOfTheWeekSortOrder[a] - daysOfTheWeekSortOrder[b]

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
  constructor(props) {
    super(props)
    const courseKeys = getSortedCourseKeys(props.courses)
    this.state = {
      courseKeys,
      selected: courseKeys ? courseKeys[0].toLowerCase() : ''
    }
  }
  componentDidUpdate(prevProps) {
    const {courses:prevCourses} = prevProps;
    const {courses} = this.props;
    if (courses && Object.keys(prevCourses).length === 0) {
      const courseKeys = getSortedCourseKeys(courses)
      this.setState({
        courseKeys,
        selected: courseKeys[0].toLowerCase()
      })
    }
  }

  handleTabChange = value => {
    this.setState({selected: value})
  }
  handleSignup = course => {
    this.props.registerCourses([course])
    this.props.history.push('/register/info')
  }
  render () {
    const {courseKeys, selected} = this.state;
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
        <br />
        {
          courseKeys === undefined &&
            <div>No courses found!</div>
        }
        {
          courseKeys !== undefined &&
            <Tabs value={selected}
              onChange={this.handleTabChange}>
              {courseKeys.map(key => {
                return (
                  <Tab key={key} label={key.slice(0, 3)} value={key.toLowerCase()}>
                    <CourseGrouping
                      handleSignup={this.handleSignup}
                      courses={
                        this.props.courses[key]
                          .sort(customSortCompare)
                      } />
                    </Tab>
                )
              })}
            </Tabs>
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
