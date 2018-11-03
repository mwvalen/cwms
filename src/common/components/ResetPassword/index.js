import axios from 'axios'
import {Link, withRouter} from 'react-router-dom'
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {getErrorMessage} from 'common/util/error'
import styles from 'common/themes/form.css'
import layoutStyles from 'common/themes/layout.css'
import validationStyles from 'common/themes/validation.css'

class ResetPassword extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: '',
      success: '',
      password: '',
      confirmPassword: '',
      id: this.props.match.params.id,
      loading: false,
      invalid: false
    }
  }
  componentDidMount () {
    axios.get(`/api/reset-password/${this.state.id}`)
      .catch(err => {
        this.setState({
          error: `This password reset link is either invalid or expired.
            Click on the button below to try again`,
          loading: true,
          invalid: true
        })
      })
  }
  handleSubmit = event => {
    event.preventDefault()
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        success: '',
        error: 'Password and confirm password are not matching',
        confirmPassword: ''
      })
      return
    }
    this.setState({
      loading: true
    })
    return axios.post('/api/reset-password', {
      id: this.state.id,
      password: this.state.password
    })
    .then(() => {
      this.setState({
        success: 'Your password has been successfully updated',
        error: ''
      })
    })
    .catch(err => {
      this.setState({
        error: (getErrorMessage(err) ||
        `Could not reset your password.  Please try again or contact
          info@chesswithmrs.com for assistance`),
        success: '',
        password: '',
        confirmPassword: '',
        loading: false
      })
    })
  }
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }
  handleConfirmPasswordChange = event => {
    this.setState({
      confirmPassword: event.target.value
    })
  }
  render () {
    const hideAutoFillColorStyle = {
        WebkitBoxShadow: '0 0 0 1000px white inset'
    }
    const hintStyle = {
      zIndex: '1',
      pointerEvents: 'none'
    }
    if (this.state.invalid) {
      return (
        <div style={{width: '400px', fontSize: '16px', padding: '50px'}}>
          <p>{this.state.error}</p>
          <Link to="/forgot-password">
            Forgot password
          </Link>
        </div>
      )
    }
    return (
      <div style={{padding: '50px'}}>
        <form style={{width: '400px', fontSize: '16px'}}
          onSubmit={this.handleSubmit}>
          <h1>Reset Password</h1>
          {
            this.state.error &&
              <p className={validationStyles.requestError}>
                {this.state.error}
              </p>
          }
          {
            this.state.success &&
              <p className={validationStyles.requestSuccess}>
                {this.state.success}
              </p>
          }
          <div>
            <TextField hintText="Enter your password"
              type="password"
              required
              value={this.state.password}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              onChange={this.handlePasswordChange} />
          </div>
          <div>
            <TextField hintText="Confirm your password"
              type="password"
              required
              value={this.state.confirmPassword}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              onChange={this.handleConfirmPasswordChange} />
          </div>
          <RaisedButton type="submit"
            primary={true}
            disabled={this.state.loading}
            label='Submit'/>
        </form>
      </div>
    )
  }
}

export default withRouter(ResetPassword)
