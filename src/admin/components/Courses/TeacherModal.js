import axios from 'axios'
import {connect} from 'react-redux'
import React from 'react'
import Modal from 'react-modal'
import {loadTeacher, updateTeacher} from 'admin/actions/teachers'
import TextField from 'material-ui/TextField'
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
const inputStyle = {width: '400px'}

class TeacherModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      firstNameError: '',
      lastNameError: '',
      phoneError: '',
      emailError: ''
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.selected) {
      const {firstName, lastName, phone, email} = nextProps.selected
      this.setState({
        firstName,
        lastName,
        phone,
        email,
        success: '',
        error: ''
      })
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    const isValid = this.validateForm()
    if (!isValid) {
      return
    }
    if (this.props.selected) {
      this.editTeacher(this.props.selected._id)
    } else {
      this.addTeacher()
    }
  }
  editTeacher = id => {
    const {firstName, lastName, phone, email} = this.state
    return axios.put(`/api/teachers/${id}`, {
      firstName, lastName, phone, email
    }).then(response => {
      this.props.updateTeacher(response.data)
      this.setState({
        success: 'Teacher has been successfully updated',
        error: ''
      })
    }).catch(err => {
      this.setState({
        success: '',
        error: 'Error: Teacher could not be updated'
      })
    })
  }
  addTeacher = () => {
    const {firstName, lastName, phone, email} = this.state
    return axios.post('/api/teachers', {
      firstName, lastName, phone, email
    })
    .then(response => {
      this.props.loadTeacher(response.data)
      this.setState({
        success: 'Teacher has been successfully added',
        error: ''
      })
    })
    .catch(err => {
      this.setState({
        success: '',
        error: 'Error: Teacher could not be added'
      })
    })
    .then(this.clearForm)
  }
  clearForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      firstNameError: '',
      lastNameError: '',
      phoneError: '',
      emailError: ''
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
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value,
      firstNameError: event.target.value ? '' : 'This field is required'
    })
  }
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value,
      lastNameError: event.target.value ? '' : 'This field is required'
    })
  }
  handlePhoneChange = event => {
    const phone = event.target.value.replace(/[^\d-()\s]/,'')
    const phoneError = phone
      ? (this.validatePhoneNumber(phone) ? '' : 'Please enter a ten digit phone number')
      : ''

    this.setState({
      phone,
      phoneError
    })
  }
  handleEmailChange = event => {
    const email = event.target.value
    const emailError = email
      ? (this.validateEmail(email) ? '' : 'Please enter a valid email')
      : ''
    this.setState({
      email,
      emailError
    })
  }
  validatePhoneNumber (value) {
    return (value.match(/\d/g) || []).length === 10;
  }
  validateEmail (value) {
    return pattern.email.test(value)
  }
  validateForm () {
    const errorMessage = 'This field is required'
    const firstNameError = this.state.firstName ? '' : errorMessage
    const lastNameError = this.state.lastName ? '' : errorMessage
    const isValid = firstNameError + lastNameError === ''
    if (!isValid) {
      this.setState({
        firstNameError,
        lastNameError
      })
    }
    return isValid
  }
  isFormValid = () => {
    return [
      this.state.firstNameError,
      this.state.lastNameError,
      this.state.phoneError,
      this.state.emailError
    ].every(field => !field)
  }
  render () {
    return (
      <Modal {...this.props} onAfterOpen={this.handleAfterOpen}
        style={modalStyles}>
        <div className={styles.teacherModal}>
          <h2>{this.props.selected ? 'Edit teacher' : 'Add a teacher'}</h2>
          {
            this.state.success &&
            <div>{this.state.success}</div>
          }
          {
            this.state.error &&
            <div>{this.state.error}</div>
          }
          <form onSubmit={this.handleSubmit}>
            <div>
              <TextField style={inputStyle}
                hintText="Enter first name"
                type="text"
                floatingLabelText="Teacher first name"
                errorText={this.state.firstNameError}
                value={this.state.firstName}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={this.handleFirstNameChange} />
            </div>
            <div>
              <TextField style={inputStyle}
                hintText="Enter last name"
                type="text"
                floatingLabelText="Teacher last name"
                errorText={this.state.lastNameError}
                value={this.state.lastName}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={this.handleLastNameChange} />
            </div>
            <div>
              <TextField style={inputStyle}
                hintText="Enter teacher phone"
                floatingLabelText="Teacher phone"
                errorText={this.state.phoneError}
                type="text"
                value={this.state.phone}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={this.handlePhoneChange}/>
            </div>
            <div>
              <TextField style={inputStyle}
                hintText="Enter teacher email"
                floatingLabelText="Teacher email"
                errorText={this.state.emailError}
                type="email"
                value={this.state.email}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={this.handleEmailChange}/>
            </div>
            <div className="flex">
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
            </div>
          </form>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = ({}, ownProps) => ({
  ...ownProps
})
export default connect(mapStateToProps, {loadTeacher, updateTeacher})(TeacherModal)
