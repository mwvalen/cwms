import React, { PropTypes } from 'react';
import ChessBoard from './chessboardjs/chessboard';
import styles from './styles.css';
import boardStyles from './chessboardjs/chessboard-0.3.0.css'

export default class Chessboard extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.config = {
      draggable: this.props.draggable,
      position: this.props.position,
      pieceTheme: '/assets/pieces/wikipedia/{piece}.png',
      onDragStart: this.handleDragStart,
      onDrop: this.handleDrop,
      onSnapEnd: this.handleSnapEnd,
      showErrors: false,
      showNotation: false
    };

    this.board = ChessBoard(this.props.boardId, this.config);

    this.refs.chessboard.addEventListener('click', this.onSquareClick)

    if (this.props.onStart) {
      this.props.onStart.call(this);
    }
  }

  componentWillReceiveProps(nextProps) {
    let task = nextProps.position
      ? this.setPosition(nextProps.position)
      : Promise.resolve()

    task.then(() => {
      if ('draggable' in nextProps) {
        this.setConfig({ draggable: nextProps.draggable })
      }
      if (this.props.onDrop !== nextProps.onDrop) {
        this.setConfig({ onDrop: nextProps.onDrop.bind(this)})
      }
      if (nextProps.onStart) {
        nextProps.onStart.call(this)
      }
    })
  }

  componentWillUnmount() {
    this.refs.chessboard.removeEventListener('click', this.onSquareClick)
  }

  onSquareClick = event => {
    let square = [...event.target.classList]
      .find(className => className.indexOf('square-') > -1)
    if (!square) {
      square = [...event.target.parentNode.classList]
        .find(className => className.indexOf('square-') > -1)
    }
    if (square && this.props.handleSquareClick) {
      this.props.handleSquareClick(square.split('square-').pop())
    }
  }

  setConfig(options) {
    this.config = Object.assign(this.config, options);
  }

  handleResize = () => {
    this.board.resize();
  }

  handleDragStart = (source, piece, position, orientation) => {
    this.props.onDragStart.call(this, source, piece, position, orientation);
  }

  handleDrop = (...args) => {
    this.props.onDrop.apply(this, args);
  }

  handleSnapEnd = () => {
    this.props.onSnapEnd.call(this);
  }

  highlightSquare = (square) => {
    const elem = this.refs.chessboard.querySelector(`.square-${square}`)
    if (elem) {
      elem.classList.add(`${boardStyles.highlight}`)
    }
  }

  unHighlightSquare = (square) => {
    const elem = this.refs.chessboard.querySelector(`.square-${square}`)
    if (elem) {
      elem.classList.remove(`${boardStyles.highlight}`)
    }
  }

  setPosition = (position) => {
    return new Promise(resolve => {
      setTimeout(() => {
        this.board.position(position);
        resolve();
      }, 200);
    });
  }

  makeMove = (move) => {
    return new Promise(resolve => {
      setTimeout(() => {
        this.board.move(move);
        resolve();
      }, this.props.delay || 500);
    });
  }

  makeMoves = (moves) => {
    return moves.reduce((chain, move) => {
      return chain.then(this.makeMove.bind(this, move))
    }, Promise.resolve())
  }

  render() {
    return (
      <div id={this.props.boardId}
        className={this.props.boardContainer || styles.boardContainer}
        ref="chessboard" />
    );
  }
}

Chessboard.propTypes = {
  draggable: PropTypes.bool,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  onSnapEnd: PropTypes.func
};

Chessboard.defaultProps = {
  draggable: true,
  onDragStart() {},
  onDrop() {},
  onSnapEnd() {}
};
