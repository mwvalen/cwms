const maze = {
    conf: {
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
    let sound = ''
    this.setConfig({
        draggable: false
    });
    if (isCorrect) {
      sound = target in oldPos
        ? 'capture'
        : 'normal'
    }
    this.props.switchTurn(isCorrect, this.board.fen(), sound);
}

export default maze;
