import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import React from 'react'
import {clearRegistration} from 'lander/actions/registration'
import RaisedButton from 'material-ui/RaisedButton'
import {CalendarDate} from 'common/components/FormattedDate'
import TimeOfDay from 'common/components/TimeOfDay'
import styles from 'common/themes/form.css'

const ListItem = props => {
  const start = new Date(props.classes[0].startTime)
  return (
    <li>
      <span>{props.school.name}</span>&nbsp;@&nbsp;
      <CalendarDate date={start} /> <TimeOfDay date={start} hour12={'true'} />
    </li>
  )
}

class ConfirmationPage extends React.Component {
  constructor (props) {
    super(props)
    const {student, courses} = this.props.registration
    this.state = {
      student,
      courses
    }
  }
  componentDidMount () {
    const shouldGoBack = !this.props.registration.courses.length ||
      !this.props.registration.student.firstName ||
      !this.props.registration.payment ||
      !this.props.registration.payment.customer
    if (shouldGoBack) {
      this.props.history.replace('/register')
      return;
    }
    const courses = this.props.registration.courses.map(course => {
      const startTime = new Date(course.classes[0].startTime)
        .toLocaleTimeString([], {hour12: true, hour: '2-digit', minute:'2-digit', timeZone: 'America/New_York'})
      const endTime = new Date(course.classes[0].endTime)
        .toLocaleTimeString([], {hour12: true, hour: '2-digit', minute:'2-digit', timeZone: 'America/New_York'})
      const time = `${startTime} - ${endTime}`
      const dates = course.classes.map(chessClass => {
        return new Date(chessClass.startTime).toLocaleString('en-US', {month: 'short', day: 'numeric', timeZone: 'America/New_York'})
      })
      return {
        ...course,
        time,
        dates
      }
    })
    axios.post('/api/send-registration-email', {
      ...this.props.registration,
      courses
    })
    this.props.clearRegistration()
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.history.replace('/')
  }
  render () {
    const {student, courses} = this.state
    return (
      <form className={styles.form}
        style={{fontSize: '16px'}}
        onSubmit={this.handleSubmit}>
        <h1>Welcome to Class</h1>
        <p>
          <strong style={{fontSize: '24px'}}>
            {`${student.firstName} ${student.lastName}`}
          </strong> is registered for the following courses:
        </p>
        <ul>
          {
            courses.map(course => <ListItem {...course}/>)
          }
        </ul>
        <p>
          An email will be sent to <span>{student.guardians[0].email}</span> with further details within the next twenty-four hours.
          We look forward to meeting you at the chess-board!
        </p>
        <RaisedButton type="submit" primary={true} label="Done" />
      </form>
    )
  }
}

const mapStateToProps = ({registration}) => ({registration})
export default withRouter(
  connect(mapStateToProps, {clearRegistration})(ConfirmationPage)
)
