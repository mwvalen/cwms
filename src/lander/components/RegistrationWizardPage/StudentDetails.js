import {connect} from 'react-redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import moment from 'moment'
import {chessLevels} from 'lander/constants'
import DatePicker from 'material-ui/DatePicker'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import GoBack from 'common/components/GoBack'
import {registerStudent} from 'lander/actions/registration'
import pattern from 'common/util/pattern'
import styles from 'common/themes/form.css'

class StudentDetails extends React.Component {
  constructor (props) {
    super(props)
    const student = props.student
    this.threeYearsAgo = moment().subtract(3, 'years').toDate()
    this.state = {
      open: false,
      firstNameError: '',
      lastNameError: '',
      dateOfBirthError: '',
      guardianFirstNameError: '',
      guardianLastNameError: '',
      guardianPhoneError: '',
      guardianEmailError: '',
      student: props.student
    }
  }
  componentDidMount () {
    const shouldGoBack = !this.props.courses.length
    shouldGoBack && (this.props.history.replace('/register'))
  }
  focusError = () => {
    const requiredFields = [
      'firstName',
      'lastName',
      'dateOfBirth',
      'guardianFirstName',
      'guardianLastName',
      'guardianEmail',
      'guardianPhone'
    ]
    const firstError = requiredFields
      .find(field => this.state[`${field}Error`])
    if (firstError) {
      this.refs[firstError].focus()
    }
  }
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  handleAllergiesChange = event => {
    const student = this.state.student
    student.allergies = event.target.value
    this.setState({
      student
    })
  }
  handleDobChange  = (event, date) => {
    const student = this.state.student
    student.dateOfBirth = date
    this.setState({
      student,
      dateOfBirthError: ''
    })
  }
  handleNotesChange = event => {
    const student = this.state.student
    student.notes = event.target.value
    this.setState({
      student
    })
  }
  handleFirstNameChange = event => {
    const student = this.state.student
    student.firstName = event.target.value
    this.setState({
      student,
      firstNameError: event.target.value
        ? ''
        : 'This field is required'
    })
  }
  handleLastNameChange = event => {
    const student = this.state.student
    student.lastName = event.target.value
    this.setState({
      student,
      lastNameError: event.target.value
        ? ''
        : 'This field is required'
    })
  }
  handleGuardianFirstNameChange = event => {
    const guardian = this.state.student.guardians[0]
    guardian.firstName = event.target.value
    const guardianFirstNameError = guardian.firstName
      ? ''
      : 'This field is required'
    this.setState({
      guardian,
      guardianFirstNameError
    })
  }
  handleGuardianLastNameChange = event => {
    const guardian = this.state.student.guardians[0]
    guardian.lastName = event.target.value
    const guardianLastNameError = guardian.lastName
      ? ''
      : 'This field is required'
    this.setState({
      guardian,
      guardianLastNameError
    })
  }
  handleEmailChange = event => {
    const guardian = this.state.student.guardians[0]
    guardian.email = event.target.value
    const guardianEmailError = guardian.email
      ? (this.validateEmail(guardian.email) ? '' : 'Please enter a valid email')
      : 'This field is required'
    this.setState({
      guardian,
      guardianEmailError
    })
  }
  handlePhoneChange = event => {
    const guardian = this.state.student.guardians[0]
    guardian.phone = event.target.value.replace(/[^\d-()\s]/,'')
    const guardianPhoneError = guardian.phone
      ? (this.validatePhoneNumber(guardian.phone) ? '' : 'Please enter a ten digit phone number')
      : 'This field is required'

    this.setState({
      guardian,
      guardianPhoneError
    })
  }
  handleLevelChange = (event, index, value) => {
    const student = this.state.student
    student.level = value
    this.setState({
      student
    })
  }
  validateEmail (value) {
    return pattern.email.test(value)
  }
  validatePhoneNumber (value) {
    return (value.match(/\d/g) || []).length === 10;
  }
  validateForm () {
    const errorMessage = 'This field is required'
    const student = this.state.student
    const guardian = this.state.student.guardians[0]
    const firstNameError = this.state.firstNameError ||
      (student.firstName ? '' : errorMessage)
    const lastNameError = this.state.lastNameError ||
      (student.lastName ? '' : errorMessage)
    const dateOfBirthError = this.state.dateOfBirthError ||
      (student.dateOfBirth ? '' : errorMessage)
    const guardianFirstNameError = this.state.guardianFirstNameError ||
      (guardian.firstName ? '' : errorMessage)
    const guardianLastNameError = this.state.guardianLastNameError ||
      (guardian.lastName ? '' : errorMessage)
    const guardianEmailError = this.state.guardianEmailError ||
      (guardian.email ? '' : errorMessage)
    const guardianPhoneError = this.state.guardianPhoneError ||
      (guardian.phone ? '' : errorMessage)

    const isValid = [
      firstNameError,
      lastNameError,
      dateOfBirthError,
      guardianFirstNameError,
      guardianLastNameError,
      guardianEmailError,
      guardianPhoneError
    ].every(field => !field)

    if (!isValid) {
      this.setState({
        firstNameError,
        lastNameError,
        dateOfBirthError,
        guardianFirstNameError,
        guardianLastNameError,
        guardianEmailError,
        guardianPhoneError
      }, this.focusError)
    }
    return isValid
  }
  isFormValid = () => {
    return [
      this.state.firstNameError,
      this.state.lastNameError,
      this.state.dateOfBirthError,
      this.state.guardianFirstNameError,
      this.state.guardianLastNameError,
      this.state.guardianEmailError,
      this.state.guardianPhoneError
    ].every(field => !field)
  }
  handleSubmit = event => {
    event.preventDefault()
    const valid = this.validateForm();
    if (!valid) {
      return
    }
    this.props.registerStudent(this.state.student)
    this.props.history.push('/register/payment')
  }
  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Continue"
        primary={true}
        onClick={() => this.props.history.replace('/register')}
      />
    ]
    const hideAutoFillColorStyle = {
        WebkitBoxShadow: '0 0 0 1000px white inset'
    }
    const hintStyle = {zIndex: '1', pointerEvents: 'none'}
    const indentStyle = {marginLeft: '200px'}
    const inputStyle = {width: '400px'}
    const menuItemStyle = {fontFamily: '16px', textTransform: 'capitalize'}
    const separator = {borderTop: '1px solid #e6e6e6'}
    const gravityStyle = {marginBottom: '-20px'}
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <h1>Enter student details</h1>
        <section>
          <h3 style={gravityStyle}>Student Details</h3>
          <div style={indentStyle}>
            <TextField style={inputStyle}
              ref="firstName"
              hintText="Enter first name"
              type="text"
              floatingLabelText="Student first name"
              errorText={this.state.firstNameError}
              value={this.state.student.firstName}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              onChange={this.handleFirstNameChange} />
          </div>
          <div style={indentStyle}>
            <TextField style={inputStyle}
              ref="lastName"
              hintText="Enter last name"
              floatingLabelText="Student last name"
              errorText={this.state.lastNameError}
              type="text"
              value={this.state.student.lastName}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              onChange={this.handleLastNameChange} />
          </div>
          <div style={indentStyle}>
            <DatePicker style={inputStyle}
              ref="dateOfBirth"
              hintText="Select date of birth"
              floatingLabelText="Date of Birth"
              errorText={this.state.dateOfBirthError}
              openToYearSelection={true}
              value={this.state.student.dateOfBirth}
              onChange={this.handleDobChange}
              maxDate={this.threeYearsAgo}
              />
          </div>
          <div style={{marginLeft: '200px', height: '72px', display: 'flex', alignItems: 'flex-end'}}>
            <DropDownMenu style={{width: '400px', right: '24px'}}
              labelStyle={
                this.state.student.level
                  ? menuItemStyle
                  : {
                    color: 'rgba(0, 0, 0, 0.3)',
                    fontSize: '16px'
                  }
              }
              menuItemStyle={menuItemStyle}
              value={this.state.student.level}
              onChange={this.handleLevelChange}
              autoWidth={false}>
              <MenuItem value={''} primaryText='Select student level'/>
              {
                chessLevels.map(level => {
                  return <MenuItem key={level} value={level} primaryText={level} />
                })
              }
            </DropDownMenu>
          </div>
          <div style={indentStyle}>
            <TextField style={inputStyle}
              hintText="List any allergies"
              floatingLabelText="Allergies (optional)"
              multiLine={true}
              rows={1}
              rowsMax={4}
              value={this.state.student.allergies}
              onChange={this.handleAllergiesChange} />
          </div>
          <div style={indentStyle}>
            <TextField style={inputStyle}
              hintText="Any additional info we should know about"
              floatingLabelText="Additional info (optional)"
              multiLine={true}
              rows={1}
              rowsMax={5}
              value={this.state.student.notes}
              onChange={this.handleNotesChange} />
          </div>
        </section>
        <section style={separator}>
          <h3 style={gravityStyle}>Guardian Details</h3>
          <div style={indentStyle}>
            <TextField style={inputStyle}
              ref="guardianFirstName"
              hintText="Enter guardian first name"
              floatingLabelText="Guardian first name"
              errorText={this.state.guardianFirstNameError}
              type="text"
              value={this.state.student.guardians[0].firstName}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              onChange={this.handleGuardianFirstNameChange} />
          </div>
          <div style={indentStyle}>
            <TextField style={inputStyle}
              ref="guardianLastName"
              hintText="Enter guardian last name"
              floatingLabelText="Guardian last name"
              errorText={this.state.guardianLastNameError}
              type="text"
              value={this.state.student.guardians[0].lastName}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              onChange={this.handleGuardianLastNameChange} />
          </div>
          <div style={indentStyle}>
            <TextField style={inputStyle}
              ref="guardianEmail"
              hintText="Enter guardian email"
              floatingLabelText="Guardian email"
              errorText={this.state.guardianEmailError}
              type="email"
              value={this.state.student.guardians[0].email}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              onChange={this.handleEmailChange}/>
          </div>
          <div style={indentStyle}>
            <TextField style={inputStyle}
              ref="guardianPhone"
              hintText="Enter guardian phone"
              floatingLabelText="Guardian phone"
              errorText={this.state.guardianPhoneError}
              type="text"
              value={this.state.student.guardians[0].phone}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              onChange={this.handlePhoneChange}/>
          </div>
        </section>
        <div style={{padding: "20px 0"}}>
          <GoBack open={this.state.open}
            actions={actions}
          />
          <RaisedButton
            disabled={this.isFormValid() !== true}
            primary={true}
            type="submit"
            label="Next" />
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({registration, schools}) => {
  return {
    schools: schools.schools || [],
    ...registration
  }
}
export default withRouter(
  connect(mapStateToProps, {registerStudent})(StudentDetails)
)
