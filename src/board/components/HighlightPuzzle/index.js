import React from 'react';
import {Link} from 'react-router-dom'
import {difference} from 'lodash/fp'
import Avatar from 'common/components/Avatar'
import Chessboard from '../Chessboard/Chessboard'
import ChessmoveSound from 'common/components/ChessmoveSound'
import Instructions from 'board/components/Instructions'
import styles from 'board/styles.css'
import buttonStyles from 'common/themes/button.css'
import highlightStyles from './styles.css'

class HighlightPuzzle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: [],
      missing: [],
      wrong: [],
      gameOver: false,
      sound: ''
    }
  }
  handleSquareClick = square => {
    this.setState(prevState => {
      const idx = prevState.selected.indexOf(square)
      const selected = prevState.selected
      let sound = ''
      if (idx > -1) {
        selected.splice(idx, 1)
        this.refs.chessboard.unHighlightSquare(square)
      } else {
        selected.push(square)
        this.refs.chessboard.highlightSquare(square)
        if (this.props.solution.indexOf(square) > -1) {
          sound = 'success';
        } else {
          sound = 'error';
        }
      }
      const missing = difference(this.props.solution, selected)
      const wrong = difference(selected, this.props.solution)
      return {
        selected,
        missing,
        wrong,
        gameOver: (missing.length + wrong.length) === 0,
        sound
      }
    })
  }
  getMessage = () => {
    if (this.state.gameOver) {
      this.props.onComplete()
      return 'Puzzle solved!'
    } else {
      return this.props.instructions || 'Click the squares to win'
    }
  }
  getProgressUpdate = () => {
    return (
      <div style={{fontSize: '18px'}}>
        <p>You have selected
          <span style={{color: '#5cb85c'}}> {this.state.selected.length - this.state.wrong.length} </span>
          correct squares out of {this.props.solution.length}
        </p>
        {
          this.state.wrong.length > 0 &&
          <p>
            You have selected <span style={{color: '#f44336'}}> {this.state.wrong.length} </span> incorrect square(s)!
          </p>
        }
      </div>
    )
  }
  render () {
    return (
      <div className={styles.boardContainer}>
        {
          this.state.sound !== '' &&
            <ChessmoveSound key={Date.now()} type={this.state.sound}/>
        }
        <Link to={this.props.getHomeLink()}
          className={`${buttonStyles.primaryBtn} ${styles.exitBtn}`}>
          Exit
        </Link>
        <div className={styles.header}>
          <div className={styles.banner}>
            {this.props.name}
          </div>
          <div className={styles.bannerAvatar}>
            <Avatar src={`/assets/avatars/${this.props.courseName}-avatar.png`}/>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.chessBoard}>
            <div className={styles.leftRow}>
              {
                [8, 7, 6, 5, 4, 3, 2, 1].map(num =>
                  <div className={styles.rank}>
                    {num}
                  </div>
                )
              }
            </div>
            <div className={styles.properBoardContainer}>
              <Chessboard boardId={this.props.boardId}
                position={this.props.position}
                draggable={false}
                handleSquareClick={this.state.gameOver
                  ? null
                  : this.handleSquareClick
                }
                ref="chessboard"
                delay={200} />
              <div className={styles.bottomRow}>
                {
                  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
                    .map(letter =>
                      <div className={styles.file}>
                        {letter}
                      </div>
                    )
                }
              </div>
            </div>
          </div>
          <div className={styles.feedback}>
            <Instructions instructions={this.getMessage()}/>
            {
              !this.state.gameOver &&
                this.getProgressUpdate()
            }
            {
              this.state.gameOver &&
                <Link className={`${buttonStyles.primaryBtn} ${styles.successBtn}`}
                  to={this.props.getHomeLink()}>
                  Back to activities
                </Link>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default HighlightPuzzle
