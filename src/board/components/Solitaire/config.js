const position = '8/k7/1qb5/b7/8/8/8/8 b - - 0 40';
const artifacts = 'b - - 0 40';
const instructions = `Rules: Capture and eliminate all but one piece
using only moves allowed in traditional chess. You must capture a
piece with every move.`;

const solitaire = {
    artifacts,
    position,
    instructions,
    conf: {
        gameOver: {
            draggable: false
        },
        hu: {
            draggable: true,
            onDrop,
            onSnapEnd
        }
    }
};

function onDrop (source, target) {
    const options = {
        legal: false,
        them: this.props.color,
        us: this.props.color
    };
    const pieceSquares = this.board.position();
    let isSolved;
    let move;

    if (!(target in pieceSquares)) {
        return 'snapback';
    }

    move = this.props.game.move({
        from: source,
        to: target
    }, options);

    isSolved = move && Object.keys(pieceSquares).length === 2;
    setTimeout(this.props.switchTurn.bind(null, isSolved), 200);
}

function onSnapEnd () {
    this.board.position(this.props.game.fen());
}

export default solitaire;
