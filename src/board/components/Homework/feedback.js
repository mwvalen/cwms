import React from 'react';

class Feedback extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div style={{marginLeft: '20px', width: '300px'}}>
                <p>{ this.getMessage() }</p>
                {this.props.gameOver && this.isThereAnotherPuzzle() &&
                    <button onClick={this.props.nextPuzzle}>Next puzzle</button>
                }
                <p>Puzzle {this.props.puzzleNumber + 1} of {this.props.puzzles.length} </p>
            </div>
        );
    }

    getMessage () {
        if (this.props.gameOver) {
            return 'Puzzle Solved!';
        }

        if (!this.props.started) {
            return this.props.instructions;
        }

        if (this.props.rightMove) {
            return 'Best move! Keep going...';
        } else {
            return 'Wrong move! Try again';
        }
    }

    isThereAnotherPuzzle = () => {
        return this.props.puzzleNumber + 1 < this.props.puzzles.length;
    }
}

export default Feedback;
