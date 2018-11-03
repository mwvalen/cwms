import React from 'react';
import Movelist from '../MoveList/move-list';

const Feedback = (props) => {
    return (
        <div style={{marginLeft: '20px', width: '300px'}}>
            {!props.started &&
                <div>
                    <p>{props.instructions}</p>
                    <button onClick={props.startGame}>New game</button>
                    {props.gameOver && props.decisive &&
                        <p>{getResultMessage(props.winner)}</p>
                    }
                    {props.gameOver && !props.decisive &&
                        <p>Draw game</p>
                    }
                </div>
            }
            {props.started &&
                <div>
                    <p>{getTurnMessage(props.game.turn())}</p>
                    <Movelist moves={props.moves}/>
                    {isHumanTurn(props.game.turn()) &&
                        <div>
                            <button onClick={props.drawGame}>Draw</button>
                            <button onClick={props.resignGame}>Resign</button>
                        </div>
                    }
                </div>
            }
        </div>
    );

    function getColorName (turn) {
        return {
            b: 'Black',
            w: 'White'
        }[turn];
    }

    function getResultMessage (turn) {
        return `${getColorName(turn)} won!`;
    }

    function getTurnMessage (turn) {
        return `${getColorName(turn)} to play`;
    }

    function isHumanTurn (turn) {
        return props.players[turn] === 'hu';
    }
};

export default Feedback;
