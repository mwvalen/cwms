import React from 'react';
import styles from './movelist.css';

const MovelistRow = (props) => {
    return (
        <div className={styles.moveListRow}>
            <span>{props.num}</span>
            {props.w &&
                <span>{props.w}</span>
            }
            {props.b &&
                <span>{props.b}</span>
            }
        </div>
    );
};

export default MovelistRow;
