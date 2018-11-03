const concentration = {
    conf: {
        ai: {
            draggable: false,
            onStart: function () {
                const sequence = this.props.solution
                    .slice(0, this.props.level);

                this.makeMoves(sequence)
                    .then(() => {
                        setTimeout(this.props.switchTurn.bind(null, true), 300);
                    });
            }
        },
        hu: {
            draggable: true,
            onDrop: getOnDropHandler()
        },
        gameOver: {
            draggable: false
        }
    }
};

function getOnDropHandler () {
    let progress = 0;
    return function (source, target) {
        const move = `${source}-${target}`;
        const isCorrect = this.props.solution[progress] === move;
        const isLastStep = progress + 1 === this.props.level;

        if (isLastStep || !isCorrect) {
            progress = 0;
            this.setConfig({
                draggable: false
            });
            this.props.switchTurn(isCorrect);
            return;
        }

        progress += 1;
    };
}

export default concentration;
