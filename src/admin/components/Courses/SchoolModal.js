import axios from 'axios'
import {connect} from 'react-redux'
import React from 'react'
import Modal from 'react-modal'
import {loadSchool, updateSchool} from 'lander/actions/schools'
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

class SchoolModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      nameError: '',
      phoneError: '',
      emailError: '',
      postalCodeError: ''
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.selected) {
      const {
        name,
        phone,
        email,
        address,
        city,
        province,
        postalCode,
        lat,
        lng,
        mapUrl
      } = nextProps.selected

      this.setState({
        name,
        phone,
        email,
        address,
        city,
        province,
        postalCode,
        success: '',
        error: '',
        lat,
        lng,
        mapUrl
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
      this.editSchool(this.props.selected._id)
    } else {
      this.addSchool()
    }
  }
  editSchool = id => {
    const {
      name,
      phone,
      email,
      address,
      city,
      postalCode,
      lat,
      lng,
      mapUrl
    } = this.state
    return axios.put(`/api/schools/${id}`, {
      name, phone, email, address,
      city, postalCode, lat, lng, mapUrl
    }).then(response => {
      this.props.updateSchool(response.data)
      this.setState({
        success: 'School has been successfully updated',
        error: '',
      })
    }).catch(err => {
      this.setState({
        success: '',
        error: 'Error: School could not be updated'
      })
    })
  }
  addSchool = () => {
    const {
      name,
      phone,
      email,
      address,
      city,
      province,
      postalCode,
      lat,
      lng,
      mapUrl
    } = this.state
    return axios.post('/api/schools', {
      name, phone, email, address,
      city, province, postalCode, lat, lng, mapUrl
    })
    .then(response => {
      this.props.loadSchool(response.data)
      this.setState({
        success: 'School has been successfully added',
        error: ''
      })
    })
    .catch(err => {
      this.setState({
        success: '',
        error: 'Error: School could not be added'
      })
    })
    .then(this.clearForm)
  }
  clearForm = () => {
    this.setState({
      name: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      nameError: '',
      phoneError: '',
      emailError: '',
      postalCodeError: '',
      lat: '',
      lng: '',
      mapUrl: ''
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
  handleNameChange = event => {
    this.setState({
      name: event.target.value,
      nameError: event.target.value ? '' : 'This field is required'
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
  handlePostalCodeChange = event => {
    const postalCode = event.target.value
    const postalCodeError = postalCode
      ? (this.validatePostalCode(postalCode) ? '' : 'Please enter a valid postal code of format A1A 1A1')
      : ''

    this.setState({
      postalCode,
      postalCodeError
    })
  }
  handleGenericChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  validatePhoneNumber (value) {
    return (value.match(/\d/g) || []).length === 10;
  }
  validateEmail (value) {
    return pattern.email.test(value)
  }
  validatePostalCode (value) {
    return pattern.postalCode.test(value)
  }
  validateForm () {
    const errorMessage = 'This field is required'
    const nameError = this.state.name ? '' : errorMessage
    if (nameError) {
      this.setState({
        nameError
      })
    }
    return !nameError
  }
  isFormValid = () => {
    return [
      this.state.nameError,
      this.state.phoneError,
      this.state.emailError,
      this.state.postalCodeError
    ].every(field => !field)
  }
  render () {
    return (
      <Modal {...this.props} onAfterOpen={this.handleAfterOpen}
        style={modalStyles}>
        <div className={styles.schoolModal}>
          <h2>{this.props.selected ? 'Edit school' : 'Add a school'}</h2>
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
                hintText="Enter name"
                type="text"
                floatingLabelText="School name"
                errorText={this.state.nameError}
                value={this.state.name}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={this.handleNameChange} />
            </div>
            <div>
              <TextField style={inputStyle}
                hintText="Enter school phone"
                floatingLabelText="School phone"
                errorText={this.state.phoneError}
                type="text"
                value={this.state.phone}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={this.handlePhoneChange}/>
            </div>
            <div>
              <TextField style={inputStyle}
                hintText="Enter school email"
                floatingLabelText="School email"
                errorText={this.state.emailError}
                type="email"
                value={this.state.email}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={this.handleEmailChange}/>
            </div>
            <div>
              <TextField style={inputStyle}
                hintText="Enter address"
                type="text"
                floatingLabelText="School address"
                value={this.state.address}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={event =>
                  this.handleGenericChange('address', event.target.value)
                } />
            </div>
            <div>
              <TextField style={inputStyle}
                hintText="Enter city"
                type="text"
                floatingLabelText="School city"
                value={this.state.city}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={event =>
                  this.handleGenericChange('city', event.target.value)
                } />
            </div>
            <div>
              <TextField style={inputStyle}
                hintText="Enter postal code"
                type="text"
                floatingLabelText="Postal Code"
                value={this.state.postalCode}
                errorText={this.state.postalCodeError}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={this.handlePostalCodeChange}
                />
            </div>
            <div className="flex justify-between" style={{width: '80%'}}>
              <TextField hintText="Enter latitude (optional)"
                floatingLabelText="Latitude"
                type="number"
                value={this.state.lat}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={event => this.handleGenericChange('lat', event.target.value)}/>

              <TextField hintText="Enter longitude (optional)"
                floatingLabelText="Longitude"
                type="number"
                value={this.state.lng}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={event => this.handleGenericChange('lng', event.target.value)}/>
            </div>
            <div>
              <TextField style={inputStyle}
                hintText="Enter map url (optional)"
                type="text"
                floatingLabelText="Google maps URL"
                value={this.state.mapUrl}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle}
                onChange={event => this.handleGenericChange('mapUrl', event.target.value)}
                />
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
export default connect(mapStateToProps, {loadSchool, updateSchool})(SchoolModal)
