import {connect} from 'react-redux'
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {getField} from 'common/util/schema'
import {EntityTable} from './Tables'
import TeacherModal from './TeacherModal'

const colList = ['firstName', 'lastName', 'phone','email']
  .map(key => getField(key))

class TeachersTab extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showAddTeacherModal: false,
      selected: null
    }
  }
  closeAddTeacherModal = () => {
    this.setState({
      showAddTeacherModal: false,
      selected: null
    })
  }
  showAddTeacherModal = () => {
    this.setState({
      showAddTeacherModal: true
    })
  }
  editTeacher = teacher => {
    this.setState({
      selected: teacher,
      showAddTeacherModal: true
    })
  }
  render () {
    if (this.props.teacherError) {
      return (
        <div>Unable to load teachers</div>
      )
    }
    if (!this.props.teachers) {
      return (
        <div>Loading teachers...</div>
      )
    }
    return (
      <div style={{paddingTop: '40px'}}>
        <TeacherModal isOpen={this.state.showAddTeacherModal}
          closeModal={this.closeAddTeacherModal} selected={this.state.selected}/>
        <RaisedButton onClick={this.showAddTeacherModal} primary={true}
          label="Add teacher" />
        <EntityTable items={this.props.teachers} colList={colList}
          onEditClick={this.editTeacher}/>
      </div>
    )
  }
}

const mapStateToProps = ({teachers}) => ({...teachers})
export default connect(mapStateToProps, {})(TeachersTab)
