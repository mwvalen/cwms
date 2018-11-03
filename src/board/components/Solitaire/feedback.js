import React from 'react';

const Feedback = (props) => {
    return (
        <div style={{marginLeft: '20px', width: '300px'}}>
            <p><strong>Solitaire Chess</strong></p>
            <p>{props.instructions}</p>
            {!props.gameOver &&
                <button type="button" onClick={props.startGame}>
                    {props.started ? 'Restart' : 'Start'}
                </button>
            }
            {props.gameOver &&
                <p>Puzzle solved!</p>
            }
        </div>
    );
};

export default Feedback;
