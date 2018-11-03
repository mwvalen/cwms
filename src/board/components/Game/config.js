import { getMove } from '../../engine/chess_engine';

const game = {
    ai: {
        draggable: false,
        onStart: function () {
            getMove(this.props.game.fen())
                .then((str) => {
                    const from = str.substr(0, 2);
                    const to = str.substr(2, 2);
                    this.props.game.move({from, to, promotion: 'q'});
                    this.board.position(this.props.game.fen());
                    this.props.switchTurn();
                });
        }
    },
    hu: {
        draggable: true,
        onDrop,
        onSnapEnd
    },
    gameOver: {
        draggable: false
    }
};

function onDrop (source, target) {
    const move = this.props.game.move({
        from: source,
        to: target,
        promotion: 'q'
    });

    if (move === null) return 'snapback';

    this.props.switchTurn();
}

function onSnapEnd () {
    this.board.position(this.props.game.fen());
}

export default game;
