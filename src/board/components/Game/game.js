import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom'
import Chess from 'chess.js';
import Chessboard from '../Chessboard/Chessboard'
import ChessmoveSound from 'common/components/ChessmoveSound'
import Avatar from 'common/components/Avatar'
import Instructions from 'board/components/Instructions'
import config from './config';
import {parseMoves} from '../Movelist/util/move-helper';
import styles from 'board/styles.css'
import buttonStyles from 'common/themes/button.css'

const getColorName = (turn) => {
    return {
        b: 'Black',
        w: 'White'
    }[turn];
}

const getResultMessage = (winner) => {
    if (winner) {
      return `${getColorName(winner)} won!`;
    } else {
      return 'Draw game!';
    }
}

const getTurnMessage = (turn) => {
    return `${getColorName(turn)} to play`;
}

class Game extends React.Component {
    constructor (props) {
        super(props);
        const game = new Chess(this.props.position);
        const conf = config.gameOver;

        this.state = {
            config: Object.assign({}, conf, {
                position: this.props.position || 'start'
            }),
            game,
            gameOver: false,
            decisive: false,
            moves: [],
            started: false,
            winner: ''
        };
        this.instructions = this.props.instructions;
    }
    isHumanTurn = (turn) => {
        return this.props.players[turn] === 'hu';
    }
    getMessage = () => {
      if (!this.state.started) {
        return this.state.decisive
          ? getResultMessage(this.state.winner)
          : this.instructions
      } else {
        return getTurnMessage(this.state.game.turn())
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
                      game = {this.state.game}
                      switchTurn={this.switchTurn}
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
                  this.state.started !== true && !this.state.decisive &&
                    <button onClick={this.startGame}
                      className={`${buttonStyles.primaryBtn} ${styles.successBtn}`}>
                      New Game
                    </button>
                }
                {
                  this.state.decisive &&
                    <Link className={`${buttonStyles.primaryBtn} ${styles.successBtn}`}
                      to={this.props.getHomeLink()}>
                      Back to activities
                    </Link>
                }
                {
                  this.state.started && !this.state.decisive &&
                  <button onClick={this.resignGame.bind(this, this.getAiColor())}
                    className={`${buttonStyles.primaryBtn} ${styles.failBtn}`}>
                    Resign Game
                  </button>
                }
              </div>
            </div>
          </div>
        )
    }

    getConf = (game) => {
        return config[this.props.players[game.turn()]];
    }

    drawGame = (sound) => {
        if (this.props.drawCondition) {
          this.props.onComplete();
        }
        this.setState({
            decisive: true,
            started: false,
            gameOver: true,
            config: config.gameOver,
            moves: [],
            sound: sound || ''
        });
    }
    getAiColor = () => {
      return Object.keys(this.props.players)
        .map(color => ({color, agent: this.props.players[color]}))
        .find(player => player.agent === 'ai')
        .color;
    }
    resignGame = (winningPlayer, sound) => {
        const winner = winningPlayer ||
          (this.state.game.turn() === 'w' ? 'b' : 'w');
        if (this.props.players[winner] === 'hu') {
          this.props.onComplete();
        }
        this.setState({
            decisive: true,
            started: false,
            gameOver: true,
            config: config.gameOver,
            winner,
            moves: [],
            sound: sound || ''
        });
    }

    startGame = () => {
        const game = new Chess(this.props.position);
        this.setState(prevState => {
            return {
                started: true,
                game: game,
                gameOver: false,
                config: Object.assign({}, this.getConf(game), {
                    position: this.props.position || 'start'
                })
            };
        });
    }

    switchTurn = () => {
        let sound = 'normal'
        const lastMove = this.state.game.history({verbose: true}).slice(-1)[0]
        if (this.state.game.in_check() || this.state.game.in_checkmate()) {
          sound = 'check'
        } else if ('captured' in lastMove) {
          sound = 'capture'
        }

        if (this.state.game.game_over()) {
            let endGame = this.state.game.in_checkmate()
                ? this.resignGame.bind(this, null, sound)
                : this.drawGame.bind(this, sound);

            endGame();
            return;
        }

        this.setState(prevState => {
            return {
                config: this.getConf(prevState.game),
                moves: parseMoves(prevState.game.history({verbose: true})),
                sound
            };
        });
    }
}

Game.propTypes = {
    players: PropTypes.object
};

Game.defaultProps = {
    players: {
        w: 'hu',
        b: 'ai'
    }
};

export default Game;
