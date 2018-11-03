import React from 'react'
import Slider from 'react-slick'
import Separator from 'common/components/Separator'
import Week from 'school/components/Week'
import styles from './styles.css'

const nextArrow = <img src="/assets/school/nextIcon.png" />
const prevArrow = <img src="/assets/school/prevIcon.png" />

const WeekTitle = props => {
  const baseUrl = '/assets/school'
  return (
    <div className={styles.weekTitle}>
      <img src={`${baseUrl}/week${props.index}.png`}/>
    </div>
  )
}

const Pagination = props => {
  const weeks = [...Array(props.len + 1).keys()].slice(1)
  return (
    <div className={`flex ${styles.pagination}`}>
      {weeks.map((week, idx) => {
        return (
          <div key={`page-${idx}`} className="flex items-center">
            <div className={props.active === week ? styles.active : ''}
              onClick={(event) => {
              if (week !== props.active) {
                props.handlePageClick(week - 1)
              }
            }}>
              <span style={{cursor: "pointer", fontSize: "18px"}}>{week}</span>
            </div>
            {idx < weeks.length - 1 &&
              <Separator className={styles.separator} key={`separator-${idx}`}/>
            }
          </div>
        )
      })}
    </div>
  )
}

class Course extends React.Component {
  constructor (props) {
    super(props)
    const settings = {
      draggable: false,
      swipeToSlide: false,
      swipe: false,
      autoplay: false,
      speed: 600,
      nextArrow,
      prevArrow,
      beforeChange: props.handleBeforeChange,
      initialSlide: props.index || 0
    }
    this.state = {settings}
  }
  handlePageClick = index => {
    this.refs.slider.slickGoTo(index)
  }
  shouldComponentUpdate (nextProps) {
    if (this.props.weeks && nextProps.weeks) {
      return this.props.weeks.length &&
        nextProps.weeks.length &&
        this.props.weeks[0].activities[0].courseName !==
        nextProps.weeks[0].activities[0].courseName
    }
    return false;
  }
  render () {
    return (
      <Slider ref="slider" {...this.state.settings}>
        {
          this.props.weeks.map((week, idx) => {
            return (
              <div key={week.name} className="slide">
                <Week {...week}/>
              </div>
            )
          })
        }
      </Slider>
    )
  }
}

class CourseShell extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: props.index !== undefined
        ? props.index + 1
        : 1
    }
  }
  handleBeforeChange = (oldVal, newVal) => {
    this.setState({
      active: newVal + 1
    })
  }
  handlePageClick = index => {
    this.refs.course.handlePageClick(index)
  }
  render () {
    return (
      <div className="courseIndex">
        <div className="flex justify-between flex-wrap course-header">
          <WeekTitle index={this.state.active}/>
          <Pagination handlePageClick={this.handlePageClick}
            active={this.state.active}
            len={this.props.weeks.length} />
        </div>
        <Course ref="course" handleBeforeChange={this.handleBeforeChange}
          weeks={this.props.weeks} index={this.props.index}/>
      </div>
    )
  }
}

export default CourseShell
