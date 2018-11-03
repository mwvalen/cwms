import {connect} from 'react-redux'
import React from 'react'
import {withRouter} from 'react-router-dom'

class Redirect extends React.Component {
  componentDidMount () {
    this.props.history.replace(`/${this.props.level || 'pawn'}`)
  }
  render () {
    return (
      <div></div>
    )
  }
}

const mapStateToProps = ({user}) => {
  return {
    ...user
  }
}

export default withRouter(
  connect(mapStateToProps, {})(Redirect)
)
