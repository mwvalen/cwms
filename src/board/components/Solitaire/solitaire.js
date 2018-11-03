import React, {PropTypes} from 'react';
import Chess from 'chess.js';
import {Link} from 'react-router-dom'
import Avatar from 'common/components/Avatar'
import Chessboard from '../Chessboard/Chessboard';
import Instructions from 'board/components/Instructions'
import config from './config.js';
import solitaireStyles from './solitaire.css';
import styles from 'board/styles.css'
import buttonStyles from 'common/themes/button.css'

class Solitaire extends React.Component {
    constructor (props) {
        super(props);
        const conf = config.conf.gameOver;
        this.state = {
            config: Object.assign({}, conf, {
                position: this.props.position
            }),
            started: false,
            gameOver: false,
            instructions: config.instructions
        };
    }
    render () {
        return (
          <div className={styles.boardContainer}>
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
                  <div style={{width: '446px', height: '446px', overflow: 'hidden'}}>
                    <Chessboard {...this.state.config}
                        boardId={this.props.boardId}
                        boardContainer={solitaireStyles.solitaireBoard}
                        game={this.state.game}
                        switchTurn={this.switchTurn}
                        color={this.props.color} />
                  </div>
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
                <Instructions instructions={this.state.instructions}/>
                {!this.state.gameOver &&
                    <button className={`${buttonStyles.primaryBtn} ${styles.successBtn}`}
                      type="button" onClick={this.startGame}>
                        {this.state.started ? 'Restart' : 'Start'}
                    </button>
                }
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

    startGame = () => {
        const conf = config.conf.hu;
        const game = new Chess(this.props.position);
        this.setState({
            config: Object.assign({}, conf, {
                position: this.props.position
            }),
            started: true,
            instructions: 'Remember, the only legal moves are piece captures!',
            game
        });
    }

    endGame = () => {
        const conf = config.conf.gameOver
        this.setState({
            gameOver: true,
            config: conf,
            instructions: 'Puzzle solved!'
        });
        this.props.onComplete()
    }

    switchTurn = (isSolved) => {
        if (isSolved) {
            this.endGame();
            return;
        }

        const position = `${this.state.game.fen().split(' ')[0]} ${config.artifacts}`;
        const conf = config.conf.hu;

        this.setState({
            config: conf,
            game: new Chess(position)
        });
    }
};

Solitaire.propTypes = {
    color: PropTypes.string,
    position: PropTypes.string
};

Solitaire.defaultProps = {
    color: 'w',
    position: config.position
};

export default Solitaire;
