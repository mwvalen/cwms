import {connect} from 'react-redux'
import React from 'react'
import {loadActivities} from 'school/actions/activities'
import {updateProgressByLevel} from 'common/actions/user'
import HighlightPuzzle from 'board/components/HighlightPuzzle'
import Homework from 'board/components/Homework/homework'
import Concentration from 'board/components/Concentration/concentration'
import Game from 'board/components/Game/game'
import Maze from 'board/components/Maze/maze'
import Solitaire from 'board/components/Solitaire/solitaire'

const getPuzzleComponent = type => {
  switch (type) {
    case 'highlight':
      return HighlightPuzzle
    case 'maze':
      return Maze
    case 'memory':
      return Concentration
    case 'puzzle':
      return Homework
    case 'scenario':
      return Game
    case 'boss':
      return Game
    case 'solitaire':
      return Solitaire
  }
  return () => (<div></div>)
}

const getConnectedPuzzleComponent = type => {
  return connect(() => ({}), {})
}

const Placeholder = props => {
  return (<div></div>)
}

class HomeworkPage extends React.Component {
  componentDidMount () {
    if (!this.props.type) {
      this.props.loadActivities(this.props.location.pathname.split('/')[1])
    }
  }
  getHomeLink = () => {
    return `/${this.props.courseName}/week/${this.props.weekNumber}`
  }
  handleComplete = (data={}) => {
    this.props.updateProgressByLevel(this.props.courseName,
      this.props.weekNumber, this.props.index, data)
  }
  render () {
    const PuzzleComponent = getPuzzleComponent(this.props.type)
    return (
      <div>
        {
          !this.props.type &&
            <Placeholder/>
        }
        {
          this.props.type !== undefined &&
            <PuzzleComponent name={this.props.name}
              onComplete={this.handleComplete}
              getHomeLink={this.getHomeLink}
              boardId="chessboard" {...this.props}/>
        }
      </div>
    )
  }
}
const mapStateToProps = ({activities}, ownProps) => {
  const activityId = ownProps.match.params.activity
  const level = activityId.split('-')[0]
  const course = activities[level] || []
  const activity = course
    .find(a => `${a.courseName}-${a.weekNumber}-${a.index}` === activityId)
  if (!activity) {
    return {...ownProps}
  } else {
    return {
      type: activity.type,
      courseName: activity.courseName,
      weekNumber: activity.weekNumber,
      index: activity.index,
      name: activity.name,
      ...activity.data,
      ...ownProps
    }
  }
}
export default connect(mapStateToProps, {loadActivities, updateProgressByLevel})(HomeworkPage)
