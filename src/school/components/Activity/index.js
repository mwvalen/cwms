import {connect} from 'react-redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import {cloneDeep} from 'lodash/fp'
import {getPuzzleImgKey} from 'school/util'
import styles from './styles.css'

const Placeholder = () => {
  return (
    <div className={styles.placeholder}></div>
  )
}

const Activity = props => {
  const className = `${styles.activity} ${props.className || ''}`
  return (
    <div className={className}
      onClick={props.handleClick}
      onMouseLeave={props.handleMouseLeave}
      onMouseEnter={props.handleMouseEnter}>
      {
        !props.loaded &&
          <Placeholder />
      }
      {
        <img src={props.normalUrl}
          onLoad={props.handleImgLoaded}
          className={!props.loaded || props.active ? styles.hide : ''}/>
      }
      {
        <img src={props.rollUrl}
          className={!props.loaded || !props.active ? styles.hide : ''}/>
      }
      <footer className={styles.footer}>
        {props.name}
      </footer>
    </div>
  )
}

class ActivityContainer extends React.Component {
  isComplete = (progress) => {
    if (!progress) {
      return false;
    }
    const courseProgress = progress[this.props.courseName]
    if (courseProgress) {
      return Array.isArray(courseProgress) &&
        courseProgress.some(item => {
          return item.weekNumber === this.props.weekNumber &&
            item.index === this.props.index
        })
    }
    return false;
  }
  constructor (props) {
    super(props)
    this.state = {
      active: props.active,
      loaded: false,
      isComplete: this.isComplete(props.progress)
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      isComplete: this.isComplete(nextProps.progress)
    })
  }
  handleClick = event => {
    this.props.history.push(`/${this.props.courseName}/${this.props.id}`)
  }
  handleMouseEnter = event => {
    this.setState({
      active: true
    })
  }
  handleMouseLeave = event => {
    this.setState({
      active: false
    })
  }
  handleImgLoaded = event => {
    this.setState({
      loaded: true
    })
  }
  render () {
    const imgKey = getPuzzleImgKey(this.props.type)
    const {handleMouseEnter, handleMouseLeave, handleClick, handleImgLoaded} = this
    const normalUrl = `${this.props.baseUrl}/${imgKey}${this.state.isComplete ? '-complete' : ''}.png`
    const rollUrl = `${this.props.baseUrl}/${imgKey}-roll.png`
    const props = {
      ...this.props,
      ...this.state,
      handleMouseEnter,
      handleMouseLeave,
      handleClick,
      handleImgLoaded,
      normalUrl,
      rollUrl
    }
    return (
      <Activity {...props}/>
    )
  }
}

const mapStateToProps = ({user}, ownProps) => {
  const {progress} = (user || {})
  return {
    ...ownProps,
    progress
  }
}
export default withRouter(
  connect(mapStateToProps, {})(ActivityContainer)
)
