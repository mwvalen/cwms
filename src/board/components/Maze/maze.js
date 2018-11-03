import React from 'react';
import {Link} from 'react-router-dom'
import Avatar from 'common/components/Avatar'
import Chessboard from '../Chessboard/Chessboard'
import ChessmoveSound from 'common/components/ChessmoveSound'
import Instructions from 'board/components/Instructions'
import config from './config';
import styles from 'board/styles.css'
import buttonStyles from 'common/themes/button.css'

class Maze extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            config: Object.assign({}, config.conf.hu, {
              position: this.props.position
            }),
            solution: this.props.solution,
            level: 1,
            started: false,
            gameOver: false,
            rightMove: false,
            instructions: this.props.instructions,
            sound: ''
        };
    }

    getMessage = () => {
      if (this.state.gameOver) {
          return 'Puzzle Solved!';
      }

      if (!this.state.started) {
          return this.props.instructions;
      }

      if (this.state.rightMove) {
          return 'Best move! Keep going...';
      } else {
          return 'Wrong move! Try again';
      }
    }
    render () {
        return (
          <div className={styles.boardContainer}>
            <ChessmoveSound key={Date.now()} type={this.state.sound}/>
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
                <Chessboard {...this.state.config}
                    boardId= {this.props.boardId}
                    solution={this.state.solution}
                    level={this.state.level}
                    switchTurn={this.switchTurn.bind(this)}
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
                {this.state.gameOver &&
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

    switchTurn (isCorrect, position, sound) {
        if (isCorrect && this.state.level === this.state.solution.length) {
            this.props.onComplete();
            this.setState(prevState => {
                return {
                    config: config.conf.gameOver,
                    gameOver: true,
                    sound
                };
            });
            return;
        }

        let newConf = config.conf.hu;
        if (!isCorrect) {
            newConf = Object.assign({}, config.conf.hu, {
                position
            });
        }

        this.setState((prevState) => {
            return {
                config: newConf,
                level: prevState.level + (isCorrect ? 1 : 0),
                rightMove: isCorrect,
                started: true,
                sound
            };
        });
    }
}

export default Maze;
