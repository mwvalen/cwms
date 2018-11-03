import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import TeachersTab from './TeachersTab'
import SchoolsTab from './SchoolsTab'
import CoursesTab from './CoursesTab'
import styles from './styles.css'

class Course extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 'teachers'
    }
  }
  handleTabChange = value => {
    this.setState({selected: value})
  }
  render () {
    return (
      <Tabs value={this.state.selected} onChange={this.handleTabChange}>
        <Tab label="Teachers" value="teachers">
          <TeachersTab />
        </Tab>
        <Tab label="Schools" value="schools">
          <SchoolsTab />
        </Tab>
        <Tab label="Classes" value="classes">
          <CoursesTab />
        </Tab>
      </Tabs>
    )
  }
}

export default Course
