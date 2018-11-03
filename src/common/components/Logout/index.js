import {connect} from 'react-redux'
import React from 'react'
import {logout} from 'common/actions/session'
import RaisedButton from 'material-ui/RaisedButton'

const Logout = props => {
  const handleSubmit = event => {
    event.preventDefault()
    props.logout()
  }
  return (
    <form onSubmit={handleSubmit}>
      <RaisedButton type="submit"
        label={props.label} primary={true}
        fullWidth={props.fullWidth}/>
    </form>
  )
}

const mapStateToProps = ({}) => ({})
export default connect(mapStateToProps, {logout})(Logout)
