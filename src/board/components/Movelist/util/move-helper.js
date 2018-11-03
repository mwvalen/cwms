/*
* specifically, take a verbose history array from chessjs and convert it
* into an array of move ojects suitable for movelist component
*/
export function parseMoves (history, startIdx=1) {
    let blackFirst = 0;
    return history.reduce((moves, move, idx, hist) => {
        if (idx === 0 && move.color === 'b') {
            moves.push({
                num: startIdx,
                b: move.san
            });
            blackFirst = 1;
        } else if (move.color === 'w') {
            let b = hist[idx + 1] || {};
            moves.push({
                num: ((idx - blackFirst) / 2) + startIdx,
                w: move.san,
                b: b.san
            });
        }
        return moves;
    }, []);
};
