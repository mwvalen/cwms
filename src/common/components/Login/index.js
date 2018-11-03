import React from 'react'
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import btnStyles from 'common/themes/button.css'

export default props => {
  const inputStyle = {
      WebkitBoxShadow: '0 0 0 1000px white inset',
      ...props.inputStyle
  }
  const hintStyle = {zIndex: '1', pointerEvents: 'none'}
  return (
    <div>
      <form className={props.className || ''}
        onSubmit={props.handleSubmit}>
        {
          props.error &&
          <p style={{color: '#f44336'}}>
            {props.error}
          </p>
        }
        <div>
          <TextField hintText="Enter your username"
            type="text"
            value={props.username}
            inputStyle={inputStyle}
            hintStyle={hintStyle}
            fullWidth={true}
            onChange={props.handleUserNameChange} />
        </div>
        <div>
          <TextField hintText="Enter your password"
            type="password"
            floatingLabelText="Password"
            value={props.password}
            inputStyle={inputStyle}
            hintStyle={hintStyle}
            fullWidth={true}
            onChange={props.handlePasswordChange} />
        </div>
        <div style={{marginTop: '20px'}}>
          <RaisedButton type="submit"
            label="Submit" primary={true}
            fullWidth={true}/>
        </div>
        {
          props.hasForgotPassword &&
          <div>
            <Link className={btnStyles.linkBtn}
              to="/forgot-password">
              Forgot Password
            </Link>
          </div>
        }
      </form>
    </div>
  )
}
