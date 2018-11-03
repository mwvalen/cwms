import React from 'react';
import {Link} from 'react-router-dom'
import Avatar from 'common/components/Avatar'
import Chessboard from '../Chessboard/Chessboard'
import ChessmoveSound from 'common/components/ChessmoveSound'
import config from './config';
import Instructions from 'board/components/Instructions'
import styles from 'board/styles.css'
import buttonStyles from 'common/themes/button.css'

class Concentration extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      aiTurn: true,
      config: config.conf.gameOver,
      solution: this.props.solution,
      level: 1,
      started: false,
      gameOver: true,
      highScore: 0,
      sound: ''
    };
  }
  getMessage = () => {
    if (!this.state.started) {
      return 'A game of concentration';
    }
    if (this.state.gameOver) {
      if (this.state.score === this.props.solution.length) {
        return `Congratulations!  You have a good memory!  Your score is ${this.state.score}`
      }
      return `Game over. Your score is ${this.state.score}`;
    } else if (this.state.aiTurn) {
      return 'Memorize the sequence!';
    } else {
      return 'Your turn! Repeat the sequence!';
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
                position={this.props.position}
                boardId='concentration'
                solution={this.state.solution}
                level={this.state.level}
                switchTurn={this.switchTurn.bind(this)}
                delay={500} />
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
            {(!this.state.started) &&
                <button className={`${buttonStyles.primaryBtn} ${styles.successBtn}`}
                  onClick={this.startGame}>
                    Start
                </button>
            }
            {
              this.state.gameOver &&
              this.state.score < this.state.solution.length &&
              <button className={`${buttonStyles.primaryBtn} ${styles.successBtn}`}
                onClick={this.startGame}>
                  Try Again
              </button>
            }
            {
              this.state.gameOver &&
              this.state.score >= this.state.solution.length &&
              <Link className={`${buttonStyles.primaryBtn} ${styles.successBtn}`}
                to={this.props.getHomeLink()}>
                Back to activities
              </Link>
            }
            {!this.state.gameOver && <p>Level: {this.state.level}</p>}
            <p>High: {this.state.highScore}</p>
          </div>
        </div>
      </div>
    );
  }

  startGame = () => {
    this.setState({
      config: config.conf.ai,
      gameOver: false,
      started: true,
      aiTurn: true,
      level: 1,
      sound: ''
    })
  }

  switchTurn (isCorrect) {
    if (!isCorrect || this.state.level === this.state.solution.length &&
      !this.state.aiTurn) {
      const score = isCorrect ? this.state.level : this.state.level - 1;
      const highScore = score > this.state.highScore
        ? score
        : this.state.highScore;

      this.setState(prevState => {
        return {
          config: config.conf.gameOver,
          gameOver: true,
          score,
          highScore,
          sound: isCorrect ? 'success' : 'error'
        };
      });
      if (isCorrect) {
        this.props.onComplete();
      }
      return;
    }

    const newConf = this.state.aiTurn
      ? config.conf.hu
      : config.conf.ai

    this.setState(prevState => {
      return {
        config: newConf,
        aiTurn: !prevState.aiTurn,
        level: prevState.aiTurn ? prevState.level : prevState.level + 1,
        sound: prevState.aiTurn ? '' : 'success'
      }
    })
  }
}

export default Concentration;
