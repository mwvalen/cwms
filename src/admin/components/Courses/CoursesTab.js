import {connect} from 'react-redux'
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {getField} from 'common/util/schema'
import {EntityTable} from './Tables'
import AutoComplete from 'material-ui/AutoComplete'
import CourseModal from './CourseModal'

const colList = ['school', 'teacher', 'times', 'dates',
'price', 'evening', 'sold out'].map(key => getField(key))

const timeStrOptions = {
  hour12: true,
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'America/New_York'
}
const dateStrOptions = {
  month: 'short',
  day: 'numeric',
  timeZone: 'America/New_York'
}

class CoursesTab extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showAddCourseModal: false,
      selected: null
    }
  }
  closeAddCourseModal = () => {
    this.setState({
      showAddCourseModal: false,
      selected: null
    })
  }
  showAddCourseModal = () => {
    this.setState({
      showAddCourseModal: true
    })
  }
  editCourse = course => {
    this.setState({
      selected: {
        ...course,
        startTime: course.ogStartTime,
        endTime: course.ogEndTime,
        price: course.rawPrice
      },
      showAddCourseModal: true
    })
  }

  deSerializeCourses = response => {
    return response.map(course => {
      const teacher = this.props.teachers
        .find(teacher => teacher._id === course.teacherId)
      const school = this.props.schools
        .find(school => school._id === course.locationId)
      const ogStartTime = new Date(course.classes[0].startTime)
      const ogEndTime = new Date(course.classes[0].endTime)
      const startTime = ogStartTime.toLocaleTimeString([], timeStrOptions)
      const endTime = ogEndTime.toLocaleTimeString([], timeStrOptions)

      return {
        _id: course._id,
        teacherId: course.teacherId,
        locationId: course.locationId,
        rawPrice: course.price,
        afterSchool: !!course.afterSchool,
        soldOut: !!course.soldOut,
        evening: course.afterSchool ? 'Yes' : 'No',
        'sold out': course.soldOut ? 'Yes' : 'No',
        description: course.description,
        price: course.price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2
        }),
        ogStartTime,
        ogEndTime,
        recentness: ogStartTime.valueOf(),
        teacher: `${teacher.firstName} ${teacher.lastName}`,
        school: school.name,
        startTime,
        endTime,
        times: `${startTime} - ${endTime}`,
        dates: course.classes.map((chessClass, idx) => {
          return new Date(chessClass.startTime)
            .toLocaleString('en-US', dateStrOptions)
        }).join(' , '),
        fullDates: course.classes.map((chessClass, idx) => {
          return new Date(chessClass.startTime)
            .toLocaleString('en-US', {...dateStrOptions, year: 'numeric'})
            .replace(',', '')
        }).join(' , ')
      }
    }).sort((a, b) => a.recentness - b.recentness)
  }

  render () {
    if (this.props.coursesError) {
      return (
        <div>Unable to load Courses</div>
      )
    }
    if (!this.props.courses.length || !this.props.schools.length
      || !this.props.teachers) {
      return (
        <div>Loading Data...</div>
      )
    }
    return (
      <div style={{paddingTop: '40px'}}>
        <CourseModal isOpen={this.state.showAddCourseModal}
          teachers={this.props.teachers}
          schools={this.props.schools}
          closeModal={this.closeAddCourseModal}
          selected={this.state.selected}/>
        <RaisedButton onClick={this.showAddCourseModal} primary={true}
          label="Add Course" />
        <EntityTable items={this.deSerializeCourses(this.props.courses)}
          colList={colList}
          onEditClick={this.editCourse}/>
      </div>
    )
  }
}

const mapStateToProps = ({courses, teachers, schools}) =>
  ({...courses, ...teachers, ...schools})
export default connect(mapStateToProps, {})(CoursesTab)
