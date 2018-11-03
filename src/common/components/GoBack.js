import React from 'react'
import {withRouter} from 'react-router-dom'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'

class GoBack extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: props.open
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      ...nextProps
    })
  }
  handleOpen = () => {
    this.setState({
      open: true
    })
  }
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  render () {
    return (
      <span>
        <Dialog
          title="Please confirm"
          actions={this.props.actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          Unsaved changes will be lost.  Are you sure you want to continue ?
        </Dialog>
        <RaisedButton
          style={{marginRight: '20px'}}
          onClick={this.handleOpen}
          label="Back"
          secondary={true} />
      </span>
    )
  }
}

export default GoBack
