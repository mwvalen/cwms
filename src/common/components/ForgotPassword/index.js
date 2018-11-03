import axios from 'axios'
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {getErrorMessage} from 'common/util/error'
import styles from 'common/themes/form.css'
import layoutStyles from 'common/themes/layout.css'
import validationStyles from 'common/themes/validation.css'

class ForgotPassword extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: '',
      username: '',
      success: '',
      loading: false
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    const {username} = this.state
    this.setState({
      loading: true
    })
    axios.post('/api/forgot-password', {username})
      .then(() => {
        this.setState({
          error: '',
          username: '',
          success: `A password reset link has been sent to your email address.  Please check your email and follow the instructions to reset your password.`
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          success: '',
          error: getErrorMessage(error) || 'Could not send password reset link.  Please contact info@chesswithmrs.com for assistance'
        })
      })
  }
  handleUserNameChange = event => {
    this.setState({
      username: event.target.value
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
    return (
      <div style={{padding: '50px'}}>
        <form style={{width: '400px', fontSize: '16px'}}
          onSubmit={this.handleSubmit}>
          <h1>Forgot Password</h1>
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
            <TextField hintText="Enter your username"
              type="text"
              required
              value={this.state.username}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              onChange={this.handleUserNameChange} />
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

export default ForgotPassword
