import axios from 'axios'
import {connect} from 'react-redux'
import React from 'react'
import {loadCourse, updateCourse} from 'lander/actions/courses'
import Modal from 'react-modal'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import TimePicker from 'material-ui/TimePicker';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton'
import pattern from 'common/util/pattern'
import styles from './styles.css'

const modalStyles = {
  content: {
    top: '40px',
    width: '800px',
    margin: 'auto',
    fontFamily: 'Nunito, sans-serif',
    overflowX: 'hidden',
    zIndex: 4,
    fontSize: '16px'
  },
  overlay: {
    zIndex: 9,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
}

const hideAutoFillColorStyle = {
    WebkitBoxShadow: '0 0 0 1000px white inset'
}
const hintStyle = {zIndex: '1', pointerEvents: 'none'}
const menuProps = {
  desktop: true,
  disableAutoFocus: true,
}
const searchFilter = (searchText, key) => {
  return searchText !== '' &&
    key.toLowerCase().indexOf(searchText.toLowerCase()) === 0
}

const parseDates = dates => (
  dates.map(date => new Date(date))
)

const testDate = str => /[a-z,A-Z]{3}\s\d{1,2}\s\d{4}/.test(str)

class CourseModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      teacherId: '',
      searchTeacherText: '',
      locationId: '',
      searchSchoolText: '',
      startTime: null,
      endTime: null,
      dates: '',
      parsedDates: null,
      price: '',
      priceError: '',
      teacherError: '',
      schoolError: '',
      startTimeError: null,
      endTimeError: '',
      datesError: '',
      description: '',
      afterSchool: false,
      soldOut: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.selected) {
      const {fullDates: dates, startTime, endTime, teacher, school,
        teacherId, locationId, price, afterSchool, soldOut,
        description} = nextProps.selected
      this.setState({
        teacherId,
        locationId,
        price,
        searchTeacherText: teacher,
        searchSchoolText: school,
        startTime,
        endTime,
        dates,
        parsedDates: parseDates(dates.split(' , ')),
        success: '',
        error: '',
        afterSchool: !!afterSchool,
        soldOut: !!soldOut,
        description
      })
    }
  }

  getClasses = (parsedDates) => {
    return parsedDates.map(parsedDate => {
      const startHours = this.state.startTime.getHours()
      const startMinutes = this.state.startTime.getMinutes()
      const endHours = this.state.endTime.getHours()
      const endMinutes = this.state.endTime.getMinutes()
      let startTime = new Date(parsedDate)
      let endTime = new Date(parsedDate)
      startTime.setHours(startHours)
      startTime.setMinutes(startMinutes)
      endTime.setHours(endHours)
      endTime.setMinutes(endMinutes)
      return {
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString()
      }
    })
  }

  editCourse = id => {
    const {
      price,
      locationId,
      teacherId,
      parsedDates,
      soldOut,
      afterSchool,
      description
    } = this.state

    return axios.put(`/api/courses/${id}`, {
      price, locationId, teacherId, classes: this.getClasses(parsedDates),
      soldOut: !!soldOut, afterSchool: !!afterSchool,
      description
    }).then(response => {
      this.props.updateCourse(response.data)
      this.setState({
        success: 'Course has been successfully updated',
        error: ''
      })
    }).catch(err => {
      this.setState({
        success: '',
        error: 'Error: Course could not be updated'
      })
    })
  }

  addCourse = () => {
    const {
      price,
      locationId,
      teacherId,
      parsedDates,
      soldOut,
      afterSchool,
      description
    } = this.state

    return axios.post('/api/courses', {
      price, locationId, teacherId, classes: this.getClasses(parsedDates),
      soldOut, afterSchool, description
    })
    .then(response => {
      this.props.loadCourse(response.data)
      this.setState({
        success: 'Course has been successfully added',
        error: ''
      })
    })
    .catch(err => {
      this.setState({
        success: '',
        error: 'Error: Course could not be added'
      })
    })
    .then(this.clearForm)
  }

  handleSubmit = event => {
    event.preventDefault()
    const isValid = this.validateForm()
    if (!isValid) {
      return
    }
    if (this.props.selected) {
      this.editCourse(this.props.selected._id)
    } else {
      this.addCourse()
    }
  }

  clearForm = () => {
    this.setState({
      teacherId: '',
      searchTeacherText: '',
      locationId: '',
      searchSchoolText: '',
      startTime: null,
      endTime: null,
      dates: '',
      parsedDates: null,
      price: '',
      priceError: '',
      teacherError: '',
      schoolError: '',
      startTimeError: null,
      endTimeError: '',
      datesError: '',
      afterSchool: false,
      soldOut: false,
      description: ''
    })
  }

  handleAfterOpen = () => {
    this.setState({
      success: '',
      error: ''
    })
    if (!this.props.selected) {
      this.clearForm()
    }
  }

  validateForm () {
    const errorMessage = 'This field is required'
    const teacherError = this.state.teacherId ? '' : errorMessage
    const schoolError = this.state.locationId ? '' : errorMessage
    const startTimeError = this.state.startTime ? '' : errorMessage
    const endTimeError = this.state.endTime  ? '' : errorMessage
    const priceError = this.state.price ? '' : errorMessage
    const datesError = this.state.parsedDates ? '' : errorMessage

    const isValid = [
      teacherError, schoolError, startTimeError,
      endTimeError, priceError, datesError
    ].some(err => err) === false

    if (!isValid) {
      this.setState({
        teacherError, schoolError, startTimeError,
        endTimeError, priceError, datesError
      })
    }
    return isValid
  }

  isFormValid = () => {
    return [
      this.state.teacherError,
      this.state.schoolError,
      this.state.startTimeError,
      this.state.endTimeError,
      this.state.priceError,
      this.state.datesError
    ].some(field => field) === false
  }

  handleSchoolBlur = event => {
    const school = this.props.schools
      .find(school => school.name === this.state.searchSchoolText)

    if (!school) {
      this.setState({
        locationId: '',
        searchSchoolText: '',
        schoolError: 'This field is required'
      })
    }
  }

  handleTeacherBlur = event => {
    const teacher = this.props.teachers
      .find(teacher => `${teacher.firstName} ${teacher.lastName}` === this.state.searchTeacherText)

    if (!teacher) {
      this.setState({
        teacherId: '',
        searchTeacherText: '',
        teacherError: 'This field is required'
      })
    }
  }

  handleGenericChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  handleSchoolNameChange = schoolName => {
    const school = this.props.schools
      .find(school => school.name === schoolName)

    if (!school) {
      this.setState({locationId: '', searchSchoolText: ''})
    } else {
      this.setState({
        locationId: school._id,
        schoolError: ''
      })
    }
  }

  handleTeacherNameChange = teacherName => {
    const teacher = this.props.teachers
      .find(teacher => `${teacher.firstName} ${teacher.lastName}` === teacherName)

    if (!teacher) {
      this.setState({
        teacherId: '',
        searchTeacherText: ''
      })
    } else {
      this.setState({
        teacherError: '',
        teacherId: teacher._id
      })
    }
  }

  handleStartTimeChange = (event, date) => {
    this.setState({startTime: date, startTimeError: ''});
  }

  handleEndTimeChange = (event, date) => {
    this.setState({endTime: date, endTimeError: ''})
  }

  handleDateChange = event => {
    const dates = (event.target.value || '').split(',')
    const isDateError =
      dates.some(date => !testDate(date) || isNaN(new Date(date).valueOf()))

    this.setState({
      dates: event.target.value,
      datesError: isDateError
        ? 'Please enter valid dates separated by commas: i.e. Mar 8 2018, Mar 15 2018, etc'
        : '',
      parsedDates: isDateError
        ? null
        : parseDates(dates).sort((a, b) => a.valueOf() - b.valueOf())
    })
  }

  handleAfterSchoolChange = () => {
    this.setState(({afterSchool}) => ({
      afterSchool: !afterSchool
    }))
  }

  handleSoldOutChange = () => {
    this.setState(({soldOut}) => ({
      soldOut: !soldOut
    }))
  }

  render () {
    return (
      <Modal {...this.props} onAfterOpen={this.handleAfterOpen}
        style={modalStyles}>
        <div className={styles.courseModal}>
          <h2>{this.props.selected ? 'Edit course' : 'Add a course'}</h2>
          {
            this.state.success &&
            <div>{this.state.success}</div>
          }
          {
            this.state.error &&
            <div>{this.state.error}</div>
          }
          <form onSubmit={this.handleSubmit}>
            <div className="flex">
              <AutoComplete
                hintText="Enter teacher name"
                floatingLabelText="Search teachers"
                dataSource={this.props.teachers
                  .map(teacher => `${teacher.firstName} ${teacher.lastName}`)
                }
                filter={searchFilter}
                menuProps={menuProps}
                errorText={this.state.teacherError}
                searchText={this.state.searchTeacherText}
                onBlur={this.handleTeacherBlur}
                onNewRequest={this.handleTeacherNameChange}
                onUpdateInput={text =>
                  this.handleGenericChange('searchTeacherText', text)
                } maxSearchResults={5} />
              <AutoComplete
                style={{marginLeft: '18px'}}
                hintText="Enter school name"
                floatingLabelText="Search schools"
                dataSource={this.props.schools.map(({name}) => name)}
                filter={searchFilter}
                menuProps={menuProps}
                errorText={this.state.schoolError}
                searchText={this.state.searchSchoolText}
                onBlur={this.handleSchoolBlur}
                onNewRequest={this.handleSchoolNameChange}
                onUpdateInput={text =>
                  this.handleGenericChange('searchSchoolText', text)
                } maxSearchResults={5} />
            </div>
            <div className="flex">
              <TimePicker
                format="ampm"
                hintText="Start time"
                value={this.state.startTime}
                onChange={this.handleStartTimeChange}
                errorText={this.state.startTimeError}/>
              <TimePicker
                style={{marginLeft: '18px'}}
                format="ampm"
                hintText="End time"
                value={this.state.endTime}
                onChange={this.handleEndTimeChange}
                errorText={this.state.endTimeError}/>
            </div>
            <div>
              <TextField hintText="Enter price"
                floatingLabelText="Course price"
                errorText={this.state.priceError}
                type="number"
                value={this.state.price}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={event => this.handleGenericChange('price', event.target.value)}/>
            </div>
            <div className="flex" style={{padding: '12px 0'}}>
              <Checkbox
                 label="Evening program"
                 checked={this.state.afterSchool}
                 onCheck={this.handleAfterSchoolChange}
               />
              <Checkbox
                 label="Sold out"
                 checked={this.state.soldOut}
                 onCheck={this.handleSoldOutChange}
               />
            </div>
            <div className="flex" style={{marginBottom: '36px'}}>
              <TextField
                hintText="Course Dates"
                floatingLabelText="Enter comma separated dates"
                multiLine={true}
                value={this.state.dates}
                errorText={this.state.datesError}
                onChange={this.handleDateChange}
                rows={5} />
              <div className="flex flex-wrap"
                style={{alignContent: 'flex-start', marginTop: '36px', marginLeft: '18px', width: '400px'}}>
                {
                  Array.isArray(this.state.parsedDates) &&
                    this.state.parsedDates.map(date => (
                      <div style={{marginRight: '9px'}}>
                        {
                          date.toString().split(' ').slice(0, 4).join(' ')
                        }&#44;
                      </div>
                    ))
                }
              </div>
            </div>
            <div className="flex" style={{marginBottom: '36px'}}>
              <TextField
                hintText="Course description"
                floatingLabelText="Enter optional course description"
                multiLine={true}
                value={this.state.description}
                onChange={
                  event => this.handleGenericChange('description',
                    event.target.value)
                }
                rows={2} />
            </div>
            <RaisedButton
              style={{marginRight: '20px'}}
              onClick={this.props.closeModal}
              label="Cancel"
              secondary={true} />
            <RaisedButton
              disabled={this.isFormValid() !== true}
              primary={true}
              type="submit"
              label="Save" />
          </form>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = ({}, ownProps) => ({
  ...ownProps
})
export default connect(mapStateToProps, {loadCourse, updateCourse})(CourseModal)
