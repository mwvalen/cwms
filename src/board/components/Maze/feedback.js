import React from 'react';

const Feedback = (props) => {
    const getMessage = () => {
        if (props.gameOver) {
            return 'Puzzle Solved!';
        }

        if (!props.started) {
            return props.instructions;
        }

        if (props.rightMove) {
            return 'Best move! Keep going...';
        } else {
            return 'Wrong move! Try again';
        }
    }
    return (
        <div style={{marginLeft: '20px', width: '300px'}}>
            <div><strong>King Maze</strong></div>
            <p>{getMessage()}</p>
        </div>
    );
};

export default Feedback;
