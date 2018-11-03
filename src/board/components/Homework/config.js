import ChessBoard from 'board/components/Chessboard/chessboardjs/chessboard';

const position= '2bqkbn1/2pppp2/np2N3/r3P1p1/p2N2B1/5Q2/PPPPKPP1/RNB2r2';

const isPromotion = (piece, target) => {
  return piece[1] === 'P' &&
    (target[1] === '1' || target[1] === '8')
}

const isCastle = (piece, source, target) => {
  const isKing = piece[1] === 'K'
  if (!isKing) {
    return false;
  }
  const color = piece[0]
  if (color === 'w') {
    return (source === 'e1' && target === 'g1') ||
      (source === 'e1' && target === 'c1')
  } else {
    return (source === 'e8' && target === 'g8') ||
      (source === 'e8' && target === 'c8')
  }
}

const homework = {
    position,
    conf: {
        ai: {
            draggable: false,
            onStart: function () {
                const move = this.props.solution[this.props.level - 1];

                this.makeMove(move)
                    .then(this.props.switchTurn.bind(null, true));
            }
        },
        hu: {
            draggable: true,
            onDrop
        },
        gameOver: {
            draggable: false
        }
    }
};

function onDrop (source, target, piece, newPos, oldPos) {
    const move = `${source}-${target}`;
    const isCorrect = this.props.solution[this.props.level - 1] === move;
    let moveType = 'normal'
    this.setConfig({
        draggable: false
    });
    if (isPromotion(piece, target)) {
      newPos[target] = `${piece[0]}Q`
      moveType = 'promote'
    }
    if (target in oldPos) {
      moveType = 'capture'
    }
    if (isCorrect && isCastle(piece, source, target)) {
      if (piece[0] === 'w') {
        if (target === 'c1') {
          newPos['d1'] = 'wR'
          delete newPos['a1']
        } else {
          newPos['f1'] = 'wR'
          delete newPos['h1']
        }
      } else {
        if (target === 'c8') {
          newPos['d8'] = 'bR'
          delete newPos['a8']
        } else {
          newPos['f8'] = 'bR'
          delete newPos['h8']
        }
      }
    }
    this.props.switchTurn(isCorrect,
      ChessBoard.objToFen(isCorrect ? newPos : oldPos), moveType);
}

export default homework;
