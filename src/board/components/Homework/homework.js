import React from 'react';
import {Link} from 'react-router-dom'
import Avatar from 'common/components/Avatar'
import Chessboard from '../Chessboard/Chessboard'
import ChessmoveSound from 'common/components/ChessmoveSound'
import Instructions from 'board/components/Instructions'
import config from './config';
import styles from 'board/styles.css'
import buttonStyles from 'common/themes/button.css'

class Homework extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            aiTurn: false,
            config: Object.assign({}, config.conf.hu, {
                position: this.props.puzzles[0].position
            }),
            solution: this.props.puzzles[0].solution,
            level: 1,
            started: false,
            gameOver: false,
            rightMove: false,
            instructions: this.props.puzzles[0].instructions,
            puzzleNumber: 0,
            puzzles: this.props.puzzles,
            sound: ''
        };
    }

    getMessage = () => {
      if (this.state.gameOver) {
          return 'Puzzle Solved!';
      }

      if (!this.state.started) {
          return this.state.instructions;
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
                  <Chessboard {...this.state.config}
                    boardId= {this.props.boardId}
                    solution={this.state.solution}
                    level={this.state.level}
                    switchTurn={this.switchTurn.bind(this)}
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
                {this.state.gameOver && this.isThereAnotherPuzzle() &&
                    <button onClick={this.nextPuzzle}
                      className={`${buttonStyles.primaryBtn} ${styles.successBtn}`}>
                      Next puzzle
                    </button>
                }
                {this.state.gameOver && !(this.isThereAnotherPuzzle()) &&
                  <Link className={`${buttonStyles.primaryBtn} ${styles.successBtn}`}
                    to={this.props.getHomeLink()}>
                    Back to activities
                  </Link>
                }
              </div>
            </div>
          </div>
        );
    }

    isThereAnotherPuzzle = () => {
        return this.state.puzzleNumber + 1 < this.props.puzzles.length;
    }

    nextPuzzle = () => {
        this.setState(prevState => {
            return {
                config: Object.assign({}, config.conf.hu, {
                  position: this.props.puzzles[prevState.puzzleNumber + 1].position
                }),
                solution: this.props.puzzles[prevState.puzzleNumber + 1].solution,
                level: 1,
                gameOver: false,
                rightMove: false,
                started: false,
                instructions: this.props.puzzles[prevState.puzzleNumber + 1].instructions,
                puzzleNumber: prevState.puzzleNumber + 1,
                sound: ''
            };
        });
    }

    switchTurn (isCorrect, position, sound) {
        if (isCorrect && this.state.level === this.state.solution.length) {
            this.setState(prevState => {
                return {
                    config: Object.assign({}, config.conf.gameOver, {position}),
                    gameOver: true,
                    sound
                };
            });
            if (this.state.puzzleNumber === this.props.puzzles.length - 1) {
              this.props.onComplete();
            }
            return;
        }
        let newConf;

        if (this.state.aiTurn) {
            newConf = config.conf.hu;
        } else {
            if (isCorrect) {
                newConf = config.conf.ai;
            } else {
                newConf = Object.assign({}, config.conf.hu, {
                    position
                });
            }
        }

        this.setState(prevState => {
            return {
                config: newConf,
                aiTurn: isCorrect ? !prevState.aiTurn : prevState.aiTurn,
                level: prevState.level + (isCorrect ? 1 : 0),
                rightMove: isCorrect,
                started: true,
                sound
            };
        });
    }
}

export default Homework;
