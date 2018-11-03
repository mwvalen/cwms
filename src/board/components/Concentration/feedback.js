import React from 'react'

const Feedback = (props) => {
    const getMessage = () => {
        if (!props.started) {
            return 'A game of concentration';
        }
        if (props.gameOver) {
            return `Game over. Your score is ${props.score}`;
        } else if (props.aiTurn) {
            return 'Memorize the sequence!';
        } else {
            return 'Your turn! Repeat the sequence!';
        }
    };

    return (
        <div style={{marginLeft: '20px', width: '300px'}}>
            <p>{getMessage()}</p>
            {(!props.started || props.gameOver) &&
                <button onClick={props.startGame}>
                    {props.started ? 'Try Again': 'Start'}
                </button>
            }
            {!props.gameOver && <p>Level: {props.level}</p>}
            <p>High: {props.highScore}</p>
        </div>
    );
};

export default Feedback;
