import React from 'react';
import MovelistRow from './move-list-row';

const Movelist = (props) => {
    const createRow = (move) => {
        return <MovelistRow {...move} key={`${move.num}${move.w}${move.b}`}/>
    };

    return (
        <div>
            {props.moves.map(createRow)}
        </div>
    );
};

export default Movelist;
