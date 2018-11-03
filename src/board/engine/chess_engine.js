//const enginePath = './src/lib/stockfish.js';
const enginePath = '/build/stockfish.js'
const engine = new Worker(enginePath);

const defaults = {
    //'Contempt': 0,
    //'Skill Level': 0,
    //'Skill Level Maximum Error': 100,
    //'King Safety': 100,
    //'Space': 100
};

let initialized = false;

export function getMove (fen, options = defaults) {
    return init()
        .then(() => {
            return new Promise((resolve) => {
                engine.onmessage = ({data}) => {
                    if (data.indexOf('bestmove') > -1) {
                        resolve(data.split(' ')[1]);
                    }
                };
                setOptions(options);
                send(`position fen ${fen}`);
                send('go movetime 1000');
            });
        });
}

export function getScore (fen) {
    return init()
        .then(() => {
            return new Promise((resolve) => {
                engine.onmessage = ({data}) => {
                    if (data.indexOf('Evaluation') > -1) {
                        resolve(data.split(' ')[2]);
                    }
                };
                send(`position fen ${fen}`);
                send('eval');
            });
        });
}

function init () {
    return initialized
        ? Promise.resolve('uciok')
        : new Promise((resolve) => {
            engine.onmessage = ({data}) => {
                if (data === 'uciok') {
                    initialized = true;
                    resolve(data);
                }
            };
            send('uci');
        });
}

function setOptions (options) {
    Object.keys(options).forEach(option => {
        send(`setoption name ${option} value ${options[option]}`);
    });
}

function send (str) {
    engine.postMessage(str);
}
