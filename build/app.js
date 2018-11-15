webpackJsonp([0],Array(39).concat([
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"form":"_2YS8Rz0fC0ODWuAlNycjg9"};

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primaryBtn":"_37yVz1sT5pP9QPGZQFB5e2","linkBtn":"_1VJLfEY6Q7aJSzq-p7sfju"};

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getErrorMessage = exports.getErrorMessage = function getErrorMessage(error, fallback) {
  return error && error.response && error.response.data && error.response.data.message || fallback;
};

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flipMode = exports.setIsCamp = exports.setRegistrationError = exports.clearRegistration = exports.recordCharge = exports.registerPayment = exports.registerStudent = exports.registerCourses = undefined;

var _types = __webpack_require__(55);

var registerCourses = exports.registerCourses = function registerCourses(courses) {
  return {
    type: _types.SET_REGISTRATION,
    payload: {
      courses: courses
    }
  };
};

var registerStudent = exports.registerStudent = function registerStudent(student) {
  return {
    type: _types.SET_REGISTRATION,
    payload: {
      student: student
    }
  };
};

var registerPayment = exports.registerPayment = function registerPayment(payment) {
  return {
    type: _types.SET_REGISTRATION,
    payload: {
      payment: payment
    }
  };
};

var recordCharge = exports.recordCharge = function recordCharge(charge) {
  return {
    type: _types.SET_REGISTRATION,
    payload: {
      charge: charge
    }
  };
};

var clearRegistration = exports.clearRegistration = function clearRegistration() {
  return {
    type: _types.CLEAR_REGISTRATION
  };
};

var setRegistrationError = exports.setRegistrationError = function setRegistrationError(error) {
  return {
    type: _types.SET_REGISTRATION,
    payload: {
      error: error
    }
  };
};

var setIsCamp = exports.setIsCamp = function setIsCamp(isCamp) {
  return {
    type: _types.SET_IS_CAMP,
    payload: isCamp
  };
};

var flipMode = exports.flipMode = function flipMode(isCamp) {
  return {
    type: 'flipMode',
    payload: isCamp
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_COURSE = exports.ADD_COURSE = 'ADD_COURSE';
var UPDATE_COURSE = exports.UPDATE_COURSE = 'UPDATE_COURSE';
var SET_COURSES = exports.SET_COURSES = 'SET_COURSES';
var SET_CAMPS = exports.SET_CAMPS = 'SET_CAMPS';
var LOAD_COURSES_FAILED = exports.LOAD_COURSES_FAILED = 'LOAD_COURSES_FAILED';
var LOAD_CAMPS_FAILED = exports.LOAD_CAMPS_FAILED = 'LOAD_CAMPS_FAILED';
var CLEAR_REGISTRATION = exports.CLEAR_REGISTRATION = 'CLEAR_REGISTRATION';
var SET_REGISTRATION = exports.SET_REGISTRATION = 'SET_REGISTRATION';
var CREATE_USER_PAYMENT = exports.CREATE_USER_PAYMENT = 'CREATE_USER_PAYMENT';
var CREATE_USER_PAYMENT_FAILED = exports.CREATE_USER_PAYMENT_FAILED = 'CREATE_USER_PAYMENT_FAILED';
var SET_SCHOOLS = exports.SET_SCHOOLS = 'SET_SCHOOLS';
var LOAD_SCHOOLS_FAILED = exports.LOAD_SCHOOLS_FAILED = 'LOAD_SCHOOLS_FAILED';
var ADD_SCHOOL = exports.ADD_SCHOOL = 'ADD_SCHOOL';
var UPDATE_SCHOOL = exports.UPDATE_SCHOOL = 'UPDATE_SCHOOL';
var SET_IS_CAMP = exports.SET_IS_CAMP = 'SET_IS_CAMP';

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_3Uc_JQUzBC5efxa_xkaZuo"};

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.logout = exports.login = exports.adminLogin = exports.checkSession = undefined;

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _error = __webpack_require__(48);

var _types = __webpack_require__(112);

var _user = __webpack_require__(156);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkSession = exports.checkSession = function checkSession() {
  return function (dispatch) {
    _axios2.default.get('/api/check-session').then(function (response) {
      var sessionType = response.data;
      if (sessionType !== 'noSession') {
        _axios2.default.get('/api/user').then(function (response) {
          dispatch((0, _user.setUser)(response.data));
          dispatch({
            type: _types.SESSION_START,
            payload: sessionType.slice(0, sessionType.indexOf('Session'))
          });
        });
      } else {
        dispatch({
          type: _types.SESSION_END
        });
      }
    });
  };
};

var adminLogin = exports.adminLogin = function adminLogin(username, password) {
  return function (dispatch) {
    var fallback = 'Incorrect username or password';
    _axios2.default.post('/api/login/admin', { username: username, password: password }).then(function (response) {
      dispatch((0, _user.setUser)(response.data));
      dispatch({
        type: _types.SESSION_START,
        payload: 'admin'
      });
    }).catch(function (error) {
      dispatch({
        type: _types.SESSION_START_FAILED,
        payload: (0, _error.getErrorMessage)(error, fallback)
      });
    });
  };
};

var login = exports.login = function login(username, password) {
  return function (dispatch) {
    var fallback = 'Incorrect username or password';
    _axios2.default.post('/login', { username: username, password: password }).then(function (response) {
      dispatch((0, _user.setUser)(response.data));
      dispatch({
        type: _types.SESSION_START,
        payload: 'student'
      });
    }).catch(function (error) {
      dispatch({
        type: _types.SESSION_START_FAILED,
        payload: (0, _error.getErrorMessage)(error, fallback)
      });
    });
  };
};

var logout = exports.logout = function logout() {
  return function (dispatch) {
    _axios2.default.post('/api/logout').then(function (response) {
      dispatch({
        type: _types.SESSION_END
      });
      dispatch({
        type: _types.CLEAR_USER
      });
    });
  };
};

var signup = exports.signup = function signup(newUser) {
  return function (dispatch) {
    var fallback = 'Could not create user';
    return _axios2.default.post('/api/signup', newUser).then(function (response) {
      dispatch((0, _user.setUser)(response.data));
      dispatch({
        type: _types.SESSION_START,
        payload: 'student'
      });
    });
  };
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _chessboard = __webpack_require__(236);

var _chessboard2 = _interopRequireDefault(_chessboard);

var _styles = __webpack_require__(684);

var _styles2 = _interopRequireDefault(_styles);

var _chessboard3 = __webpack_require__(275);

var _chessboard4 = _interopRequireDefault(_chessboard3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chessboard = function (_React$Component) {
  _inherits(Chessboard, _React$Component);

  function Chessboard(props) {
    _classCallCheck(this, Chessboard);

    var _this = _possibleConstructorReturn(this, (Chessboard.__proto__ || Object.getPrototypeOf(Chessboard)).call(this, props));

    _this.onSquareClick = function (event) {
      var square = [].concat(_toConsumableArray(event.target.classList)).find(function (className) {
        return className.indexOf('square-') > -1;
      });
      if (!square) {
        square = [].concat(_toConsumableArray(event.target.parentNode.classList)).find(function (className) {
          return className.indexOf('square-') > -1;
        });
      }
      if (square && _this.props.handleSquareClick) {
        _this.props.handleSquareClick(square.split('square-').pop());
      }
    };

    _this.handleResize = function () {
      _this.board.resize();
    };

    _this.handleDragStart = function (source, piece, position, orientation) {
      _this.props.onDragStart.call(_this, source, piece, position, orientation);
    };

    _this.handleDrop = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this.props.onDrop.apply(_this, args);
    };

    _this.handleSnapEnd = function () {
      _this.props.onSnapEnd.call(_this);
    };

    _this.highlightSquare = function (square) {
      var elem = _this.refs.chessboard.querySelector('.square-' + square);
      if (elem) {
        elem.classList.add('' + _chessboard4.default.highlight);
      }
    };

    _this.unHighlightSquare = function (square) {
      var elem = _this.refs.chessboard.querySelector('.square-' + square);
      if (elem) {
        elem.classList.remove('' + _chessboard4.default.highlight);
      }
    };

    _this.setPosition = function (position) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          _this.board.position(position);
          resolve();
        }, 200);
      });
    };

    _this.makeMove = function (move) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          _this.board.move(move);
          resolve();
        }, _this.props.delay || 500);
      });
    };

    _this.makeMoves = function (moves) {
      return moves.reduce(function (chain, move) {
        return chain.then(_this.makeMove.bind(_this, move));
      }, Promise.resolve());
    };

    return _this;
  }

  _createClass(Chessboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.config = {
        draggable: this.props.draggable,
        position: this.props.position,
        pieceTheme: '/assets/pieces/wikipedia/{piece}.png',
        onDragStart: this.handleDragStart,
        onDrop: this.handleDrop,
        onSnapEnd: this.handleSnapEnd,
        showErrors: false,
        showNotation: false
      };

      this.board = (0, _chessboard2.default)(this.props.boardId, this.config);

      this.refs.chessboard.addEventListener('click', this.onSquareClick);

      if (this.props.onStart) {
        this.props.onStart.call(this);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var task = nextProps.position ? this.setPosition(nextProps.position) : Promise.resolve();

      task.then(function () {
        if ('draggable' in nextProps) {
          _this2.setConfig({ draggable: nextProps.draggable });
        }
        if (_this2.props.onDrop !== nextProps.onDrop) {
          _this2.setConfig({ onDrop: nextProps.onDrop.bind(_this2) });
        }
        if (nextProps.onStart) {
          nextProps.onStart.call(_this2);
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.refs.chessboard.removeEventListener('click', this.onSquareClick);
    }
  }, {
    key: 'setConfig',
    value: function setConfig(options) {
      this.config = Object.assign(this.config, options);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: this.props.boardId,
        className: this.props.boardContainer || _styles2.default.boardContainer,
        ref: 'chessboard' });
    }
  }]);

  return Chessboard;
}(_react2.default.Component);

exports.default = Chessboard;


Chessboard.propTypes = {
  draggable: _react.PropTypes.bool,
  onDragStart: _react.PropTypes.func,
  onDrop: _react.PropTypes.func,
  onSnapEnd: _react.PropTypes.func
};

Chessboard.defaultProps = {
  draggable: true,
  onDragStart: function onDragStart() {},
  onDrop: function onDrop() {},
  onSnapEnd: function onSnapEnd() {}
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(686);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'flex flex-column items-center ' + _styles2.default.instructions },
    _react2.default.createElement('img', { src: '/assets/pieces/cwms/bN.png' }),
    _react2.default.createElement(
      'h2',
      null,
      'Instructions'
    ),
    _react2.default.createElement(
      'p',
      null,
      props.instructions
    )
  );
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(689);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.avatar + ' ' + (props.className || '') },
    _react2.default.createElement('img', { src: props.src })
  );
};

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"boardContainer":"_1rhViOI31-_Ce1IEe3gFpA","header":"_3Lew2EM5r58G3xeiEyfPH_","banner":"_2pwO9ytbsOW8hgPFf9Hrfw","body":"_2U6gLuaU4tneRm--S-cqAz","chessBoard":"_3IVker8I8dJAzx8Zqd6s8U","leftRow":"bZvSZ8rUn_n5lNzjoBMyK","properBoardContainer":"_3fyL8KbJ3mQUZbEnkrC5j-","properBoard":"_2ONnVgwtgElQb4NCrS7cUP","bottomRow":"_1eE2KAtlwMs8GulICFE362","feedback":"_3R8yi7lEwIvd5i8jZxGUGr","rank":"_1GRxLNSJi-FVu-0A2pG7jP","file":"_1pscZqztSuQTXxkOpmRHWd","failBtn":"_1tyk1VcdVgV2JN5hDQJhqS","successBtn":"_3zDye_f6jlYYFRmHUBVC-Y","exitBtn":"NB7_ruQgb1-su3yhNxnlN","bannerAvatar":"_3uS2WJDShHvCUCp1n7e65r"};

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var typeToFile = {
  check: 'move-check.mp3',
  capture: 'capture.mp3',
  castle: 'castle.mp3',
  promote: 'promote.mp3',
  normal: 'move-self.mp3',
  success: 'success.wav',
  error: 'error.wav'
};

var ChessmoveSound = function (_React$Component) {
  _inherits(ChessmoveSound, _React$Component);

  function ChessmoveSound() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChessmoveSound);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChessmoveSound.__proto__ || Object.getPrototypeOf(ChessmoveSound)).call.apply(_ref, [this].concat(args))), _this), _this.getSoundSrc = function (type) {
      //return `/assets/${typeToFile[type]}`
      return '';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChessmoveSound, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      /*this.refs.audio.addEventListener('loadeddata', () => {
        this.refs.audio.play()
      })*/
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('audio', { ref: 'audio', src: this.getSoundSrc(this.props.type) });
    }
  }]);

  return ChessmoveSound;
}(_react2.default.Component);

exports.default = ChessmoveSound;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  postalCode: /[a-z]\d[a-z]\s?\d[a-z]\d/i,
  camelCase: /([a-z])([A-Z])/g
};

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"courseCell":"_2QjdDR-2JmoSXD7F0aoWaC","courseTable":"uxVfdFNUbg62mFU-29Jui","courseModal":"_3twbNqQBXtZiUlVOyPpHZq","schoolModal":"_6H87CCgybwkzuFEvVGoEw","teacherModal":"_3Lnt5uwjGvupudmbedNO9k"};

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"headerSm":"_3vX6M38UoHD1-m9ylFJUKD","container":"_3WlzGjWpWDxYVo9icJFjLr"};

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"courseCell":"_2Xizq3lSZALFPXHeAwj9zo","courseTable":"MiPyEgEabZFWQ2HJSOcrY","campHeader":"_2u6J_rer6vo4_f5afZmdEV","icon":"_1toyXns0R6LVcjkTapLKC6","registerLink":"_1mFu-r3v9FUsiQQK3lKUq"};

/***/ }),
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SESSION_START = exports.SESSION_START = 'SESSION_START';
var SESSION_END = exports.SESSION_END = 'SESSION_END';
var SESSION_START_FAILED = exports.SESSION_START_FAILED = 'SESSION_START_FAILED';
var CLEAR_USER = exports.CLEAR_USER = 'CLEAR_USER';
var SET_USER = exports.SET_USER = 'SET_USER';

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLinkBtn = exports.NavLink = undefined;

var _bind = __webpack_require__(628);

var _bind2 = _interopRequireDefault(_bind);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _styles = __webpack_require__(276);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_styles2.default);

var NavLink = exports.NavLink = (0, _reactRouterDom.withRouter)(function (props) {
  var className = cx({
    active: props.location.pathname.indexOf(props.url) === 0,
    navLink: true
  });
  return _react2.default.createElement(
    _reactRouterDom.Link,
    { className: 'flex items-center justify-center ' + className,
      to: props.url },
    props.name
  );
});

var NavLinkBtn = exports.NavLinkBtn = (0, _reactRouterDom.withRouter)(function (props) {
  var className = cx({
    active: props.location.pathname.indexOf(props.url) === 0,
    navLink: true
  });
  return _react2.default.createElement(
    'div',
    { style: props.style || {},
      className: 'flex items-center justify-center ' + className + ' ' + (props.className || ''),
      onClick: props.handleClick },
    props.name
  );
});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'span',
    null,
    props.date.toLocaleTimeString([], { hour12: props.hour12,
      hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York' })
  );
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCourses = exports.loadCamps = exports.loadCourse = exports.updateCourse = undefined;

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _error = __webpack_require__(48);

var _types = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateCourse = exports.updateCourse = function updateCourse(course) {
  return {
    type: _types.UPDATE_COURSE,
    payload: course
  };
};

var loadCourse = exports.loadCourse = function loadCourse(course) {
  return {
    type: _types.ADD_COURSE,
    payload: course
  };
};

var loadCamps = exports.loadCamps = function loadCamps() {
  return function (dispatch) {
    var fallbackErrorMessage = 'Could not retrieve camps';
    _axios2.default.get('/api/camps').then(function (response) {
      dispatch({
        type: _types.SET_CAMPS,
        payload: response.data
      });
    }).catch(function (error) {
      dispatch({
        type: LOAD_CAMPS_FAILED,
        payload: (0, _error.getErrorMessage)(error, fallbackErrorMessage)
      });
    });
  };
};

var loadCourses = exports.loadCourses = function loadCourses(filter, withCamps) {
  return function (dispatch) {
    var fallbackErrorMessage = 'Could not retrieve courses';
    var url = filter ? '/api/courses/' + filter.season + '/' + filter.year : '/api/courses';

    _axios2.default.get('' + url + (withCamps ? '?camps=true' : '')).then(function (response) {
      dispatch({
        type: _types.SET_COURSES,
        payload: response.data
      });
    }).catch(function (error) {
      dispatch({
        type: _types.LOAD_COURSES_FAILED,
        payload: (0, _error.getErrorMessage)(error, fallbackErrorMessage)
      });
    });
  };
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSchools = exports.loadSchool = exports.updateSchool = undefined;

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _error = __webpack_require__(48);

var _types = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateSchool = exports.updateSchool = function updateSchool(school) {
  return {
    type: _types.UPDATE_SCHOOL,
    payload: school
  };
};

var loadSchool = exports.loadSchool = function loadSchool(school) {
  return {
    type: _types.ADD_SCHOOL,
    payload: school
  };
};

var loadSchools = exports.loadSchools = function loadSchools() {
  return function (dispatch) {
    return _axios2.default.get('/api/schools').then(function (response) {
      dispatch({
        type: _types.SET_SCHOOLS,
        payload: response.data
      });
    }).catch(function (error) {
      var defaultMessage = 'School is out';
      dispatch({
        type: _types.LOAD_SCHOOLS_FAILED,
        payload: (0, _error.getErrorMessage)(error, defaultMessage)
      });
    });
  };
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var galleryPhotos = exports.galleryPhotos = ['bday.jpg', 'concentration.jpg', 'notation.jpg', 'participation.jpg', 'popsicle.jpg', 'popsicleII.jpg', 'ruylopez.jpg', 'tournament.jpg', 'assistant.jpg'];

var navLinks = exports.navLinks = [{
  url: '/classes',
  name: 'Classes'
}, {
  url: '/camps',
  name: 'Camps'
}, {
  url: '/contactus',
  name: 'Contact Us'
}];

var chessLevels = exports.chessLevels = ['pawn', 'knight', 'bishop', 'rook', 'queen', 'king', 'advanced 1', 'advanced 2', 'advanced 3'];

var sectionText = exports.sectionText = {
  whatWeDo: 'We teach, inspire, and develop young minds through the art and\n  science of chess. We transform newcomers to the game into the confident and\n  bright individuals they are meant to become. Chess with Mr. S has helped thousands\n  of students across the GTA develop stronger academic performance, leadership skills,\n  and overall confidence through a unique and effective training system. Students\n  are exposed to a variety of engaging group activities which inspires team work\n  and the development of strong social skills. We encourage you to set up a time,\n  and join one of our many classes or camps to see why Chess with Mr. S has become one of the\n  most respected and sought-after instructional programs in the region.',

  objective: 'Being a sport of the mind, chess provides many opportunities for children\n  to develop their cognitive abilities. Our goal is to ensure that children of all ages\n  learn to maximize their creativity and problem solving skills by providing a complete\n  curriculum that effectively challenges their minds. In addition to improving decision making,\n  the study of chess offers countless lessons that heighten emotional intelligence.\n  The experience of learning from past mistakes and overcoming defeat contributes to greater\n  maturity and superior emotional control. In essence, learning chess provides a balanced approach\n  that develops a healthy mind which in turn serves as a cornerstone to attaining a healthy life.',

  classes: {
    warmUp: 'The warm up includes "sparring" with a partner of similar ability in\n    a semi formal casual style of play, while receiving occasional instruction\n    and guidance.',
    lessons: 'Our teachers focus on specific topics geared at increasing positional and\n    strategic play, while making sure the students are well engaged and entertained.',
    competitivePlay: 'Students will prepare themselves for a competitive game in\n    which tournament rules will be followed incorporating the lessons covered.'
  },
  camps: {
    intro: 'Chess with Mr. S summer camps are simply amazing! Students will enjoy\n    several lectures daily, mixed with competitive and casual play.  As a part of our\n    exciting camps, students are included in many other activities including,\n    Outdoor Sports, Lego Challenges, Drama Productions, Arts and Crafts, Minecraft,\n    Double Chess and more!',
    northYork: 'Chess with Mr. S summer camps are in partership with Focus learning\n    - please visit Focus Learning for additional information, registration or to sign\n    up to many other wonderul programs we offer throughout the year, including Chess,\n    Robotics, Coding, Writing, Math and Much More! www.focus-learning.ca',
    markham: 'Chess with Mr. S summer camps are in partnership with Canada Chess Youth Club (CCYC) -\n    please visit www.youthchess.ca for additional information.'
  }
};

/***/ }),
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityTable = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(141);

var _FlatButton = __webpack_require__(83);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _styles = __webpack_require__(98);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Entity = function Entity(props) {
  var entity = props.entity;

  return _react2.default.createElement(
    _Table.TableRow,
    null,
    props.colList.map(function (key, idx) {
      return _react2.default.createElement(
        _Table.TableRowColumn,
        { key: idx },
        _react2.default.createElement(
          'div',
          { className: _styles2.default.courseCell },
          entity[key].toString()
        )
      );
    }),
    _react2.default.createElement(
      _Table.TableRowColumn,
      null,
      _react2.default.createElement(
        'div',
        { className: _styles2.default.courseCell },
        _react2.default.createElement(_FlatButton2.default, { label: 'Edit', onClick: function onClick() {
            props.onEditClick(entity);
          } })
      )
    )
  );
};

var EntityTable = exports.EntityTable = function EntityTable(props) {
  return _react2.default.createElement(
    _Table.Table,
    { className: _styles2.default.courseTable },
    _react2.default.createElement(
      _Table.TableHeader,
      { displaySelectAll: false, adjustForCheckbox: false },
      _react2.default.createElement(
        _Table.TableRow,
        null,
        props.colList.map(function (_ref) {
          var name = _ref.name,
              key = _ref.key;

          return _react2.default.createElement(
            _Table.TableHeaderColumn,
            { key: key },
            name
          );
        }).concat(_react2.default.createElement(
          _Table.TableHeaderColumn,
          { key: 'edit' },
          'Update'
        ))
      )
    ),
    _react2.default.createElement(
      _Table.TableBody,
      { displayRowCheckbox: false },
      props.items.map(function (item, key) {
        return _react2.default.createElement(Entity, { onEditClick: props.onEditClick,
          colList: props.colList.map(function (_ref2) {
            var key = _ref2.key;
            return key;
          }),
          key: key, entity: item });
      })
    )
  );
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.updateProgressByLevel = exports.clearUser = exports.setUser = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _error = __webpack_require__(48);

var _types = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setUser = exports.setUser = function setUser(user) {
  return {
    type: _types.SET_USER,
    payload: user
  };
};

var clearUser = exports.clearUser = function clearUser(user) {
  return {
    type: _types.CLEAR_USER
  };
};

var updateProgressByLevel = exports.updateProgressByLevel = function updateProgressByLevel(level, weekNumber, index, data) {
  return function (dispatch) {
    return _axios2.default.post('/api/user/progress-by-level', {
      level: level, weekNumber: weekNumber, index: index, data: data
    }).then(function (_ref) {
      var data = _ref.data;

      dispatch({
        type: _types.SET_USER,
        payload: {
          progress: data
        }
      });
    });
  };
};

var updateUser = exports.updateUser = function updateUser(update) {
  return function (dispatch) {
    return _axios2.default.put('/api/user', _extends({}, update)).then(function (_ref2) {
      var data = _ref2.data;

      dispatch({
        type: _types.SET_USER,
        payload: data
      });
    });
  };
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var formatCurrency = function formatCurrency(cents, currency) {
    var value = (props.cents / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: props.currency || 'USD',
      minimumFractionDigits: 2
    });
    return cents >= 0 ? value : '(' + value.slice(1) + ')';
  };

  return _react2.default.createElement(
    'span',
    { style: props.style },
    formatCurrency(props.cents, props.currency)
  );
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _navLink = __webpack_require__(113);

var _Separator = __webpack_require__(159);

var _Separator2 = _interopRequireDefault(_Separator);

var _layout = __webpack_require__(59);

var _layout2 = _interopRequireDefault(_layout);

var _styles = __webpack_require__(276);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavLogo = (0, _reactRouterDom.withRouter)(function (props) {
  var className = props.showBigLogo ? _styles2.default.navLogo : _styles2.default.smallLogo;
  return _react2.default.createElement(
    _reactRouterDom.Link,
    { className: className + ' flex items-center', to: props.root || '/' },
    _react2.default.createElement('img', { src: '/assets/shield.png' }),
    _react2.default.createElement(
      'h2',
      null,
      'Chess with',
      _react2.default.createElement('br', null),
      ' Mr. S'
    )
  );
});

exports.default = function (props) {
  return _react2.default.createElement(
    'nav',
    { className: _styles2.default.navbar + ' flex' },
    _react2.default.createElement(
      'div',
      { style: { height: "90px" }, className: _layout2.default.container + ' flex justify-between' },
      _react2.default.createElement(NavLogo, props),
      _react2.default.createElement(
        'div',
        { style: { height: '100%' }, className: 'flex justify-between items-center' },
        props.links.map(function (link, idx) {
          return _react2.default.createElement(
            'div',
            { key: 'navlink-' + idx, style: { color: "white" }, className: 'flex' },
            _react2.default.createElement(_navLink.NavLink, _extends({ key: link.name }, link)),
            idx < props.links.length - 1 && _react2.default.createElement(_Separator2.default, { key: 'separator-' + idx })
          );
        }),
        props.children
      )
    )
  );
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(692);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'span',
    { className: _styles2.default.separator + ' ' + (props.className || '') },
    ' | '
  );
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getField = undefined;

var _pattern = __webpack_require__(93);

var _batman = __webpack_require__(573);

var getField = exports.getField = function getField(key) {
  return {
    key: key,
    name: (0, _batman.capitalize)(key.replace(_pattern.camelCase, '$1 $2'))
  };
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(694);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var label = _ref.label,
      handleOnClick = _ref.handleOnClick,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style;
  return _react2.default.createElement(
    'button',
    { style: style,
      onClick: handleOnClick,
      className: _styles2.default.button },
    label
  );
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(141);

var _Currency = __webpack_require__(157);

var _Currency2 = _interopRequireDefault(_Currency);

var _School = __webpack_require__(568);

var _School2 = _interopRequireDefault(_School);

var _Teacher = __webpack_require__(569);

var _Teacher2 = _interopRequireDefault(_Teacher);

var _TimeOfDay = __webpack_require__(114);

var _TimeOfDay2 = _interopRequireDefault(_TimeOfDay);

var _styles = __webpack_require__(100);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var getPriceColumn = function getPriceColumn(course) {
  //Restore this as necessary

  // if (course.soldOut) {
  //   return (
  //     <strong style={{textTransform: "uppercase", color: "red"}}>Sold out</strong>
  //   )
  // } else if (course.isCamp) {
  //   return (
  //     <span>
  //       <Currency cents={course.price * 100} /><br />
  //       <strong>{course.magicNumber - course.registered} spots left</strong>
  //     </span>
  //   )
  // }
  if (course.soldOut) {
    return _react2.default.createElement(
      'strong',
      { style: { textTransform: "uppercase", color: "red" } },
      'Sold out'
    );
  }
  return _react2.default.createElement(_Currency2.default, { cents: course.price * 100 });
};

var getClassDate = function getClassDate(chessClass) {
  var startDT = new Date(chessClass.startTime);
  return months[startDT.getMonth()] + ' ' + startDT.getDate();
};

var ClassTime = function ClassTime(props) {
  var startDT = new Date(props.startTime);
  var endDT = new Date(props.endTime);
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_TimeOfDay2.default, { date: startDT }),
    '-',
    _react2.default.createElement(_TimeOfDay2.default, { date: endDT })
  );
};

var pairUp = function pairUp(result, item, idx) {
  if (idx % 2) {
    result[result.length - 1] = result[result.length - 1] + ', ' + getClassDate(item) + (idx !== result.length - 1 ? ',' : '');
  } else {
    result.push(getClassDate(item));
  }
  return result;
};

exports.default = function (props) {
  var handleRowSelection = function handleRowSelection(selectedRows) {
    if (props.handleRowSelect) {
      props.handleRowSelect(selectedRows);
    }
  };
  return _react2.default.createElement(
    _Table.Table,
    { className: _styles2.default.courseTable,
      multiSelectable: true, onRowSelection: handleRowSelection },
    _react2.default.createElement(
      _Table.TableHeader,
      { displaySelectAll: false, adjustForCheckbox: props.readonly },
      _react2.default.createElement(
        _Table.TableRow,
        null,
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'School'
        ),
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'Teacher'
        ),
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'Time'
        ),
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'Dates'
        ),
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'Price'
        )
      )
    ),
    _react2.default.createElement(
      _Table.TableBody,
      { deselectOnClickaway: false,
        displayRowCheckbox: props.readonly !== true },
      props.courses.map(function (course, idx) {
        return _react2.default.createElement(
          _Table.TableRow,
          { key: idx, selected: props.readonly !== true && props.selectedRows.includes(idx), selectable: course.soldOut !== true },
          _react2.default.createElement(
            _Table.TableRowColumn,
            null,
            _react2.default.createElement(
              'div',
              { className: _styles2.default.courseCell },
              course.school.name
            )
          ),
          _react2.default.createElement(
            _Table.TableRowColumn,
            null,
            _react2.default.createElement(
              'div',
              { className: _styles2.default.courseCell },
              course.teacher.firstName + ' ' + course.teacher.lastName
            )
          ),
          _react2.default.createElement(
            _Table.TableRowColumn,
            null,
            _react2.default.createElement(
              'div',
              { className: _styles2.default.courseCell },
              _react2.default.createElement(ClassTime, course.classes[0])
            )
          ),
          _react2.default.createElement(
            _Table.TableRowColumn,
            null,
            _react2.default.createElement(
              'div',
              { className: _styles2.default.courseCell },
              course.classes.reduce(pairUp, []).map(function (str) {
                return _react2.default.createElement(
                  'div',
                  { key: str },
                  str
                );
              })
            )
          ),
          _react2.default.createElement(
            _Table.TableRowColumn,
            null,
            _react2.default.createElement(
              'div',
              { className: _styles2.default.courseCell },
              getPriceColumn(course)
            )
          )
        );
      })
    ),
    _react2.default.createElement(
      _Table.TableFooter,
      { adjustForCheckbox: props.readonly !== true },
      _react2.default.createElement(
        _Table.TableRow,
        null,
        _react2.default.createElement(_Table.TableRowColumn, { colSpan: 3 }),
        _react2.default.createElement(
          _Table.TableRowColumn,
          { style: { textAlign: 'center' } },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.courseCell },
            _react2.default.createElement(
              'strong',
              null,
              'Total:'
            )
          )
        ),
        _react2.default.createElement(
          _Table.TableRowColumn,
          null,
          _react2.default.createElement(
            'div',
            { className: _styles2.default.courseCell },
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(_Currency2.default, { cents: props.total * 100 })
            )
          )
        )
      )
    )
  );
};

/***/ }),
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadTeachers = exports.loadTeacher = exports.updateTeacher = undefined;

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _error = __webpack_require__(48);

var _types = __webpack_require__(234);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateTeacher = exports.updateTeacher = function updateTeacher(teacher) {
  return {
    type: _types.UPDATE_TEACHER,
    payload: teacher
  };
};

var loadTeacher = exports.loadTeacher = function loadTeacher(teacher) {
  return {
    type: _types.ADD_TEACHER,
    payload: teacher
  };
};

var loadTeachers = exports.loadTeachers = function loadTeachers() {
  return function (dispatch) {
    return _axios2.default.get('/api/teachers').then(function (response) {
      dispatch({
        type: _types.SET_TEACHERS,
        payload: response.data
      });
    }).catch(function (error) {
      var defaultMessage = 'Could not load teachers';
      dispatch({
        type: _types.LOAD_TEACHERS_FAILED,
        payload: (0, _error.getErrorMessage)(error, defaultMessage)
      });
    });
  };
};

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_TEACHER = exports.ADD_TEACHER = 'ADD_TEACHER';
var LOAD_TEACHERS_FAILED = exports.LOAD_TEACHERS_FAILED = 'LOAD_TEACHERS_FAILED';
var SET_TEACHERS = exports.SET_TEACHERS = 'SET_TEACHERS';
var UPDATE_TEACHER = exports.UPDATE_TEACHER = 'UPDATE_TEACHER';
var ADD_SCHOOL = exports.ADD_SCHOOL = 'ADD_SCHOOL';
var LOAD_SCHOOLS_FAILED = exports.LOAD_SCHOOLS_FAILED = 'LOAD_SCHOOLS_FAILED';
var SET_SCHOOLS = exports.SET_SCHOOLS = 'SET_SCHOOLS';
var UPDATE_SCHOOL = exports.UPDATE_SCHOOL = 'UPDATE_SCHOOL';

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var navLinks = exports.navLinks = [{
  url: '/registration',
  name: 'Registration'
}, {
  url: '/homework',
  name: 'Homework'
}, {
  url: '/courses',
  name: 'Courses'
}];

var homeworkLinks = exports.homeworkLinks = [{
  level: 'Pawn',
  weeks: ['PawnMoves', 'KnightMoves', 'BishopMoves', 'RookMoves', 'QueenMoves', 'KingMoves']
}, {
  level: 'Knight',
  weeks: ['Castling', 'Check', 'CheckmateInOne', 'ChessNotation', 'EnPassant', 'ImpossiblePositions', 'Stalemate']
}, {
  level: 'Bishop',
  weeks: ['ABCsOfTheOpening', 'FairOrNot', 'Forks', 'ForksII', 'Openings', 'OpeningsII', 'PieceValue', 'ScholarsMate']
}, {
  level: 'Rook',
  weeks: ['CheckmateInTwo', 'DiscoveredAttack', 'KingAndQueenMates', 'KingAndRookMates', 'MagicIf', 'MatePatterns', 'Pins', 'Skewers']
}, {
  level: 'Queen',
  weeks: ['ClearanceSacrifice', 'Decoys', 'Deflections', 'KingAndPawnEndgames', 'KingAndPawnEndgamesII', 'TacticalCombinations']
}, {
  level: 'King',
  weeks: ['AttackOnCastledKing', 'AttackOnCastledKingII', 'AttackOnUncastledKing', 'AttackOnUncastledKingII', 'DefensivePuzzles', 'MatePatterns']
}];

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*!
                                                                                                                                                                                                                                                                               * chessboard.js v0.3.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Copyright 2013 Chris Oakman
                                                                                                                                                                                                                                                                               * Released under the MIT license
                                                                                                                                                                                                                                                                               * http://chessboardjs.com/license
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Date: 10 Aug 2013
                                                                                                                                                                                                                                                                               */

var _jquery = __webpack_require__(763);

var _jquery2 = _interopRequireDefault(_jquery);

var _chessboard = __webpack_require__(275);

var _chessboard2 = _interopRequireDefault(_chessboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//------------------------------------------------------------------------------
// Chess Util Functions
//------------------------------------------------------------------------------
var COLUMNS = 'abcdefgh'.split('');

function validMove(move) {
  // move should be a string
  if (typeof move !== 'string') return false;

  // move should be in the form of "e2-e4", "f6-d5"
  var tmp = move.split('-');
  if (tmp.length !== 2) return false;

  return validSquare(tmp[0]) === true && validSquare(tmp[1]) === true;
}

function validSquare(square) {
  if (typeof square !== 'string') return false;
  return square.search(/^[a-h][1-8]$/) !== -1;
}

function validPieceCode(code) {
  if (typeof code !== 'string') return false;
  return code.search(/^[bw][KQRNBP]$/) !== -1;
}

// TODO: this whole function could probably be replaced with a single regex
function validFen(fen) {
  if (typeof fen !== 'string') return false;

  // cut off any move, castling, etc info from the end
  // we're only interested in position information
  fen = fen.replace(/ .+$/, '');

  // FEN should be 8 sections separated by slashes
  var chunks = fen.split('/');
  if (chunks.length !== 8) return false;

  // check the piece sections
  for (var i = 0; i < 8; i++) {
    if (chunks[i] === '' || chunks[i].length > 8 || chunks[i].search(/[^kqrbnpKQRNBP1-8]/) !== -1) {
      return false;
    }
  }

  return true;
}

function validPositionObject(pos) {
  if ((typeof pos === 'undefined' ? 'undefined' : _typeof(pos)) !== 'object') return false;

  for (var i in pos) {
    if (pos.hasOwnProperty(i) !== true) continue;

    if (validSquare(i) !== true || validPieceCode(pos[i]) !== true) {
      return false;
    }
  }

  return true;
}

// convert FEN piece code to bP, wK, etc
function fenToPieceCode(piece) {
  // black piece
  if (piece.toLowerCase() === piece) {
    return 'b' + piece.toUpperCase();
  }

  // white piece
  return 'w' + piece.toUpperCase();
}

// convert bP, wK, etc code to FEN structure
function pieceCodeToFen(piece) {
  var tmp = piece.split('');

  // white piece
  if (tmp[0] === 'w') {
    return tmp[1].toUpperCase();
  }

  // black piece
  return tmp[1].toLowerCase();
}

// convert FEN string to position object
// returns false if the FEN string is invalid
function fenToObj(fen) {
  if (validFen(fen) !== true) {
    return false;
  }

  // cut off any move, castling, etc info from the end
  // we're only interested in position information
  fen = fen.replace(/ .+$/, '');

  var rows = fen.split('/');
  var position = {};

  var currentRow = 8;
  for (var i = 0; i < 8; i++) {
    var row = rows[i].split('');
    var colIndex = 0;

    // loop through each character in the FEN section
    for (var j = 0; j < row.length; j++) {
      // number / empty squares
      if (row[j].search(/[1-8]/) !== -1) {
        var emptySquares = parseInt(row[j], 10);
        colIndex += emptySquares;
      }
      // piece
      else {
          var square = COLUMNS[colIndex] + currentRow;
          position[square] = fenToPieceCode(row[j]);
          colIndex++;
        }
    }

    currentRow--;
  }

  return position;
}

// position object to FEN string
// returns false if the obj is not a valid position object
function objToFen(obj) {
  if (validPositionObject(obj) !== true) {
    return false;
  }

  var fen = '';

  var currentRow = 8;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      var square = COLUMNS[j] + currentRow;

      // piece exists
      if (obj.hasOwnProperty(square) === true) {
        fen += pieceCodeToFen(obj[square]);
      }

      // empty space
      else {
          fen += '1';
        }
    }

    if (i !== 7) {
      fen += '/';
    }

    currentRow--;
  }

  // squeeze the numbers together
  // haha, I love this solution...
  fen = fen.replace(/11111111/g, '8');
  fen = fen.replace(/1111111/g, '7');
  fen = fen.replace(/111111/g, '6');
  fen = fen.replace(/11111/g, '5');
  fen = fen.replace(/1111/g, '4');
  fen = fen.replace(/111/g, '3');
  fen = fen.replace(/11/g, '2');

  return fen;
}

var ChessBoard = function ChessBoard(containerElOrId, cfg) {

  cfg = cfg || {};

  //------------------------------------------------------------------------------
  // Constants
  //------------------------------------------------------------------------------

  var MINIMUM_JQUERY_VERSION = '1.7.0',
      START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
      START_POSITION = fenToObj(START_FEN);

  // use unique class names to prevent clashing with anything else on the page
  // and simplify selectors
  var CSS = {
    alpha: 'alpha-d2270',
    black: 'black-3c85d',
    board: 'board-b72b1',
    chessboard: 'chessboard-63f37',
    clearfix: 'clearfix-7da63',
    highlight1: 'highlight1-32417',
    highlight2: 'highlight2-9c5d2',
    notation: 'notation-322f9',
    numeric: 'numeric-fc462',
    piece: 'piece-417db',
    row: 'row-5277c',
    sparePieces: 'spare-pieces-7492f',
    sparePiecesBottom: 'spare-pieces-bottom-ae20f',
    sparePiecesTop: 'spare-pieces-top-4028b',
    square: 'square-55d63',
    white: 'white-1e1d7'
  };

  //------------------------------------------------------------------------------
  // Module Scope Variables
  //------------------------------------------------------------------------------

  // DOM elements
  var containerEl, boardEl, draggedPieceEl, sparePiecesTopEl, sparePiecesBottomEl;

  // constructor return object
  var widget = {};

  //------------------------------------------------------------------------------
  // Stateful
  //------------------------------------------------------------------------------

  var ANIMATION_HAPPENING = false,
      BOARD_BORDER_SIZE = 2,
      CURRENT_ORIENTATION = 'white',
      CURRENT_POSITION = {},
      SQUARE_SIZE,
      DRAGGED_PIECE,
      DRAGGED_PIECE_LOCATION,
      DRAGGED_PIECE_SOURCE,
      DRAGGING_A_PIECE = false,
      SPARE_PIECE_ELS_IDS = {},
      SQUARE_ELS_IDS = {},
      SQUARE_ELS_OFFSETS;

  //------------------------------------------------------------------------------
  // JS Util Functions
  //------------------------------------------------------------------------------

  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
  function createId() {
    return 'xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function (c) {
      var r = Math.random() * 16 | 0;
      return r.toString(16);
    });
  }

  function deepCopy(thing) {
    return JSON.parse(JSON.stringify(thing));
  }

  function parseSemVer(version) {
    var tmp = version.split('.');
    return {
      major: parseInt(tmp[0], 10),
      minor: parseInt(tmp[1], 10),
      patch: parseInt(tmp[2], 10)
    };
  }

  // returns true if version is >= minimum
  function compareSemVer(version, minimum) {
    version = parseSemVer(version);
    minimum = parseSemVer(minimum);

    var versionNum = version.major * 10000 * 10000 + version.minor * 10000 + version.patch;
    var minimumNum = minimum.major * 10000 * 10000 + minimum.minor * 10000 + minimum.patch;

    return versionNum >= minimumNum;
  }

  //------------------------------------------------------------------------------
  // Validation / Errors
  //------------------------------------------------------------------------------

  function error(code, msg, obj) {
    // do nothing if showErrors is not set
    if (cfg.hasOwnProperty('showErrors') !== true || cfg.showErrors === false) {
      return;
    }

    var errorText = 'ChessBoard Error ' + code + ': ' + msg;

    // print to console
    if (cfg.showErrors === 'console' && (typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object' && typeof console.log === 'function') {
      console.log(errorText);
      if (arguments.length >= 2) {
        console.log(obj);
      }
      return;
    }

    // alert errors
    if (cfg.showErrors === 'alert') {
      if (obj) {
        errorText += '\n\n' + JSON.stringify(obj);
      }
      window.alert(errorText);
      return;
    }

    // custom function
    if (typeof cfg.showErrors === 'function') {
      cfg.showErrors(code, msg, obj);
    }
  }

  // check dependencies
  function checkDeps() {
    // if containerId is a string, it must be the ID of a DOM node
    if (typeof containerElOrId === 'string') {
      // cannot be empty
      if (containerElOrId === '') {
        window.alert('ChessBoard Error 1001: ' + 'The first argument to ChessBoard() cannot be an empty string.' + '\n\nExiting...');
        return false;
      }

      // make sure the container element exists in the DOM
      var el = document.getElementById(containerElOrId);
      if (!el) {
        window.alert('ChessBoard Error 1002: Element with id "' + containerElOrId + '" does not exist in the DOM.' + '\n\nExiting...');
        return false;
      }

      // set the containerEl
      containerEl = (0, _jquery2.default)(el);
    }

    // else it must be something that becomes a jQuery collection
    // with size 1
    // ie: a single DOM node or jQuery object
    else {
        containerEl = (0, _jquery2.default)(containerElOrId);

        if (containerEl.length !== 1) {
          window.alert('ChessBoard Error 1003: The first argument to ' + 'ChessBoard() must be an ID or a single DOM node.' + '\n\nExiting...');
          return false;
        }
      }

    // JSON must exist
    if (!window.JSON || typeof JSON.stringify !== 'function' || typeof JSON.parse !== 'function') {
      window.alert('ChessBoard Error 1004: JSON does not exist. ' + 'Please include a JSON polyfill.\n\nExiting...');
      return false;
    }

    // check for a compatible version of jQuery
    if (!(_typeof(window.$) && _jquery2.default.fn && _jquery2.default.fn.jquery && compareSemVer(_jquery2.default.fn.jquery, MINIMUM_JQUERY_VERSION) === true)) {
      window.alert('ChessBoard Error 1005: Unable to find a valid version ' + 'of jQuery. Please include jQuery ' + MINIMUM_JQUERY_VERSION + ' or ' + 'higher on the page.\n\nExiting...');
      return false;
    }

    return true;
  }

  function validAnimationSpeed(speed) {
    if (speed === 'fast' || speed === 'slow') {
      return true;
    }

    if (parseInt(speed, 10) + '' !== speed + '') {
      return false;
    }

    return speed >= 0;
  }

  // validate config / set default options
  function expandConfig() {
    if (typeof cfg === 'string' || validPositionObject(cfg) === true) {
      cfg = {
        position: cfg
      };
    }

    // default for orientation is white
    if (cfg.orientation !== 'black') {
      cfg.orientation = 'white';
    }
    CURRENT_ORIENTATION = cfg.orientation;

    // default for showNotation is true
    if (cfg.showNotation !== false) {
      cfg.showNotation = true;
    }

    // default for draggable is false
    if (cfg.draggable !== true) {
      cfg.draggable = false;
    }

    // default for dropOffBoard is 'snapback'
    if (cfg.dropOffBoard !== 'trash') {
      cfg.dropOffBoard = 'snapback';
    }

    // default for sparePieces is false
    if (cfg.sparePieces !== true) {
      cfg.sparePieces = false;
    }

    // draggable must be true if sparePieces is enabled
    if (cfg.sparePieces === true) {
      cfg.draggable = true;
    }

    // default piece theme is wikipedia
    if (cfg.hasOwnProperty('pieceTheme') !== true || typeof cfg.pieceTheme !== 'string' && typeof cfg.pieceTheme !== 'function') {
      cfg.pieceTheme = 'img/chesspieces/wikipedia/{piece}.png';
    }

    // animation speeds
    if (cfg.hasOwnProperty('appearSpeed') !== true || validAnimationSpeed(cfg.appearSpeed) !== true) {
      cfg.appearSpeed = 200;
    }
    if (cfg.hasOwnProperty('moveSpeed') !== true || validAnimationSpeed(cfg.moveSpeed) !== true) {
      cfg.moveSpeed = 200;
    }
    if (cfg.hasOwnProperty('snapbackSpeed') !== true || validAnimationSpeed(cfg.snapbackSpeed) !== true) {
      cfg.snapbackSpeed = 50;
    }
    if (cfg.hasOwnProperty('snapSpeed') !== true || validAnimationSpeed(cfg.snapSpeed) !== true) {
      cfg.snapSpeed = 25;
    }
    if (cfg.hasOwnProperty('trashSpeed') !== true || validAnimationSpeed(cfg.trashSpeed) !== true) {
      cfg.trashSpeed = 100;
    }

    // make sure position is valid
    if (cfg.hasOwnProperty('position') === true) {
      if (cfg.position === 'start') {
        CURRENT_POSITION = deepCopy(START_POSITION);
      } else if (validFen(cfg.position) === true) {
        CURRENT_POSITION = fenToObj(cfg.position);
      } else if (validPositionObject(cfg.position) === true) {
        CURRENT_POSITION = deepCopy(cfg.position);
      } else {
        error(7263, 'Invalid value passed to config.position.', cfg.position);
      }
    }

    return true;
  }

  //------------------------------------------------------------------------------
  // DOM Misc
  //------------------------------------------------------------------------------

  // calculates square size based on the width of the container
  // got a little CSS black magic here, so let me explain:
  // get the width of the container element (could be anything), reduce by 1 for
  // fudge factor, and then keep reducing until we find an exact mod 8 for
  // our square size
  function calculateSquareSize() {
    var containerWidth = parseInt(containerEl.css('width'), 10);

    // defensive, prevent infinite loop
    if (!containerWidth || containerWidth <= 0) {
      return 0;
    }

    // pad one pixel
    var boardWidth = containerWidth - 1;

    while (boardWidth % 8 !== 0 && boardWidth > 0) {
      boardWidth--;
    }

    return boardWidth / 8;
  }

  // create random IDs for elements
  function createElIds() {
    // squares on the board
    for (var i = 0; i < COLUMNS.length; i++) {
      for (var j = 1; j <= 8; j++) {
        var square = COLUMNS[i] + j;
        SQUARE_ELS_IDS[square] = square + '-' + createId();
      }
    }

    // spare pieces
    var pieces = 'KQRBNP'.split('');
    for (var i = 0; i < pieces.length; i++) {
      var whitePiece = 'w' + pieces[i];
      var blackPiece = 'b' + pieces[i];
      SPARE_PIECE_ELS_IDS[whitePiece] = whitePiece + '-' + createId();
      SPARE_PIECE_ELS_IDS[blackPiece] = blackPiece + '-' + createId();
    }
  }

  //------------------------------------------------------------------------------
  // Markup Building
  //------------------------------------------------------------------------------

  function buildBoardContainer() {

    var html = '<div class="' + _chessboard2.default.chessboard + '">';

    if (cfg.sparePieces === true) {
      html += '<div class="' + _chessboard2.default.sparePieces + ' ' + _chessboard2.default.sparePiecesTop + '"></div>';
    }

    html += '<div class="' + _chessboard2.default.board + '"></div>';

    if (cfg.sparePieces === true) {
      html += '<div class="' + _chessboard2.default.sparePieces + ' ' + _chessboard2.default.sparePiecesBottom + '"></div>';
    }

    html += '</div>';

    return html;
  }

  function buildBoard(orientation) {
    if (orientation !== 'black') {
      orientation = 'white';
    }

    var html = '';

    // algebraic notation / orientation
    var alpha = deepCopy(COLUMNS);
    var row = 8;
    if (orientation === 'black') {
      alpha.reverse();
      row = 1;
    }

    var squareColor = 'white';
    for (var i = 0; i < 8; i++) {
      html += '<div class="' + _chessboard2.default.row + '">';
      for (var j = 0; j < 8; j++) {
        var square = alpha[j] + row;

        html += '<div class="' + _chessboard2.default.square + ' ' + _chessboard2.default[squareColor] + ' ' + 'square-' + square + '" ' + 'style="width: ' + SQUARE_SIZE + 'px; height: ' + SQUARE_SIZE + 'px" ' + 'id="' + SQUARE_ELS_IDS[square] + '" ' + 'data-square="' + square + '">';

        if (cfg.showNotation === true) {
          // alpha notation
          if (orientation === 'white' && row === 1 || orientation === 'black' && row === 8) {
            html += '<div class="' + _chessboard2.default.notation + ' ' + _chessboard2.default.alpha + '">' + alpha[j] + '</div>';
          }

          // numeric notation
          if (j === 0) {
            html += '<div class="' + _chessboard2.default.notation + ' ' + _chessboard2.default.numeric + '">' + row + '</div>';
          }
        }

        html += '</div>'; // end .square

        squareColor = squareColor === 'white' ? 'black' : 'white';
      }
      html += '<div class="' + _chessboard2.default.clearfix + '"></div></div>';

      squareColor = squareColor === 'white' ? 'black' : 'white';

      if (orientation === 'white') {
        row--;
      } else {
        row++;
      }
    }

    return html;
  }

  function buildPieceImgSrc(piece) {
    if (typeof cfg.pieceTheme === 'function') {
      return cfg.pieceTheme(piece);
    }

    if (typeof cfg.pieceTheme === 'string') {
      return cfg.pieceTheme.replace(/{piece}/g, piece);
    }

    // NOTE: this should never happen
    error(8272, 'Unable to build image source for cfg.pieceTheme.');
    return '';
  }

  function buildPiece(piece, hidden, id) {
    var html = '<img src="' + buildPieceImgSrc(piece) + '" ';
    if (id && typeof id === 'string') {
      html += 'id="' + id + '" ';
    }
    html += 'alt="" ' + 'class="' + _chessboard2.default.piece + '" ' + 'data-piece="' + piece + '" ' + 'style="width: ' + SQUARE_SIZE + 'px;' + 'height: ' + SQUARE_SIZE + 'px;';
    if (hidden === true) {
      html += 'display:none;';
    }
    html += '" />';

    return html;
  }

  function buildSparePieces(color) {
    var pieces = ['wK', 'wQ', 'wR', 'wB', 'wN', 'wP'];
    if (color === 'black') {
      pieces = ['bK', 'bQ', 'bR', 'bB', 'bN', 'bP'];
    }

    var html = '';
    for (var i = 0; i < pieces.length; i++) {
      html += buildPiece(pieces[i], false, SPARE_PIECE_ELS_IDS[pieces[i]]);
    }

    return html;
  }

  //------------------------------------------------------------------------------
  // Animations
  //------------------------------------------------------------------------------

  function animateSquareToSquare(src, dest, piece, completeFn) {
    // get information about the source and destination squares
    var srcSquareEl = (0, _jquery2.default)('#' + SQUARE_ELS_IDS[src]);
    var srcSquarePosition = srcSquareEl.offset();
    var destSquareEl = (0, _jquery2.default)('#' + SQUARE_ELS_IDS[dest]);
    var destSquarePosition = destSquareEl.offset();

    // create the animated piece and absolutely position it
    // over the source squastylesre
    var animatedPieceId = createId();
    (0, _jquery2.default)('body').append(buildPiece(piece, true, animatedPieceId));
    var animatedPieceEl = (0, _jquery2.default)('#' + animatedPieceId);
    animatedPieceEl.css({
      display: '',
      position: 'absolute',
      top: srcSquarePosition.top,
      left: srcSquarePosition.left
    });

    // remove original piece from source square
    srcSquareEl.find('.' + _chessboard2.default.piece).remove();

    // on complete
    var complete = function complete() {
      // add the "real" piece to the destination square
      destSquareEl.append(buildPiece(piece));

      // remove the animated piece
      animatedPieceEl.remove();

      // run complete function
      if (typeof completeFn === 'function') {
        completeFn();
      }
    };

    // animate the piece to the destination square
    var opts = {
      duration: cfg.moveSpeed,
      complete: complete
    };
    animatedPieceEl.animate(destSquarePosition, opts);
  }

  function animateSparePieceToSquare(piece, dest, completeFn) {
    var srcOffset = (0, _jquery2.default)('#' + SPARE_PIECE_ELS_IDS[piece]).offset();
    var destSquareEl = (0, _jquery2.default)('#' + SQUARE_ELS_IDS[dest]);
    var destOffset = destSquareEl.offset();

    // create the animate piece
    var pieceId = createId();
    (0, _jquery2.default)('body').append(buildPiece(piece, true, pieceId));
    var animatedPieceEl = (0, _jquery2.default)('#' + pieceId);
    animatedPieceEl.css({
      display: '',
      position: 'absolute',
      left: srcOffset.left,
      top: srcOffset.top
    });

    // on complete
    var complete = function complete() {
      // add the "real" piece to the destination square
      destSquareEl.find('.' + _chessboard2.default.piece).remove();
      destSquareEl.append(buildPiece(piece));

      // remove the animated piece
      animatedPieceEl.remove();

      // run complete function
      if (typeof completeFn === 'function') {
        completeFn();
      }
    };

    // animate the piece to the destination square
    var opts = {
      duration: cfg.moveSpeed,
      complete: complete
    };
    animatedPieceEl.animate(destOffset, opts);
  }

  // execute an array of animations
  function doAnimations(a, oldPos, newPos) {
    ANIMATION_HAPPENING = true;

    var numFinished = 0;
    function onFinish() {
      numFinished++;

      // exit if all the animations aren't finished
      if (numFinished !== a.length) return;

      drawPositionInstant();
      ANIMATION_HAPPENING = false;

      // run their onMoveEnd function
      if (cfg.hasOwnProperty('onMoveEnd') === true && typeof cfg.onMoveEnd === 'function') {
        cfg.onMoveEnd(deepCopy(oldPos), deepCopy(newPos));
      }
    }

    for (var i = 0; i < a.length; i++) {
      // clear a piece
      if (a[i].type === 'clear') {
        (0, _jquery2.default)('#' + SQUARE_ELS_IDS[a[i].square] + ' .' + _chessboard2.default.piece).fadeOut(cfg.trashSpeed, onFinish);
      }

      // add a piece (no spare pieces)
      if (a[i].type === 'add' && cfg.sparePieces !== true) {
        (0, _jquery2.default)('#' + SQUARE_ELS_IDS[a[i].square]).append(buildPiece(a[i].piece, true)).find('.' + _chessboard2.default.piece).fadeIn(cfg.appearSpeed, onFinish);
      }

      // add a piece from a spare piece
      if (a[i].type === 'add' && cfg.sparePieces === true) {
        animateSparePieceToSquare(a[i].piece, a[i].square, onFinish);
      }

      // move a piece
      if (a[i].type === 'move') {
        animateSquareToSquare(a[i].source, a[i].destination, a[i].piece, onFinish);
      }
    }
  }

  // returns the distance between two squares
  function squareDistance(s1, s2) {
    s1 = s1.split('');
    var s1x = COLUMNS.indexOf(s1[0]) + 1;
    var s1y = parseInt(s1[1], 10);

    s2 = s2.split('');
    var s2x = COLUMNS.indexOf(s2[0]) + 1;
    var s2y = parseInt(s2[1], 10);

    var xDelta = Math.abs(s1x - s2x);
    var yDelta = Math.abs(s1y - s2y);

    if (xDelta >= yDelta) return xDelta;
    return yDelta;
  }

  // returns an array of closest squares from square
  function createRadius(square) {
    var squares = [];

    // calculate distance of all squares
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        var s = COLUMNS[i] + (j + 1);

        // skip the square we're starting from
        if (square === s) continue;

        squares.push({
          square: s,
          distance: squareDistance(square, s)
        });
      }
    }

    // sort by distance
    squares.sort(function (a, b) {
      return a.distance - b.distance;
    });

    // just return the square code
    var squares2 = [];
    for (var i = 0; i < squares.length; i++) {
      squares2.push(squares[i].square);
    }

    return squares2;
  }

  // returns the square of the closest instance of piece
  // returns false if no instance of piece is found in position
  function findClosestPiece(position, piece, square) {
    // create array of closest squares from square
    var closestSquares = createRadius(square);

    // search through the position in order of distance for the piece
    for (var i = 0; i < closestSquares.length; i++) {
      var s = closestSquares[i];

      if (position.hasOwnProperty(s) === true && position[s] === piece) {
        return s;
      }
    }

    return false;
  }

  // calculate an array of animations that need to happen in order to get
  // from pos1 to pos2
  function calculateAnimations(pos1, pos2) {
    // make copies of both
    pos1 = deepCopy(pos1);
    pos2 = deepCopy(pos2);

    var animations = [];
    var squaresMovedTo = {};

    // remove pieces that are the same in both positions
    for (var i in pos2) {
      if (pos2.hasOwnProperty(i) !== true) continue;

      if (pos1.hasOwnProperty(i) === true && pos1[i] === pos2[i]) {
        delete pos1[i];
        delete pos2[i];
      }
    }

    // find all the "move" animations
    for (var i in pos2) {
      if (pos2.hasOwnProperty(i) !== true) continue;

      var closestPiece = findClosestPiece(pos1, pos2[i], i);
      if (closestPiece !== false) {
        animations.push({
          type: 'move',
          source: closestPiece,
          destination: i,
          piece: pos2[i]
        });

        delete pos1[closestPiece];
        delete pos2[i];
        squaresMovedTo[i] = true;
      }
    }

    // add pieces to pos2
    for (var i in pos2) {
      if (pos2.hasOwnProperty(i) !== true) continue;

      animations.push({
        type: 'add',
        square: i,
        piece: pos2[i]
      });

      delete pos2[i];
    }

    // clear pieces from pos1
    for (var i in pos1) {
      if (pos1.hasOwnProperty(i) !== true) continue;

      // do not clear a piece if it is on a square that is the result
      // of a "move", ie: a piece capture
      if (squaresMovedTo.hasOwnProperty(i) === true) continue;

      animations.push({
        type: 'clear',
        square: i,
        piece: pos1[i]
      });

      delete pos1[i];
    }

    return animations;
  }

  //------------------------------------------------------------------------------
  // Control Flow
  //------------------------------------------------------------------------------

  function drawPositionInstant() {
    // clear the board
    boardEl.find('.' + _chessboard2.default.piece).remove();

    // add the pieces
    for (var i in CURRENT_POSITION) {
      if (CURRENT_POSITION.hasOwnProperty(i) !== true) continue;

      (0, _jquery2.default)('#' + SQUARE_ELS_IDS[i]).append(buildPiece(CURRENT_POSITION[i]));
    }
  }

  function drawBoard() {
    boardEl.html(buildBoard(CURRENT_ORIENTATION));
    drawPositionInstant();

    if (cfg.sparePieces === true) {
      if (CURRENT_ORIENTATION === 'white') {
        sparePiecesTopEl.html(buildSparePieces('black'));
        sparePiecesBottomEl.html(buildSparePieces('white'));
      } else {
        sparePiecesTopEl.html(buildSparePieces('white'));
        sparePiecesBottomEl.html(buildSparePieces('black'));
      }
    }
  }

  // given a position and a set of moves, return a new position
  // with the moves executed
  function calculatePositionFromMoves(position, moves) {
    position = deepCopy(position);

    for (var i in moves) {
      if (moves.hasOwnProperty(i) !== true) continue;

      // skip the move if the position doesn't have a piece on the source square
      if (position.hasOwnProperty(i) !== true) continue;

      var piece = position[i];
      delete position[i];
      position[moves[i]] = piece;
    }

    return position;
  }

  function setCurrentPosition(position) {
    var oldPos = deepCopy(CURRENT_POSITION);
    var newPos = deepCopy(position);
    var oldFen = objToFen(oldPos);
    var newFen = objToFen(newPos);

    // do nothing if no change in position
    if (oldFen === newFen) return;

    // run their onChange function
    if (cfg.hasOwnProperty('onChange') === true && typeof cfg.onChange === 'function') {
      cfg.onChange(oldPos, newPos);
    }

    // update state
    CURRENT_POSITION = position;
  }

  function isXYOnSquare(x, y) {
    for (var i in SQUARE_ELS_OFFSETS) {
      if (SQUARE_ELS_OFFSETS.hasOwnProperty(i) !== true) continue;

      var s = SQUARE_ELS_OFFSETS[i];
      if (x >= s.left && x < s.left + SQUARE_SIZE && y >= s.top && y < s.top + SQUARE_SIZE) {
        return i;
      }
    }

    return 'offboard';
  }

  // records the XY coords of every square into memory
  function captureSquareOffsets() {
    SQUARE_ELS_OFFSETS = {};

    for (var i in SQUARE_ELS_IDS) {
      if (SQUARE_ELS_IDS.hasOwnProperty(i) !== true) continue;

      SQUARE_ELS_OFFSETS[i] = (0, _jquery2.default)('#' + SQUARE_ELS_IDS[i]).offset();
    }
  }

  function removeSquareHighlights() {
    boardEl.find('.' + _chessboard2.default.square).removeClass(_chessboard2.default.highlight1 + ' ' + _chessboard2.default.highlight2);
  }

  function snapbackDraggedPiece() {
    // there is no "snapback" for spare pieces
    if (DRAGGED_PIECE_SOURCE === 'spare') {
      trashDraggedPiece();
      return;
    }

    removeSquareHighlights();

    // animation complete
    function complete() {
      drawPositionInstant();
      draggedPieceEl.css('display', 'none');

      // run their onSnapbackEnd function
      if (cfg.hasOwnProperty('onSnapbackEnd') === true && typeof cfg.onSnapbackEnd === 'function') {
        cfg.onSnapbackEnd(DRAGGED_PIECE, DRAGGED_PIECE_SOURCE, deepCopy(CURRENT_POSITION), CURRENT_ORIENTATION);
      }
    }

    // get source square position
    var sourceSquarePosition = (0, _jquery2.default)('#' + SQUARE_ELS_IDS[DRAGGED_PIECE_SOURCE]).offset();

    // animate the piece to the target square
    var opts = {
      duration: cfg.snapbackSpeed,
      complete: complete
    };
    draggedPieceEl.animate(sourceSquarePosition, opts);

    // set state
    DRAGGING_A_PIECE = false;
  }

  function trashDraggedPiece() {
    removeSquareHighlights();

    // remove the source piece
    var newPosition = deepCopy(CURRENT_POSITION);
    delete newPosition[DRAGGED_PIECE_SOURCE];
    setCurrentPosition(newPosition);

    // redraw the position
    drawPositionInstant();

    // hide the dragged piece
    draggedPieceEl.fadeOut(cfg.trashSpeed);

    // set state
    DRAGGING_A_PIECE = false;
  }

  function dropDraggedPieceOnSquare(square) {
    removeSquareHighlights();

    // update position
    var newPosition = deepCopy(CURRENT_POSITION);
    delete newPosition[DRAGGED_PIECE_SOURCE];
    newPosition[square] = DRAGGED_PIECE;
    setCurrentPosition(newPosition);

    // get target square information
    var targetSquarePosition = (0, _jquery2.default)('#' + SQUARE_ELS_IDS[square]).offset();

    // animation complete
    var complete = function complete() {
      drawPositionInstant();
      draggedPieceEl.css('display', 'none');

      // execute their onSnapEnd function
      if (cfg.hasOwnProperty('onSnapEnd') === true && typeof cfg.onSnapEnd === 'function') {
        cfg.onSnapEnd(DRAGGED_PIECE_SOURCE, square, DRAGGED_PIECE);
      }
    };

    // snap the piece to the target square
    var opts = {
      duration: cfg.snapSpeed,
      complete: complete
    };
    draggedPieceEl.animate(targetSquarePosition, opts);

    // set state
    DRAGGING_A_PIECE = false;
  }

  function beginDraggingPiece(source, piece, x, y) {
    // run their custom onDragStart function
    // their custom onDragStart function can cancel drag start
    if (typeof cfg.onDragStart === 'function' && cfg.onDragStart(source, piece, deepCopy(CURRENT_POSITION), CURRENT_ORIENTATION) === false) {
      return;
    }

    // set state
    DRAGGING_A_PIECE = true;
    DRAGGED_PIECE = piece;
    DRAGGED_PIECE_SOURCE = source;

    // if the piece came from spare pieces, location is offboard
    if (source === 'spare') {
      DRAGGED_PIECE_LOCATION = 'offboard';
    } else {
      DRAGGED_PIECE_LOCATION = source;
    }

    // capture the x, y coords of all squares in memory
    captureSquareOffsets();

    // create the dragged piece
    draggedPieceEl.attr('src', buildPieceImgSrc(piece)).css({
      display: '',
      position: 'absolute',
      left: x - SQUARE_SIZE / 2,
      top: y - SQUARE_SIZE / 2
    });

    if (source !== 'spare') {
      // highlight the source square and hide the piece
      (0, _jquery2.default)('#' + SQUARE_ELS_IDS[source]).addClass(_chessboard2.default.highlight1).find('.' + _chessboard2.default.piece).css('display', 'none');
    }
  }

  function updateDraggedPiece(x, y) {
    // put the dragged piece over the mouse cursor
    draggedPieceEl.css({
      left: x - SQUARE_SIZE / 2,
      top: y - SQUARE_SIZE / 2
    });

    // get location
    var location = isXYOnSquare(x, y);

    // do nothing if the location has not changed
    if (location === DRAGGED_PIECE_LOCATION) return;

    // remove highlight from previous square
    if (validSquare(DRAGGED_PIECE_LOCATION) === true) {
      (0, _jquery2.default)('#' + SQUARE_ELS_IDS[DRAGGED_PIECE_LOCATION]).removeClass(_chessboard2.default.highlight2);
    }

    // add highlight to new square
    if (validSquare(location) === true) {
      (0, _jquery2.default)('#' + SQUARE_ELS_IDS[location]).addClass(_chessboard2.default.highlight2);
    }

    // run onDragMove
    if (typeof cfg.onDragMove === 'function') {
      cfg.onDragMove(location, DRAGGED_PIECE_LOCATION, DRAGGED_PIECE_SOURCE, DRAGGED_PIECE, deepCopy(CURRENT_POSITION), CURRENT_ORIENTATION);
    }

    // update state
    DRAGGED_PIECE_LOCATION = location;
  }

  function stopDraggedPiece(location) {
    // determine what the action should be
    var action = 'drop';
    if (location === 'offboard' && cfg.dropOffBoard === 'snapback') {
      action = 'snapback';
    }
    if (location === 'offboard' && cfg.dropOffBoard === 'trash') {
      action = 'trash';
    }

    // run their onDrop function, which can potentially change the drop action
    if (cfg.hasOwnProperty('onDrop') === true && typeof cfg.onDrop === 'function') {
      var newPosition = deepCopy(CURRENT_POSITION);

      // source piece is a spare piece and position is off the board
      //if (DRAGGED_PIECE_SOURCE === 'spare' && location === 'offboard') {...}
      // position has not changed; do nothing

      // source piece is a spare piece and position is on the board
      if (DRAGGED_PIECE_SOURCE === 'spare' && validSquare(location) === true) {
        // add the piece to the board
        newPosition[location] = DRAGGED_PIECE;
      }

      // source piece was on the board and position is off the board
      if (validSquare(DRAGGED_PIECE_SOURCE) === true && location === 'offboard') {
        // remove the piece from the board
        delete newPosition[DRAGGED_PIECE_SOURCE];
      }

      // source piece was on the board and position is on the board
      if (validSquare(DRAGGED_PIECE_SOURCE) === true && validSquare(location) === true) {
        // move the piece
        delete newPosition[DRAGGED_PIECE_SOURCE];
        newPosition[location] = DRAGGED_PIECE;
      }

      var oldPosition = deepCopy(CURRENT_POSITION);

      var result = cfg.onDrop(DRAGGED_PIECE_SOURCE, location, DRAGGED_PIECE, newPosition, oldPosition, CURRENT_ORIENTATION);
      if (result === 'snapback' || result === 'trash') {
        action = result;
      }
    }

    // do it!
    if (action === 'snapback') {
      snapbackDraggedPiece();
    } else if (action === 'trash') {
      trashDraggedPiece();
    } else if (action === 'drop') {
      dropDraggedPieceOnSquare(location);
    }
  }

  //------------------------------------------------------------------------------
  // Public Methods
  //------------------------------------------------------------------------------

  // clear the board
  widget.clear = function (useAnimation) {
    widget.position({}, useAnimation);
  };

  /*
  // get or set config properties
  // TODO: write this, GitHub Issue #1
  widget.config = function(arg1, arg2) {
    // get the current config
    if (arguments.length === 0) {
      return deepCopy(cfg);
    }
  };
  */

  // remove the widget from the page
  widget.destroy = function () {
    // remove markup
    containerEl.html('');
    draggedPieceEl.remove();

    // remove event handlers
    containerEl.unbind();
  };

  // shorthand method to get the current FEN
  widget.fen = function () {
    return widget.position('fen');
  };

  // flip orientation
  widget.flip = function () {
    widget.orientation('flip');
  };

  /*
  // TODO: write this, GitHub Issue #5
  widget.highlight = function() {
  
  };
  */

  // move pieces
  widget.move = function () {
    // no need to throw an error here; just do nothing
    if (arguments.length === 0) return;

    var useAnimation = true;

    // collect the moves into an object
    var moves = {};
    for (var i = 0; i < arguments.length; i++) {
      // any "false" to this function means no animations
      if (arguments[i] === false) {
        useAnimation = false;
        continue;
      }

      // skip invalid arguments
      if (validMove(arguments[i]) !== true) {
        error(2826, 'Invalid move passed to the move method.', arguments[i]);
        continue;
      }

      var tmp = arguments[i].split('-');
      moves[tmp[0]] = tmp[1];
    }

    // calculate position from moves
    var newPos = calculatePositionFromMoves(CURRENT_POSITION, moves);

    // update the board
    widget.position(newPos, useAnimation);

    // return the new position object
    return newPos;
  };

  widget.orientation = function (arg) {
    // no arguments, return the current orientation
    if (arguments.length === 0) {
      return CURRENT_ORIENTATION;
    }

    // set to white or black
    if (arg === 'white' || arg === 'black') {
      CURRENT_ORIENTATION = arg;
      drawBoard();
      return;
    }

    // flip orientation
    if (arg === 'flip') {
      CURRENT_ORIENTATION = CURRENT_ORIENTATION === 'white' ? 'black' : 'white';
      drawBoard();
      return;
    }

    error(5482, 'Invalid value passed to the orientation method.', arg);
  };

  widget.position = function (position, useAnimation) {
    // no arguments, return the current position
    if (arguments.length === 0) {
      return deepCopy(CURRENT_POSITION);
    }

    // get position as FEN
    if (typeof position === 'string' && position.toLowerCase() === 'fen') {
      return objToFen(CURRENT_POSITION);
    }

    // default for useAnimations is true
    if (useAnimation !== false) {
      useAnimation = true;
    }

    // start position
    if (typeof position === 'string' && position.toLowerCase() === 'start') {
      position = deepCopy(START_POSITION);
    }

    // convert FEN to position object
    if (validFen(position) === true) {
      position = fenToObj(position);
    }

    // validate position object
    if (validPositionObject(position) !== true) {
      error(6482, 'Invalid value passed to the position method.', position);
      return;
    }

    if (useAnimation === true) {
      // start the animations
      doAnimations(calculateAnimations(CURRENT_POSITION, position), CURRENT_POSITION, position);

      // set the new position
      setCurrentPosition(position);
    }
    // instant update
    else {
        setCurrentPosition(position);
        drawPositionInstant();
      }
  };

  widget.resize = function () {
    // calulate the new square size
    SQUARE_SIZE = calculateSquareSize();

    // set board width
    boardEl.css('width', SQUARE_SIZE * 8 + 'px');

    // set drag piece size
    draggedPieceEl.css({
      height: SQUARE_SIZE,
      width: SQUARE_SIZE
    });

    // spare pieces
    if (cfg.sparePieces === true) {
      containerEl.find('.' + _chessboard2.default.sparePieces).css('paddingLeft', SQUARE_SIZE + BOARD_BORDER_SIZE + 'px');
    }

    // redraw the board
    drawBoard();
  };

  // set the starting position
  widget.start = function (useAnimation) {
    widget.position('start', useAnimation);
  };

  //------------------------------------------------------------------------------
  // Browser Events
  //------------------------------------------------------------------------------

  function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
  }

  // reference: http://www.quirksmode.org/js/detect.html
  function isMSIE() {
    return navigator && navigator.userAgent && navigator.userAgent.search(/MSIE/) !== -1;
  }

  function stopDefault(e) {
    e.preventDefault();
  }

  function mousedownSquare(e) {
    // do nothing if we're not draggable
    if (cfg.draggable !== true) return;

    var square = (0, _jquery2.default)(this).attr('data-square');

    // no piece on this square
    if (validSquare(square) !== true || CURRENT_POSITION.hasOwnProperty(square) !== true) {
      return;
    }

    beginDraggingPiece(square, CURRENT_POSITION[square], e.pageX, e.pageY);
  }

  function touchstartSquare(e) {
    // do nothing if we're not draggable
    if (cfg.draggable !== true) return;

    var square = (0, _jquery2.default)(this).attr('data-square');

    // no piece on this square
    if (validSquare(square) !== true || CURRENT_POSITION.hasOwnProperty(square) !== true) {
      return;
    }

    e = e.originalEvent;
    beginDraggingPiece(square, CURRENT_POSITION[square], e.changedTouches[0].pageX, e.changedTouches[0].pageY);
  }

  function mousedownSparePiece(e) {
    // do nothing if sparePieces is not enabled
    if (cfg.sparePieces !== true) return;

    var piece = (0, _jquery2.default)(this).attr('data-piece');

    beginDraggingPiece('spare', piece, e.pageX, e.pageY);
  }

  function touchstartSparePiece(e) {
    // do nothing if sparePieces is not enabled
    if (cfg.sparePieces !== true) return;

    var piece = (0, _jquery2.default)(this).attr('data-piece');

    e = e.originalEvent;
    beginDraggingPiece('spare', piece, e.changedTouches[0].pageX, e.changedTouches[0].pageY);
  }

  function mousemoveWindow(e) {
    // do nothing if we are not dragging a piece
    if (DRAGGING_A_PIECE !== true) return;

    updateDraggedPiece(e.pageX, e.pageY);
  }

  function touchmoveWindow(e) {
    // do nothing if we are not dragging a piece
    if (DRAGGING_A_PIECE !== true) return;

    // prevent screen from scrolling
    e.preventDefault();

    updateDraggedPiece(e.originalEvent.changedTouches[0].pageX, e.originalEvent.changedTouches[0].pageY);
  }

  function mouseupWindow(e) {
    // do nothing if we are not dragging a piece
    if (DRAGGING_A_PIECE !== true) return;

    // get the location
    var location = isXYOnSquare(e.pageX, e.pageY);

    stopDraggedPiece(location);
  }

  function touchendWindow(e) {
    // do nothing if we are not dragging a piece
    if (DRAGGING_A_PIECE !== true) return;

    // get the location
    var location = isXYOnSquare(e.originalEvent.changedTouches[0].pageX, e.originalEvent.changedTouches[0].pageY);

    stopDraggedPiece(location);
  }

  function mouseenterSquare(e) {
    // do not fire this event if we are dragging a piece
    // NOTE: this should never happen, but it's a safeguard
    if (DRAGGING_A_PIECE !== false) return;

    if (cfg.hasOwnProperty('onMouseoverSquare') !== true || typeof cfg.onMouseoverSquare !== 'function') return;

    // get the square
    var square = (0, _jquery2.default)(e.currentTarget).attr('data-square');

    // NOTE: this should never happen; defensive
    if (validSquare(square) !== true) return;

    // get the piece on this square
    var piece = false;
    if (CURRENT_POSITION.hasOwnProperty(square) === true) {
      piece = CURRENT_POSITION[square];
    }

    // execute their function
    cfg.onMouseoverSquare(square, piece, deepCopy(CURRENT_POSITION), CURRENT_ORIENTATION);
  }

  function mouseleaveSquare(e) {
    // do not fire this event if we are dragging a piece
    // NOTE: this should never happen, but it's a safeguard
    if (DRAGGING_A_PIECE !== false) return;

    if (cfg.hasOwnProperty('onMouseoutSquare') !== true || typeof cfg.onMouseoutSquare !== 'function') return;

    // get the square
    var square = (0, _jquery2.default)(e.currentTarget).attr('data-square');

    // NOTE: this should never happen; defensive
    if (validSquare(square) !== true) return;

    // get the piece on this square
    var piece = false;
    if (CURRENT_POSITION.hasOwnProperty(square) === true) {
      piece = CURRENT_POSITION[square];
    }

    // execute their function
    cfg.onMouseoutSquare(square, piece, deepCopy(CURRENT_POSITION), CURRENT_ORIENTATION);
  }

  //------------------------------------------------------------------------------
  // Initialization
  //------------------------------------------------------------------------------

  function addEvents() {
    // prevent browser "image drag"
    (0, _jquery2.default)('body').on('mousedown mousemove', '.' + _chessboard2.default.piece, stopDefault);

    // mouse drag pieces
    boardEl.on('mousedown', '.' + _chessboard2.default.square, mousedownSquare);
    containerEl.on('mousedown', '.' + _chessboard2.default.sparePieces + ' .' + _chessboard2.default.piece, mousedownSparePiece);

    // mouse enter / leave square
    boardEl.on('mouseenter', '.' + _chessboard2.default.square, mouseenterSquare);
    boardEl.on('mouseleave', '.' + _chessboard2.default.square, mouseleaveSquare);

    // IE doesn't like the events on the window object, but other browsers
    // perform better that way
    if (isMSIE() === true) {
      // IE-specific prevent browser "image drag"
      document.ondragstart = function () {
        return false;
      };

      (0, _jquery2.default)('body').on('mousemove', mousemoveWindow);
      (0, _jquery2.default)('body').on('mouseup', mouseupWindow);
    } else {
      (0, _jquery2.default)(window).on('mousemove', mousemoveWindow);
      (0, _jquery2.default)(window).on('mouseup', mouseupWindow);
    }

    // touch drag pieces
    if (isTouchDevice() === true) {
      boardEl.on('touchstart', '.' + _chessboard2.default.square, touchstartSquare);
      containerEl.on('touchstart', '.' + _chessboard2.default.sparePieces + ' .' + _chessboard2.default.piece, touchstartSparePiece);
      (0, _jquery2.default)(window).on('touchmove', touchmoveWindow);
      (0, _jquery2.default)(window).on('touchend', touchendWindow);
    }
  }

  function initDom() {
    // build board and save it in memory
    containerEl.html(buildBoardContainer());
    boardEl = containerEl.find('.' + _chessboard2.default.board);

    if (cfg.sparePieces === true) {
      sparePiecesTopEl = containerEl.find('.' + _chessboard2.default.sparePiecesTop);
      sparePiecesBottomEl = containerEl.find('.' + _chessboard2.default.sparePiecesBottom);
    }

    // create the drag piece
    var draggedPieceId = createId();
    (0, _jquery2.default)('body').append(buildPiece('wP', true, draggedPieceId));
    draggedPieceEl = (0, _jquery2.default)('#' + draggedPieceId);

    // get the border size
    BOARD_BORDER_SIZE = parseInt(boardEl.css('borderLeftWidth'), 10);

    // set the size and draw the board
    widget.resize();
  }

  function init() {
    if (checkDeps() !== true || expandConfig() !== true) return;

    // create unique IDs for all the elements we will create
    createElIds();

    initDom();
    addEvents();
  }

  // go time
  init();

  // return the widget object
  return widget;
};

// expose util functions
ChessBoard.fenToObj = fenToObj;
ChessBoard.objToFen = objToFen;

exports.default = ChessBoard;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(499);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _styles = __webpack_require__(688);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var avatars = ['pawn', 'knight', 'bishop', 'rook', 'queen', 'king', 'advanced1', 'advanced2', 'advanced3'];

var AvatarCarousel = function (_React$Component) {
  _inherits(AvatarCarousel, _React$Component);

  function AvatarCarousel(props) {
    _classCallCheck(this, AvatarCarousel);

    var _this = _possibleConstructorReturn(this, (AvatarCarousel.__proto__ || Object.getPrototypeOf(AvatarCarousel)).call(this, props));

    _this.handleLevelChange = function (index) {
      _this.refs.slider.slickGoTo(index);
    };

    _this.settings = {
      arrows: false,
      fade: true,
      draggable: false,
      swipeToSlide: false,
      swipe: false,
      autoplay: props.autoplay !== undefined ? props.autoplay : true,
      autoplaySpeed: 5000,
      speed: 1400,
      pauseOnHover: false,
      initialSlide: props.index || 0
    };
    return _this;
  }

  _createClass(AvatarCarousel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.avatarCarousel },
        _react2.default.createElement(
          _reactSlick2.default,
          _extends({ ref: 'slider' }, this.settings),
          avatars.map(function (avatar) {
            return _react2.default.createElement(
              'div',
              { key: avatar, className: 'slide' },
              _react2.default.createElement('img', { src: '/assets/school/' + avatar + '-roll.png' })
            );
          })
        )
      );
    }
  }]);

  return AvatarCarousel;
}(_react2.default.Component);

exports.default = AvatarCarousel;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Separator = __webpack_require__(159);

var _Separator2 = _interopRequireDefault(_Separator);

var _styles = __webpack_require__(690);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'footer',
    { className: _styles2.default.footer + ' flex justify-center' },
    _react2.default.createElement(
      'div',
      null,
      '\xA9 Chess With Mr. S Inc.'
    ),
    _react2.default.createElement(_Separator2.default, null),
    _react2.default.createElement(
      'div',
      null,
      'All trademarks are property of Chess With Mr. S Inc.'
    )
  );
};

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortCalendarDate = exports.CalendarDate = exports.FormattedDate = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormattedDate = exports.FormattedDate = function FormattedDate(props) {
  return _react2.default.createElement(
    'span',
    null,
    props.date.toLocaleString('en-US', props.options)
  );
};

var calendarDateOptions = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'America/New_York'
};
var CalendarDate = exports.CalendarDate = function CalendarDate(props) {
  return _react2.default.createElement(FormattedDate, { date: props.date, options: calendarDateOptions });
};

var ShortCalendarDate = exports.ShortCalendarDate = function ShortCalendarDate(props) {
  var options = _extends({}, calendarDateOptions, {
    month: 'short'
  });
  return _react2.default.createElement(FormattedDate, { date: props.date, options: options });
};

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _Dialog = __webpack_require__(197);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoBack = function (_React$Component) {
  _inherits(GoBack, _React$Component);

  function GoBack(props) {
    _classCallCheck(this, GoBack);

    var _this = _possibleConstructorReturn(this, (GoBack.__proto__ || Object.getPrototypeOf(GoBack)).call(this, props));

    _this.handleOpen = function () {
      _this.setState({
        open: true
      });
    };

    _this.handleClose = function () {
      _this.setState({
        open: false
      });
    };

    _this.state = {
      open: props.open
    };
    return _this;
  }

  _createClass(GoBack, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(_extends({}, nextProps));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          _Dialog2.default,
          {
            title: 'Please confirm',
            actions: this.props.actions,
            modal: false,
            open: this.state.open,
            onRequestClose: this.handleClose },
          'Unsaved changes will be lost.  Are you sure you want to continue ?'
        ),
        _react2.default.createElement(_RaisedButton2.default, {
          style: { marginRight: '20px' },
          onClick: this.handleOpen,
          label: 'Back',
          secondary: true })
      );
    }
  }]);

  return GoBack;
}(_react2.default.Component);

exports.default = GoBack;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(1096);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiKey = 'AIzaSyB9fW7cIm3FfJzJ8ozLGc1gp0xnDtICNi8';
var googleMapURL = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&v=3.exp&libraries=geometry,drawing,places';

var LocationMap = function LocationMap(props) {
  return _react2.default.createElement(
    _reactGoogleMaps.GoogleMap,
    {
      defaultZoom: props.defaultZoom,
      defaultCenter: { lat: props.lat, lng: props.lng }
    },
    props.isMarkerShown && _react2.default.createElement(_reactGoogleMaps.Marker, { position: { lat: props.lat, lng: props.lng } })
  );
};

exports.default = (0, _reactGoogleMaps.withScriptjs)((0, _reactGoogleMaps.withGoogleMap)(LocationMap));

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = __webpack_require__(35);

var _TextField2 = _interopRequireDefault(_TextField);

var _button = __webpack_require__(44);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var inputStyle = _extends({
    WebkitBoxShadow: '0 0 0 1000px white inset'
  }, props.inputStyle);
  var hintStyle = { zIndex: '1', pointerEvents: 'none' };
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'form',
      { className: props.className || '',
        onSubmit: props.handleSubmit },
      props.error && _react2.default.createElement(
        'p',
        { style: { color: '#f44336' } },
        props.error
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TextField2.default, { hintText: 'Enter your username',
          type: 'text',
          value: props.username,
          inputStyle: inputStyle,
          hintStyle: hintStyle,
          fullWidth: true,
          onChange: props.handleUserNameChange })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TextField2.default, { hintText: 'Enter your password',
          type: 'password',
          floatingLabelText: 'Password',
          value: props.password,
          inputStyle: inputStyle,
          hintStyle: hintStyle,
          fullWidth: true,
          onChange: props.handlePasswordChange })
      ),
      _react2.default.createElement(
        'div',
        { style: { marginTop: '20px' } },
        _react2.default.createElement(_RaisedButton2.default, { type: 'submit',
          label: 'Submit', primary: true,
          fullWidth: true })
      ),
      props.hasForgotPassword && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: _button2.default.linkBtn,
            to: '/forgot-password' },
          'Forgot Password'
        )
      )
    )
  );
};

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollToTopRoute = function (_React$Component) {
  _inherits(ScrollToTopRoute, _React$Component);

  function ScrollToTopRoute() {
    _classCallCheck(this, ScrollToTopRoute);

    return _possibleConstructorReturn(this, (ScrollToTopRoute.__proto__ || Object.getPrototypeOf(ScrollToTopRoute)).apply(this, arguments));
  }

  _createClass(ScrollToTopRoute, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      window.scrollTo(0, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          Component = _props.component,
          componentProps = _props.componentProps,
          rest = _objectWithoutProperties(_props, ['component', 'componentProps']);

      return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
          return _react2.default.createElement(Component, _extends({}, props, componentProps));
        } }));
    }
  }]);

  return ScrollToTopRoute;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(ScrollToTopRoute);

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var seasonalIndex = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3];

var getCurrentSeason = exports.getCurrentSeason = function getCurrentSeason() {
  var date = new Date();
  return {
    season: seasonalIndex[date.getMonth()],
    year: date.getYear()
  };
};

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(141);

var _TimeOfDay = __webpack_require__(114);

var _TimeOfDay2 = _interopRequireDefault(_TimeOfDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var getClassDate = function getClassDate(chessClass) {
  var startDT = new Date(chessClass.startTime);
  return months[startDT.getMonth()] + ' ' + startDT.getDate();
};

var ClassTime = function ClassTime(props) {
  var startDT = new Date(props.startTime);
  var endDT = new Date(props.endTime);
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_TimeOfDay2.default, { date: startDT }),
    '-',
    _react2.default.createElement(_TimeOfDay2.default, { date: endDT })
  );
};

exports.default = function (props) {
  var handleRowSelection = function handleRowSelection(selectedRows) {
    if (props.handleRowSelect) {
      props.handleRowSelect(selectedRows);
    }
  };
  return _react2.default.createElement(
    _Table.Table,
    { multiSelectable: false, onRowSelection: handleRowSelection },
    _react2.default.createElement(
      _Table.TableHeader,
      { displaySelectAll: false },
      _react2.default.createElement(
        _Table.TableRow,
        null,
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'School'
        ),
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'Time'
        ),
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'Start Date'
        )
      )
    ),
    _react2.default.createElement(
      _Table.TableBody,
      { deselectOnClickaway: false,
        displayRowCheckbox: true },
      props.courses.map(function (course, idx) {
        return _react2.default.createElement(
          _Table.TableRow,
          { key: idx, selected: props.readonly !== true && props.selectedRows.includes(idx) },
          _react2.default.createElement(
            _Table.TableRowColumn,
            null,
            _react2.default.createElement(
              'div',
              null,
              course.school.name
            )
          ),
          _react2.default.createElement(
            _Table.TableRowColumn,
            null,
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(ClassTime, course.classes[0])
            )
          ),
          _react2.default.createElement(
            _Table.TableRowColumn,
            null,
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                getClassDate(course.classes[0])
              )
            )
          )
        );
      })
    )
  );
};

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var legalWranglings = 'Please Note: You will have a chance to review your purchase\nprior to payment.';
exports.default = {
  key: '',
  legalWranglings: legalWranglings
};
var refundPolicy = exports.refundPolicy = ['100% camp fee (less 25 admin fee) on cancellations received over 30 days before Camp start date.', '75% camp fee (less $25 admin fee) on cancellations received over 15 days before Camp start date.', '50%  camp fee (less $25 admin fee) on cancellations received over 7 days before Camp start date.', 'No refunds on cancellations received less than 2 business days before Camp start date.'];

var additionalInfo = exports.additionalInfo = ['Extended care is an additional $5/hr. Early drop off is available from 7:30am - 9am.', 'Late pick up is available from 4pm - 6pm.', 'Lunch: Due to numerous dietary and allergy concerns we ask that you provide\n   peanut free / nut free lunch and snacks for your children. CWMS will also provide its own\n   peanut free / nut free snacks during morning snack/break time and afternoon snack/break time.', 'Pizza Lunch: CWMS offers an option for pepperoni or cheese pizza. This can be\n    requested in advance or on the day of camp. We try and provide a flexible\n    and convenient option to our wonderful parents and students.'];

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractCardInfo = exports.chargeCustomer = exports.createCustomer = exports.retrieveCustomer = undefined;

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var retrieveCustomer = exports.retrieveCustomer = function retrieveCustomer(customerId) {
  return _axios2.default.post('/api/retrieve-customer', { customerId: customerId });
};

var createCustomer = exports.createCustomer = function createCustomer(token) {
  return _axios2.default.post('/api/create-customer', { token: token });
};

var chargeCustomer = exports.chargeCustomer = function chargeCustomer(customer, charge, description) {
  return _axios2.default.post('/api/charge-customer', {
    customerId: customer.id,
    charge: charge,
    description: description
  });
};

var extractCardInfo = exports.extractCardInfo = function extractCardInfo(customer, cardIdx) {
  var card = customer.sources.data[cardIdx || 0];
  var brand = card.brand,
      expiryMonth = card.exp_month,
      expiryYear = card.exp_year,
      last4 = card.last4;


  return {
    brand: brand,
    expiryMonth: expiryMonth,
    expiryYear: expiryYear,
    last4: last4
  };
};

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadActivities = undefined;

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _types = __webpack_require__(249);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var levels = ['pawn', 'knight', 'bishop', 'rook', 'queen', 'king', 'advanced1', 'advanced2', 'advanced3'];

var loadActivities = exports.loadActivities = function loadActivities(level) {
  return function (dispatch) {
    if (!level || !(levels.indexOf(level) > -1)) {
      return Promise.reject(new Error('missing level'));
    }
    return _axios2.default.get('/api/school/activities/' + level).then(function (response) {
      var payload = {};
      payload[level] = response.data;
      dispatch({
        type: _types.SET_ACTIVITIES,
        payload: payload
      });
    });
  };
};

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_ACTIVITIES = exports.SET_ACTIVITIES = 'SET_ACTIVITIES';

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var assetUrl = exports.assetUrl = '/assets/school';
var activityAssetUrl = exports.activityAssetUrl = assetUrl + '/activities';

var navLinks = exports.navLinks = [{
  type: 'pawn',
  url: '/pawn'
}, {
  type: 'knight',
  url: '/knight'
}, {
  type: 'bishop',
  url: '/bishop'
}, {
  type: 'rook',
  url: '/rook'
}, {
  type: 'queen',
  url: '/queen'
}, {
  type: 'king',
  url: '/king'
}, {
  type: 'advanced1',
  url: '/advanced1'
}, {
  type: 'advanced2',
  url: '/advanced2'
}, {
  type: 'advanced3',
  url: '/advanced3'
}];

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getWeeks = exports.getWeeks = function getWeeks(activities) {
  return activities && activities.reduce(function (weeks, activity) {
    var week = weeks.find(function (w) {
      return w.index === activity.weekNumber - 1;
    });
    var activityWithId = _extends({}, activity, {
      id: activity.courseName + '-' + activity.weekNumber + '-' + activity.index
    });
    if (week) {
      week.activities.push(activityWithId);
    } else {
      week = {
        index: activity.weekNumber - 1,
        name: 'week-' + activity.weekNumber,
        activities: [activityWithId]
      };
      weeks = weeks.concat([week]);
    }
    return weeks;
  }, []);
};

var puzzleTypeToImgKey = {
  boss: 'boss',
  maze: 'maze',
  memory: 'memory',
  puzzle: 'puzzle',
  solitaire: 'solitaire',
  scenario: 'scenario',
  video: 'video',
  highlight: 'puzzle'
};
var getPuzzleImgKey = exports.getPuzzleImgKey = function getPuzzleImgKey(type) {
  return puzzleTypeToImgKey[type] || '';
};

/***/ }),
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearfix":"_2ntd56G3scltJW4OL-KOn6","board":"RqSF7VqpadxPkjK73egHI","square":"_3lvM-RCn-JFW5qK5wOl8O9","white":"_2bmw5IwzPOSNMEYT51Vfsk","black":"O4juaX9PxiTn-t2vQzsp9","highlight":"_3Jy7xw1QSpaRSHItPm4sR-","highlight1":"mst8BvNrSYsyQ7bxa9YZn","highlight2":"_3peJMyY4GDy_8b7pv4Jjg8","notation":"_1EDwm3poJhawEz_nrN04sP","alpha":"_1Pdh9QYt0fd0Ui0IjnDK_D","numeric":"_22JRWbun6FWCey5iVJtOpk","row":"_3oix-O5jnQTATe7Q6B4MGe","piece":"_2SWx1DsthRcf90KOueWb_o","spare-pieces":"_1hXGVLMEMuDLHKQUxsx95y","spare-pieces-bottom":"_2UVGrELgRAtEjfGfHseDt_","spare-pieces-top":"_19yyAjh1L4hzATmuuv_lZu","chessboard":"_2v5JPUMy0FsEA-XUt6A-kd"};

/***/ }),
/* 276 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"navbar":"_2iQxninUI5X7mZwbj3k-Se","navLogo":"_19f_j4MhFCdBmU1I3iLFLE","smallLogo":"_2GWJ7U55PWxUZcPLawoKig","navLink":"_3dL_LL4NnYt8-5I8UdlvRR"};

/***/ }),
/* 277 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"requestError":"_2yQvrFM7He2nwU21vTpBZc","requestSuccess":"_2w1h_fWnN68CxYkR-AB745"};

/***/ }),
/* 278 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"iconNavbar":"_1h3zgIDOiGYoeGN_dYv449","navLink":"_3jUy81-dSXmhaHLg0ZSGzS","active":"_1js4O5ByBJ40gyyor3MsiG"};

/***/ }),
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(14);

var _admin = __webpack_require__(549);

var _admin2 = _interopRequireDefault(_admin);

var _lander = __webpack_require__(601);

var _lander2 = _interopRequireDefault(_lander);

var _School = __webpack_require__(608);

var _School2 = _interopRequireDefault(_School);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getComponent = function getComponent(sessionType) {
  switch (sessionType) {
    case 'admin':
      return _react2.default.createElement(_admin2.default, null);
    case 'student':
      return _react2.default.createElement(_School2.default, null);
  }
  return _react2.default.createElement(_lander2.default, null);
};

var App = function App(props) {
  if (props.checkingSession) {
    return _react2.default.createElement('div', null);
  }

  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: props.store },
    _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      getComponent(props.sessionType)
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref) {
  var session = _ref.session;
  return _extends({}, session);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(App);

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(226);

var _reduxThunk = __webpack_require__(1159);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _rootReducer = __webpack_require__(607);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.createStore)(_rootReducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

/***/ }),
/* 517 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"slick-container":"QiluGpsWegJinB40CDQ4b","slick-next":"MVADO8dYwRcH9LjyEd2Ed","slick-prev":"YjdsFcpZwPaDcccndotH9","slide":"_1Iezr0YeTm_M4-DO1IEzZ5","StripeElement":"_1wJfoOf1iWZoZHx6ZptGo9","StripeElement--focus":"_1BFEtwGUo0aqkDm5_0nZyv","StripeElement--invalid":"_2VtgkjG3fTjuTAmlhwKceR","StripeElement--webkit-autofill":"_2GUihZMb-MGDO2FBv3bkYz"};

/***/ }),
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _courses = __webpack_require__(115);

var _reactModal = __webpack_require__(220);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _AutoComplete = __webpack_require__(62);

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _TextField = __webpack_require__(35);

var _TextField2 = _interopRequireDefault(_TextField);

var _TimePicker = __webpack_require__(971);

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _Checkbox = __webpack_require__(105);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _pattern = __webpack_require__(93);

var _pattern2 = _interopRequireDefault(_pattern);

var _styles = __webpack_require__(98);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var modalStyles = {
  content: {
    top: '40px',
    width: '800px',
    margin: 'auto',
    fontFamily: 'Nunito, sans-serif',
    overflowX: 'hidden',
    zIndex: 4,
    fontSize: '16px'
  },
  overlay: {
    zIndex: 9,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
};

var hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};
var hintStyle = { zIndex: '1', pointerEvents: 'none' };
var menuProps = {
  desktop: true,
  disableAutoFocus: true
};
var searchFilter = function searchFilter(searchText, key) {
  return searchText !== '' && key.toLowerCase().indexOf(searchText.toLowerCase()) === 0;
};

var parseDates = function parseDates(dates) {
  return dates.map(function (date) {
    return new Date(date);
  });
};

var testDate = function testDate(str) {
  return (/[a-z,A-Z]{3}\s\d{1,2}\s\d{4}/.test(str)
  );
};

var CourseModal = function (_React$Component) {
  _inherits(CourseModal, _React$Component);

  function CourseModal(props) {
    _classCallCheck(this, CourseModal);

    var _this = _possibleConstructorReturn(this, (CourseModal.__proto__ || Object.getPrototypeOf(CourseModal)).call(this, props));

    _this.getClasses = function (parsedDates) {
      return parsedDates.map(function (parsedDate) {
        var startHours = _this.state.startTime.getHours();
        var startMinutes = _this.state.startTime.getMinutes();
        var endHours = _this.state.endTime.getHours();
        var endMinutes = _this.state.endTime.getMinutes();
        var startTime = new Date(parsedDate);
        var endTime = new Date(parsedDate);
        startTime.setHours(startHours);
        startTime.setMinutes(startMinutes);
        endTime.setHours(endHours);
        endTime.setMinutes(endMinutes);
        return {
          startTime: startTime.toISOString(),
          endTime: endTime.toISOString()
        };
      });
    };

    _this.editCourse = function (id) {
      var _this$state = _this.state,
          price = _this$state.price,
          locationId = _this$state.locationId,
          teacherId = _this$state.teacherId,
          parsedDates = _this$state.parsedDates,
          soldOut = _this$state.soldOut,
          afterSchool = _this$state.afterSchool,
          description = _this$state.description;


      return _axios2.default.put('/api/courses/' + id, {
        price: price, locationId: locationId, teacherId: teacherId, classes: _this.getClasses(parsedDates),
        soldOut: !!soldOut, afterSchool: !!afterSchool,
        description: description
      }).then(function (response) {
        _this.props.updateCourse(response.data);
        _this.setState({
          success: 'Course has been successfully updated',
          error: ''
        });
      }).catch(function (err) {
        _this.setState({
          success: '',
          error: 'Error: Course could not be updated'
        });
      });
    };

    _this.addCourse = function () {
      var _this$state2 = _this.state,
          price = _this$state2.price,
          locationId = _this$state2.locationId,
          teacherId = _this$state2.teacherId,
          parsedDates = _this$state2.parsedDates,
          soldOut = _this$state2.soldOut,
          afterSchool = _this$state2.afterSchool,
          description = _this$state2.description;


      return _axios2.default.post('/api/courses', {
        price: price, locationId: locationId, teacherId: teacherId, classes: _this.getClasses(parsedDates),
        soldOut: soldOut, afterSchool: afterSchool, description: description
      }).then(function (response) {
        _this.props.loadCourse(response.data);
        _this.setState({
          success: 'Course has been successfully added',
          error: ''
        });
      }).catch(function (err) {
        _this.setState({
          success: '',
          error: 'Error: Course could not be added'
        });
      }).then(_this.clearForm);
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();
      var isValid = _this.validateForm();
      if (!isValid) {
        return;
      }
      if (_this.props.selected) {
        _this.editCourse(_this.props.selected._id);
      } else {
        _this.addCourse();
      }
    };

    _this.clearForm = function () {
      _this.setState({
        teacherId: '',
        searchTeacherText: '',
        locationId: '',
        searchSchoolText: '',
        startTime: null,
        endTime: null,
        dates: '',
        parsedDates: null,
        price: '',
        priceError: '',
        teacherError: '',
        schoolError: '',
        startTimeError: null,
        endTimeError: '',
        datesError: '',
        afterSchool: false,
        soldOut: false,
        description: ''
      });
    };

    _this.handleAfterOpen = function () {
      _this.setState({
        success: '',
        error: ''
      });
      if (!_this.props.selected) {
        _this.clearForm();
      }
    };

    _this.isFormValid = function () {
      return [_this.state.teacherError, _this.state.schoolError, _this.state.startTimeError, _this.state.endTimeError, _this.state.priceError, _this.state.datesError].some(function (field) {
        return field;
      }) === false;
    };

    _this.handleSchoolBlur = function (event) {
      var school = _this.props.schools.find(function (school) {
        return school.name === _this.state.searchSchoolText;
      });

      if (!school) {
        _this.setState({
          locationId: '',
          searchSchoolText: '',
          schoolError: 'This field is required'
        });
      }
    };

    _this.handleTeacherBlur = function (event) {
      var teacher = _this.props.teachers.find(function (teacher) {
        return teacher.firstName + ' ' + teacher.lastName === _this.state.searchTeacherText;
      });

      if (!teacher) {
        _this.setState({
          teacherId: '',
          searchTeacherText: '',
          teacherError: 'This field is required'
        });
      }
    };

    _this.handleGenericChange = function (key, value) {
      _this.setState(_defineProperty({}, key, value));
    };

    _this.handleSchoolNameChange = function (schoolName) {
      var school = _this.props.schools.find(function (school) {
        return school.name === schoolName;
      });

      if (!school) {
        _this.setState({ locationId: '', searchSchoolText: '' });
      } else {
        _this.setState({
          locationId: school._id,
          schoolError: ''
        });
      }
    };

    _this.handleTeacherNameChange = function (teacherName) {
      var teacher = _this.props.teachers.find(function (teacher) {
        return teacher.firstName + ' ' + teacher.lastName === teacherName;
      });

      if (!teacher) {
        _this.setState({
          teacherId: '',
          searchTeacherText: ''
        });
      } else {
        _this.setState({
          teacherError: '',
          teacherId: teacher._id
        });
      }
    };

    _this.handleStartTimeChange = function (event, date) {
      _this.setState({ startTime: date, startTimeError: '' });
    };

    _this.handleEndTimeChange = function (event, date) {
      _this.setState({ endTime: date, endTimeError: '' });
    };

    _this.handleDateChange = function (event) {
      var dates = (event.target.value || '').split(',');
      var isDateError = dates.some(function (date) {
        return !testDate(date) || isNaN(new Date(date).valueOf());
      });

      _this.setState({
        dates: event.target.value,
        datesError: isDateError ? 'Please enter valid dates separated by commas: i.e. Mar 8 2018, Mar 15 2018, etc' : '',
        parsedDates: isDateError ? null : parseDates(dates).sort(function (a, b) {
          return a.valueOf() - b.valueOf();
        })
      });
    };

    _this.handleAfterSchoolChange = function () {
      _this.setState(function (_ref) {
        var afterSchool = _ref.afterSchool;
        return {
          afterSchool: !afterSchool
        };
      });
    };

    _this.handleSoldOutChange = function () {
      _this.setState(function (_ref2) {
        var soldOut = _ref2.soldOut;
        return {
          soldOut: !soldOut
        };
      });
    };

    _this.state = {
      teacherId: '',
      searchTeacherText: '',
      locationId: '',
      searchSchoolText: '',
      startTime: null,
      endTime: null,
      dates: '',
      parsedDates: null,
      price: '',
      priceError: '',
      teacherError: '',
      schoolError: '',
      startTimeError: null,
      endTimeError: '',
      datesError: '',
      description: '',
      afterSchool: false,
      soldOut: false
    };
    return _this;
  }

  _createClass(CourseModal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selected) {
        var _nextProps$selected = nextProps.selected,
            dates = _nextProps$selected.fullDates,
            startTime = _nextProps$selected.startTime,
            endTime = _nextProps$selected.endTime,
            teacher = _nextProps$selected.teacher,
            school = _nextProps$selected.school,
            teacherId = _nextProps$selected.teacherId,
            locationId = _nextProps$selected.locationId,
            price = _nextProps$selected.price,
            afterSchool = _nextProps$selected.afterSchool,
            soldOut = _nextProps$selected.soldOut,
            description = _nextProps$selected.description;

        this.setState({
          teacherId: teacherId,
          locationId: locationId,
          price: price,
          searchTeacherText: teacher,
          searchSchoolText: school,
          startTime: startTime,
          endTime: endTime,
          dates: dates,
          parsedDates: parseDates(dates.split(' , ')),
          success: '',
          error: '',
          afterSchool: !!afterSchool,
          soldOut: !!soldOut,
          description: description
        });
      }
    }
  }, {
    key: 'validateForm',
    value: function validateForm() {
      var errorMessage = 'This field is required';
      var teacherError = this.state.teacherId ? '' : errorMessage;
      var schoolError = this.state.locationId ? '' : errorMessage;
      var startTimeError = this.state.startTime ? '' : errorMessage;
      var endTimeError = this.state.endTime ? '' : errorMessage;
      var priceError = this.state.price ? '' : errorMessage;
      var datesError = this.state.parsedDates ? '' : errorMessage;

      var isValid = [teacherError, schoolError, startTimeError, endTimeError, priceError, datesError].some(function (err) {
        return err;
      }) === false;

      if (!isValid) {
        this.setState({
          teacherError: teacherError, schoolError: schoolError, startTimeError: startTimeError,
          endTimeError: endTimeError, priceError: priceError, datesError: datesError
        });
      }
      return isValid;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactModal2.default,
        _extends({}, this.props, { onAfterOpen: this.handleAfterOpen,
          style: modalStyles }),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.courseModal },
          _react2.default.createElement(
            'h2',
            null,
            this.props.selected ? 'Edit course' : 'Add a course'
          ),
          this.state.success && _react2.default.createElement(
            'div',
            null,
            this.state.success
          ),
          this.state.error && _react2.default.createElement(
            'div',
            null,
            this.state.error
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              'div',
              { className: 'flex' },
              _react2.default.createElement(_AutoComplete2.default, {
                hintText: 'Enter teacher name',
                floatingLabelText: 'Search teachers',
                dataSource: this.props.teachers.map(function (teacher) {
                  return teacher.firstName + ' ' + teacher.lastName;
                }),
                filter: searchFilter,
                menuProps: menuProps,
                errorText: this.state.teacherError,
                searchText: this.state.searchTeacherText,
                onBlur: this.handleTeacherBlur,
                onNewRequest: this.handleTeacherNameChange,
                onUpdateInput: function onUpdateInput(text) {
                  return _this2.handleGenericChange('searchTeacherText', text);
                }, maxSearchResults: 5 }),
              _react2.default.createElement(_AutoComplete2.default, {
                style: { marginLeft: '18px' },
                hintText: 'Enter school name',
                floatingLabelText: 'Search schools',
                dataSource: this.props.schools.map(function (_ref3) {
                  var name = _ref3.name;
                  return name;
                }),
                filter: searchFilter,
                menuProps: menuProps,
                errorText: this.state.schoolError,
                searchText: this.state.searchSchoolText,
                onBlur: this.handleSchoolBlur,
                onNewRequest: this.handleSchoolNameChange,
                onUpdateInput: function onUpdateInput(text) {
                  return _this2.handleGenericChange('searchSchoolText', text);
                }, maxSearchResults: 5 })
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex' },
              _react2.default.createElement(_TimePicker2.default, {
                format: 'ampm',
                hintText: 'Start time',
                value: this.state.startTime,
                onChange: this.handleStartTimeChange,
                errorText: this.state.startTimeError }),
              _react2.default.createElement(_TimePicker2.default, {
                style: { marginLeft: '18px' },
                format: 'ampm',
                hintText: 'End time',
                value: this.state.endTime,
                onChange: this.handleEndTimeChange,
                errorText: this.state.endTimeError })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { hintText: 'Enter price',
                floatingLabelText: 'Course price',
                errorText: this.state.priceError,
                type: 'number',
                value: this.state.price,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: function onChange(event) {
                  return _this2.handleGenericChange('price', event.target.value);
                } })
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex', style: { padding: '12px 0' } },
              _react2.default.createElement(_Checkbox2.default, {
                label: 'Evening program',
                checked: this.state.afterSchool,
                onCheck: this.handleAfterSchoolChange
              }),
              _react2.default.createElement(_Checkbox2.default, {
                label: 'Sold out',
                checked: this.state.soldOut,
                onCheck: this.handleSoldOutChange
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex', style: { marginBottom: '36px' } },
              _react2.default.createElement(_TextField2.default, {
                hintText: 'Course Dates',
                floatingLabelText: 'Enter comma separated dates',
                multiLine: true,
                value: this.state.dates,
                errorText: this.state.datesError,
                onChange: this.handleDateChange,
                rows: 5 }),
              _react2.default.createElement(
                'div',
                { className: 'flex flex-wrap',
                  style: { alignContent: 'flex-start', marginTop: '36px', marginLeft: '18px', width: '400px' } },
                Array.isArray(this.state.parsedDates) && this.state.parsedDates.map(function (date) {
                  return _react2.default.createElement(
                    'div',
                    { style: { marginRight: '9px' } },
                    date.toString().split(' ').slice(0, 4).join(' '),
                    ','
                  );
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex', style: { marginBottom: '36px' } },
              _react2.default.createElement(_TextField2.default, {
                hintText: 'Course description',
                floatingLabelText: 'Enter optional course description',
                multiLine: true,
                value: this.state.description,
                onChange: function onChange(event) {
                  return _this2.handleGenericChange('description', event.target.value);
                },
                rows: 2 })
            ),
            _react2.default.createElement(_RaisedButton2.default, {
              style: { marginRight: '20px' },
              onClick: this.props.closeModal,
              label: 'Cancel',
              secondary: true }),
            _react2.default.createElement(_RaisedButton2.default, {
              disabled: this.isFormValid() !== true,
              primary: true,
              type: 'submit',
              label: 'Save' })
          )
        )
      );
    }
  }]);

  return CourseModal;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref4, ownProps) {
  _objectDestructuringEmpty(_ref4);

  return _extends({}, ownProps);
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadCourse: _courses.loadCourse, updateCourse: _courses.updateCourse })(CourseModal);

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _schema = __webpack_require__(160);

var _Tables = __webpack_require__(155);

var _AutoComplete = __webpack_require__(62);

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _CourseModal = __webpack_require__(540);

var _CourseModal2 = _interopRequireDefault(_CourseModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colList = ['school', 'teacher', 'times', 'dates', 'price', 'evening', 'sold out'].map(function (key) {
  return (0, _schema.getField)(key);
});

var timeStrOptions = {
  hour12: true,
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'America/New_York'
};
var dateStrOptions = {
  month: 'short',
  day: 'numeric',
  timeZone: 'America/New_York'
};

var CoursesTab = function (_React$Component) {
  _inherits(CoursesTab, _React$Component);

  function CoursesTab(props) {
    _classCallCheck(this, CoursesTab);

    var _this = _possibleConstructorReturn(this, (CoursesTab.__proto__ || Object.getPrototypeOf(CoursesTab)).call(this, props));

    _this.closeAddCourseModal = function () {
      _this.setState({
        showAddCourseModal: false,
        selected: null
      });
    };

    _this.showAddCourseModal = function () {
      _this.setState({
        showAddCourseModal: true
      });
    };

    _this.editCourse = function (course) {
      _this.setState({
        selected: _extends({}, course, {
          startTime: course.ogStartTime,
          endTime: course.ogEndTime,
          price: course.rawPrice
        }),
        showAddCourseModal: true
      });
    };

    _this.deSerializeCourses = function (response) {
      return response.map(function (course) {
        var teacher = _this.props.teachers.find(function (teacher) {
          return teacher._id === course.teacherId;
        });
        var school = _this.props.schools.find(function (school) {
          return school._id === course.locationId;
        });
        var ogStartTime = new Date(course.classes[0].startTime);
        var ogEndTime = new Date(course.classes[0].endTime);
        var startTime = ogStartTime.toLocaleTimeString([], timeStrOptions);
        var endTime = ogEndTime.toLocaleTimeString([], timeStrOptions);

        return {
          _id: course._id,
          teacherId: course.teacherId,
          locationId: course.locationId,
          rawPrice: course.price,
          afterSchool: !!course.afterSchool,
          soldOut: !!course.soldOut,
          evening: course.afterSchool ? 'Yes' : 'No',
          'sold out': course.soldOut ? 'Yes' : 'No',
          description: course.description,
          price: course.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
          }),
          ogStartTime: ogStartTime,
          ogEndTime: ogEndTime,
          recentness: ogStartTime.valueOf(),
          teacher: teacher.firstName + ' ' + teacher.lastName,
          school: school.name,
          startTime: startTime,
          endTime: endTime,
          times: startTime + ' - ' + endTime,
          dates: course.classes.map(function (chessClass, idx) {
            return new Date(chessClass.startTime).toLocaleString('en-US', dateStrOptions);
          }).join(' , '),
          fullDates: course.classes.map(function (chessClass, idx) {
            return new Date(chessClass.startTime).toLocaleString('en-US', _extends({}, dateStrOptions, { year: 'numeric' })).replace(',', '');
          }).join(' , ')
        };
      }).sort(function (a, b) {
        return a.recentness - b.recentness;
      });
    };

    _this.state = {
      showAddCourseModal: false,
      selected: null
    };
    return _this;
  }

  _createClass(CoursesTab, [{
    key: 'render',
    value: function render() {
      if (this.props.coursesError) {
        return _react2.default.createElement(
          'div',
          null,
          'Unable to load Courses'
        );
      }
      if (!this.props.courses.length || !this.props.schools.length || !this.props.teachers) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading Data...'
        );
      }
      return _react2.default.createElement(
        'div',
        { style: { paddingTop: '40px' } },
        _react2.default.createElement(_CourseModal2.default, { isOpen: this.state.showAddCourseModal,
          teachers: this.props.teachers,
          schools: this.props.schools,
          closeModal: this.closeAddCourseModal,
          selected: this.state.selected }),
        _react2.default.createElement(_RaisedButton2.default, { onClick: this.showAddCourseModal, primary: true,
          label: 'Add Course' }),
        _react2.default.createElement(_Tables.EntityTable, { items: this.deSerializeCourses(this.props.courses),
          colList: colList,
          onEditClick: this.editCourse })
      );
    }
  }]);

  return CoursesTab;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var courses = _ref.courses,
      teachers = _ref.teachers,
      schools = _ref.schools;
  return _extends({}, courses, teachers, schools);
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(CoursesTab);

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(220);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _schools = __webpack_require__(116);

var _TextField = __webpack_require__(35);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _pattern = __webpack_require__(93);

var _pattern2 = _interopRequireDefault(_pattern);

var _styles = __webpack_require__(98);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var modalStyles = {
  content: {
    top: '40px',
    width: '800px',
    margin: 'auto',
    fontFamily: 'Nunito, sans-serif',
    overflowX: 'hidden',
    zIndex: 4,
    fontSize: '16px'
  },
  overlay: {
    zIndex: 9,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
};
var hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};
var hintStyle = { zIndex: '1', pointerEvents: 'none' };
var inputStyle = { width: '400px' };

var SchoolModal = function (_React$Component) {
  _inherits(SchoolModal, _React$Component);

  function SchoolModal(props) {
    _classCallCheck(this, SchoolModal);

    var _this = _possibleConstructorReturn(this, (SchoolModal.__proto__ || Object.getPrototypeOf(SchoolModal)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      var isValid = _this.validateForm();
      if (!isValid) {
        return;
      }
      if (_this.props.selected) {
        _this.editSchool(_this.props.selected._id);
      } else {
        _this.addSchool();
      }
    };

    _this.editSchool = function (id) {
      var _this$state = _this.state,
          name = _this$state.name,
          phone = _this$state.phone,
          email = _this$state.email,
          address = _this$state.address,
          city = _this$state.city,
          postalCode = _this$state.postalCode,
          lat = _this$state.lat,
          lng = _this$state.lng,
          mapUrl = _this$state.mapUrl;

      return _axios2.default.put('/api/schools/' + id, {
        name: name, phone: phone, email: email, address: address,
        city: city, postalCode: postalCode, lat: lat, lng: lng, mapUrl: mapUrl
      }).then(function (response) {
        _this.props.updateSchool(response.data);
        _this.setState({
          success: 'School has been successfully updated',
          error: ''
        });
      }).catch(function (err) {
        _this.setState({
          success: '',
          error: 'Error: School could not be updated'
        });
      });
    };

    _this.addSchool = function () {
      var _this$state2 = _this.state,
          name = _this$state2.name,
          phone = _this$state2.phone,
          email = _this$state2.email,
          address = _this$state2.address,
          city = _this$state2.city,
          province = _this$state2.province,
          postalCode = _this$state2.postalCode,
          lat = _this$state2.lat,
          lng = _this$state2.lng,
          mapUrl = _this$state2.mapUrl;

      return _axios2.default.post('/api/schools', {
        name: name, phone: phone, email: email, address: address,
        city: city, province: province, postalCode: postalCode, lat: lat, lng: lng, mapUrl: mapUrl
      }).then(function (response) {
        _this.props.loadSchool(response.data);
        _this.setState({
          success: 'School has been successfully added',
          error: ''
        });
      }).catch(function (err) {
        _this.setState({
          success: '',
          error: 'Error: School could not be added'
        });
      }).then(_this.clearForm);
    };

    _this.clearForm = function () {
      _this.setState({
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
        nameError: '',
        phoneError: '',
        emailError: '',
        postalCodeError: '',
        lat: '',
        lng: '',
        mapUrl: ''
      });
    };

    _this.handleAfterOpen = function () {
      _this.setState({
        success: '',
        error: ''
      });
      if (!_this.props.selected) {
        _this.clearForm();
      }
    };

    _this.handleNameChange = function (event) {
      _this.setState({
        name: event.target.value,
        nameError: event.target.value ? '' : 'This field is required'
      });
    };

    _this.handlePhoneChange = function (event) {
      var phone = event.target.value.replace(/[^\d-()\s]/, '');
      var phoneError = phone ? _this.validatePhoneNumber(phone) ? '' : 'Please enter a ten digit phone number' : '';

      _this.setState({
        phone: phone,
        phoneError: phoneError
      });
    };

    _this.handleEmailChange = function (event) {
      var email = event.target.value;
      var emailError = email ? _this.validateEmail(email) ? '' : 'Please enter a valid email' : '';
      _this.setState({
        email: email,
        emailError: emailError
      });
    };

    _this.handlePostalCodeChange = function (event) {
      var postalCode = event.target.value;
      var postalCodeError = postalCode ? _this.validatePostalCode(postalCode) ? '' : 'Please enter a valid postal code of format A1A 1A1' : '';

      _this.setState({
        postalCode: postalCode,
        postalCodeError: postalCodeError
      });
    };

    _this.handleGenericChange = function (key, value) {
      _this.setState(_defineProperty({}, key, value));
    };

    _this.isFormValid = function () {
      return [_this.state.nameError, _this.state.phoneError, _this.state.emailError, _this.state.postalCodeError].every(function (field) {
        return !field;
      });
    };

    _this.state = {
      name: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      nameError: '',
      phoneError: '',
      emailError: '',
      postalCodeError: ''
    };
    return _this;
  }

  _createClass(SchoolModal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selected) {
        var _nextProps$selected = nextProps.selected,
            name = _nextProps$selected.name,
            phone = _nextProps$selected.phone,
            email = _nextProps$selected.email,
            address = _nextProps$selected.address,
            city = _nextProps$selected.city,
            province = _nextProps$selected.province,
            postalCode = _nextProps$selected.postalCode,
            lat = _nextProps$selected.lat,
            lng = _nextProps$selected.lng,
            mapUrl = _nextProps$selected.mapUrl;


        this.setState({
          name: name,
          phone: phone,
          email: email,
          address: address,
          city: city,
          province: province,
          postalCode: postalCode,
          success: '',
          error: '',
          lat: lat,
          lng: lng,
          mapUrl: mapUrl
        });
      }
    }
  }, {
    key: 'validatePhoneNumber',
    value: function validatePhoneNumber(value) {
      return (value.match(/\d/g) || []).length === 10;
    }
  }, {
    key: 'validateEmail',
    value: function validateEmail(value) {
      return _pattern2.default.email.test(value);
    }
  }, {
    key: 'validatePostalCode',
    value: function validatePostalCode(value) {
      return _pattern2.default.postalCode.test(value);
    }
  }, {
    key: 'validateForm',
    value: function validateForm() {
      var errorMessage = 'This field is required';
      var nameError = this.state.name ? '' : errorMessage;
      if (nameError) {
        this.setState({
          nameError: nameError
        });
      }
      return !nameError;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactModal2.default,
        _extends({}, this.props, { onAfterOpen: this.handleAfterOpen,
          style: modalStyles }),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.schoolModal },
          _react2.default.createElement(
            'h2',
            null,
            this.props.selected ? 'Edit school' : 'Add a school'
          ),
          this.state.success && _react2.default.createElement(
            'div',
            null,
            this.state.success
          ),
          this.state.error && _react2.default.createElement(
            'div',
            null,
            this.state.error
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { style: inputStyle,
                hintText: 'Enter name',
                type: 'text',
                floatingLabelText: 'School name',
                errorText: this.state.nameError,
                value: this.state.name,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: this.handleNameChange })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { style: inputStyle,
                hintText: 'Enter school phone',
                floatingLabelText: 'School phone',
                errorText: this.state.phoneError,
                type: 'text',
                value: this.state.phone,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: this.handlePhoneChange })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { style: inputStyle,
                hintText: 'Enter school email',
                floatingLabelText: 'School email',
                errorText: this.state.emailError,
                type: 'email',
                value: this.state.email,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: this.handleEmailChange })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { style: inputStyle,
                hintText: 'Enter address',
                type: 'text',
                floatingLabelText: 'School address',
                value: this.state.address,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: function onChange(event) {
                  return _this2.handleGenericChange('address', event.target.value);
                } })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { style: inputStyle,
                hintText: 'Enter city',
                type: 'text',
                floatingLabelText: 'School city',
                value: this.state.city,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: function onChange(event) {
                  return _this2.handleGenericChange('city', event.target.value);
                } })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { style: inputStyle,
                hintText: 'Enter postal code',
                type: 'text',
                floatingLabelText: 'Postal Code',
                value: this.state.postalCode,
                errorText: this.state.postalCodeError,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: this.handlePostalCodeChange
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex justify-between', style: { width: '80%' } },
              _react2.default.createElement(_TextField2.default, { hintText: 'Enter latitude (optional)',
                floatingLabelText: 'Latitude',
                type: 'number',
                value: this.state.lat,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: function onChange(event) {
                  return _this2.handleGenericChange('lat', event.target.value);
                } }),
              _react2.default.createElement(_TextField2.default, { hintText: 'Enter longitude (optional)',
                floatingLabelText: 'Longitude',
                type: 'number',
                value: this.state.lng,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: function onChange(event) {
                  return _this2.handleGenericChange('lng', event.target.value);
                } })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { style: inputStyle,
                hintText: 'Enter map url (optional)',
                type: 'text',
                floatingLabelText: 'Google maps URL',
                value: this.state.mapUrl,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: function onChange(event) {
                  return _this2.handleGenericChange('mapUrl', event.target.value);
                }
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex' },
              _react2.default.createElement(_RaisedButton2.default, {
                style: { marginRight: '20px' },
                onClick: this.props.closeModal,
                label: 'Cancel',
                secondary: true }),
              _react2.default.createElement(_RaisedButton2.default, {
                disabled: this.isFormValid() !== true,
                primary: true,
                type: 'submit',
                label: 'Save' })
            )
          )
        )
      );
    }
  }]);

  return SchoolModal;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref, ownProps) {
  _objectDestructuringEmpty(_ref);

  return _extends({}, ownProps);
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadSchool: _schools.loadSchool, updateSchool: _schools.updateSchool })(SchoolModal);

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _schema = __webpack_require__(160);

var _Tables = __webpack_require__(155);

var _AutoComplete = __webpack_require__(62);

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _SchoolModal = __webpack_require__(542);

var _SchoolModal2 = _interopRequireDefault(_SchoolModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colList = ['name', 'phone', 'email', 'address', 'postalCode'].map(function (key) {
  return (0, _schema.getField)(key);
});

var schoolFilter = function schoolFilter(searchText, key) {
  return searchText !== '' && key.toLowerCase().indexOf(searchText.toLowerCase()) === 0;
};

var menuProps = {
  desktop: true,
  disableAutoFocus: true
};

var SchoolsTab = function (_React$Component) {
  _inherits(SchoolsTab, _React$Component);

  function SchoolsTab(props) {
    _classCallCheck(this, SchoolsTab);

    var _this = _possibleConstructorReturn(this, (SchoolsTab.__proto__ || Object.getPrototypeOf(SchoolsTab)).call(this, props));

    _this.closeAddSchoolModal = function () {
      _this.setState({
        showAddSchoolModal: false,
        selected: null
      });
    };

    _this.showAddSchoolModal = function () {
      _this.setState({
        showAddSchoolModal: true
      });
    };

    _this.editSchool = function (school) {
      _this.setState({
        selected: _this.state.school,
        showAddSchoolModal: true
      });
    };

    _this.handleInputChange = function (searchText) {
      _this.setState({
        searchText: searchText
      });
    };

    _this.handleSchoolNameChange = function (schoolName) {
      _this.setState({
        school: _this.props.schools.find(function (school) {
          return school.name === schoolName;
        })
      });
    };

    _this.state = {
      showAddSchoolModal: false,
      selected: null,
      school: null,
      searchText: ''
    };
    return _this;
  }

  _createClass(SchoolsTab, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.state.school) {
        this.setState({
          school: nextProps.schools.find(function (_ref) {
            var _id = _ref._id;
            return _id === _this2.state.school._id;
          })
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.SchoolError) {
        return _react2.default.createElement(
          'div',
          null,
          'Unable to load Schools'
        );
      }
      if (!this.props.schools) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading Schools...'
        );
      }
      return _react2.default.createElement(
        'div',
        { style: { paddingTop: '40px' } },
        _react2.default.createElement(_SchoolModal2.default, { isOpen: this.state.showAddSchoolModal,
          closeModal: this.closeAddSchoolModal, selected: this.state.selected }),
        _react2.default.createElement(_RaisedButton2.default, { onClick: this.showAddSchoolModal, primary: true,
          label: 'Add School' }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_AutoComplete2.default, {
            hintText: 'Enter school name',
            floatingLabelText: 'Find your school',
            filter: schoolFilter,
            dataSource: this.props.schools.map(function (_ref2) {
              var name = _ref2.name;
              return name;
            }),
            menuProps: menuProps,
            searchText: this.state.searchText,
            onNewRequest: this.handleSchoolNameChange,
            onUpdateInput: this.handleInputChange,
            maxSearchResults: 5 })
        ),
        this.state.school && _react2.default.createElement(_Tables.EntityTable, { items: [this.state.school],
          colList: colList,
          onEditClick: this.editSchool })
      );
    }
  }]);

  return SchoolsTab;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref3) {
  var schools = _ref3.schools;
  return _extends({}, schools);
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(SchoolsTab);

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(220);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _teachers = __webpack_require__(233);

var _TextField = __webpack_require__(35);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _pattern = __webpack_require__(93);

var _pattern2 = _interopRequireDefault(_pattern);

var _styles = __webpack_require__(98);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var modalStyles = {
  content: {
    top: '40px',
    width: '800px',
    margin: 'auto',
    fontFamily: 'Nunito, sans-serif',
    overflowX: 'hidden',
    zIndex: 4,
    fontSize: '16px'
  },
  overlay: {
    zIndex: 9,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
};
var hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};
var hintStyle = { zIndex: '1', pointerEvents: 'none' };
var inputStyle = { width: '400px' };

var TeacherModal = function (_React$Component) {
  _inherits(TeacherModal, _React$Component);

  function TeacherModal(props) {
    _classCallCheck(this, TeacherModal);

    var _this = _possibleConstructorReturn(this, (TeacherModal.__proto__ || Object.getPrototypeOf(TeacherModal)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      var isValid = _this.validateForm();
      if (!isValid) {
        return;
      }
      if (_this.props.selected) {
        _this.editTeacher(_this.props.selected._id);
      } else {
        _this.addTeacher();
      }
    };

    _this.editTeacher = function (id) {
      var _this$state = _this.state,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName,
          phone = _this$state.phone,
          email = _this$state.email;

      return _axios2.default.put('/api/teachers/' + id, {
        firstName: firstName, lastName: lastName, phone: phone, email: email
      }).then(function (response) {
        _this.props.updateTeacher(response.data);
        _this.setState({
          success: 'Teacher has been successfully updated',
          error: ''
        });
      }).catch(function (err) {
        _this.setState({
          success: '',
          error: 'Error: Teacher could not be updated'
        });
      });
    };

    _this.addTeacher = function () {
      var _this$state2 = _this.state,
          firstName = _this$state2.firstName,
          lastName = _this$state2.lastName,
          phone = _this$state2.phone,
          email = _this$state2.email;

      return _axios2.default.post('/api/teachers', {
        firstName: firstName, lastName: lastName, phone: phone, email: email
      }).then(function (response) {
        _this.props.loadTeacher(response.data);
        _this.setState({
          success: 'Teacher has been successfully added',
          error: ''
        });
      }).catch(function (err) {
        _this.setState({
          success: '',
          error: 'Error: Teacher could not be added'
        });
      }).then(_this.clearForm);
    };

    _this.clearForm = function () {
      _this.setState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        firstNameError: '',
        lastNameError: '',
        phoneError: '',
        emailError: ''
      });
    };

    _this.handleAfterOpen = function () {
      _this.setState({
        success: '',
        error: ''
      });
      if (!_this.props.selected) {
        _this.clearForm();
      }
    };

    _this.handleFirstNameChange = function (event) {
      _this.setState({
        firstName: event.target.value,
        firstNameError: event.target.value ? '' : 'This field is required'
      });
    };

    _this.handleLastNameChange = function (event) {
      _this.setState({
        lastName: event.target.value,
        lastNameError: event.target.value ? '' : 'This field is required'
      });
    };

    _this.handlePhoneChange = function (event) {
      var phone = event.target.value.replace(/[^\d-()\s]/, '');
      var phoneError = phone ? _this.validatePhoneNumber(phone) ? '' : 'Please enter a ten digit phone number' : '';

      _this.setState({
        phone: phone,
        phoneError: phoneError
      });
    };

    _this.handleEmailChange = function (event) {
      var email = event.target.value;
      var emailError = email ? _this.validateEmail(email) ? '' : 'Please enter a valid email' : '';
      _this.setState({
        email: email,
        emailError: emailError
      });
    };

    _this.isFormValid = function () {
      return [_this.state.firstNameError, _this.state.lastNameError, _this.state.phoneError, _this.state.emailError].every(function (field) {
        return !field;
      });
    };

    _this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      firstNameError: '',
      lastNameError: '',
      phoneError: '',
      emailError: ''
    };
    return _this;
  }

  _createClass(TeacherModal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selected) {
        var _nextProps$selected = nextProps.selected,
            firstName = _nextProps$selected.firstName,
            lastName = _nextProps$selected.lastName,
            phone = _nextProps$selected.phone,
            email = _nextProps$selected.email;

        this.setState({
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          email: email,
          success: '',
          error: ''
        });
      }
    }
  }, {
    key: 'validatePhoneNumber',
    value: function validatePhoneNumber(value) {
      return (value.match(/\d/g) || []).length === 10;
    }
  }, {
    key: 'validateEmail',
    value: function validateEmail(value) {
      return _pattern2.default.email.test(value);
    }
  }, {
    key: 'validateForm',
    value: function validateForm() {
      var errorMessage = 'This field is required';
      var firstNameError = this.state.firstName ? '' : errorMessage;
      var lastNameError = this.state.lastName ? '' : errorMessage;
      var isValid = firstNameError + lastNameError === '';
      if (!isValid) {
        this.setState({
          firstNameError: firstNameError,
          lastNameError: lastNameError
        });
      }
      return isValid;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactModal2.default,
        _extends({}, this.props, { onAfterOpen: this.handleAfterOpen,
          style: modalStyles }),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.teacherModal },
          _react2.default.createElement(
            'h2',
            null,
            this.props.selected ? 'Edit teacher' : 'Add a teacher'
          ),
          this.state.success && _react2.default.createElement(
            'div',
            null,
            this.state.success
          ),
          this.state.error && _react2.default.createElement(
            'div',
            null,
            this.state.error
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { style: inputStyle,
                hintText: 'Enter first name',
                type: 'text',
                floatingLabelText: 'Teacher first name',
                errorText: this.state.firstNameError,
                value: this.state.firstName,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: this.handleFirstNameChange })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { style: inputStyle,
                hintText: 'Enter last name',
                type: 'text',
                floatingLabelText: 'Teacher last name',
                errorText: this.state.lastNameError,
                value: this.state.lastName,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: this.handleLastNameChange })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { style: inputStyle,
                hintText: 'Enter teacher phone',
                floatingLabelText: 'Teacher phone',
                errorText: this.state.phoneError,
                type: 'text',
                value: this.state.phone,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: this.handlePhoneChange })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_TextField2.default, { style: inputStyle,
                hintText: 'Enter teacher email',
                floatingLabelText: 'Teacher email',
                errorText: this.state.emailError,
                type: 'email',
                value: this.state.email,
                inputStyle: hideAutoFillColorStyle,
                hintStyle: hintStyle,
                onChange: this.handleEmailChange })
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex' },
              _react2.default.createElement(_RaisedButton2.default, {
                style: { marginRight: '20px' },
                onClick: this.props.closeModal,
                label: 'Cancel',
                secondary: true }),
              _react2.default.createElement(_RaisedButton2.default, {
                disabled: this.isFormValid() !== true,
                primary: true,
                type: 'submit',
                label: 'Save' })
            )
          )
        )
      );
    }
  }]);

  return TeacherModal;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref, ownProps) {
  _objectDestructuringEmpty(_ref);

  return _extends({}, ownProps);
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadTeacher: _teachers.loadTeacher, updateTeacher: _teachers.updateTeacher })(TeacherModal);

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _schema = __webpack_require__(160);

var _Tables = __webpack_require__(155);

var _TeacherModal = __webpack_require__(544);

var _TeacherModal2 = _interopRequireDefault(_TeacherModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colList = ['firstName', 'lastName', 'phone', 'email'].map(function (key) {
  return (0, _schema.getField)(key);
});

var TeachersTab = function (_React$Component) {
  _inherits(TeachersTab, _React$Component);

  function TeachersTab(props) {
    _classCallCheck(this, TeachersTab);

    var _this = _possibleConstructorReturn(this, (TeachersTab.__proto__ || Object.getPrototypeOf(TeachersTab)).call(this, props));

    _this.closeAddTeacherModal = function () {
      _this.setState({
        showAddTeacherModal: false,
        selected: null
      });
    };

    _this.showAddTeacherModal = function () {
      _this.setState({
        showAddTeacherModal: true
      });
    };

    _this.editTeacher = function (teacher) {
      _this.setState({
        selected: teacher,
        showAddTeacherModal: true
      });
    };

    _this.state = {
      showAddTeacherModal: false,
      selected: null
    };
    return _this;
  }

  _createClass(TeachersTab, [{
    key: 'render',
    value: function render() {
      if (this.props.teacherError) {
        return _react2.default.createElement(
          'div',
          null,
          'Unable to load teachers'
        );
      }
      if (!this.props.teachers) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading teachers...'
        );
      }
      return _react2.default.createElement(
        'div',
        { style: { paddingTop: '40px' } },
        _react2.default.createElement(_TeacherModal2.default, { isOpen: this.state.showAddTeacherModal,
          closeModal: this.closeAddTeacherModal, selected: this.state.selected }),
        _react2.default.createElement(_RaisedButton2.default, { onClick: this.showAddTeacherModal, primary: true,
          label: 'Add teacher' }),
        _react2.default.createElement(_Tables.EntityTable, { items: this.props.teachers, colList: colList,
          onEditClick: this.editTeacher })
      );
    }
  }]);

  return TeachersTab;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var teachers = _ref.teachers;
  return _extends({}, teachers);
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(TeachersTab);

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(332);

var _TeachersTab = __webpack_require__(545);

var _TeachersTab2 = _interopRequireDefault(_TeachersTab);

var _SchoolsTab = __webpack_require__(543);

var _SchoolsTab2 = _interopRequireDefault(_SchoolsTab);

var _CoursesTab = __webpack_require__(541);

var _CoursesTab2 = _interopRequireDefault(_CoursesTab);

var _styles = __webpack_require__(98);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Course = function (_React$Component) {
  _inherits(Course, _React$Component);

  function Course(props) {
    _classCallCheck(this, Course);

    var _this = _possibleConstructorReturn(this, (Course.__proto__ || Object.getPrototypeOf(Course)).call(this, props));

    _this.handleTabChange = function (value) {
      _this.setState({ selected: value });
    };

    _this.state = {
      selected: 'teachers'
    };
    return _this;
  }

  _createClass(Course, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Tabs.Tabs,
        { value: this.state.selected, onChange: this.handleTabChange },
        _react2.default.createElement(
          _Tabs.Tab,
          { label: 'Teachers', value: 'teachers' },
          _react2.default.createElement(_TeachersTab2.default, null)
        ),
        _react2.default.createElement(
          _Tabs.Tab,
          { label: 'Schools', value: 'schools' },
          _react2.default.createElement(_SchoolsTab2.default, null)
        ),
        _react2.default.createElement(
          _Tabs.Tab,
          { label: 'Classes', value: 'classes' },
          _react2.default.createElement(_CoursesTab2.default, null)
        )
      );
    }
  }]);

  return Course;
}(_react2.default.Component);

exports.default = Course;

/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(235);

var _styles = __webpack_require__(681);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeworkLevel = function HomeworkLevel(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      props.level + ' PDFs'
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.weeks },
      props.weeks.map(function (name) {
        var href = '/api/admin/pdfs/' + props.level + '-' + name + '.pdf';
        return _react2.default.createElement(
          'a',
          { target: '_blank', href: href },
          name.replace(/([a-z])([A-Z])/g, "$1 $2")
        );
      })
    )
  );
};

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    null,
    _constants.homeworkLinks.map(function (level) {
      return _react2.default.createElement(HomeworkLevel, level);
    })
  );
};

/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _fp = __webpack_require__(195);

var _styles = __webpack_require__(682);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var seasons = ['winter', 'spring', 'summer', 'fall'];

var formatYear = function formatYear(year) {
  return parseInt(year) + 1900;
};

var RegistrationLink = function RegistrationLink(props) {
  var href = '/api/admin/student-courses/' + props.season + '/' + props.year;
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.registrationLink },
    _react2.default.createElement(
      'h1',
      null,
      seasons[props.season],
      ' ',
      formatYear(props.year)
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'a',
        { target: '_blank', href: href },
        'Download ' + seasons[props.season] + ' ' + formatYear(props.year) + ' Registration List'
      )
    )
  );
};

var Registration = function Registration(props) {
  if (props.coursesError) {
    return _react2.default.createElement(
      'div',
      null,
      'Error loading courses'
    );
  }
  if (props.courses.length < 1) {
    return _react2.default.createElement(
      'div',
      null,
      'Loading courses...'
    );
  }
  var seasonList = (0, _fp.uniq)(props.courses.map(function (_ref) {
    var season = _ref.season,
        year = _ref.year;
    return season + '/' + year;
  })).sort(function (a, b) {
    var aVals = a.split('/');
    var bVals = b.split('/');
    var diff = aVals[1] - bVals[1];
    return diff ? diff : aVals[0] - bVals[0];
  });
  return _react2.default.createElement(
    'div',
    null,
    seasonList.map(function (entry) {
      var _entry$split = entry.split('/'),
          _entry$split2 = _slicedToArray(_entry$split, 2),
          season = _entry$split2[0],
          year = _entry$split2[1];

      return _react2.default.createElement(RegistrationLink, { key: entry, season: season, year: year });
    })
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var courses = _ref2.courses;

  return {
    courses: courses.courses,
    error: courses.coursesError
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(Registration);

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(151);

var _season = __webpack_require__(244);

var _reactRouterDom = __webpack_require__(14);

var _session = __webpack_require__(69);

var _teachers = __webpack_require__(233);

var _schools = __webpack_require__(116);

var _courses = __webpack_require__(115);

var _Navbar = __webpack_require__(158);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _navLink = __webpack_require__(113);

var _Courses = __webpack_require__(546);

var _Courses2 = _interopRequireDefault(_Courses);

var _Homework = __webpack_require__(547);

var _Homework2 = _interopRequireDefault(_Homework);

var _Registration = __webpack_require__(548);

var _Registration2 = _interopRequireDefault(_Registration);

var _constants = __webpack_require__(235);

var _styles = __webpack_require__(683);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElevatedView = function ElevatedView() {
  return _react2.default.createElement(
    _reactRouter.Switch,
    null,
    _react2.default.createElement(_reactRouter.Route, { path: '/registration', component: _Registration2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/courses', component: _Courses2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/homework', component: _Homework2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', render: function render() {
        return _react2.default.createElement(_reactRouter.Redirect, { to: '/registration' });
      } })
  );
};

var TeacherView = function TeacherView() {
  return _react2.default.createElement(
    _reactRouter.Switch,
    null,
    _react2.default.createElement(_reactRouter.Route, { path: '/homework', component: _Homework2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', render: function render() {
        return _react2.default.createElement(_reactRouter.Redirect, { to: '/homework' });
      } })
  );
};

var AdminPage = function (_React$Component) {
  _inherits(AdminPage, _React$Component);

  function AdminPage() {
    _classCallCheck(this, AdminPage);

    return _possibleConstructorReturn(this, (AdminPage.__proto__ || Object.getPrototypeOf(AdminPage)).apply(this, arguments));
  }

  _createClass(AdminPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.teachers) {
        this.props.loadTeachers();
      }
      if (!this.props.schools.length) {
        this.props.loadSchools();
      }
      this.props.loadCourses((0, _season.getCurrentSeason)(), true);
    }
  }, {
    key: 'render',
    value: function render() {
      var filteredNavLinks = this.props.username === 'ashahi' ? _constants.navLinks : _constants.navLinks.filter(function (_ref) {
        var name = _ref.name;
        return name.toLowerCase() === 'homework';
      });
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.adminPage },
        _react2.default.createElement(
          _Navbar2.default,
          { links: filteredNavLinks },
          _react2.default.createElement(_navLink.NavLinkBtn, { name: 'Logout', handleClick: this.props.logout })
        ),
        _react2.default.createElement(
          'div',
          null,
          this.props.username === 'ashahi' && _react2.default.createElement(ElevatedView, null),
          this.props.username !== 'ashahi' && _react2.default.createElement(TeacherView, null)
        )
      );
    }
  }]);

  return AdminPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var teachers = _ref2.teachers,
      schools = _ref2.schools,
      courses = _ref2.courses,
      user = _ref2.user;
  return _extends({}, teachers, schools, courses, user);
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { logout: _session.logout, loadTeachers: _teachers.loadTeachers, loadSchools: _schools.loadSchools, loadCourses: _courses.loadCourses })(AdminPage));

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _teachers = __webpack_require__(551);

var _teachers2 = _interopRequireDefault(_teachers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  teachers: _teachers2.default
};

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(234);

var INITIAL_STATE = {
  teachers: null,
  teachersError: ''
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _types.UPDATE_TEACHER:
      var updatedTeacher = state.teachers.find(function (teacher) {
        return teacher._id === action.payload._id;
      });
      if (!updatedTeacher) {
        break;
      }
      var updatedTeachers = state.teachers.slice(0);
      updatedTeachers[updatedTeachers.indexOf(updatedTeacher)] = action.payload;
      return {
        teachers: updatedTeachers,
        teachersError: ''
      };
    case _types.ADD_TEACHER:
      return {
        teachers: (state.teachers || []).slice(0).concat(action.payload),
        teachersError: ''
      };
    case _types.SET_TEACHERS:
      return {
        teachers: action.payload,
        teachersError: ''
      };
    case _types.LOAD_TEACHERS_FAILED:
      return {
        teachers: null,
        teachersError: action.payload
      };
  }
  return state;
};

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _Avatar = __webpack_require__(72);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Chessboard = __webpack_require__(70);

var _Chessboard2 = _interopRequireDefault(_Chessboard);

var _ChessmoveSound = __webpack_require__(92);

var _ChessmoveSound2 = _interopRequireDefault(_ChessmoveSound);

var _config = __webpack_require__(553);

var _config2 = _interopRequireDefault(_config);

var _Instructions = __webpack_require__(71);

var _Instructions2 = _interopRequireDefault(_Instructions);

var _styles = __webpack_require__(79);

var _styles2 = _interopRequireDefault(_styles);

var _button = __webpack_require__(44);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Concentration = function (_React$Component) {
  _inherits(Concentration, _React$Component);

  function Concentration(props) {
    _classCallCheck(this, Concentration);

    var _this = _possibleConstructorReturn(this, (Concentration.__proto__ || Object.getPrototypeOf(Concentration)).call(this, props));

    _this.getMessage = function () {
      if (!_this.state.started) {
        return 'A game of concentration';
      }
      if (_this.state.gameOver) {
        if (_this.state.score === _this.props.solution.length) {
          return 'Congratulations!  You have a good memory!  Your score is ' + _this.state.score;
        }
        return 'Game over. Your score is ' + _this.state.score;
      } else if (_this.state.aiTurn) {
        return 'Memorize the sequence!';
      } else {
        return 'Your turn! Repeat the sequence!';
      }
    };

    _this.startGame = function () {
      _this.setState({
        config: _config2.default.conf.ai,
        gameOver: false,
        started: true,
        aiTurn: true,
        level: 1,
        sound: ''
      });
    };

    _this.state = {
      aiTurn: true,
      config: _config2.default.conf.gameOver,
      solution: _this.props.solution,
      level: 1,
      started: false,
      gameOver: true,
      highScore: 0,
      sound: ''
    };
    return _this;
  }

  _createClass(Concentration, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.boardContainer },
        _react2.default.createElement(_ChessmoveSound2.default, { key: Date.now(), type: this.state.sound }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: this.props.getHomeLink(),
            className: _button2.default.primaryBtn + ' ' + _styles2.default.exitBtn },
          'Exit'
        ),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.header },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.banner },
            this.props.name
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.bannerAvatar },
            _react2.default.createElement(_Avatar2.default, { src: '/assets/avatars/' + this.props.courseName + '-avatar.png' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.body },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.chessBoard },
            _react2.default.createElement(
              'div',
              { className: _styles2.default.leftRow },
              [8, 7, 6, 5, 4, 3, 2, 1].map(function (num) {
                return _react2.default.createElement(
                  'div',
                  { className: _styles2.default.rank },
                  num
                );
              })
            ),
            _react2.default.createElement(
              'div',
              { className: _styles2.default.properBoardContainer },
              _react2.default.createElement(_Chessboard2.default, _extends({}, this.state.config, {
                position: this.props.position,
                boardId: 'concentration',
                solution: this.state.solution,
                level: this.state.level,
                switchTurn: this.switchTurn.bind(this),
                delay: 500 })),
              _react2.default.createElement(
                'div',
                { className: _styles2.default.bottomRow },
                ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(function (letter) {
                  return _react2.default.createElement(
                    'div',
                    { className: _styles2.default.file },
                    letter
                  );
                })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.feedback },
            _react2.default.createElement(_Instructions2.default, { instructions: this.getMessage() }),
            !this.state.started && _react2.default.createElement(
              'button',
              { className: _button2.default.primaryBtn + ' ' + _styles2.default.successBtn,
                onClick: this.startGame },
              'Start'
            ),
            this.state.gameOver && this.state.score < this.state.solution.length && _react2.default.createElement(
              'button',
              { className: _button2.default.primaryBtn + ' ' + _styles2.default.successBtn,
                onClick: this.startGame },
              'Try Again'
            ),
            this.state.gameOver && this.state.score >= this.state.solution.length && _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _button2.default.primaryBtn + ' ' + _styles2.default.successBtn,
                to: this.props.getHomeLink() },
              'Back to activities'
            ),
            !this.state.gameOver && _react2.default.createElement(
              'p',
              null,
              'Level: ',
              this.state.level
            ),
            _react2.default.createElement(
              'p',
              null,
              'High: ',
              this.state.highScore
            )
          )
        )
      );
    }
  }, {
    key: 'switchTurn',
    value: function switchTurn(isCorrect) {
      if (!isCorrect || this.state.level === this.state.solution.length && !this.state.aiTurn) {
        var score = isCorrect ? this.state.level : this.state.level - 1;
        var highScore = score > this.state.highScore ? score : this.state.highScore;

        this.setState(function (prevState) {
          return {
            config: _config2.default.conf.gameOver,
            gameOver: true,
            score: score,
            highScore: highScore,
            sound: isCorrect ? 'success' : 'error'
          };
        });
        if (isCorrect) {
          this.props.onComplete();
        }
        return;
      }

      var newConf = this.state.aiTurn ? _config2.default.conf.hu : _config2.default.conf.ai;

      this.setState(function (prevState) {
        return {
          config: newConf,
          aiTurn: !prevState.aiTurn,
          level: prevState.aiTurn ? prevState.level : prevState.level + 1,
          sound: prevState.aiTurn ? '' : 'success'
        };
      });
    }
  }]);

  return Concentration;
}(_react2.default.Component);

exports.default = Concentration;

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var concentration = {
    conf: {
        ai: {
            draggable: false,
            onStart: function onStart() {
                var _this = this;

                var sequence = this.props.solution.slice(0, this.props.level);

                this.makeMoves(sequence).then(function () {
                    setTimeout(_this.props.switchTurn.bind(null, true), 300);
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

function getOnDropHandler() {
    var progress = 0;
    return function (source, target) {
        var move = source + "-" + target;
        var isCorrect = this.props.solution[progress] === move;
        var isLastStep = progress + 1 === this.props.level;

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

exports.default = concentration;

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _chess_engine = __webpack_require__(564);

var game = {
    ai: {
        draggable: false,
        onStart: function onStart() {
            var _this = this;

            (0, _chess_engine.getMove)(this.props.game.fen()).then(function (str) {
                var from = str.substr(0, 2);
                var to = str.substr(2, 2);
                _this.props.game.move({ from: from, to: to, promotion: 'q' });
                _this.board.position(_this.props.game.fen());
                _this.props.switchTurn();
            });
        }
    },
    hu: {
        draggable: true,
        onDrop: onDrop,
        onSnapEnd: onSnapEnd
    },
    gameOver: {
        draggable: false
    }
};

function onDrop(source, target) {
    var move = this.props.game.move({
        from: source,
        to: target,
        promotion: 'q'
    });

    if (move === null) return 'snapback';

    this.props.switchTurn();
}

function onSnapEnd() {
    this.board.position(this.props.game.fen());
}

exports.default = game;

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _chess = __webpack_require__(257);

var _chess2 = _interopRequireDefault(_chess);

var _Chessboard = __webpack_require__(70);

var _Chessboard2 = _interopRequireDefault(_Chessboard);

var _ChessmoveSound = __webpack_require__(92);

var _ChessmoveSound2 = _interopRequireDefault(_ChessmoveSound);

var _Avatar = __webpack_require__(72);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Instructions = __webpack_require__(71);

var _Instructions2 = _interopRequireDefault(_Instructions);

var _config = __webpack_require__(554);

var _config2 = _interopRequireDefault(_config);

var _moveHelper = __webpack_require__(561);

var _styles = __webpack_require__(79);

var _styles2 = _interopRequireDefault(_styles);

var _button = __webpack_require__(44);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getColorName = function getColorName(turn) {
  return {
    b: 'Black',
    w: 'White'
  }[turn];
};

var getResultMessage = function getResultMessage(winner) {
  if (winner) {
    return getColorName(winner) + ' won!';
  } else {
    return 'Draw game!';
  }
};

var getTurnMessage = function getTurnMessage(turn) {
  return getColorName(turn) + ' to play';
};

var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _initialiseProps.call(_this);

    var game = new _chess2.default(_this.props.position);
    var conf = _config2.default.gameOver;

    _this.state = {
      config: Object.assign({}, conf, {
        position: _this.props.position || 'start'
      }),
      game: game,
      gameOver: false,
      decisive: false,
      moves: [],
      started: false,
      winner: ''
    };
    _this.instructions = _this.props.instructions;
    return _this;
  }

  _createClass(Game, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.boardContainer },
        _react2.default.createElement(_ChessmoveSound2.default, { key: Date.now(), type: this.state.sound }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: this.props.getHomeLink(),
            className: _button2.default.primaryBtn + ' ' + _styles2.default.exitBtn },
          'Exit'
        ),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.header },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.banner },
            this.props.name
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.bannerAvatar },
            _react2.default.createElement(_Avatar2.default, { src: '/assets/avatars/' + this.props.courseName + '-avatar.png' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.body },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.chessBoard },
            _react2.default.createElement(
              'div',
              { className: _styles2.default.leftRow },
              [8, 7, 6, 5, 4, 3, 2, 1].map(function (num) {
                return _react2.default.createElement(
                  'div',
                  { className: _styles2.default.rank },
                  num
                );
              })
            ),
            _react2.default.createElement(
              'div',
              { className: _styles2.default.properBoardContainer },
              _react2.default.createElement(_Chessboard2.default, _extends({}, this.state.config, {
                boardId: this.props.boardId,
                game: this.state.game,
                switchTurn: this.switchTurn,
                delay: 200 })),
              _react2.default.createElement(
                'div',
                { className: _styles2.default.bottomRow },
                ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(function (letter) {
                  return _react2.default.createElement(
                    'div',
                    { className: _styles2.default.file },
                    letter
                  );
                })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.feedback },
            _react2.default.createElement(_Instructions2.default, { instructions: this.getMessage() }),
            this.state.started !== true && !this.state.decisive && _react2.default.createElement(
              'button',
              { onClick: this.startGame,
                className: _button2.default.primaryBtn + ' ' + _styles2.default.successBtn },
              'New Game'
            ),
            this.state.decisive && _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _button2.default.primaryBtn + ' ' + _styles2.default.successBtn,
                to: this.props.getHomeLink() },
              'Back to activities'
            ),
            this.state.started && !this.state.decisive && _react2.default.createElement(
              'button',
              { onClick: this.resignGame.bind(this, this.getAiColor()),
                className: _button2.default.primaryBtn + ' ' + _styles2.default.failBtn },
              'Resign Game'
            )
          )
        )
      );
    }
  }]);

  return Game;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.isHumanTurn = function (turn) {
    return _this2.props.players[turn] === 'hu';
  };

  this.getMessage = function () {
    if (!_this2.state.started) {
      return _this2.state.decisive ? getResultMessage(_this2.state.winner) : _this2.instructions;
    } else {
      return getTurnMessage(_this2.state.game.turn());
    }
  };

  this.getConf = function (game) {
    return _config2.default[_this2.props.players[game.turn()]];
  };

  this.drawGame = function (sound) {
    if (_this2.props.drawCondition) {
      _this2.props.onComplete();
    }
    _this2.setState({
      decisive: true,
      started: false,
      gameOver: true,
      config: _config2.default.gameOver,
      moves: [],
      sound: sound || ''
    });
  };

  this.getAiColor = function () {
    return Object.keys(_this2.props.players).map(function (color) {
      return { color: color, agent: _this2.props.players[color] };
    }).find(function (player) {
      return player.agent === 'ai';
    }).color;
  };

  this.resignGame = function (winningPlayer, sound) {
    var winner = winningPlayer || (_this2.state.game.turn() === 'w' ? 'b' : 'w');
    if (_this2.props.players[winner] === 'hu') {
      _this2.props.onComplete();
    }
    _this2.setState({
      decisive: true,
      started: false,
      gameOver: true,
      config: _config2.default.gameOver,
      winner: winner,
      moves: [],
      sound: sound || ''
    });
  };

  this.startGame = function () {
    var game = new _chess2.default(_this2.props.position);
    _this2.setState(function (prevState) {
      return {
        started: true,
        game: game,
        gameOver: false,
        config: Object.assign({}, _this2.getConf(game), {
          position: _this2.props.position || 'start'
        })
      };
    });
  };

  this.switchTurn = function () {
    var sound = 'normal';
    var lastMove = _this2.state.game.history({ verbose: true }).slice(-1)[0];
    if (_this2.state.game.in_check() || _this2.state.game.in_checkmate()) {
      sound = 'check';
    } else if ('captured' in lastMove) {
      sound = 'capture';
    }

    if (_this2.state.game.game_over()) {
      var endGame = _this2.state.game.in_checkmate() ? _this2.resignGame.bind(_this2, null, sound) : _this2.drawGame.bind(_this2, sound);

      endGame();
      return;
    }

    _this2.setState(function (prevState) {
      return {
        config: _this2.getConf(prevState.game),
        moves: (0, _moveHelper.parseMoves)(prevState.game.history({ verbose: true })),
        sound: sound
      };
    });
  };
};

Game.propTypes = {
  players: _react.PropTypes.object
};

Game.defaultProps = {
  players: {
    w: 'hu',
    b: 'ai'
  }
};

exports.default = Game;

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _fp = __webpack_require__(195);

var _Avatar = __webpack_require__(72);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Chessboard = __webpack_require__(70);

var _Chessboard2 = _interopRequireDefault(_Chessboard);

var _ChessmoveSound = __webpack_require__(92);

var _ChessmoveSound2 = _interopRequireDefault(_ChessmoveSound);

var _Instructions = __webpack_require__(71);

var _Instructions2 = _interopRequireDefault(_Instructions);

var _styles = __webpack_require__(79);

var _styles2 = _interopRequireDefault(_styles);

var _button = __webpack_require__(44);

var _button2 = _interopRequireDefault(_button);

var _styles3 = __webpack_require__(685);

var _styles4 = _interopRequireDefault(_styles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HighlightPuzzle = function (_React$Component) {
  _inherits(HighlightPuzzle, _React$Component);

  function HighlightPuzzle(props) {
    _classCallCheck(this, HighlightPuzzle);

    var _this = _possibleConstructorReturn(this, (HighlightPuzzle.__proto__ || Object.getPrototypeOf(HighlightPuzzle)).call(this, props));

    _this.handleSquareClick = function (square) {
      _this.setState(function (prevState) {
        var idx = prevState.selected.indexOf(square);
        var selected = prevState.selected;
        var sound = '';
        if (idx > -1) {
          selected.splice(idx, 1);
          _this.refs.chessboard.unHighlightSquare(square);
        } else {
          selected.push(square);
          _this.refs.chessboard.highlightSquare(square);
          if (_this.props.solution.indexOf(square) > -1) {
            sound = 'success';
          } else {
            sound = 'error';
          }
        }
        var missing = (0, _fp.difference)(_this.props.solution, selected);
        var wrong = (0, _fp.difference)(selected, _this.props.solution);
        return {
          selected: selected,
          missing: missing,
          wrong: wrong,
          gameOver: missing.length + wrong.length === 0,
          sound: sound
        };
      });
    };

    _this.getMessage = function () {
      if (_this.state.gameOver) {
        _this.props.onComplete();
        return 'Puzzle solved!';
      } else {
        return _this.props.instructions || 'Click the squares to win';
      }
    };

    _this.getProgressUpdate = function () {
      return _react2.default.createElement(
        'div',
        { style: { fontSize: '18px' } },
        _react2.default.createElement(
          'p',
          null,
          'You have selected',
          _react2.default.createElement(
            'span',
            { style: { color: '#5cb85c' } },
            ' ',
            _this.state.selected.length - _this.state.wrong.length,
            ' '
          ),
          'correct squares out of ',
          _this.props.solution.length
        ),
        _this.state.wrong.length > 0 && _react2.default.createElement(
          'p',
          null,
          'You have selected ',
          _react2.default.createElement(
            'span',
            { style: { color: '#f44336' } },
            ' ',
            _this.state.wrong.length,
            ' '
          ),
          ' incorrect square(s)!'
        )
      );
    };

    _this.state = {
      selected: [],
      missing: [],
      wrong: [],
      gameOver: false,
      sound: ''
    };
    return _this;
  }

  _createClass(HighlightPuzzle, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.boardContainer },
        this.state.sound !== '' && _react2.default.createElement(_ChessmoveSound2.default, { key: Date.now(), type: this.state.sound }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: this.props.getHomeLink(),
            className: _button2.default.primaryBtn + ' ' + _styles2.default.exitBtn },
          'Exit'
        ),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.header },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.banner },
            this.props.name
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.bannerAvatar },
            _react2.default.createElement(_Avatar2.default, { src: '/assets/avatars/' + this.props.courseName + '-avatar.png' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.body },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.chessBoard },
            _react2.default.createElement(
              'div',
              { className: _styles2.default.leftRow },
              [8, 7, 6, 5, 4, 3, 2, 1].map(function (num) {
                return _react2.default.createElement(
                  'div',
                  { className: _styles2.default.rank },
                  num
                );
              })
            ),
            _react2.default.createElement(
              'div',
              { className: _styles2.default.properBoardContainer },
              _react2.default.createElement(_Chessboard2.default, { boardId: this.props.boardId,
                position: this.props.position,
                draggable: false,
                handleSquareClick: this.state.gameOver ? null : this.handleSquareClick,
                ref: 'chessboard',
                delay: 200 }),
              _react2.default.createElement(
                'div',
                { className: _styles2.default.bottomRow },
                ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(function (letter) {
                  return _react2.default.createElement(
                    'div',
                    { className: _styles2.default.file },
                    letter
                  );
                })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.feedback },
            _react2.default.createElement(_Instructions2.default, { instructions: this.getMessage() }),
            !this.state.gameOver && this.getProgressUpdate(),
            this.state.gameOver && _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _button2.default.primaryBtn + ' ' + _styles2.default.successBtn,
                to: this.props.getHomeLink() },
              'Back to activities'
            )
          )
        )
      );
    }
  }]);

  return HighlightPuzzle;
}(_react2.default.Component);

exports.default = HighlightPuzzle;

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chessboard = __webpack_require__(236);

var _chessboard2 = _interopRequireDefault(_chessboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var position = '2bqkbn1/2pppp2/np2N3/r3P1p1/p2N2B1/5Q2/PPPPKPP1/RNB2r2';

var isPromotion = function isPromotion(piece, target) {
  return piece[1] === 'P' && (target[1] === '1' || target[1] === '8');
};

var isCastle = function isCastle(piece, source, target) {
  var isKing = piece[1] === 'K';
  if (!isKing) {
    return false;
  }
  var color = piece[0];
  if (color === 'w') {
    return source === 'e1' && target === 'g1' || source === 'e1' && target === 'c1';
  } else {
    return source === 'e8' && target === 'g8' || source === 'e8' && target === 'c8';
  }
};

var homework = {
  position: position,
  conf: {
    ai: {
      draggable: false,
      onStart: function onStart() {
        var move = this.props.solution[this.props.level - 1];

        this.makeMove(move).then(this.props.switchTurn.bind(null, true));
      }
    },
    hu: {
      draggable: true,
      onDrop: onDrop
    },
    gameOver: {
      draggable: false
    }
  }
};

function onDrop(source, target, piece, newPos, oldPos) {
  var move = source + '-' + target;
  var isCorrect = this.props.solution[this.props.level - 1] === move;
  var moveType = 'normal';
  this.setConfig({
    draggable: false
  });
  if (isPromotion(piece, target)) {
    newPos[target] = piece[0] + 'Q';
    moveType = 'promote';
  }
  if (target in oldPos) {
    moveType = 'capture';
  }
  if (isCorrect && isCastle(piece, source, target)) {
    if (piece[0] === 'w') {
      if (target === 'c1') {
        newPos['d1'] = 'wR';
        delete newPos['a1'];
      } else {
        newPos['f1'] = 'wR';
        delete newPos['h1'];
      }
    } else {
      if (target === 'c8') {
        newPos['d8'] = 'bR';
        delete newPos['a8'];
      } else {
        newPos['f8'] = 'bR';
        delete newPos['h8'];
      }
    }
  }
  this.props.switchTurn(isCorrect, _chessboard2.default.objToFen(isCorrect ? newPos : oldPos), moveType);
}

exports.default = homework;

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _Avatar = __webpack_require__(72);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Chessboard = __webpack_require__(70);

var _Chessboard2 = _interopRequireDefault(_Chessboard);

var _ChessmoveSound = __webpack_require__(92);

var _ChessmoveSound2 = _interopRequireDefault(_ChessmoveSound);

var _Instructions = __webpack_require__(71);

var _Instructions2 = _interopRequireDefault(_Instructions);

var _config = __webpack_require__(557);

var _config2 = _interopRequireDefault(_config);

var _styles = __webpack_require__(79);

var _styles2 = _interopRequireDefault(_styles);

var _button = __webpack_require__(44);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homework = function (_React$Component) {
    _inherits(Homework, _React$Component);

    function Homework(props) {
        _classCallCheck(this, Homework);

        var _this = _possibleConstructorReturn(this, (Homework.__proto__ || Object.getPrototypeOf(Homework)).call(this, props));

        _this.getMessage = function () {
            if (_this.state.gameOver) {
                return 'Puzzle Solved!';
            }

            if (!_this.state.started) {
                return _this.state.instructions;
            }

            if (_this.state.rightMove) {
                return 'Best move! Keep going...';
            } else {
                return 'Wrong move! Try again';
            }
        };

        _this.isThereAnotherPuzzle = function () {
            return _this.state.puzzleNumber + 1 < _this.props.puzzles.length;
        };

        _this.nextPuzzle = function () {
            _this.setState(function (prevState) {
                return {
                    config: Object.assign({}, _config2.default.conf.hu, {
                        position: _this.props.puzzles[prevState.puzzleNumber + 1].position
                    }),
                    solution: _this.props.puzzles[prevState.puzzleNumber + 1].solution,
                    level: 1,
                    gameOver: false,
                    rightMove: false,
                    started: false,
                    instructions: _this.props.puzzles[prevState.puzzleNumber + 1].instructions,
                    puzzleNumber: prevState.puzzleNumber + 1,
                    sound: ''
                };
            });
        };

        _this.state = {
            aiTurn: false,
            config: Object.assign({}, _config2.default.conf.hu, {
                position: _this.props.puzzles[0].position
            }),
            solution: _this.props.puzzles[0].solution,
            level: 1,
            started: false,
            gameOver: false,
            rightMove: false,
            instructions: _this.props.puzzles[0].instructions,
            puzzleNumber: 0,
            puzzles: _this.props.puzzles,
            sound: ''
        };
        return _this;
    }

    _createClass(Homework, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _styles2.default.boardContainer },
                this.state.sound !== '' && _react2.default.createElement(_ChessmoveSound2.default, { key: Date.now(), type: this.state.sound }),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: this.props.getHomeLink(),
                        className: _button2.default.primaryBtn + ' ' + _styles2.default.exitBtn },
                    'Exit'
                ),
                _react2.default.createElement(
                    'div',
                    { className: _styles2.default.header },
                    _react2.default.createElement(
                        'div',
                        { className: _styles2.default.banner },
                        this.props.name
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _styles2.default.bannerAvatar },
                        _react2.default.createElement(_Avatar2.default, { src: '/assets/avatars/' + this.props.courseName + '-avatar.png' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _styles2.default.body },
                    _react2.default.createElement(
                        'div',
                        { className: _styles2.default.chessBoard },
                        _react2.default.createElement(
                            'div',
                            { className: _styles2.default.leftRow },
                            [8, 7, 6, 5, 4, 3, 2, 1].map(function (num) {
                                return _react2.default.createElement(
                                    'div',
                                    { className: _styles2.default.rank },
                                    num
                                );
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _styles2.default.properBoardContainer },
                            _react2.default.createElement(_Chessboard2.default, _extends({}, this.state.config, {
                                boardId: this.props.boardId,
                                solution: this.state.solution,
                                level: this.state.level,
                                switchTurn: this.switchTurn.bind(this),
                                ref: 'chessboard',
                                delay: 200 })),
                            _react2.default.createElement(
                                'div',
                                { className: _styles2.default.bottomRow },
                                ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(function (letter) {
                                    return _react2.default.createElement(
                                        'div',
                                        { className: _styles2.default.file },
                                        letter
                                    );
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _styles2.default.feedback },
                        _react2.default.createElement(_Instructions2.default, { instructions: this.getMessage() }),
                        this.state.gameOver && this.isThereAnotherPuzzle() && _react2.default.createElement(
                            'button',
                            { onClick: this.nextPuzzle,
                                className: _button2.default.primaryBtn + ' ' + _styles2.default.successBtn },
                            'Next puzzle'
                        ),
                        this.state.gameOver && !this.isThereAnotherPuzzle() && _react2.default.createElement(
                            _reactRouterDom.Link,
                            { className: _button2.default.primaryBtn + ' ' + _styles2.default.successBtn,
                                to: this.props.getHomeLink() },
                            'Back to activities'
                        )
                    )
                )
            );
        }
    }, {
        key: 'switchTurn',
        value: function switchTurn(isCorrect, position, sound) {
            if (isCorrect && this.state.level === this.state.solution.length) {
                this.setState(function (prevState) {
                    return {
                        config: Object.assign({}, _config2.default.conf.gameOver, { position: position }),
                        gameOver: true,
                        sound: sound
                    };
                });
                if (this.state.puzzleNumber === this.props.puzzles.length - 1) {
                    this.props.onComplete();
                }
                return;
            }
            var newConf = void 0;

            if (this.state.aiTurn) {
                newConf = _config2.default.conf.hu;
            } else {
                if (isCorrect) {
                    newConf = _config2.default.conf.ai;
                } else {
                    newConf = Object.assign({}, _config2.default.conf.hu, {
                        position: position
                    });
                }
            }

            this.setState(function (prevState) {
                return {
                    config: newConf,
                    aiTurn: isCorrect ? !prevState.aiTurn : prevState.aiTurn,
                    level: prevState.level + (isCorrect ? 1 : 0),
                    rightMove: isCorrect,
                    started: true,
                    sound: sound
                };
            });
        }
    }]);

    return Homework;
}(_react2.default.Component);

exports.default = Homework;

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var maze = {
    conf: {
        hu: {
            draggable: true,
            onDrop: onDrop
        },
        gameOver: {
            draggable: false
        }
    }
};

function onDrop(source, target, piece, newPos, oldPos) {
    var move = source + '-' + target;
    var isCorrect = this.props.solution[this.props.level - 1] === move;
    var sound = '';
    this.setConfig({
        draggable: false
    });
    if (isCorrect) {
        sound = target in oldPos ? 'capture' : 'normal';
    }
    this.props.switchTurn(isCorrect, this.board.fen(), sound);
}

exports.default = maze;

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _Avatar = __webpack_require__(72);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Chessboard = __webpack_require__(70);

var _Chessboard2 = _interopRequireDefault(_Chessboard);

var _ChessmoveSound = __webpack_require__(92);

var _ChessmoveSound2 = _interopRequireDefault(_ChessmoveSound);

var _Instructions = __webpack_require__(71);

var _Instructions2 = _interopRequireDefault(_Instructions);

var _config = __webpack_require__(559);

var _config2 = _interopRequireDefault(_config);

var _styles = __webpack_require__(79);

var _styles2 = _interopRequireDefault(_styles);

var _button = __webpack_require__(44);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Maze = function (_React$Component) {
  _inherits(Maze, _React$Component);

  function Maze(props) {
    _classCallCheck(this, Maze);

    var _this = _possibleConstructorReturn(this, (Maze.__proto__ || Object.getPrototypeOf(Maze)).call(this, props));

    _this.getMessage = function () {
      if (_this.state.gameOver) {
        return 'Puzzle Solved!';
      }

      if (!_this.state.started) {
        return _this.props.instructions;
      }

      if (_this.state.rightMove) {
        return 'Best move! Keep going...';
      } else {
        return 'Wrong move! Try again';
      }
    };

    _this.state = {
      config: Object.assign({}, _config2.default.conf.hu, {
        position: _this.props.position
      }),
      solution: _this.props.solution,
      level: 1,
      started: false,
      gameOver: false,
      rightMove: false,
      instructions: _this.props.instructions,
      sound: ''
    };
    return _this;
  }

  _createClass(Maze, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.boardContainer },
        _react2.default.createElement(_ChessmoveSound2.default, { key: Date.now(), type: this.state.sound }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: this.props.getHomeLink(),
            className: _button2.default.primaryBtn + ' ' + _styles2.default.exitBtn },
          'Exit'
        ),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.header },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.banner },
            this.props.name
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.bannerAvatar },
            _react2.default.createElement(_Avatar2.default, { src: '/assets/avatars/' + this.props.courseName + '-avatar.png' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.body },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.chessBoard },
            _react2.default.createElement(
              'div',
              { className: _styles2.default.leftRow },
              [8, 7, 6, 5, 4, 3, 2, 1].map(function (num) {
                return _react2.default.createElement(
                  'div',
                  { className: _styles2.default.rank },
                  num
                );
              })
            ),
            _react2.default.createElement(
              'div',
              { className: _styles2.default.properBoardContainer },
              _react2.default.createElement(_Chessboard2.default, _extends({}, this.state.config, {
                boardId: this.props.boardId,
                solution: this.state.solution,
                level: this.state.level,
                switchTurn: this.switchTurn.bind(this),
                delay: 200 })),
              _react2.default.createElement(
                'div',
                { className: _styles2.default.bottomRow },
                ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(function (letter) {
                  return _react2.default.createElement(
                    'div',
                    { className: _styles2.default.file },
                    letter
                  );
                })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.feedback },
            _react2.default.createElement(_Instructions2.default, { instructions: this.getMessage() }),
            this.state.gameOver && _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _button2.default.primaryBtn + ' ' + _styles2.default.successBtn,
                to: this.props.getHomeLink() },
              'Back to activities'
            )
          )
        )
      );
    }
  }, {
    key: 'switchTurn',
    value: function switchTurn(isCorrect, position, sound) {
      if (isCorrect && this.state.level === this.state.solution.length) {
        this.props.onComplete();
        this.setState(function (prevState) {
          return {
            config: _config2.default.conf.gameOver,
            gameOver: true,
            sound: sound
          };
        });
        return;
      }

      var newConf = _config2.default.conf.hu;
      if (!isCorrect) {
        newConf = Object.assign({}, _config2.default.conf.hu, {
          position: position
        });
      }

      this.setState(function (prevState) {
        return {
          config: newConf,
          level: prevState.level + (isCorrect ? 1 : 0),
          rightMove: isCorrect,
          started: true,
          sound: sound
        };
      });
    }
  }]);

  return Maze;
}(_react2.default.Component);

exports.default = Maze;

/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseMoves = parseMoves;
/*
* specifically, take a verbose history array from chessjs and convert it
* into an array of move ojects suitable for movelist component
*/
function parseMoves(history) {
    var startIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var blackFirst = 0;
    return history.reduce(function (moves, move, idx, hist) {
        if (idx === 0 && move.color === 'b') {
            moves.push({
                num: startIdx,
                b: move.san
            });
            blackFirst = 1;
        } else if (move.color === 'w') {
            var b = hist[idx + 1] || {};
            moves.push({
                num: (idx - blackFirst) / 2 + startIdx,
                w: move.san,
                b: b.san
            });
        }
        return moves;
    }, []);
};

/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var position = '8/k7/1qb5/b7/8/8/8/8 b - - 0 40';
var artifacts = 'b - - 0 40';
var instructions = 'Rules: Capture and eliminate all but one piece\nusing only moves allowed in traditional chess. You must capture a\npiece with every move.';

var solitaire = {
    artifacts: artifacts,
    position: position,
    instructions: instructions,
    conf: {
        gameOver: {
            draggable: false
        },
        hu: {
            draggable: true,
            onDrop: onDrop,
            onSnapEnd: onSnapEnd
        }
    }
};

function onDrop(source, target) {
    var options = {
        legal: false,
        them: this.props.color,
        us: this.props.color
    };
    var pieceSquares = this.board.position();
    var isSolved = void 0;
    var move = void 0;

    if (!(target in pieceSquares)) {
        return 'snapback';
    }

    move = this.props.game.move({
        from: source,
        to: target
    }, options);

    isSolved = move && Object.keys(pieceSquares).length === 2;
    setTimeout(this.props.switchTurn.bind(null, isSolved), 200);
}

function onSnapEnd() {
    this.board.position(this.props.game.fen());
}

exports.default = solitaire;

/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _chess = __webpack_require__(257);

var _chess2 = _interopRequireDefault(_chess);

var _reactRouterDom = __webpack_require__(14);

var _Avatar = __webpack_require__(72);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Chessboard = __webpack_require__(70);

var _Chessboard2 = _interopRequireDefault(_Chessboard);

var _Instructions = __webpack_require__(71);

var _Instructions2 = _interopRequireDefault(_Instructions);

var _config = __webpack_require__(562);

var _config2 = _interopRequireDefault(_config);

var _solitaire = __webpack_require__(687);

var _solitaire2 = _interopRequireDefault(_solitaire);

var _styles = __webpack_require__(79);

var _styles2 = _interopRequireDefault(_styles);

var _button = __webpack_require__(44);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Solitaire = function (_React$Component) {
  _inherits(Solitaire, _React$Component);

  function Solitaire(props) {
    _classCallCheck(this, Solitaire);

    var _this = _possibleConstructorReturn(this, (Solitaire.__proto__ || Object.getPrototypeOf(Solitaire)).call(this, props));

    _initialiseProps.call(_this);

    var conf = _config2.default.conf.gameOver;
    _this.state = {
      config: Object.assign({}, conf, {
        position: _this.props.position
      }),
      started: false,
      gameOver: false,
      instructions: _config2.default.instructions
    };
    return _this;
  }

  _createClass(Solitaire, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.boardContainer },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: this.props.getHomeLink(),
            className: _button2.default.primaryBtn + ' ' + _styles2.default.exitBtn },
          'Exit'
        ),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.header },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.banner },
            this.props.name
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.bannerAvatar },
            _react2.default.createElement(_Avatar2.default, { src: '/assets/avatars/' + this.props.courseName + '-avatar.png' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.body },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.chessBoard },
            _react2.default.createElement(
              'div',
              { className: _styles2.default.leftRow },
              [8, 7, 6, 5, 4, 3, 2, 1].map(function (num) {
                return _react2.default.createElement(
                  'div',
                  { className: _styles2.default.rank },
                  num
                );
              })
            ),
            _react2.default.createElement(
              'div',
              { className: _styles2.default.properBoardContainer },
              _react2.default.createElement(
                'div',
                { style: { width: '446px', height: '446px', overflow: 'hidden' } },
                _react2.default.createElement(_Chessboard2.default, _extends({}, this.state.config, {
                  boardId: this.props.boardId,
                  boardContainer: _solitaire2.default.solitaireBoard,
                  game: this.state.game,
                  switchTurn: this.switchTurn,
                  color: this.props.color }))
              ),
              _react2.default.createElement(
                'div',
                { className: _styles2.default.bottomRow },
                ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(function (letter) {
                  return _react2.default.createElement(
                    'div',
                    { className: _styles2.default.file },
                    letter
                  );
                })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.feedback },
            _react2.default.createElement(_Instructions2.default, { instructions: this.state.instructions }),
            !this.state.gameOver && _react2.default.createElement(
              'button',
              { className: _button2.default.primaryBtn + ' ' + _styles2.default.successBtn,
                type: 'button', onClick: this.startGame },
              this.state.started ? 'Restart' : 'Start'
            ),
            this.state.gameOver && _react2.default.createElement(
              _reactRouterDom.Link,
              { className: _button2.default.primaryBtn + ' ' + _styles2.default.successBtn,
                to: this.props.getHomeLink() },
              'Back to activities'
            )
          )
        )
      );
    }
  }]);

  return Solitaire;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.startGame = function () {
    var conf = _config2.default.conf.hu;
    var game = new _chess2.default(_this2.props.position);
    _this2.setState({
      config: Object.assign({}, conf, {
        position: _this2.props.position
      }),
      started: true,
      instructions: 'Remember, the only legal moves are piece captures!',
      game: game
    });
  };

  this.endGame = function () {
    var conf = _config2.default.conf.gameOver;
    _this2.setState({
      gameOver: true,
      config: conf,
      instructions: 'Puzzle solved!'
    });
    _this2.props.onComplete();
  };

  this.switchTurn = function (isSolved) {
    if (isSolved) {
      _this2.endGame();
      return;
    }

    var position = _this2.state.game.fen().split(' ')[0] + ' ' + _config2.default.artifacts;
    var conf = _config2.default.conf.hu;

    _this2.setState({
      config: conf,
      game: new _chess2.default(position)
    });
  };
};

;

Solitaire.propTypes = {
  color: _react.PropTypes.string,
  position: _react.PropTypes.string
};

Solitaire.defaultProps = {
  color: 'w',
  position: _config2.default.position
};

exports.default = Solitaire;

/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMove = getMove;
exports.getScore = getScore;
//const enginePath = './src/lib/stockfish.js';
var enginePath = '/build/stockfish.js';
var engine = new Worker(enginePath);

var defaults = {
    //'Contempt': 0,
    //'Skill Level': 0,
    //'Skill Level Maximum Error': 100,
    //'King Safety': 100,
    //'Space': 100
};

var initialized = false;

function getMove(fen) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults;

    return init().then(function () {
        return new Promise(function (resolve) {
            engine.onmessage = function (_ref) {
                var data = _ref.data;

                if (data.indexOf('bestmove') > -1) {
                    resolve(data.split(' ')[1]);
                }
            };
            setOptions(options);
            send('position fen ' + fen);
            send('go movetime 1000');
        });
    });
}

function getScore(fen) {
    return init().then(function () {
        return new Promise(function (resolve) {
            engine.onmessage = function (_ref2) {
                var data = _ref2.data;

                if (data.indexOf('Evaluation') > -1) {
                    resolve(data.split(' ')[2]);
                }
            };
            send('position fen ' + fen);
            send('eval');
        });
    });
}

function init() {
    return initialized ? Promise.resolve('uciok') : new Promise(function (resolve) {
        engine.onmessage = function (_ref3) {
            var data = _ref3.data;

            if (data === 'uciok') {
                initialized = true;
                resolve(data);
            }
        };
        send('uci');
    });
}

function setOptions(options) {
    Object.keys(options).forEach(function (option) {
        send('setoption name ' + option + ' value ' + options[option]);
    });
}

function send(str) {
    engine.postMessage(str);
}

/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = __webpack_require__(35);

var _TextField2 = _interopRequireDefault(_TextField);

var _error = __webpack_require__(48);

var _form = __webpack_require__(39);

var _form2 = _interopRequireDefault(_form);

var _layout = __webpack_require__(59);

var _layout2 = _interopRequireDefault(_layout);

var _validation = __webpack_require__(277);

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForgotPassword = function (_React$Component) {
  _inherits(ForgotPassword, _React$Component);

  function ForgotPassword(props) {
    _classCallCheck(this, ForgotPassword);

    var _this = _possibleConstructorReturn(this, (ForgotPassword.__proto__ || Object.getPrototypeOf(ForgotPassword)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      var username = _this.state.username;

      _this.setState({
        loading: true
      });
      _axios2.default.post('/api/forgot-password', { username: username }).then(function () {
        _this.setState({
          error: '',
          username: '',
          success: 'A password reset link has been sent to your email address.  Please check your email and follow the instructions to reset your password.'
        });
      }).catch(function (error) {
        _this.setState({
          loading: false,
          success: '',
          error: (0, _error.getErrorMessage)(error) || 'Could not send password reset link.  Please contact info@chesswithmrs.com for assistance'
        });
      });
    };

    _this.handleUserNameChange = function (event) {
      _this.setState({
        username: event.target.value
      });
    };

    _this.state = {
      error: '',
      username: '',
      success: '',
      loading: false
    };
    return _this;
  }

  _createClass(ForgotPassword, [{
    key: 'render',
    value: function render() {
      var hideAutoFillColorStyle = {
        WebkitBoxShadow: '0 0 0 1000px white inset'
      };
      var hintStyle = {
        zIndex: '1',
        pointerEvents: 'none'
      };
      return _react2.default.createElement(
        'div',
        { style: { padding: '50px' } },
        _react2.default.createElement(
          'form',
          { style: { width: '400px', fontSize: '16px' },
            onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'h1',
            null,
            'Forgot Password'
          ),
          this.state.error && _react2.default.createElement(
            'p',
            { className: _validation2.default.requestError },
            this.state.error
          ),
          this.state.success && _react2.default.createElement(
            'p',
            { className: _validation2.default.requestSuccess },
            this.state.success
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, { hintText: 'Enter your username',
              type: 'text',
              required: true,
              value: this.state.username,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              onChange: this.handleUserNameChange })
          ),
          _react2.default.createElement(_RaisedButton2.default, { type: 'submit',
            primary: true,
            disabled: this.state.loading,
            label: 'Submit' })
        )
      );
    }
  }]);

  return ForgotPassword;
}(_react2.default.Component);

exports.default = ForgotPassword;

/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LocationMap = __webpack_require__(241);

var _LocationMap2 = _interopRequireDefault(_LocationMap);

var _styles = __webpack_require__(691);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiKey = 'AIzaSyB9fW7cIm3FfJzJ8ozLGc1gp0xnDtICNi8';
var googleMapURL = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&v=3.exp&libraries=geometry,drawing,places';

exports.default = function (props) {
  return _react2.default.createElement(
    'section',
    { className: _styles2.default.location },
    _react2.default.createElement(
      'section',
      { className: _styles2.default.info },
      _react2.default.createElement(
        'h3',
        null,
        props.name
      ),
      _react2.default.createElement(
        'p',
        null,
        props.address
      ),
      _react2.default.createElement(
        'p',
        null,
        props.city + ', ' + props.province
      ),
      _react2.default.createElement(
        'p',
        null,
        props.postalCode
      )
    ),
    _react2.default.createElement(
      'section',
      { className: _styles2.default.gMap },
      _react2.default.createElement(_LocationMap2.default, { isMarkerShown: true,
        lat: props.lat,
        lng: props.lng,
        defaultZoom: 15,
        loadingElement: _react2.default.createElement('div', { style: { height: '100%' } }),
        containerElement: _react2.default.createElement('div', { style: { height: '400px' } }),
        mapElement: _react2.default.createElement('div', { style: { height: '100%' } }),
        googleMapURL: googleMapURL
      })
    )
  );
};

/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(14);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = __webpack_require__(35);

var _TextField2 = _interopRequireDefault(_TextField);

var _error = __webpack_require__(48);

var _form = __webpack_require__(39);

var _form2 = _interopRequireDefault(_form);

var _layout = __webpack_require__(59);

var _layout2 = _interopRequireDefault(_layout);

var _validation = __webpack_require__(277);

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResetPassword = function (_React$Component) {
  _inherits(ResetPassword, _React$Component);

  function ResetPassword(props) {
    _classCallCheck(this, ResetPassword);

    var _this = _possibleConstructorReturn(this, (ResetPassword.__proto__ || Object.getPrototypeOf(ResetPassword)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      if (_this.state.password !== _this.state.confirmPassword) {
        _this.setState({
          success: '',
          error: 'Password and confirm password are not matching',
          confirmPassword: ''
        });
        return;
      }
      _this.setState({
        loading: true
      });
      return _axios2.default.post('/api/reset-password', {
        id: _this.state.id,
        password: _this.state.password
      }).then(function () {
        _this.setState({
          success: 'Your password has been successfully updated',
          error: ''
        });
      }).catch(function (err) {
        _this.setState({
          error: (0, _error.getErrorMessage)(err) || 'Could not reset your password.  Please try again or contact\n          info@chesswithmrs.com for assistance',
          success: '',
          password: '',
          confirmPassword: '',
          loading: false
        });
      });
    };

    _this.handlePasswordChange = function (event) {
      _this.setState({
        password: event.target.value
      });
    };

    _this.handleConfirmPasswordChange = function (event) {
      _this.setState({
        confirmPassword: event.target.value
      });
    };

    _this.state = {
      error: '',
      success: '',
      password: '',
      confirmPassword: '',
      id: _this.props.match.params.id,
      loading: false,
      invalid: false
    };
    return _this;
  }

  _createClass(ResetPassword, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('/api/reset-password/' + this.state.id).catch(function (err) {
        _this2.setState({
          error: 'This password reset link is either invalid or expired.\n            Click on the button below to try again',
          loading: true,
          invalid: true
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var hideAutoFillColorStyle = {
        WebkitBoxShadow: '0 0 0 1000px white inset'
      };
      var hintStyle = {
        zIndex: '1',
        pointerEvents: 'none'
      };
      if (this.state.invalid) {
        return _react2.default.createElement(
          'div',
          { style: { width: '400px', fontSize: '16px', padding: '50px' } },
          _react2.default.createElement(
            'p',
            null,
            this.state.error
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/forgot-password' },
            'Forgot password'
          )
        );
      }
      return _react2.default.createElement(
        'div',
        { style: { padding: '50px' } },
        _react2.default.createElement(
          'form',
          { style: { width: '400px', fontSize: '16px' },
            onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'h1',
            null,
            'Reset Password'
          ),
          this.state.error && _react2.default.createElement(
            'p',
            { className: _validation2.default.requestError },
            this.state.error
          ),
          this.state.success && _react2.default.createElement(
            'p',
            { className: _validation2.default.requestSuccess },
            this.state.success
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, { hintText: 'Enter your password',
              type: 'password',
              required: true,
              value: this.state.password,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              onChange: this.handlePasswordChange })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, { hintText: 'Confirm your password',
              type: 'password',
              required: true,
              value: this.state.confirmPassword,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              onChange: this.handleConfirmPasswordChange })
          ),
          _react2.default.createElement(_RaisedButton2.default, { type: 'submit',
            primary: true,
            disabled: this.state.loading,
            label: 'Submit' })
        )
      );
    }
  }]);

  return ResetPassword;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(ResetPassword);

/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      null,
      props.name
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'span',
      null,
      props.address
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'span',
      null,
      props.phone
    )
  );
};

/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      props.lastName + ', ' + props.firstName
    )
  );
};

/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _session = __webpack_require__(571);

var _session2 = _interopRequireDefault(_session);

var _user = __webpack_require__(572);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  session: _session2.default,
  user: _user2.default
};

/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(112);

var INITIAL_STATE = {
  checkingSession: true,
  hasSession: false,
  sessionError: '',
  sessionType: ''
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _types.SESSION_START:
      return {
        checkingSession: false,
        hasSession: true,
        sessionError: '',
        sessionType: action.payload
      };
    case _types.SESSION_END:
      return {
        checkingSession: false,
        hasSession: false,
        sessionError: '',
        sessionType: ''
      };
    case _types.SESSION_START_FAILED:
      return {
        checkingSession: false,
        hasSession: false,
        sessionError: action.payload,
        sessionType: ''
      };
  }
  return state;
};

/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(112);

var INITIAL_STATE = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _types.SET_USER:
      return Object.assign({}, state, action.payload);
    case _types.CLEAR_USER:
      return {};
  }
  return state;
};

/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var capitalize = exports.capitalize = function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _store = __webpack_require__(516);

var _store2 = _interopRequireDefault(_store);

var _App = __webpack_require__(515);

var _App2 = _interopRequireDefault(_App);

var _session = __webpack_require__(69);

var _reactTapEventPlugin = __webpack_require__(519);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MuiThemeProvider = __webpack_require__(518);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(227);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

__webpack_require__(521);

__webpack_require__(522);

__webpack_require__(517);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.__forceSmoothScrollPolyfill__ = true;
__webpack_require__(520).polyfill();

var muiTheme = (0, _getMuiTheme2.default)({
  fontFamily: 'Nunito, sans-serif',
  palette: {
    primary1Color: '#007ec6',
    primary2Color: '#007ec6',
    secondary1Color: '#2c3e50'
  }
});

(0, _reactTapEventPlugin2.default)();
_store2.default.dispatch((0, _session.checkSession)());

_reactDom2.default.render(_react2.default.createElement(
  _MuiThemeProvider2.default,
  { muiTheme: muiTheme },
  _react2.default.createElement(_App2.default, { store: _store2.default })
), document.getElementById('root'));

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _session = __webpack_require__(69);

var _Login = __webpack_require__(242);

var _Login2 = _interopRequireDefault(_Login);

var _styles = __webpack_require__(693);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminLogin = function (_React$Component) {
  _inherits(AdminLogin, _React$Component);

  function AdminLogin(props) {
    _classCallCheck(this, AdminLogin);

    var _this = _possibleConstructorReturn(this, (AdminLogin.__proto__ || Object.getPrototypeOf(AdminLogin)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.props.adminLogin(_this.state.username, _this.state.password);
    };

    _this.handleUserNameChange = function (event) {
      _this.setState({
        username: event.target.value
      });
    };

    _this.handlePasswordChange = function (event) {
      _this.setState({
        password: event.target.value
      });
    };

    _this.state = {
      username: '',
      password: '',
      error: props.error || ''
    };
    return _this;
  }

  _createClass(AdminLogin, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(_extends({}, nextProps));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.adminLogin },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Admin Login'
          ),
          _react2.default.createElement(_Login2.default, _extends({ className: _styles2.default.loginContainer
          }, this.state, { handleUserNameChange: this.handleUserNameChange,
            handlePasswordChange: this.handlePasswordChange,
            handleSubmit: this.handleSubmit }))
        )
      );
    }
  }]);

  return AdminLogin;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var session = _ref.session;

  return {
    error: session.sessionError
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { adminLogin: _session.adminLogin })(AdminLogin);

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__(161);

var _button2 = _interopRequireDefault(_button);

var _styles = __webpack_require__(695);

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = __webpack_require__(99);

var _styles4 = _interopRequireDefault(_styles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var history = _ref.history;
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.campSection + ' campSection' },
    _react2.default.createElement('div', { className: _styles2.default.halo }),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.container + ' ' + _styles4.default.container },
      _react2.default.createElement(
        'div',
        { className: _styles2.default.portrait },
        _react2.default.createElement('div', { className: _styles2.default.circle + ' circle' })
      ),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.info + ' info' },
        _react2.default.createElement(
          'h2',
          null,
          'Summer camp fills up fast. Get in before the popsicles melt!'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Register for summer camp now to take advantage of our early bird pricing. Summer camp is a week of chess instruction, tournaments, outdoor activities, friendship and happy memories.'
        ),
        _react2.default.createElement(_button2.default, { label: 'Sign up',
          style: { margin: '0' },
          handleOnClick: function handleOnClick() {
            return history.push('/register');
          } })
      )
    )
  );
};

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(696);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'svg',
    { width: '50px', height: '50px',
      viewBox: '0 0 100 100',
      preserveAspectRatio: 'xMidYMid',
      style: { background: "none" } },
    _react2.default.createElement(
      'circle',
      { cx: '50', cy: '50', fill: 'none', stroke: '#fff',
        strokeWidth: '10', r: '35',
        strokeDasharray: '164.93361431346415 56.97787143782138',
        transform: 'rotate(227.832 50 50)' },
      _react2.default.createElement('animateTransform', { attributeName: 'transform',
        type: 'rotate', calcMode: 'linear',
        values: '0 50 50;360 50 50',
        keyTimes: '0;1', dur: '1s', begin: '0s',
        repeatCount: 'indefinite' })
    )
  );
};

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _loader = __webpack_require__(577);

var _loader2 = _interopRequireDefault(_loader);

var _styles = __webpack_require__(697);

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = __webpack_require__(99);

var _styles4 = _interopRequireDefault(_styles3);

var _button = __webpack_require__(44);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactInput = function ContactInput(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'text' : _ref$type,
      handleChange = _ref.handleChange,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? '' : _ref$placeholder,
      disabled = _ref.disabled;
  return _react2.default.createElement('input', { style: { fontFamily: 'Nunito' },
    value: value, disabled: disabled,
    required: true, type: type, onChange: handleChange,
    placeholder: placeholder });
};

var ContactMessage = function ContactMessage(_ref2) {
  var _ref2$value = _ref2.value,
      value = _ref2$value === undefined ? '' : _ref2$value,
      handleChange = _ref2.handleChange,
      disabled = _ref2.disabled;
  return _react2.default.createElement('textarea', { value: value, disabled: disabled,
    required: true, rows: '10', onChange: handleChange });
};

var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, Contact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Contact.__proto__ || Object.getPrototypeOf(Contact)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
      name: '',
      email: '',
      message: '',
      success: '',
      error: '',
      isLoading: false
    }, _this.handleSubmit = function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          name = _this$state.name,
          email = _this$state.email,
          message = _this$state.message;

      _this.setState({
        isLoading: true
      }, function () {
        _axios2.default.post('/api/inquiry', {
          name: name, email: email, subject: '', message: message
        }).then(function (response) {
          _this.setState({
            name: '',
            email: '',
            message: '',
            isLoading: false,
            success: 'Your message has been delivered!'
          });
        }).catch(function (err) {
          _this.setState({
            success: '',
            isLoading: false,
            error: 'Your message could not be delivered'
          });
        });
      });
    }, _this.handleChange = function (key, value) {
      _this.setState(_defineProperty({}, key, value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Contact, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          name = _state.name,
          email = _state.email,
          message = _state.message,
          success = _state.success,
          error = _state.error,
          isLoading = _state.isLoading;

      return _react2.default.createElement(
        'div',
        { className: _styles2.default.contactSection },
        _react2.default.createElement('span', { id: 'contactus', style: { position: 'relative', top: '-90px' } }),
        _react2.default.createElement(
          'div',
          { className: _styles4.default.headerSm },
          _react2.default.createElement(
            'h3',
            null,
            'Contact Us'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.container + ' ' + _styles4.default.container },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.contact },
            _react2.default.createElement(
              'form',
              { onSubmit: this.handleSubmit },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Name'
                ),
                _react2.default.createElement(ContactInput, { label: 'Name',
                  disabled: isLoading,
                  handleChange: function handleChange(event) {
                    return _this2.handleChange('name', event.target.value);
                  },
                  value: name
                })
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Email'
                ),
                _react2.default.createElement(ContactInput, {
                  disabled: isLoading,
                  handleChange: function handleChange(event) {
                    return _this2.handleChange('email', event.target.value);
                  },
                  type: 'email',
                  value: email
                })
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Message'
                ),
                _react2.default.createElement(ContactMessage, {
                  disabled: isLoading,
                  handleChange: function handleChange(event) {
                    return _this2.handleChange('message', event.target.value);
                  },
                  value: message
                })
              ),
              _react2.default.createElement(
                'button',
                { className: _button2.default.primaryBtn,
                  style: {
                    minWidth: '20%',
                    fontFamily: 'Nunito',
                    cursor: 'pointer',
                    borderRadius: 0
                  },
                  disabled: isLoading },
                isLoading && _react2.default.createElement(_loader2.default, null),
                !isLoading && 'Submit'
              )
            ),
            error && _react2.default.createElement(
              'p',
              null,
              error
            ),
            success && _react2.default.createElement(
              'p',
              null,
              success
            ),
            !success && !error && _react2.default.createElement(
              'p',
              null,
              '\xA0'
            ),
            _react2.default.createElement(
              'p',
              null,
              '5809 Yonge St. North York, ON'
            ),
            _react2.default.createElement(
              'p',
              null,
              'T:\xA0416.456.1599'
            ),
            _react2.default.createElement(
              'p',
              null,
              'E:\xA0info@chesswithmrs.com'
            )
          )
        )
      );
    }
  }]);

  return Contact;
}(_react2.default.Component);

exports.default = Contact;

/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__(161);

var _button2 = _interopRequireDefault(_button);

var _styles = __webpack_require__(698);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var history = _ref.history;
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.flyer },
    _react2.default.createElement('img', { className: _styles2.default.imgLeft, src: 'assets/lander/flyer-bg.png' }),
    _react2.default.createElement('img', { className: _styles2.default.imgRight, src: 'assets/lander/flyer-bg.png' }),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.introContainer },
      _react2.default.createElement('img', { id: 'logo', className: _styles2.default.introLogo + ' intro-logo',
        src: 'assets/lander/logo.png', alt: 'gaming-logo' }),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.signalling + ' signalling' },
        _react2.default.createElement(
          'h2',
          null,
          'Our mission'
        ),
        _react2.default.createElement(
          'p',
          null,
          ' Equip children across the Greater Toronto Area with logical, mathematical and emotional skills that will aid them throughout life.  We do this by teaching them a game that has been played, studied and appreciated for centuries.'
        ),
        _react2.default.createElement(_button2.default, { label: 'Register now', handleOnClick: function handleOnClick() {
            return history.push('/register');
          } })
      )
    )
  );
};

/***/ }),
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var firstRowPhotos = [{
  imgSrc: '/assets/lander/bday.jpg',
  caption: 'Happy birthday Chess with Mr. S!'
}, {
  imgSrc: '/assets/lander/champions.jpg',
  caption: 'A new generation of champs',
  isSmall: true
}, {
  imgSrc: '/assets/lander/notation.jpg',
  caption: 'Recording game for future analysis',
  isSmall: true
}];

var secondRowPhotos = [{
  imgSrc: '/assets/lander/fun.jpg',
  caption: 'A perfect day at summer chess camp!'
}, {
  imgSrc: '/assets/lander/mentoring.jpg',
  caption: 'Concentration is key to victory'
}];

var thirdRowPhotos = [{
  imgSrc: '/assets/lander/concentration.jpg',
  caption: 'Competition teaches good sportsmanship',
  isSmall: true
}, {
  imgSrc: '/assets/lander/focus.jpg',
  caption: 'Engaged kids participate and challenge themselves',
  isSmall: true
}, {
  imgSrc: '/assets/lander/participation.jpg',
  caption: 'Chess is cool!'
}];

var rows = exports.rows = ['firstRow', 'secondRow', 'thirdRow'];

var photos = exports.photos = [firstRowPhotos, secondRowPhotos, thirdRowPhotos];

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(580);

var _styles = __webpack_require__(699);

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = __webpack_require__(99);

var _styles4 = _interopRequireDefault(_styles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GalleryCell = function GalleryCell(_ref) {
  var idx = _ref.idx,
      caption = _ref.caption,
      imgSrc = _ref.imgSrc,
      isSmall = _ref.isSmall;
  return _react2.default.createElement(
    'div',
    { className: _styles2.default['cell' + idx] },
    _react2.default.createElement(
      'div',
      { style: { width: '100%', height: '100%' } },
      _react2.default.createElement('div', { className: _styles2.default.photo,
        style: { backgroundImage: 'url(' + imgSrc + ')' } }),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.photoCaption + ' ' + (isSmall ? _styles2.default.sm : '') },
        caption
      )
    )
  );
};

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.gallerySection },
    _react2.default.createElement(
      'div',
      { className: _styles4.default.headerSm },
      _react2.default.createElement(
        'h3',
        null,
        'Learning and Having Fun'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.container + ' ' + _styles4.default.container },
      _react2.default.createElement(
        'div',
        { className: _styles2.default.gallery },
        _constants.rows.map(function (row, idx) {
          return _react2.default.createElement(
            'div',
            { className: _styles2.default.row + ' ' + _styles2.default[row] },
            _react2.default.createElement(
              'div',
              null,
              _constants.photos[idx].map(function (photo, j) {
                return _react2.default.createElement(GalleryCell, _extends({ key: 'row' + idx + '_' + j,
                  idx: j + 1 }, photo));
              })
            )
          );
        })
      )
    )
  );
};

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__(161);

var _button2 = _interopRequireDefault(_button);

var _styles = __webpack_require__(700);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var history = _ref.history;
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.heroSection },
    _react2.default.createElement('div', { className: _styles2.default.bg }),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.video },
      _react2.default.createElement(
        'video',
        { loop: true, autoPlay: true, muted: true },
        _react2.default.createElement('source', { type: 'video/mp4', src: '/assets/lander/banner.mov' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.info },
      _react2.default.createElement(
        'div',
        { style: { opacity: '0.6', width: '40%', margin: 'auto' } },
        _react2.default.createElement('img', { src: '/assets/shield.png', style: { width: '100%' } })
      ),
      _react2.default.createElement(
        'h1',
        null,
        'Chess with Mr. S'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Learn to succeed in the game of life'
      ),
      _react2.default.createElement(_button2.default, { label: 'Register now',
        style: { margin: 'auto' },
        handleOnClick: function handleOnClick() {
          return history.push('/register');
        } })
    )
  );
};

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var teachers = exports.teachers = [{
  name: 'Mr. S',
  alias: 'Charismatic, Confidence builder',
  imgSrc: '/assets/lander/team/misters.jpg',
  placeholder: 'k',
  description: 'Arash Shahi, more popularly known as\n    Mr. S, is the founder and Executive Director of\n    Chess with Mr. S Inc. (CWMS). With over 18 years\n    of experience in teaching chess, Mr. S began CWMS\n    with the goal of teaching life skills through the\n    game of chess.'
}, {
  name: 'Mr. Youri',
  alias: 'Strategic, Patient, Uplifting',
  imgSrc: '/assets/lander/team/youri.jpg',
  placeholder: 'h',
  description: 'Widely considered Canada\'s best\n  private coach, Mr. Youri\n  brings an enormous wealth of experience and\n  expertise to every student he teaches.\n  Youri has personally taught numerous\n  accomplished players, including Canada\'s\n  youngest Grandmaster ever.'
}, {
  name: 'Mr. B',
  alias: 'Tactical, Engaging, Lively',
  imgSrc: '/assets/lander/team/misterb.jpg',
  placeholder: 'q',
  description: 'An avid player of over 40 years,\n  with more than 15 years of teaching experience,\n  Mr. B is a favourite among students of all levels.'
}, {
  name: 'Mr. Septi',
  alias: 'Passionate, Understanding',
  imgSrc: '/assets/lander/team/septi.jpg',
  placeholder: 'n',
  description: 'With over 10 years of teaching experience,\n  Mr. Septi teaches through games and puzzles. His approach of\n  allows students to gradually build their confidence and participate actively.'
}, {
  name: 'Mr. Devon',
  alias: 'Witty, Funny, Memory Expert',
  imgSrc: '/assets/lander/team/devon.jpg',
  placeholder: 'r',
  description: 'Mr. Devon is a chess enthusiast,\n  playwright and comedian. Having 8 years of experience\n  teaching chess, Mr. Devon brings a humorous and\n  understanding approach to teaching chess.'
}, {
  name: 'Ms. Nikan',
  alias: 'Outgoing, Fun, Public speaker',
  imgSrc: '/assets/lander/team/nikan.jpg',
  placeholder: 'q',
  description: 'As an Ontario Certified Teacher, Ms. Nikan\n    helps younger students at novice and beginner levels.\n    She has helped hundreds of students find their voice and\n    feel more comfortable speaking in front of groups.'
}];

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(583);

var _styles = __webpack_require__(701);

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = __webpack_require__(99);

var _styles4 = _interopRequireDefault(_styles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Teacher = function Teacher(_ref) {
  var name = _ref.name,
      alias = _ref.alias,
      description = _ref.description,
      placeholder = _ref.placeholder,
      imgSrc = _ref.imgSrc;

  return _react2.default.createElement(
    'div',
    { className: _styles2.default.teacher + ' teacher' },
    _react2.default.createElement(
      'div',
      { className: _styles2.default.portrait + ' portrait' },
      _react2.default.createElement(
        'div',
        { className: _styles2.default.square + ' square' },
        placeholder,
        _react2.default.createElement('img', { src: imgSrc })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.bio + ' bio' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'strong',
          null,
          name
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'strong',
          null,
          alias
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        description
      )
    )
  );
};

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.teacherSection },
    _react2.default.createElement(
      'div',
      { className: _styles4.default.headerSm },
      _react2.default.createElement(
        'h3',
        null,
        'The CWMS Team'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.container + ' ' + _styles4.default.container },
      _react2.default.createElement(
        'div',
        { className: _styles2.default.teacherContainer },
        _constants.teachers.map(function (teacher) {
          return _react2.default.createElement(Teacher, _extends({ key: teacher.name }, teacher));
        })
      )
    )
  );
};

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _hero = __webpack_require__(582);

var _hero2 = _interopRequireDefault(_hero);

var _flyer = __webpack_require__(579);

var _flyer2 = _interopRequireDefault(_flyer);

var _team = __webpack_require__(584);

var _team2 = _interopRequireDefault(_team);

var _gallery = __webpack_require__(581);

var _gallery2 = _interopRequireDefault(_gallery);

var _camp = __webpack_require__(576);

var _camp2 = _interopRequireDefault(_camp);

var _contact = __webpack_require__(578);

var _contact2 = _interopRequireDefault(_contact);

var _TweenMax = __webpack_require__(732);

var _EasePack = __webpack_require__(282);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LanderPage = function (_React$Component) {
  _inherits(LanderPage, _React$Component);

  function LanderPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LanderPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LanderPage.__proto__ || Object.getPrototypeOf(LanderPage)).call.apply(_ref, [this].concat(args))), _this), _this._onScroll = function () {
      // this.teachers.forEach((teacher, idx) => {
      //   if (this.firstTeacherTime[idx] && isVisible(teacher)) {
      //     this.firstTeacherTime[idx] = false;
      //     animateTeacher(teacher);
      //   }
      // })
      if (isVisible(_this.introEl) && _this.firstIntroTime) {
        _this.firstIntroTime = false;
        animateIntro();
      }
      if (isVisible(_this.campEl) && _this.firstCampTime) {
        _this.firstCampTime = false;
        animateCamp();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LanderPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var pathname = this.props.location.pathname;

      if (pathname === '/contactus') {
        document.querySelector('#contactus').scrollIntoView({
          block: 'start',
          inline: 'nearest'
        });
      }

      this.teachers = Array.from(document.querySelectorAll('.teacher .portrait'));
      this.introEl = document.querySelector('.intro-logo');
      this.campEl = document.querySelector('.campSection .circle');

      this.firstTeacherTime = this.teachers.map(function (t) {
        return true;
      });
      this.firstIntroTime = true;
      this.firstCampTime = true;

      this.handleScroll = debounce(this._onScroll, 0);
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var history = this.props.history;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_hero2.default, { history: history }),
        _react2.default.createElement(_flyer2.default, { history: history }),
        _react2.default.createElement(_team2.default, null),
        _react2.default.createElement(_gallery2.default, null),
        _react2.default.createElement(_camp2.default, { history: history }),
        _react2.default.createElement(_contact2.default, null)
      );
    }
  }]);

  return LanderPage;
}(_react2.default.Component);

function isVisible(el) {
  var rect = el.getBoundingClientRect();

  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*&& /*or $(window).height() */
  rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  ;
}

function debounce(fn, delay) {
  var id;
  return function () {
    var args = arguments;
    if (id !== undefined) {
      clearTimeout(id);
    }
    id = setTimeout(function () {
      fn.apply({}, args);
    }, delay);
  };
}

function animateIntro() {
  _TweenMax.TweenMax.staggerTo('.signalling > *', 0.5, { delay: 0.3, y: 0, opacity: 1, ease: _EasePack.Back.easeOut }, 0.2);
}

function animateCamp() {
  _TweenMax.TweenMax.to('.campSection .circle', 0.5, { scale: 1, ease: _EasePack.Back.easeOut, onComplete: function onComplete() {
      _TweenMax.TweenMax.to('.campSection .info > *', 0.5, { opacity: 1, y: 0, ease: _EasePack.Back.easeOut }, 0.2);
    } });
}

function animateTeacher(el) {
  var bio = el.parentNode.getElementsByClassName('bio')[0];
  _TweenMax.TweenMax.staggerTo(Array.from(bio.childNodes), 0.5, {
    y: 0,
    opacity: 1,
    ease: _EasePack.Back.easeOut
  }, 0.1);

  flipPortrait(el);

  function flipPortrait(target) {
    if (window.innerWidth < 739) {
      return;
    }
    var el = target.parentNode.getElementsByClassName('portrait')[0].getElementsByClassName('square')[0];
    _TweenMax.TweenMax.to(el, 0.5, { css: { rotationY: 180 }, onStart: fadeInTeacher });
  }
  function fadeInTeacher() {
    var el = this.target.getElementsByTagName('img')[0];
    if (!el) return;
    _TweenMax.TweenMax.to(el, 0.2, { opacity: 1, delay: 0.3 });
  }
}

exports.default = (0, _reactRouterDom.withRouter)(LanderPage);

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _AutoComplete = __webpack_require__(62);

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Currency = __webpack_require__(157);

var _Currency2 = _interopRequireDefault(_Currency);

var _Location = __webpack_require__(566);

var _Location2 = _interopRequireDefault(_Location);

var _CourseTable = __webpack_require__(162);

var _CourseTable2 = _interopRequireDefault(_CourseTable);

var _registration = __webpack_require__(54);

var _data = __webpack_require__(246);

var _form = __webpack_require__(39);

var _form2 = _interopRequireDefault(_form);

var _styles = __webpack_require__(100);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdditionalInfo = function AdditionalInfo(_ref) {
  var header = _ref.header,
      bulletPoints = _ref.bulletPoints;
  return _react2.default.createElement(
    'div',
    { style: { marginBottom: '20px' } },
    _react2.default.createElement(
      'h1',
      { style: { fontSize: '2em', fontWeight: 'bold', border: 'none' } },
      header
    ),
    bulletPoints.map(function (bulletPoint, idx) {
      return _react2.default.createElement(
        'p',
        { style: { fontSize: '18px' }, key: header + '_' + idx },
        bulletPoint
      );
    })
  );
};

var NoCourseMessage = function NoCourseMessage(props) {
  return _react2.default.createElement(
    'div',
    null,
    'No courses found!'
  );
};

var CampSelection = function (_React$Component) {
  _inherits(CampSelection, _React$Component);

  function CampSelection(props) {
    _classCallCheck(this, CampSelection);

    var _this = _possibleConstructorReturn(this, (CampSelection.__proto__ || Object.getPrototypeOf(CampSelection)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.props.registerCourses(_this.state.coursesForSchool.filter(function (school, idx) {
        return _this.state.selectedRows.includes(idx);
      }));
      _this.props.history.push('/register/info');
    };

    _this.handleRowSelect = function (selectedRows) {
      _this.setState({
        selectedRows: selectedRows
      });
    };

    _this.state = {
      schoolName: '',
      schoolId: '',
      coursesForSchool: [],
      selectedRows: [],
      total: 0
    };
    return _this;
  }

  _createClass(CampSelection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._init(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this._init(nextProps);
    }
  }, {
    key: '_init',
    value: function _init(props) {
      var campSchool = props.campSchool || {};
      this.setState({
        campSchool: props.campSchool,
        schoolId: campSchool._id || '',
        schoolName: campSchool.name || '',
        coursesForSchool: campSchool._id ? this.props.camps.filter(function (course) {
          return course.school._id === campSchool._id;
        }) : []
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'form',
        { className: _form2.default.form, onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'div',
          { style: { textAlign: 'center', width: '80%', margin: 'auto' } },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', { src: '/assets/shield.png', alt: 'shield', style: { width: '200px' } })
          ),
          _react2.default.createElement(
            'h1',
            { style: { fontWeight: 'bold', fontSize: '2em', border: 'none' } },
            'CWMS 2019 Summer Camp'
          ),
          _react2.default.createElement(
            'p',
            { style: { fontSize: '36px' } },
            'Register ',
            _react2.default.createElement(
              'strong',
              null,
              'NOW'
            ),
            ' for our Amazing Super Early Bird Price!',
            _react2.default.createElement('br', null),
            _react2.default.createElement(_Currency2.default, { style: { fontSize: '36px' }, cents: 30900 })
          ),
          this.state.campSchool && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              null,
              'Summer camp is to be held at: '
            ),
            _react2.default.createElement(_Location2.default, this.state.campSchool)
          )
        ),
        _react2.default.createElement(AdditionalInfo, { header: 'Camp Refund Policy', bulletPoints: _data.refundPolicy }),
        _react2.default.createElement(AdditionalInfo, { header: 'Additional Info', bulletPoints: _data.additionalInfo }),
        this.state.schoolId && _react2.default.createElement(
          'section',
          { style: { paddingTop: '40px' } },
          _react2.default.createElement(
            'h1',
            { style: { fontWeight: 'bold', fontSize: '2em', border: 'none' } },
            'Available Summer camp packages'
          ),
          this.state.coursesForSchool.length > 0 ? _react2.default.createElement(_CourseTable2.default, { selectedRows: this.state.selectedRows,
            handleRowSelect: this.handleRowSelect,
            courses: this.state.coursesForSchool,
            total: this.state.coursesForSchool.reduce(function (sum, course, idx) {
              return _this2.state.selectedRows.includes(idx) ? sum + course.price : sum;
            }, 0) }) : _react2.default.createElement(NoCourseMessage, null)
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_RaisedButton2.default, {
            disabled: this.state.selectedRows.length < 1,
            primary: true,
            type: 'submit',
            label: 'Next' })
        )
      );
    }
  }]);

  return CampSelection;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var registration = _ref2.registration,
      schools = _ref2.schools,
      camps = _ref2.camps;

  var campSchool = (schools.schools || []).find(function (school) {
    return school.name === 'Sunny Mandarin School';
  });
  return {
    registration: registration,
    campSchool: campSchool,
    camps: camps.camps
  };
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { registerCourses: _registration.registerCourses, setIsCamp: _registration.setIsCamp, flipMode: _registration.flipMode })(CampSelection));

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentCard = exports.PaymentCard = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(913);

var _FlatButton = __webpack_require__(83);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _styles = __webpack_require__(702);

var _styles2 = _interopRequireDefault(_styles);

var _FormattedDate = __webpack_require__(239);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardDetail = function CardDetail(props) {
  return _react2.default.createElement(
    'div',
    { className: 'flex ' + _styles2.default.cardDetail },
    _react2.default.createElement(
      'div',
      { className: _styles2.default.label },
      _react2.default.createElement(
        'strong',
        null,
        props.label + ':'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      props.children || props.value
    )
  );
};

var PaymentCard = exports.PaymentCard = function PaymentCard(props) {
  return _react2.default.createElement(
    _Card.Card,
    null,
    _react2.default.createElement(_Card.CardHeader, { title: 'Payment Details' }),
    _react2.default.createElement(
      _Card.CardText,
      null,
      _react2.default.createElement(CardDetail, { label: 'Brand', value: props.brand }),
      _react2.default.createElement(CardDetail, { label: 'Last 4 Digits', value: '*' + props.last4 }),
      _react2.default.createElement(CardDetail, { label: 'Expiry Month', value: props.expiryMonth }),
      _react2.default.createElement(CardDetail, { label: 'Expiry Year', value: props.expiryYear })
    ),
    _react2.default.createElement(
      _Card.CardActions,
      null,
      _react2.default.createElement(_FlatButton2.default, { label: 'Edit', onClick: props.onEditClick })
    )
  );
};

var StudentCard = exports.StudentCard = function StudentCard(props) {
  var guardian = props.guardians[0];
  return _react2.default.createElement(
    _Card.Card,
    null,
    _react2.default.createElement(_Card.CardHeader, { title: 'Student Details',
      actAsExpander: true,
      showExpandableButton: true }),
    _react2.default.createElement(
      _Card.CardText,
      null,
      _react2.default.createElement(CardDetail, { label: 'Student', value: props.firstName + ' ' + props.lastName }),
      _react2.default.createElement(CardDetail, { label: 'Guardian', value: guardian.firstName + ' ' + guardian.lastName }),
      _react2.default.createElement(CardDetail, { label: 'Email', value: guardian.email }),
      _react2.default.createElement(CardDetail, { label: 'Phone', value: guardian.phone })
    ),
    _react2.default.createElement(
      _Card.CardText,
      { expandable: true },
      _react2.default.createElement(
        CardDetail,
        { label: 'Date of Birth' },
        _react2.default.createElement(_FormattedDate.CalendarDate, { date: props.dateOfBirth || new Date() })
      ),
      _react2.default.createElement(CardDetail, { label: 'Allergies', value: props.allergies }),
      _react2.default.createElement(CardDetail, { label: 'Additional Info', value: props.notes })
    ),
    _react2.default.createElement(
      _Card.CardActions,
      null,
      _react2.default.createElement(_FlatButton2.default, { label: 'Edit', onClick: props.onEditClick })
    )
  );
};

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(14);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _registration = __webpack_require__(54);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FormattedDate = __webpack_require__(239);

var _TimeOfDay = __webpack_require__(114);

var _TimeOfDay2 = _interopRequireDefault(_TimeOfDay);

var _form = __webpack_require__(39);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function ListItem(props) {
  var start = new Date(props.classes[0].startTime);
  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'span',
      null,
      props.school.name
    ),
    '\xA0@\xA0',
    _react2.default.createElement(_FormattedDate.CalendarDate, { date: start }),
    ' ',
    _react2.default.createElement(_TimeOfDay2.default, { date: start, hour12: 'true' })
  );
};

var ConfirmationPage = function (_React$Component) {
  _inherits(ConfirmationPage, _React$Component);

  function ConfirmationPage(props) {
    _classCallCheck(this, ConfirmationPage);

    var _this = _possibleConstructorReturn(this, (ConfirmationPage.__proto__ || Object.getPrototypeOf(ConfirmationPage)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.props.history.replace('/');
    };

    var _this$props$registrat = _this.props.registration,
        student = _this$props$registrat.student,
        courses = _this$props$registrat.courses;

    _this.state = {
      student: student,
      courses: courses
    };
    return _this;
  }

  _createClass(ConfirmationPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var shouldGoBack = !this.props.registration.courses.length || !this.props.registration.student.firstName || !this.props.registration.payment || !this.props.registration.payment.customer;
      if (shouldGoBack) {
        this.props.history.replace('/register');
        return;
      }
      var courses = this.props.registration.courses.map(function (course) {
        var startTime = new Date(course.classes[0].startTime).toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York' });
        var endTime = new Date(course.classes[0].endTime).toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York' });
        var time = startTime + ' - ' + endTime;
        var dates = course.classes.map(function (chessClass) {
          return new Date(chessClass.startTime).toLocaleString('en-US', { month: 'short', day: 'numeric', timeZone: 'America/New_York' });
        });
        return _extends({}, course, {
          time: time,
          dates: dates
        });
      });
      _axios2.default.post('/api/send-registration-email', _extends({}, this.props.registration, {
        courses: courses
      }));
      this.props.clearRegistration();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          student = _state.student,
          courses = _state.courses;

      return _react2.default.createElement(
        'form',
        { className: _form2.default.form,
          style: { fontSize: '16px' },
          onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'h1',
          null,
          'Welcome to Class'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'strong',
            { style: { fontSize: '24px' } },
            student.firstName + ' ' + student.lastName
          ),
          ' is registered for the following courses:'
        ),
        _react2.default.createElement(
          'ul',
          null,
          courses.map(function (course) {
            return _react2.default.createElement(ListItem, course);
          })
        ),
        _react2.default.createElement(
          'p',
          null,
          'An email will be sent to ',
          _react2.default.createElement(
            'span',
            null,
            student.guardians[0].email
          ),
          ' with further details within the next twenty-four hours. We look forward to meeting you at the chess-board!'
        ),
        _react2.default.createElement(_RaisedButton2.default, { type: 'submit', primary: true, label: 'Done' })
      );
    }
  }]);

  return ConfirmationPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var registration = _ref.registration;
  return { registration: registration };
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { clearRegistration: _registration.clearRegistration })(ConfirmationPage));

/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _AutoComplete = __webpack_require__(62);

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _CourseTable = __webpack_require__(162);

var _CourseTable2 = _interopRequireDefault(_CourseTable);

var _registration = __webpack_require__(54);

var _form = __webpack_require__(39);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoCourseMessage = function NoCourseMessage(props) {
  return _react2.default.createElement(
    'div',
    null,
    'There are no courses currently scheduled for your school.',
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'a',
      { href: '/contactus' },
      'Sign up your school for Chess with Mr. S'
    )
  );
};

var schoolFilter = function schoolFilter(searchText, key) {
  return searchText !== '' && key.toLowerCase().indexOf(searchText.toLowerCase()) === 0;
};

var CourseSelection = function (_React$Component) {
  _inherits(CourseSelection, _React$Component);

  function CourseSelection(props) {
    _classCallCheck(this, CourseSelection);

    var _this = _possibleConstructorReturn(this, (CourseSelection.__proto__ || Object.getPrototypeOf(CourseSelection)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.props.registerCourses(_this.state.coursesForSchool.filter(function (school, idx) {
        return _this.state.selectedRows.includes(idx);
      }));
      _this.props.history.push('/register/info');
    };

    _this.handleBlur = function (event) {
      var school = _this.props.schools.find(function (school) {
        return school.name === event.target.value;
      });
      if (!school) {
        _this.setState({
          schoolId: '',
          schoolName: '',
          searchText: '',
          coursesForSchool: [],
          selectedRows: [],
          total: 0,
          schoolError: 'This field is required'
        });
      }
    };

    _this.handleRowSelect = function (selectedRows) {
      _this.setState({
        selectedRows: selectedRows
      });
    };

    _this.state = {
      schoolName: '',
      schoolId: '',
      schoolError: '',
      coursesForSchool: [],
      selectedRows: [],
      total: 0,
      searchText: ''
    };
    return _this;
  }

  _createClass(CourseSelection, [{
    key: 'handleInputChange',
    value: function handleInputChange(searchText) {
      this.setState({
        searchText: searchText
      });
    }
  }, {
    key: 'handleSchoolNameChange',
    value: function handleSchoolNameChange(schoolName) {
      var school = this.props.schools.find(function (school) {
        return school.name === schoolName;
      });
      if (!school) {
        this.setState({
          schoolId: '',
          schoolName: '',
          searchText: ''
        });
      } else {
        this.setState({
          schoolError: '',
          schoolName: schoolName,
          schoolId: school._id,
          coursesForSchool: this.props.courses.filter(function (course) {
            return course.school._id === school._id;
          }),
          selectedCourses: []
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var labelStyle = {
        color: 'rgba(0, 0, 0, 0.7)'
      };
      var menuProps = {
        desktop: true,
        disableAutoFocus: true
      };
      return _react2.default.createElement(
        'form',
        { style: { minHeight: '100vh' }, className: _form2.default.form, onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'div',
          { style: { textAlign: 'center', width: '80%', margin: 'auto' } },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', { src: '/assets/shield.png', alt: 'shield', style: { width: '200px' } })
          ),
          _react2.default.createElement(
            'h1',
            { style: { fontWeight: 'bold', fontSize: '2em', border: 'none' } },
            'CWMS School Programs'
          ),
          _react2.default.createElement(
            'p',
            { style: { fontSize: '18px' } },
            'Type the name of your school into the searchbox below to see a listing of Chess with Mr. S programs at your school. Do not hesitate to',
            _react2.default.createElement(
              'a',
              { href: '/contactus' },
              ' Contact us '
            ),
            ' if you have any questions.'
          )
        ),
        _react2.default.createElement(
          'section',
          { style: { width: '600px' } },
          _react2.default.createElement(_AutoComplete2.default, {
            hintText: 'Enter school name',
            floatingLabelText: 'Find your school',
            filter: schoolFilter,
            dataSource: this.props.schools.map(function (_ref) {
              var name = _ref.name;
              return name;
            }),
            menuProps: menuProps,
            searchText: this.state.searchText,
            errorText: this.state.schoolError,
            onBlur: this.handleBlur,
            onNewRequest: this.handleSchoolNameChange.bind(this),
            onUpdateInput: this.handleInputChange.bind(this),
            maxSearchResults: 5,
            fullWidth: true
          })
        ),
        this.state.schoolId && _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Upcoming Courses for ',
            this.state.schoolName
          ),
          this.state.coursesForSchool.length > 0 ? _react2.default.createElement(_CourseTable2.default, { selectedRows: this.state.selectedRows,
            handleRowSelect: this.handleRowSelect,
            courses: this.state.coursesForSchool,
            total: this.state.coursesForSchool.reduce(function (sum, course, idx) {
              return _this2.state.selectedRows.includes(idx) ? sum + course.price : sum;
            }, 0) }) : _react2.default.createElement(NoCourseMessage, null)
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_RaisedButton2.default, {
            disabled: this.state.selectedRows.length < 1,
            primary: true,
            type: 'submit',
            label: 'Next' })
        )
      );
    }
  }]);

  return CourseSelection;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var registration = _ref2.registration,
      schools = _ref2.schools,
      courses = _ref2.courses;

  return {
    registration: registration,
    schools: schools.schools || [],
    courses: (courses.courses || []).filter(function (_ref3) {
      var afterSchool = _ref3.afterSchool;
      return !afterSchool;
    })
  };
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { registerCourses: _registration.registerCourses, setIsCamp: _registration.setIsCamp, flipMode: _registration.flipMode })(CourseSelection));

/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _form = __webpack_require__(39);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorPage = function ErrorPage(props) {
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    props.history.replace('/register/payment');
  };

  return _react2.default.createElement(
    'form',
    { className: _form2.default.form, onSubmit: handleSubmit },
    _react2.default.createElement(
      'h1',
      null,
      'Error Code: ',
      _react2.default.createElement(
        'strong',
        null,
        props.error.status
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { fontSize: '24px', marginBottom: '20px' } },
      'Unfortunately an error occurred during your registration.  The server message is: ',
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'strong',
          null,
          props.error.message
        )
      ),
      'For help please contact info@chesswithmrs.com.  To try again press the button below.'
    ),
    _react2.default.createElement(_RaisedButton2.default, { type: 'submit', primary: true, label: 'Try Again' })
  );
};

var mapStateToProps = function mapStateToProps(_ref) {
  var registration = _ref.registration;

  return _extends({}, registration);
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {})(ErrorPage));

/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _Tabs = __webpack_require__(332);

var _EveningCourseTable = __webpack_require__(592);

var _EveningCourseTable2 = _interopRequireDefault(_EveningCourseTable);

var _registration = __webpack_require__(54);

var _LocationMap = __webpack_require__(241);

var _LocationMap2 = _interopRequireDefault(_LocationMap);

var _styles = __webpack_require__(100);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var daysOfTheWeekSortOrder = {
  'Saturday': 0,
  'Sunday': 1,
  'Monday': 2,
  'Tuesday': 3,
  'Wednesday': 4,
  'Thursday': 5,
  'Friday': 6
};

var getCourseDay = function getCourseDay(_ref) {
  var classes = _ref.classes;
  return daysOfTheWeek[new Date(classes[0].startTime).getDay()];
};

var CourseGrouping = function CourseGrouping(_ref2) {
  var courses = _ref2.courses,
      handleSignup = _ref2.handleSignup;

  var day = getCourseDay(courses[0]);
  return _react2.default.createElement(
    'div',
    { style: { padding: '20px 0' } },
    _react2.default.createElement(
      'h1',
      null,
      day
    ),
    _react2.default.createElement(
      'div',
      { style: { marginBottom: '20px' } },
      _react2.default.createElement(_EveningCourseTable2.default, { courses: courses, handleSignup: handleSignup })
    ),
    _react2.default.createElement('hr', null)
  );
};

var getSortedCourseKeys = function getSortedCourseKeys(courses) {
  if (!courses || !Object.keys(courses).length) {
    return;
  }
  return Object.keys(courses).sort(customWeekdaySort);
};

var customWeekdaySort = function customWeekdaySort(a, b) {
  return daysOfTheWeekSortOrder[a] - daysOfTheWeekSortOrder[b];
};

var customSortCompare = function customSortCompare(a, b) {
  if (a.soldOut !== b.soldOut) {
    return a.soldOut ? 1 : -1;
  }
  return new Date(a.classes[0].startTime).getTime() - new Date(b.classes[0].startTime).getTime();
};

var EveningCourseSelection = function (_React$Component) {
  _inherits(EveningCourseSelection, _React$Component);

  function EveningCourseSelection(props) {
    _classCallCheck(this, EveningCourseSelection);

    var _this = _possibleConstructorReturn(this, (EveningCourseSelection.__proto__ || Object.getPrototypeOf(EveningCourseSelection)).call(this, props));

    _this.handleTabChange = function (value) {
      _this.setState({ selected: value });
    };

    _this.handleSignup = function (course) {
      _this.props.registerCourses([course]);
      _this.props.history.push('/register/info');
    };

    var courseKeys = getSortedCourseKeys(props.courses);
    _this.state = {
      courseKeys: courseKeys,
      selected: courseKeys ? courseKeys[0].toLowerCase() : ''
    };
    return _this;
  }

  _createClass(EveningCourseSelection, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var prevCourses = prevProps.courses;
      var courses = this.props.courses;

      if (courses && Object.keys(prevCourses).length === 0) {
        var courseKeys = getSortedCourseKeys(courses);
        this.setState({
          courseKeys: courseKeys,
          selected: courseKeys[0].toLowerCase()
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          courseKeys = _state.courseKeys,
          selected = _state.selected;

      console.log('avail width', window.screen.availWidth);
      return _react2.default.createElement(
        'div',
        { style: { width: '80%', margin: 'auto', paddingBottom: '40px' } },
        _react2.default.createElement(
          'div',
          { style: { textAlign: 'center', width: '80%', margin: 'auto' } },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', { src: '/assets/shield.png', alt: 'shield', style: { width: '200px' } })
          ),
          _react2.default.createElement(
            'h1',
            null,
            'CWMS Evening and Weekend Programs'
          ),
          _react2.default.createElement(
            'p',
            { style: { fontSize: '18px' } },
            'Below are a list of Chess with Mr. S evening and weekend classes. Click the Sign up button to register for the program of your choice.  Do not hesitate to',
            _react2.default.createElement(
              'a',
              { href: '/contactus' },
              ' Contact us '
            ),
            ' if you have any questions.'
          )
        ),
        _react2.default.createElement('br', null),
        courseKeys === undefined && _react2.default.createElement(
          'div',
          null,
          'No courses found!'
        ),
        courseKeys !== undefined && _react2.default.createElement(
          _Tabs.Tabs,
          { value: selected,
            onChange: this.handleTabChange },
          courseKeys.map(function (key) {
            return _react2.default.createElement(
              _Tabs.Tab,
              { key: key, label: key.slice(0, 3), value: key.toLowerCase() },
              _react2.default.createElement(CourseGrouping, {
                handleSignup: _this2.handleSignup,
                courses: _this2.props.courses[key].sort(customSortCompare) })
            );
          })
        )
      );
    }
  }]);

  return EveningCourseSelection;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref3) {
  var _ref3$courses = _ref3.courses,
      courses = _ref3$courses === undefined ? {} : _ref3$courses;

  return {
    courses: (courses.courses || []).filter(function (_ref4) {
      var afterSchool = _ref4.afterSchool;
      return afterSchool;
    }).reduce(function (groupBy, course) {
      var day = getCourseDay(course);
      return _extends({}, groupBy, _defineProperty({}, day, groupBy[day] ? groupBy[day].concat(course) : [course]));
    }, {})
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { registerCourses: _registration.registerCourses })(EveningCourseSelection));

/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(141);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Currency = __webpack_require__(157);

var _Currency2 = _interopRequireDefault(_Currency);

var _TimeOfDay = __webpack_require__(114);

var _TimeOfDay2 = _interopRequireDefault(_TimeOfDay);

var _styles = __webpack_require__(100);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var SignupButton = function SignupButton(_ref) {
  var handleOnClick = _ref.handleOnClick;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_RaisedButton2.default, {
      primary: true,
      onClick: handleOnClick,
      label: 'Sign up' })
  );
};

var getSignupColumn = function getSignupColumn(course, handleOnClick) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Currency2.default, { cents: course.price * 100 }),
    course.soldOut ? _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'strong',
        { style: { textTransform: "uppercase", color: "red" } },
        'Sold out'
      )
    ) : _react2.default.createElement(SignupButton, { handleOnClick: handleOnClick })
  );
};

var getClassDate = function getClassDate(chessClass) {
  var startDT = new Date(chessClass.startTime);
  return months[startDT.getMonth()] + ' ' + startDT.getDate();
};

var ClassTime = function ClassTime(props) {
  var startDT = new Date(props.startTime);
  var endDT = new Date(props.endTime);
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_TimeOfDay2.default, { date: startDT }),
    '-',
    _react2.default.createElement(_TimeOfDay2.default, { date: endDT })
  );
};

var pairUp = function pairUp(result, item, idx) {
  if (idx % 2) {
    result[result.length - 1] = result[result.length - 1] + ', ' + getClassDate(item) + (idx !== result.length - 1 ? ',' : '');
  } else {
    result.push(getClassDate(item));
  }
  return result;
};

var Address = function Address(_ref2) {
  var school = _ref2.school;
  var address = school.address,
      mapUrl = school.mapUrl,
      city = school.city,
      province = school.province,
      postalCode = school.postalCode;

  if (mapUrl) {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'a',
        { href: mapUrl, title: 'map', target: '_blank' },
        address
      ),
      _react2.default.createElement(
        'div',
        null,
        city + ' ' + province + ', ' + postalCode
      )
    );
  }
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      address
    ),
    _react2.default.createElement(
      'div',
      null,
      city + ' ' + province + ', ' + postalCode
    )
  );
};

exports.default = function (props) {
  return _react2.default.createElement(
    _Table.Table,
    { className: _styles2.default.courseTable },
    _react2.default.createElement(
      _Table.TableHeader,
      { displaySelectAll: false, adjustForCheckbox: false },
      _react2.default.createElement(
        _Table.TableRow,
        null,
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'Location'
        ),
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'Description'
        ),
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'Time'
        ),
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'Dates'
        ),
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'Sign up'
        )
      )
    ),
    _react2.default.createElement(
      _Table.TableBody,
      { style: { verticalAlign: "top" },
        deselectOnClickaway: false, displayRowCheckbox: false },
      props.courses.map(function (course, idx) {
        return _react2.default.createElement(
          _Table.TableRow,
          { key: idx, selected: false, selectable: false },
          _react2.default.createElement(
            _Table.TableRowColumn,
            null,
            _react2.default.createElement(
              'div',
              { className: _styles2.default.courseCell },
              _react2.default.createElement(
                'div',
                null,
                course.school.name
              ),
              _react2.default.createElement(Address, { school: course.school })
            )
          ),
          _react2.default.createElement(
            _Table.TableRowColumn,
            null,
            _react2.default.createElement(
              'div',
              { className: _styles2.default.courseCell },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Teacher: '
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                course.teacher.firstName + ' ' + course.teacher.lastName
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Description: '
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                course.description
              )
            )
          ),
          _react2.default.createElement(
            _Table.TableRowColumn,
            null,
            _react2.default.createElement(
              'div',
              { className: _styles2.default.courseCell },
              _react2.default.createElement(ClassTime, course.classes[0])
            )
          ),
          _react2.default.createElement(
            _Table.TableRowColumn,
            null,
            _react2.default.createElement(
              'div',
              { className: _styles2.default.courseCell },
              course.classes.reduce(pairUp, []).map(function (str) {
                return _react2.default.createElement(
                  'div',
                  { key: str },
                  str
                );
              })
            )
          ),
          _react2.default.createElement(
            _Table.TableRowColumn,
            null,
            _react2.default.createElement(
              'div',
              { className: _styles2.default.courseCell },
              getSignupColumn(course, function () {
                props.handleSignup(course);
              })
            )
          )
        );
      })
    )
  );
};

/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(14);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FlatButton = __webpack_require__(83);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _stripe = __webpack_require__(247);

var _registration = __webpack_require__(54);

var _GoBack = __webpack_require__(240);

var _GoBack2 = _interopRequireDefault(_GoBack);

var _data = __webpack_require__(246);

var _data2 = _interopRequireDefault(_data);

var _form = __webpack_require__(39);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  base: {
    color: '#32325d',
    lineHeight: '24px',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

var PaymentDetails = function (_React$Component) {
  _inherits(PaymentDetails, _React$Component);

  function PaymentDetails(props) {
    _classCallCheck(this, PaymentDetails);

    var _this = _possibleConstructorReturn(this, (PaymentDetails.__proto__ || Object.getPrototypeOf(PaymentDetails)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.stripe.createToken(_this.card).then(function (_ref) {
        var error = _ref.error,
            token = _ref.token;

        if (error) {
          _this.setState({
            error: error.message
          });
        } else {
          (0, _stripe.createCustomer)(token.id).then(function (response) {
            _this.props.registerPayment({
              customer: response.data
            });
            _this.props.history.push('/register/purchase');
          }).catch(function (error) {
            _this.setState({
              error: 'There was an error processing your card.  For help contact info@chesswithmrs.com'
            });
          });
        }
      });
    };

    _this.goBack = function () {
      _this.props.history.push('/register/info');
    };

    _this.handleClose = function () {
      _this.setState({
        open: false
      });
    };

    _this.state = {
      error: '',
      open: false
    };
    return _this;
  }

  _createClass(PaymentDetails, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var shouldGoBack = !this.props.courses.length || !this.props.student.firstName;
      if (shouldGoBack) {
        this.props.history.replace('/register');
        return;
      }
      this.stripe = Stripe(_data2.default.key);
      this.card = this.stripe.elements().create('card', { style: style });
      this.card.mount('#card-element');
      this.card.addEventListener('change', function (event) {
        _this2.setState({
          error: event.error
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: 'Cancel',
        primary: true,
        onClick: this.handleClose
      }), _react2.default.createElement(_FlatButton2.default, {
        label: 'Continue',
        primary: true,
        onClick: this.goBack
      })];
      var cardSectionStyle = {
        padding: '60px',
        background: '#e6e6e6',
        marginBottom: '20px',
        position: 'relative'
      };
      var stripeBadgeStyle = {
        position: 'absolute',
        bottom: '0px',
        left: '0px',
        width: '100px'
      };
      return _react2.default.createElement(
        'form',
        { className: _form2.default.form, onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'h1',
          null,
          'Payment Details'
        ),
        _react2.default.createElement(
          'section',
          { style: cardSectionStyle },
          _react2.default.createElement('div', { id: 'card-element' }),
          _react2.default.createElement(
            'div',
            { id: 'card-errors' },
            this.state.error
          ),
          _react2.default.createElement('img', { style: stripeBadgeStyle, src: '/assets/stripe_badge.png' })
        ),
        _react2.default.createElement(
          'p',
          null,
          _data2.default.legalWranglings
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_GoBack2.default, { open: this.state.open,
            actions: actions }),
          _react2.default.createElement(_RaisedButton2.default, { primary: true,
            label: 'Next',
            type: 'submit' })
        )
      );
    }
  }]);

  return PaymentDetails;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var registration = _ref2.registration;

  return _extends({}, registration);
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { registerPayment: _registration.registerPayment })(PaymentDetails));

/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _stripe = __webpack_require__(247);

var _registration = __webpack_require__(54);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Cards = __webpack_require__(587);

var _CourseTable = __webpack_require__(162);

var _CourseTable2 = _interopRequireDefault(_CourseTable);

var _form = __webpack_require__(39);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Purchase = function (_React$Component) {
  _inherits(Purchase, _React$Component);

  function Purchase(props) {
    _classCallCheck(this, Purchase);

    var _this = _possibleConstructorReturn(this, (Purchase.__proto__ || Object.getPrototypeOf(Purchase)).call(this, props));

    _this.editPreviousPage = function (url) {
      _this.props.history.push(url);
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.setState({ disableBtn: true });
      var courses = _this.props.courses.map(function (_ref) {
        var _id = _ref._id;
        return _id;
      }).join(',');
      var _this$props$student = _this.props.student,
          firstName = _this$props$student.firstName,
          lastName = _this$props$student.lastName;

      var description = 'student: ' + firstName + ' ' + lastName + ' | courses: ' + courses;
      (0, _stripe.chargeCustomer)(_this.props.customer, _this.total, description).then(function (response) {
        _this.props.recordCharge(response.data);
        _axios2.default.post('/api/register-student', {
          courses: _this.props.courses,
          student: _this.props.student,
          customerId: response.data.customer
        });
        _this.props.history.replace('/register/confirmation');
      }).catch(function (error) {
        var message = error && error.response && error.response.data && error.response.data.message || "An Issue Prevented Chess with Mr S from completing the transaction";
        var status = error && error.response && error.response.status || 500;
        _this.props.setRegistrationError({
          status: status,
          message: message
        });
        _this.props.history.replace('/register/error');
      });
    };

    _this.total = props.courses.reduce(function (sum, course) {
      return sum + course.price;
    }, 0);
    _this.state = { disableBtn: false };
    return _this;
  }

  _createClass(Purchase, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var shouldGoBack = !this.props.courses.length || !this.props.student.firstName || !this.props.customer || !this.props.customer.id;
      if (shouldGoBack) {
        this.shouldGoBack = true;
        this.props.history.replace('/register');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.shouldGoBack) {
        return _react2.default.createElement('span', null);
      }
      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit, className: _form2.default.form },
        _react2.default.createElement(
          'h1',
          null,
          'Review and Purchase'
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex' },
          _react2.default.createElement(
            'section',
            { style: { width: '50%', marginRight: '20px' } },
            _react2.default.createElement(_Cards.StudentCard, _extends({}, this.props.student, {
              onEditClick: this.editPreviousPage.bind(null, '/register/info') }))
          ),
          _react2.default.createElement(
            'section',
            null,
            _react2.default.createElement(_Cards.PaymentCard, _extends({}, (0, _stripe.extractCardInfo)(this.props.customer), {
              onEditClick: this.editPreviousPage.bind(null, '/register/payment') }))
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Your Order'
          ),
          _react2.default.createElement(_CourseTable2.default, { courses: this.props.courses, readonly: true, total: this.total })
        ),
        _react2.default.createElement(_RaisedButton2.default, { disabled: this.state.disableBtn, primary: true,
          type: 'submit',
          label: this.state.disableBtn ? 'Loading...' : 'Purchase' })
      );
    }
  }]);

  return Purchase;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var registration = _ref2.registration;
  var student = registration.student,
      courses = registration.courses,
      payment = registration.payment;

  return {
    customer: payment.customer,
    student: student,
    courses: courses
  };
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { recordCharge: _registration.recordCharge, setRegistrationError: _registration.setRegistrationError })(Purchase));

/***/ }),
/* 595 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _styles = __webpack_require__(100);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var links = [{
  url: '/register-school',
  name: 'School programs',
  desc: 'Classes are held during lunch hour and after school in\n    partner schools across the GTA.',
  svg: 'strategy2',
  iconStyle: {
    background: 'rgb(248, 215, 182, 0.3)'
  }
}, {
  url: '/register-evening',
  name: 'Evening and Weekend',
  desc: 'Our evening & weekend programs are held in  multiple locations for students of all skill levels.',
  svg: 'strategy',
  iconStyle: {
    background: 'rgb(43, 204, 205, 0.3)'
  }
}, {
  url: '/register-camp',
  name: 'Summer camp',
  desc: 'Register for summer camp now to take advantage of our early bird pricing.',
  svg: 'chess-board',
  iconStyle: {
    background: 'rgb(192, 140, 244, 0.3)'
  }
}];

var RegisterLink = function RegisterLink(_ref) {
  var name = _ref.name,
      desc = _ref.desc,
      _ref$iconStyle = _ref.iconStyle,
      iconStyle = _ref$iconStyle === undefined ? {} : _ref$iconStyle,
      handleOnClick = _ref.handleOnClick,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.registerLink },
    _react2.default.createElement(
      'div',
      { className: _styles2.default.icon, style: iconStyle },
      children
    ),
    _react2.default.createElement(
      'h1',
      null,
      name
    ),
    _react2.default.createElement(
      'p',
      null,
      desc
    ),
    _react2.default.createElement(_RaisedButton2.default, {
      primary: true,
      onClick: handleOnClick,
      label: 'Next' })
  );
};

exports.default = function (_ref2) {
  var history = _ref2.history;
  return _react2.default.createElement(
    'div',
    { style: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 0'
      } },
    links.map(function (_ref3) {
      var name = _ref3.name,
          desc = _ref3.desc,
          url = _ref3.url,
          svg = _ref3.svg,
          iconStyle = _ref3.iconStyle;
      return _react2.default.createElement(
        RegisterLink,
        { name: name,
          desc: desc,
          handleOnClick: function handleOnClick() {
            return history.push(url);
          },
          iconStyle: iconStyle },
        _react2.default.createElement('img', { src: 'assets/' + svg + '.svg', alt: svg })
      );
    })
  );
};

/***/ }),
/* 596 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Stepper = __webpack_require__(947);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _Stepper.Stepper,
    { activeStep: props.activeStep },
    _react2.default.createElement(
      _Stepper.Step,
      null,
      _react2.default.createElement(
        _Stepper.StepLabel,
        null,
        'Select your courses'
      )
    ),
    _react2.default.createElement(
      _Stepper.Step,
      null,
      _react2.default.createElement(
        _Stepper.StepLabel,
        null,
        'Enter student details'
      )
    ),
    _react2.default.createElement(
      _Stepper.Step,
      null,
      _react2.default.createElement(
        _Stepper.StepLabel,
        null,
        'Enter payment details'
      )
    ),
    _react2.default.createElement(
      _Stepper.Step,
      null,
      _react2.default.createElement(
        _Stepper.StepLabel,
        null,
        'Purchase'
      )
    )
  );
};

/***/ }),
/* 597 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _moment = __webpack_require__(3);

var _moment2 = _interopRequireDefault(_moment);

var _constants = __webpack_require__(117);

var _DatePicker = __webpack_require__(925);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _DropDownMenu = __webpack_require__(198);

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _MenuItem = __webpack_require__(107);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _FlatButton = __webpack_require__(83);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = __webpack_require__(35);

var _TextField2 = _interopRequireDefault(_TextField);

var _GoBack = __webpack_require__(240);

var _GoBack2 = _interopRequireDefault(_GoBack);

var _registration = __webpack_require__(54);

var _pattern = __webpack_require__(93);

var _pattern2 = _interopRequireDefault(_pattern);

var _form = __webpack_require__(39);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudentDetails = function (_React$Component) {
  _inherits(StudentDetails, _React$Component);

  function StudentDetails(props) {
    _classCallCheck(this, StudentDetails);

    var _this = _possibleConstructorReturn(this, (StudentDetails.__proto__ || Object.getPrototypeOf(StudentDetails)).call(this, props));

    _initialiseProps.call(_this);

    var student = props.student;
    _this.threeYearsAgo = (0, _moment2.default)().subtract(3, 'years').toDate();
    _this.state = {
      open: false,
      firstNameError: '',
      lastNameError: '',
      dateOfBirthError: '',
      guardianFirstNameError: '',
      guardianLastNameError: '',
      guardianPhoneError: '',
      guardianEmailError: '',
      student: props.student
    };
    return _this;
  }

  _createClass(StudentDetails, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var shouldGoBack = !this.props.courses.length;
      shouldGoBack && this.props.history.replace('/register');
    }
  }, {
    key: 'validateEmail',
    value: function validateEmail(value) {
      return _pattern2.default.email.test(value);
    }
  }, {
    key: 'validatePhoneNumber',
    value: function validatePhoneNumber(value) {
      return (value.match(/\d/g) || []).length === 10;
    }
  }, {
    key: 'validateForm',
    value: function validateForm() {
      var errorMessage = 'This field is required';
      var student = this.state.student;
      var guardian = this.state.student.guardians[0];
      var firstNameError = this.state.firstNameError || (student.firstName ? '' : errorMessage);
      var lastNameError = this.state.lastNameError || (student.lastName ? '' : errorMessage);
      var dateOfBirthError = this.state.dateOfBirthError || (student.dateOfBirth ? '' : errorMessage);
      var guardianFirstNameError = this.state.guardianFirstNameError || (guardian.firstName ? '' : errorMessage);
      var guardianLastNameError = this.state.guardianLastNameError || (guardian.lastName ? '' : errorMessage);
      var guardianEmailError = this.state.guardianEmailError || (guardian.email ? '' : errorMessage);
      var guardianPhoneError = this.state.guardianPhoneError || (guardian.phone ? '' : errorMessage);

      var isValid = [firstNameError, lastNameError, dateOfBirthError, guardianFirstNameError, guardianLastNameError, guardianEmailError, guardianPhoneError].every(function (field) {
        return !field;
      });

      if (!isValid) {
        this.setState({
          firstNameError: firstNameError,
          lastNameError: lastNameError,
          dateOfBirthError: dateOfBirthError,
          guardianFirstNameError: guardianFirstNameError,
          guardianLastNameError: guardianLastNameError,
          guardianEmailError: guardianEmailError,
          guardianPhoneError: guardianPhoneError
        }, this.focusError);
      }
      return isValid;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: 'Cancel',
        primary: true,
        onClick: this.handleClose
      }), _react2.default.createElement(_FlatButton2.default, {
        label: 'Continue',
        primary: true,
        onClick: function onClick() {
          return _this2.props.history.replace('/register');
        }
      })];
      var hideAutoFillColorStyle = {
        WebkitBoxShadow: '0 0 0 1000px white inset'
      };
      var hintStyle = { zIndex: '1', pointerEvents: 'none' };
      var indentStyle = { marginLeft: '200px' };
      var inputStyle = { width: '400px' };
      var menuItemStyle = { fontFamily: '16px', textTransform: 'capitalize' };
      var separator = { borderTop: '1px solid #e6e6e6' };
      var gravityStyle = { marginBottom: '-20px' };
      return _react2.default.createElement(
        'form',
        { className: _form2.default.form, onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'h1',
          null,
          'Enter student details'
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h3',
            { style: gravityStyle },
            'Student Details'
          ),
          _react2.default.createElement(
            'div',
            { style: indentStyle },
            _react2.default.createElement(_TextField2.default, { style: inputStyle,
              ref: 'firstName',
              hintText: 'Enter first name',
              type: 'text',
              floatingLabelText: 'Student first name',
              errorText: this.state.firstNameError,
              value: this.state.student.firstName,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              onChange: this.handleFirstNameChange })
          ),
          _react2.default.createElement(
            'div',
            { style: indentStyle },
            _react2.default.createElement(_TextField2.default, { style: inputStyle,
              ref: 'lastName',
              hintText: 'Enter last name',
              floatingLabelText: 'Student last name',
              errorText: this.state.lastNameError,
              type: 'text',
              value: this.state.student.lastName,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              onChange: this.handleLastNameChange })
          ),
          _react2.default.createElement(
            'div',
            { style: indentStyle },
            _react2.default.createElement(_DatePicker2.default, { style: inputStyle,
              ref: 'dateOfBirth',
              hintText: 'Select date of birth',
              floatingLabelText: 'Date of Birth',
              errorText: this.state.dateOfBirthError,
              openToYearSelection: true,
              value: this.state.student.dateOfBirth,
              onChange: this.handleDobChange,
              maxDate: this.threeYearsAgo
            })
          ),
          _react2.default.createElement(
            'div',
            { style: { marginLeft: '200px', height: '72px', display: 'flex', alignItems: 'flex-end' } },
            _react2.default.createElement(
              _DropDownMenu2.default,
              { style: { width: '400px', right: '24px' },
                labelStyle: this.state.student.level ? menuItemStyle : {
                  color: 'rgba(0, 0, 0, 0.3)',
                  fontSize: '16px'
                },
                menuItemStyle: menuItemStyle,
                value: this.state.student.level,
                onChange: this.handleLevelChange,
                autoWidth: false },
              _react2.default.createElement(_MenuItem2.default, { value: '', primaryText: 'Select student level' }),
              _constants.chessLevels.map(function (level) {
                return _react2.default.createElement(_MenuItem2.default, { key: level, value: level, primaryText: level });
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: indentStyle },
            _react2.default.createElement(_TextField2.default, { style: inputStyle,
              hintText: 'List any allergies',
              floatingLabelText: 'Allergies (optional)',
              multiLine: true,
              rows: 1,
              rowsMax: 4,
              value: this.state.student.allergies,
              onChange: this.handleAllergiesChange })
          ),
          _react2.default.createElement(
            'div',
            { style: indentStyle },
            _react2.default.createElement(_TextField2.default, { style: inputStyle,
              hintText: 'Any additional info we should know about',
              floatingLabelText: 'Additional info (optional)',
              multiLine: true,
              rows: 1,
              rowsMax: 5,
              value: this.state.student.notes,
              onChange: this.handleNotesChange })
          )
        ),
        _react2.default.createElement(
          'section',
          { style: separator },
          _react2.default.createElement(
            'h3',
            { style: gravityStyle },
            'Guardian Details'
          ),
          _react2.default.createElement(
            'div',
            { style: indentStyle },
            _react2.default.createElement(_TextField2.default, { style: inputStyle,
              ref: 'guardianFirstName',
              hintText: 'Enter guardian first name',
              floatingLabelText: 'Guardian first name',
              errorText: this.state.guardianFirstNameError,
              type: 'text',
              value: this.state.student.guardians[0].firstName,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              onChange: this.handleGuardianFirstNameChange })
          ),
          _react2.default.createElement(
            'div',
            { style: indentStyle },
            _react2.default.createElement(_TextField2.default, { style: inputStyle,
              ref: 'guardianLastName',
              hintText: 'Enter guardian last name',
              floatingLabelText: 'Guardian last name',
              errorText: this.state.guardianLastNameError,
              type: 'text',
              value: this.state.student.guardians[0].lastName,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              onChange: this.handleGuardianLastNameChange })
          ),
          _react2.default.createElement(
            'div',
            { style: indentStyle },
            _react2.default.createElement(_TextField2.default, { style: inputStyle,
              ref: 'guardianEmail',
              hintText: 'Enter guardian email',
              floatingLabelText: 'Guardian email',
              errorText: this.state.guardianEmailError,
              type: 'email',
              value: this.state.student.guardians[0].email,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              onChange: this.handleEmailChange })
          ),
          _react2.default.createElement(
            'div',
            { style: indentStyle },
            _react2.default.createElement(_TextField2.default, { style: inputStyle,
              ref: 'guardianPhone',
              hintText: 'Enter guardian phone',
              floatingLabelText: 'Guardian phone',
              errorText: this.state.guardianPhoneError,
              type: 'text',
              value: this.state.student.guardians[0].phone,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              onChange: this.handlePhoneChange })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { padding: "20px 0" } },
          _react2.default.createElement(_GoBack2.default, { open: this.state.open,
            actions: actions
          }),
          _react2.default.createElement(_RaisedButton2.default, {
            disabled: this.isFormValid() !== true,
            primary: true,
            type: 'submit',
            label: 'Next' })
        )
      );
    }
  }]);

  return StudentDetails;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.focusError = function () {
    var requiredFields = ['firstName', 'lastName', 'dateOfBirth', 'guardianFirstName', 'guardianLastName', 'guardianEmail', 'guardianPhone'];
    var firstError = requiredFields.find(function (field) {
      return _this3.state[field + 'Error'];
    });
    if (firstError) {
      _this3.refs[firstError].focus();
    }
  };

  this.handleClose = function () {
    _this3.setState({
      open: false
    });
  };

  this.handleAllergiesChange = function (event) {
    var student = _this3.state.student;
    student.allergies = event.target.value;
    _this3.setState({
      student: student
    });
  };

  this.handleDobChange = function (event, date) {
    var student = _this3.state.student;
    student.dateOfBirth = date;
    _this3.setState({
      student: student,
      dateOfBirthError: ''
    });
  };

  this.handleNotesChange = function (event) {
    var student = _this3.state.student;
    student.notes = event.target.value;
    _this3.setState({
      student: student
    });
  };

  this.handleFirstNameChange = function (event) {
    var student = _this3.state.student;
    student.firstName = event.target.value;
    _this3.setState({
      student: student,
      firstNameError: event.target.value ? '' : 'This field is required'
    });
  };

  this.handleLastNameChange = function (event) {
    var student = _this3.state.student;
    student.lastName = event.target.value;
    _this3.setState({
      student: student,
      lastNameError: event.target.value ? '' : 'This field is required'
    });
  };

  this.handleGuardianFirstNameChange = function (event) {
    var guardian = _this3.state.student.guardians[0];
    guardian.firstName = event.target.value;
    var guardianFirstNameError = guardian.firstName ? '' : 'This field is required';
    _this3.setState({
      guardian: guardian,
      guardianFirstNameError: guardianFirstNameError
    });
  };

  this.handleGuardianLastNameChange = function (event) {
    var guardian = _this3.state.student.guardians[0];
    guardian.lastName = event.target.value;
    var guardianLastNameError = guardian.lastName ? '' : 'This field is required';
    _this3.setState({
      guardian: guardian,
      guardianLastNameError: guardianLastNameError
    });
  };

  this.handleEmailChange = function (event) {
    var guardian = _this3.state.student.guardians[0];
    guardian.email = event.target.value;
    var guardianEmailError = guardian.email ? _this3.validateEmail(guardian.email) ? '' : 'Please enter a valid email' : 'This field is required';
    _this3.setState({
      guardian: guardian,
      guardianEmailError: guardianEmailError
    });
  };

  this.handlePhoneChange = function (event) {
    var guardian = _this3.state.student.guardians[0];
    guardian.phone = event.target.value.replace(/[^\d-()\s]/, '');
    var guardianPhoneError = guardian.phone ? _this3.validatePhoneNumber(guardian.phone) ? '' : 'Please enter a ten digit phone number' : 'This field is required';

    _this3.setState({
      guardian: guardian,
      guardianPhoneError: guardianPhoneError
    });
  };

  this.handleLevelChange = function (event, index, value) {
    var student = _this3.state.student;
    student.level = value;
    _this3.setState({
      student: student
    });
  };

  this.isFormValid = function () {
    return [_this3.state.firstNameError, _this3.state.lastNameError, _this3.state.dateOfBirthError, _this3.state.guardianFirstNameError, _this3.state.guardianLastNameError, _this3.state.guardianEmailError, _this3.state.guardianPhoneError].every(function (field) {
      return !field;
    });
  };

  this.handleSubmit = function (event) {
    event.preventDefault();
    var valid = _this3.validateForm();
    if (!valid) {
      return;
    }
    _this3.props.registerStudent(_this3.state.student);
    _this3.props.history.push('/register/payment');
  };
};

var mapStateToProps = function mapStateToProps(_ref) {
  var registration = _ref.registration,
      schools = _ref.schools;

  return _extends({
    schools: schools.schools || []
  }, registration);
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { registerStudent: _registration.registerStudent })(StudentDetails));

/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(151);

var _reactRouterDom = __webpack_require__(14);

var _ScrollToTopRoute = __webpack_require__(243);

var _ScrollToTopRoute2 = _interopRequireDefault(_ScrollToTopRoute);

var _RegistrationStepper = __webpack_require__(596);

var _RegistrationStepper2 = _interopRequireDefault(_RegistrationStepper);

var _EveningCourseSelection = __webpack_require__(591);

var _EveningCourseSelection2 = _interopRequireDefault(_EveningCourseSelection);

var _CampSelection = __webpack_require__(586);

var _CampSelection2 = _interopRequireDefault(_CampSelection);

var _CourseSelection = __webpack_require__(589);

var _CourseSelection2 = _interopRequireDefault(_CourseSelection);

var _StudentDetails = __webpack_require__(597);

var _StudentDetails2 = _interopRequireDefault(_StudentDetails);

var _PaymentDetails = __webpack_require__(593);

var _PaymentDetails2 = _interopRequireDefault(_PaymentDetails);

var _Purchase = __webpack_require__(594);

var _Purchase2 = _interopRequireDefault(_Purchase);

var _ConfirmationPage = __webpack_require__(588);

var _ConfirmationPage2 = _interopRequireDefault(_ConfirmationPage);

var _RegisterHome = __webpack_require__(595);

var _RegisterHome2 = _interopRequireDefault(_RegisterHome);

var _ErrorPage = __webpack_require__(590);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

var _layout = __webpack_require__(59);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(_ref) {
  var registration = _ref.registration;

  return {
    registration: registration
  };
};

var RegistrationWizard = function (_React$Component) {
  _inherits(RegistrationWizard, _React$Component);

  function RegistrationWizard() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, RegistrationWizard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = RegistrationWizard.__proto__ || Object.getPrototypeOf(RegistrationWizard)).call.apply(_ref2, [this].concat(args))), _this), _this.getActiveStep = function (pathname) {
      switch (true) {
        case pathname.includes('/info'):
          return 1;
        case pathname.includes('/payment'):
          return 2;
        case pathname.includes('/purchase') || pathname.includes('/confirmation'):
          return 3;
        default:
          return 0;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RegistrationWizard, [{
    key: 'render',
    value: function render() {
      var paddingStyle = {
        padding: '20px 5%'
      };
      return _react2.default.createElement(
        'div',
        { className: _layout2.default.container },
        _react2.default.createElement(
          'div',
          { style: paddingStyle },
          _react2.default.createElement(_RegistrationStepper2.default, {
            activeStep: this.getActiveStep(this.props.location.pathname) })
        ),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_ScrollToTopRoute2.default, { exact: true, path: '/register', component: _RegisterHome2.default }),
          _react2.default.createElement(_ScrollToTopRoute2.default, { exact: true, path: '/register-school', component: _CourseSelection2.default }),
          _react2.default.createElement(_ScrollToTopRoute2.default, { exact: true, path: '/register-camp', component: _CampSelection2.default }),
          _react2.default.createElement(_ScrollToTopRoute2.default, { exact: true, path: '/register-evening', component: _EveningCourseSelection2.default }),
          _react2.default.createElement(_ScrollToTopRoute2.default, { path: '/register/info', component: _StudentDetails2.default }),
          _react2.default.createElement(_ScrollToTopRoute2.default, { path: '/register/payment', component: _PaymentDetails2.default }),
          _react2.default.createElement(_ScrollToTopRoute2.default, { path: '/register/purchase', component: _Purchase2.default }),
          _react2.default.createElement(_ScrollToTopRoute2.default, { path: '/register/confirmation', component: _ConfirmationPage2.default }),
          _react2.default.createElement(_ScrollToTopRoute2.default, { path: '/register/error', component: _ErrorPage2.default }),
          _react2.default.createElement(_ScrollToTopRoute2.default, { path: '*', component: _reactRouter.Redirect, componentProps: { to: "/" } })
        )
      );
    }
  }]);

  return RegistrationWizard;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {})(RegistrationWizard));

/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _AutoComplete = __webpack_require__(62);

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Checkbox = __webpack_require__(105);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _DropDownMenu = __webpack_require__(198);

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _MenuItem = __webpack_require__(107);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = __webpack_require__(35);

var _TextField2 = _interopRequireDefault(_TextField);

var _session = __webpack_require__(69);

var _AvatarCarousel = __webpack_require__(237);

var _AvatarCarousel2 = _interopRequireDefault(_AvatarCarousel);

var _CourseForSchool = __webpack_require__(245);

var _CourseForSchool2 = _interopRequireDefault(_CourseForSchool);

var _error = __webpack_require__(48);

var _constants = __webpack_require__(117);

var _layout = __webpack_require__(59);

var _layout2 = _interopRequireDefault(_layout);

var _form = __webpack_require__(39);

var _form2 = _interopRequireDefault(_form);

var _styles = __webpack_require__(703);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoCourseMessage = function NoCourseMessage(_ref) {
  var name = _ref.name;

  return _react2.default.createElement(
    'div',
    null,
    'No courses found for ' + name
  );
};

var Signup = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup(props) {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

    _this.navigateToRoot = function () {
      _this.props.history.push('/');
    };

    _this.handleCheckbox = function () {
      _this.setState(function (prevState) {
        var nextViewSchools = !prevState.viewSchools;
        var update = {
          viewSchools: nextViewSchools
        };
        if (!nextViewSchools) {
          Object.assign(update, {
            schoolId: '',
            schoolName: '',
            searchText: '',
            coursesForSchool: [],
            selectedRows: [],
            schoolError: '',
            courseId: ''
          });
        }
        return update;
      });
    };

    _this.handleRowSelect = function (selectedRows) {
      _this.setState(function (prevState) {
        return {
          selectedRows: selectedRows,
          courseId: selectedRows.length ? prevState.coursesForSchool[selectedRows[0]]._id : ''
        };
      });
    };

    _this.handleLevelChange = function (event, index, level) {
      _this.setState({
        level: level
      });
    };

    _this.state = {
      error: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      level: 'pawn',
      schoolId: '',
      coursesForSchool: '',
      searchText: '',
      schoolError: '',
      schoolName: '',
      selectedRows: [],
      courseId: '',
      viewSchools: false
    };
    return _this;
  }

  _createClass(Signup, [{
    key: 'render',
    value: function render() {
      var hideAutoFillColorStyle = {
        WebkitBoxShadow: '0 0 0 1000px white inset'
      };
      var hintStyle = {
        zIndex: '1',
        pointerEvents: 'none'
      };
      var menuProps = {
        desktop: true,
        disableAutoFocus: true
      };
      return _react2.default.createElement(
        'div',
        { style: { paddingTop: '20px' }, className: 'flex justify-center ' + _layout2.default.container },
        _react2.default.createElement(_AvatarCarousel2.default, null),
        _react2.default.createElement(
          'form',
          { style: { width: '600px', margin: '0' },
            className: _form2.default.form + ' ' + _styles2.default.signupForm,
            onSubmit: this.handleSubmit.bind(this) },
          this.state.error && _react2.default.createElement(
            'p',
            { style: { color: '#f44336' } },
            this.state.error
          ),
          _react2.default.createElement(
            'h1',
            null,
            'Sign up'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, { hintText: 'Enter your first name',
              type: 'text',
              required: true,
              fullWidth: true,
              value: this.state.firstName,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              onChange: this.handleFirstNameChange.bind(this) })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, { hintText: 'Enter your last name',
              type: 'text',
              required: true,
              value: this.state.lastName,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              fullWidth: true,
              onChange: this.handleLastNameChange.bind(this) })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, { hintText: 'Enter your email',
              type: 'email',
              required: true,
              value: this.state.email,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              fullWidth: true,
              onChange: this.handleEmailChange.bind(this) })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, { hintText: 'Enter your username',
              type: 'text',
              required: true,
              value: this.state.username,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              fullWidth: true,
              onChange: this.handleUsernameChange.bind(this) })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, { hintText: 'Enter your password',
              type: 'password',
              required: true,
              floatingLabelText: 'Password',
              value: this.state.password,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              fullWidth: true,
              onChange: this.handlePasswordChange.bind(this) })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _DropDownMenu2.default,
              { required: true, value: this.state.level,
                onChange: this.handleLevelChange,
                style: { width: '400px', right: '24px' },
                menuItemStyle: { textTransform: 'capitalize' },
                labelStyle: { textTransform: 'capitalize' },
                autoWidth: false },
              _constants.chessLevels.map(function (level) {
                return _react2.default.createElement(_MenuItem2.default, { key: level, value: level, primaryText: level });
              })
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_RaisedButton2.default, { style: { marginRight: '20px' }, type: 'submit',
              disabledBackgroundColor: '#aaa',
              disabled: this.state.loading,
              label: '' + (this.state.loading ? '...' : 'Sign up'),
              primary: true }),
            _react2.default.createElement(_RaisedButton2.default, { type: 'button', onClick: this.navigateToRoot,
              secondary: true, label: 'Cancel' })
          )
        )
      );
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(searchText) {
      this.setState({
        searchText: searchText
      });
    }
  }, {
    key: 'handleUsernameChange',
    value: function handleUsernameChange(event) {
      this.setState({
        username: event.target.value
      });
    }
  }, {
    key: 'handlePasswordChange',
    value: function handlePasswordChange(event) {
      this.setState({
        password: event.target.value
      });
    }
  }, {
    key: 'handleFirstNameChange',
    value: function handleFirstNameChange(event) {
      this.setState({
        firstName: event.target.value
      });
    }
  }, {
    key: 'handleLastNameChange',
    value: function handleLastNameChange(event) {
      this.setState({
        lastName: event.target.value
      });
    }
  }, {
    key: 'handleEmailChange',
    value: function handleEmailChange(event) {
      this.setState({
        email: event.target.value
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      var username = this.state.username.trim();
      var newUser = {
        username: username,
        password: this.state.password,
        email: this.state.email,
        personal: {
          firstName: this.state.firstName,
          lastName: this.state.lastName
        },
        level: this.state.level.replace(/\s/g, ''),
        courseId: this.state.courseId
      };
      this.setState({ loading: true });
      this.props.signup(newUser).catch(function () {
        var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var message = (0, _error.getErrorMessage)(err);
        window.scrollTo(0, 0);
        _this2.setState({
          username: username,
          loading: false,
          error: message || 'Could not sign up new user.  Please try again or contact info@chesswithmrs.com'
        });
      });
    }
  }]);

  return Signup;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var session = _ref2.session,
      schools = _ref2.schools,
      courses = _ref2.courses;

  return {
    error: session.sessionError,
    schools: schools.schools || [],
    courses: courses.courses
  };
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { signup: _session.signup })(Signup));

/***/ }),
/* 600 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _session = __webpack_require__(69);

var _Login = __webpack_require__(242);

var _Login2 = _interopRequireDefault(_Login);

var _styles = __webpack_require__(704);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudentLogin = function (_React$Component) {
  _inherits(StudentLogin, _React$Component);

  function StudentLogin(props) {
    _classCallCheck(this, StudentLogin);

    var _this = _possibleConstructorReturn(this, (StudentLogin.__proto__ || Object.getPrototypeOf(StudentLogin)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.props.login(_this.state.username.trim(), _this.state.password);
    };

    _this.handleUserNameChange = function (event) {
      _this.setState({
        username: event.target.value
      });
    };

    _this.handlePasswordChange = function (event) {
      _this.setState({
        password: event.target.value
      });
    };

    _this.state = {
      username: '',
      password: '',
      error: props.error || ''
    };
    return _this;
  }

  _createClass(StudentLogin, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(_extends({}, nextProps));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.adminLogin },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Student Login'
          ),
          _react2.default.createElement(_Login2.default, _extends({ hasForgotPassword: true,
            className: _styles2.default.loginContainer
          }, this.state, { handleUserNameChange: this.handleUserNameChange,
            handlePasswordChange: this.handlePasswordChange,
            handleSubmit: this.handleSubmit })),
          _react2.default.createElement(
            'div',
            { style: { padding: '20px 10px' } },
            'Don\'t have an account ? ',
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/signup' },
              'Sign up'
            )
          )
        )
      );
    }
  }]);

  return StudentLogin;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var session = _ref.session;

  return {
    error: session.sessionError
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { login: _session.login })(StudentLogin);

/***/ }),
/* 601 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(151);

var _reactRouterDom = __webpack_require__(14);

var _season = __webpack_require__(244);

var _Navbar = __webpack_require__(158);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = __webpack_require__(238);

var _Footer2 = _interopRequireDefault(_Footer);

var _ScrollToTopRoute = __webpack_require__(243);

var _ScrollToTopRoute2 = _interopRequireDefault(_ScrollToTopRoute);

var _LanderPage = __webpack_require__(585);

var _LanderPage2 = _interopRequireDefault(_LanderPage);

var _constants = __webpack_require__(117);

var _navLink = __webpack_require__(113);

var _RegistrationWizardPage = __webpack_require__(598);

var _RegistrationWizardPage2 = _interopRequireDefault(_RegistrationWizardPage);

var _Admin = __webpack_require__(575);

var _Admin2 = _interopRequireDefault(_Admin);

var _Student = __webpack_require__(600);

var _Student2 = _interopRequireDefault(_Student);

var _ForgotPassword = __webpack_require__(565);

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

var _ResetPassword = __webpack_require__(567);

var _ResetPassword2 = _interopRequireDefault(_ResetPassword);

var _Signup = __webpack_require__(599);

var _Signup2 = _interopRequireDefault(_Signup);

var _courses = __webpack_require__(115);

var _schools = __webpack_require__(116);

var _button = __webpack_require__(44);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var minHeightStyle = {
  minHeight: '100vh'
};

var navBtn = {
  fontSize: '16px',
  padding: '5px 10px'
};

var funWork = {
  background: '#f1b06f',
  borderColor: '#f1b06f',
  borderLeftColor: '#f8d7b6',
  borderTopColor: '#f8d7b6',
  marginRight: '10px'
};

var Lander = function (_React$Component) {
  _inherits(Lander, _React$Component);

  function Lander() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Lander);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Lander.__proto__ || Object.getPrototypeOf(Lander)).call.apply(_ref, [this].concat(args))), _this), _this.isBigLogo = function () {
      return (/signup|login|register|admin|(\w+-password)/i.test(_this.props.location.pathname) !== true
      );
    }, _this.navigateToPath = function (path) {
      _this.props.history.push(path);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Lander, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.loadCamps();
      this.props.loadCourses((0, _season.getCurrentSeason)());
      this.props.loadSchools();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Navbar2.default,
          { links: [], showBigLogo: this.isBigLogo() },
          _react2.default.createElement(_navLink.NavLinkBtn, { name: 'Homework puzzles',
            style: _extends({}, funWork, navBtn),
            className: _button2.default.primaryBtn,
            handleClick: this.navigateToPath.bind(this, '/login') }),
          _react2.default.createElement(_navLink.NavLinkBtn, { name: 'Register',
            style: navBtn,
            className: _button2.default.primaryBtn,
            handleClick: this.navigateToPath.bind(this, '/register') })
        ),
        _react2.default.createElement(
          'div',
          { style: minHeightStyle },
          _react2.default.createElement(
            _reactRouter.Switch,
            null,
            _react2.default.createElement(_ScrollToTopRoute2.default, { exact: true, path: '/', component: _LanderPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/contactus', component: _LanderPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/register*', component: _RegistrationWizardPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/forgot-password', component: _ForgotPassword2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/reset-password/:id', component: _ResetPassword2.default }),
            _react2.default.createElement(_ScrollToTopRoute2.default, { path: '/admin', component: _Admin2.default }),
            _react2.default.createElement(_ScrollToTopRoute2.default, { path: '/login', component: _Student2.default }),
            _react2.default.createElement(_ScrollToTopRoute2.default, { path: '/signup', component: _Signup2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '*', render: function render() {
                return _react2.default.createElement(_reactRouter.Redirect, { to: '/' });
              } })
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Lander;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(function () {
  return {};
}, { loadCourses: _courses.loadCourses, loadCamps: _courses.loadCamps, loadSchools: _schools.loadSchools })(Lander));

/***/ }),
/* 602 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(55);

var INITIAL_STATE = {
  camps: [],
  campsError: ''
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _types.SET_CAMPS:
      return {
        camps: action.payload,
        campsError: ''
      };
    case _types.LOAD_CAMPS_FAILED:
      return {
        camps: [],
        campsError: action.payload
      };
  }
  return state;
};

/***/ }),
/* 603 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(55);

var INITIAL_STATE = {
  courses: [],
  coursesError: ''
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _types.ADD_COURSE:
      return {
        courses: (state.courses || []).slice(0).concat(action.payload),
        coursesError: ''
      };
    case _types.UPDATE_COURSE:
      var updatedCourse = state.courses.find(function (course) {
        return course._id === action.payload._id;
      });
      if (!updatedCourse) {
        break;
      }
      var updatedCourses = state.courses.slice(0);
      updatedCourses[updatedCourses.indexOf(updatedCourse)] = action.payload;
      return {
        courses: updatedCourses,
        coursesError: ''
      };
    case _types.SET_COURSES:
      return {
        courses: action.payload,
        coursesError: ''
      };
    case _types.LOAD_COURSES_FAILED:
      return {
        courses: [],
        coursesError: action.payload
      };
  }
  return state;
};

/***/ }),
/* 604 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _registration = __webpack_require__(605);

var _registration2 = _interopRequireDefault(_registration);

var _courses = __webpack_require__(603);

var _courses2 = _interopRequireDefault(_courses);

var _camps = __webpack_require__(602);

var _camps2 = _interopRequireDefault(_camps);

var _schools = __webpack_require__(606);

var _schools2 = _interopRequireDefault(_schools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  camps: _camps2.default,
  courses: _courses2.default,
  registration: _registration2.default,
  schools: _schools2.default
};

/***/ }),
/* 605 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(55);

var initState = function initState() {
  return {
    courses: [],
    student: {
      firstName: '',
      lastName: '',
      dateOfBirth: null,
      allergies: '',
      notes: '',
      level: '',
      guardians: [{
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      }]
    },
    payment: {},
    charges: {},
    error: {
      message: '',
      status: ''
    },
    isCamp: false
  };
};
var INITIAL_STATE = initState();

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _types.CLEAR_REGISTRATION:
      return initState();
    case _types.SET_REGISTRATION:
      return _extends({}, state, action.payload);
    case _types.SET_IS_CAMP:
      return _extends({}, state, {
        isCamp: action.payload
      });
    case 'flipMode':
      return _extends({}, initState(), {
        isCamp: action.payload
      });
  }
  return state;
};

/***/ }),
/* 606 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(55);

var INITIAL_STATE = {
  schools: [],
  schoolsError: ''
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _types.UPDATE_SCHOOL:
      var updatedSchool = state.schools.find(function (school) {
        return school._id === action.payload._id;
      });
      if (!updatedSchool) {
        break;
      }
      var updatedSchools = state.schools.slice(0);
      updatedSchools[updatedSchools.indexOf(updatedSchool)] = action.payload;
      return {
        schools: updatedSchools,
        schoolsError: ''
      };
    case _types.ADD_SCHOOL:
      return {
        schools: (state.schools || []).slice(0).concat(action.payload),
        schoolsError: ''
      };
    case _types.SET_SCHOOLS:
      return {
        schools: action.payload,
        schoolsError: ''
      };
    case _types.LOAD_SCHOOLS_FAILED:
      return {
        schools: [],
        schoolsError: action.payload
      };
  }
  return state;
};

/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(226);

var _reducers = __webpack_require__(570);

var _reducers2 = _interopRequireDefault(_reducers);

var _reducers3 = __webpack_require__(604);

var _reducers4 = _interopRequireDefault(_reducers3);

var _reducers5 = __webpack_require__(618);

var _reducers6 = _interopRequireDefault(_reducers5);

var _reducers7 = __webpack_require__(550);

var _reducers8 = _interopRequireDefault(_reducers7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)(_extends({}, _reducers2.default, _reducers4.default, _reducers6.default, _reducers8.default));

/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _reactRouter = __webpack_require__(151);

var _constants = __webpack_require__(250);

var _session = __webpack_require__(69);

var _courses = __webpack_require__(115);

var _schools = __webpack_require__(116);

var _Navbar = __webpack_require__(158);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _navLink = __webpack_require__(113);

var _Footer = __webpack_require__(238);

var _Footer2 = _interopRequireDefault(_Footer);

var _IconNavbar = __webpack_require__(613);

var _IconNavbar2 = _interopRequireDefault(_IconNavbar);

var _CoursePage = __webpack_require__(610);

var _CoursePage2 = _interopRequireDefault(_CoursePage);

var _HomeworkPage = __webpack_require__(612);

var _HomeworkPage2 = _interopRequireDefault(_HomeworkPage);

var _ProfilePage = __webpack_require__(614);

var _ProfilePage2 = _interopRequireDefault(_ProfilePage);

var _redirect = __webpack_require__(616);

var _redirect2 = _interopRequireDefault(_redirect);

var _styles = __webpack_require__(278);

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = __webpack_require__(710);

var _styles4 = _interopRequireDefault(_styles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseIconUrl = '/assets/school';

var CoursePageWithLevel = (0, _reactRouterDom.withRouter)(function (props) {
  return _react2.default.createElement(
    'div',
    { className: _styles4.default.paper },
    _react2.default.createElement(_CoursePage2.default, { index: props.match.params.weekNumber - 1 || 0,
      level: props.location.pathname.split('/')[1] })
  );
});

var routes = _constants.navLinks.reduce(function (arr, link) {
  var path = link.url;

  return arr.concat({ path: path, component: CoursePageWithLevel, exact: true }, { path: path + '/week/:weekNumber', component: CoursePageWithLevel, exact: true }, { path: path + '/:activity', component: _HomeworkPage2.default, exact: false });
}, []);

var School = function (_React$Component) {
  _inherits(School, _React$Component);

  function School() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, School);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = School.__proto__ || Object.getPrototypeOf(School)).call.apply(_ref, [this].concat(args))), _this), _this.isCoursePage = function () {
      return _constants.navLinks.map(function (_ref2) {
        var url = _ref2.url;
        return url;
      }).some(function (url) {
        return new RegExp(url + '(/week/.*)?$').test(_this.props.location.pathname);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(School, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.loadCourses();
      this.props.loadSchools();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        this.isCoursePage() && _react2.default.createElement(
          _Navbar2.default,
          { links: [] },
          _react2.default.createElement(_IconNavbar2.default, { baseUrl: baseIconUrl, links: _constants.navLinks.map(function (link) {
              return _extends({}, link, {
                className: _styles2.default.navLink,
                active: _this2.props.location.pathname === link.url
              });
            }) }),
          _react2.default.createElement(_navLink.NavLinkBtn, { name: 'Logout', handleClick: this.props.logout })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouter.Switch,
            null,
            routes.map(function (route) {
              return _react2.default.createElement(_reactRouter.Route, route);
            }),
            _react2.default.createElement(_reactRouter.Route, { path: '/profile', component: _ProfilePage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '*', component: _redirect2.default })
          )
        ),
        this.isCoursePage() && _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return School;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(function () {
  return {};
}, { logout: _session.logout, loadCourses: _courses.loadCourses, loadSchools: _schools.loadSchools })(School));

/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _fp = __webpack_require__(195);

var _util = __webpack_require__(251);

var _styles = __webpack_require__(705);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Placeholder = function Placeholder() {
  return _react2.default.createElement('div', { className: _styles2.default.placeholder });
};

var Activity = function Activity(props) {
  var className = _styles2.default.activity + ' ' + (props.className || '');
  return _react2.default.createElement(
    'div',
    { className: className,
      onClick: props.handleClick,
      onMouseLeave: props.handleMouseLeave,
      onMouseEnter: props.handleMouseEnter },
    !props.loaded && _react2.default.createElement(Placeholder, null),
    _react2.default.createElement('img', { src: props.normalUrl,
      onLoad: props.handleImgLoaded,
      className: !props.loaded || props.active ? _styles2.default.hide : '' }),
    _react2.default.createElement('img', { src: props.rollUrl,
      className: !props.loaded || !props.active ? _styles2.default.hide : '' }),
    _react2.default.createElement(
      'footer',
      { className: _styles2.default.footer },
      props.name
    )
  );
};

var ActivityContainer = function (_React$Component) {
  _inherits(ActivityContainer, _React$Component);

  function ActivityContainer(props) {
    _classCallCheck(this, ActivityContainer);

    var _this = _possibleConstructorReturn(this, (ActivityContainer.__proto__ || Object.getPrototypeOf(ActivityContainer)).call(this, props));

    _this.isComplete = function (progress) {
      if (!progress) {
        return false;
      }
      var courseProgress = progress[_this.props.courseName];
      if (courseProgress) {
        return Array.isArray(courseProgress) && courseProgress.some(function (item) {
          return item.weekNumber === _this.props.weekNumber && item.index === _this.props.index;
        });
      }
      return false;
    };

    _this.handleClick = function (event) {
      _this.props.history.push('/' + _this.props.courseName + '/' + _this.props.id);
    };

    _this.handleMouseEnter = function (event) {
      _this.setState({
        active: true
      });
    };

    _this.handleMouseLeave = function (event) {
      _this.setState({
        active: false
      });
    };

    _this.handleImgLoaded = function (event) {
      _this.setState({
        loaded: true
      });
    };

    _this.state = {
      active: props.active,
      loaded: false,
      isComplete: _this.isComplete(props.progress)
    };
    return _this;
  }

  _createClass(ActivityContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        isComplete: this.isComplete(nextProps.progress)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var imgKey = (0, _util.getPuzzleImgKey)(this.props.type);
      var handleMouseEnter = this.handleMouseEnter,
          handleMouseLeave = this.handleMouseLeave,
          handleClick = this.handleClick,
          handleImgLoaded = this.handleImgLoaded;

      var normalUrl = this.props.baseUrl + '/' + imgKey + (this.state.isComplete ? '-complete' : '') + '.png';
      var rollUrl = this.props.baseUrl + '/' + imgKey + '-roll.png';
      var props = _extends({}, this.props, this.state, {
        handleMouseEnter: handleMouseEnter,
        handleMouseLeave: handleMouseLeave,
        handleClick: handleClick,
        handleImgLoaded: handleImgLoaded,
        normalUrl: normalUrl,
        rollUrl: rollUrl
      });
      return _react2.default.createElement(Activity, props);
    }
  }]);

  return ActivityContainer;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref, ownProps) {
  var user = _ref.user;

  var _ref2 = user || {},
      progress = _ref2.progress;

  return _extends({}, ownProps, {
    progress: progress
  });
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {})(ActivityContainer));

/***/ }),
/* 610 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _Course = __webpack_require__(611);

var _Course2 = _interopRequireDefault(_Course);

var _activities = __webpack_require__(248);

var _util = __webpack_require__(251);

var _layout = __webpack_require__(59);

var _layout2 = _interopRequireDefault(_layout);

var _styles = __webpack_require__(99);

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = __webpack_require__(706);

var _styles4 = _interopRequireDefault(_styles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseUrl = '/assets/school/activities';
var baseIconUrl = '/assets/school';

var CourseAvatar = function CourseAvatar(props) {
  var baseUrl = '/assets/school';
  return _react2.default.createElement(
    'div',
    { className: 'flex justify-start items-center ' + _styles4.default.courseAvatar },
    _react2.default.createElement('img', { src: baseUrl + '/' + props.name + '-roll.png' }),
    _react2.default.createElement(
      'div',
      { className: _styles4.default.playerCard },
      _react2.default.createElement(
        'h3',
        null,
        _react2.default.createElement(
          'strong',
          null,
          'Level: '
        ),
        props.name
      ),
      props.user && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'strong',
          null,
          'Player: '
        ),
        _react2.default.createElement(
          'span',
          null,
          props.user.personal.firstName + ' ' + props.user.personal.lastName
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/profile' },
            'Edit Profile'
          )
        )
      )
    )
  );
};

var CoursePage = function (_React$Component) {
  _inherits(CoursePage, _React$Component);

  function CoursePage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CoursePage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CoursePage.__proto__ || Object.getPrototypeOf(CoursePage)).call.apply(_ref, [this].concat(args))), _this), _this.loadActivities = function () {
      if (!_this.props.weeks) {
        _this.props.loadActivities(_this.props.level).catch(function (err) {
          return console.log(err);
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CoursePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadActivities();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.loadActivities();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { padding: '40px', paddingTop: '20px' },
          className: 'flex items-center flex-column ' + _layout2.default.container },
        _react2.default.createElement('img', { style: { left: '0' },
          className: _styles4.default.flyerBg, src: '/assets/flyer-bg.png' }),
        _react2.default.createElement('img', { style: { right: '0' },
          className: _styles4.default.flyerBg + ' ' + _styles2.default.reverse,
          src: '/assets/flyer-bg.png' }),
        _react2.default.createElement(CourseAvatar, { user: this.props.user,
          name: this.props.level || "pawn" }),
        !(this.props.weeks || []).length && _react2.default.createElement('div', null),
        (this.props.weeks || []).length > 0 && _react2.default.createElement(_Course2.default, { name: this.props.level + ' level',
          index: this.props.index,
          weeks: this.props.weeks })
      );
    }
  }]);

  return CoursePage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2, ownProps) {
  var activities = _ref2.activities,
      user = _ref2.user;

  return _extends({
    weeks: (0, _util.getWeeks)(activities[ownProps.level]),
    user: user
  }, ownProps);
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { loadActivities: _activities.loadActivities })(CoursePage));

/***/ }),
/* 611 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(499);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _Separator = __webpack_require__(159);

var _Separator2 = _interopRequireDefault(_Separator);

var _Week = __webpack_require__(615);

var _Week2 = _interopRequireDefault(_Week);

var _styles = __webpack_require__(707);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var nextArrow = _react2.default.createElement('img', { src: '/assets/school/nextIcon.png' });
var prevArrow = _react2.default.createElement('img', { src: '/assets/school/prevIcon.png' });

var WeekTitle = function WeekTitle(props) {
  var baseUrl = '/assets/school';
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.weekTitle },
    _react2.default.createElement('img', { src: baseUrl + '/week' + props.index + '.png' })
  );
};

var Pagination = function Pagination(props) {
  var weeks = [].concat(_toConsumableArray(Array(props.len + 1).keys())).slice(1);
  return _react2.default.createElement(
    'div',
    { className: 'flex ' + _styles2.default.pagination },
    weeks.map(function (week, idx) {
      return _react2.default.createElement(
        'div',
        { key: 'page-' + idx, className: 'flex items-center' },
        _react2.default.createElement(
          'div',
          { className: props.active === week ? _styles2.default.active : '',
            onClick: function onClick(event) {
              if (week !== props.active) {
                props.handlePageClick(week - 1);
              }
            } },
          _react2.default.createElement(
            'span',
            { style: { cursor: "pointer", fontSize: "18px" } },
            week
          )
        ),
        idx < weeks.length - 1 && _react2.default.createElement(_Separator2.default, { className: _styles2.default.separator, key: 'separator-' + idx })
      );
    })
  );
};

var Course = function (_React$Component) {
  _inherits(Course, _React$Component);

  function Course(props) {
    _classCallCheck(this, Course);

    var _this = _possibleConstructorReturn(this, (Course.__proto__ || Object.getPrototypeOf(Course)).call(this, props));

    _this.handlePageClick = function (index) {
      _this.refs.slider.slickGoTo(index);
    };

    var settings = {
      draggable: false,
      swipeToSlide: false,
      swipe: false,
      autoplay: false,
      speed: 600,
      nextArrow: nextArrow,
      prevArrow: prevArrow,
      beforeChange: props.handleBeforeChange,
      initialSlide: props.index || 0
    };
    _this.state = { settings: settings };
    return _this;
  }

  _createClass(Course, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.weeks && nextProps.weeks) {
        return this.props.weeks.length && nextProps.weeks.length && this.props.weeks[0].activities[0].courseName !== nextProps.weeks[0].activities[0].courseName;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactSlick2.default,
        _extends({ ref: 'slider' }, this.state.settings),
        this.props.weeks.map(function (week, idx) {
          return _react2.default.createElement(
            'div',
            { key: week.name, className: 'slide' },
            _react2.default.createElement(_Week2.default, week)
          );
        })
      );
    }
  }]);

  return Course;
}(_react2.default.Component);

var CourseShell = function (_React$Component2) {
  _inherits(CourseShell, _React$Component2);

  function CourseShell(props) {
    _classCallCheck(this, CourseShell);

    var _this2 = _possibleConstructorReturn(this, (CourseShell.__proto__ || Object.getPrototypeOf(CourseShell)).call(this, props));

    _this2.handleBeforeChange = function (oldVal, newVal) {
      _this2.setState({
        active: newVal + 1
      });
    };

    _this2.handlePageClick = function (index) {
      _this2.refs.course.handlePageClick(index);
    };

    _this2.state = {
      active: props.index !== undefined ? props.index + 1 : 1
    };
    return _this2;
  }

  _createClass(CourseShell, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'courseIndex' },
        _react2.default.createElement(
          'div',
          { className: 'flex justify-between flex-wrap course-header' },
          _react2.default.createElement(WeekTitle, { index: this.state.active }),
          _react2.default.createElement(Pagination, { handlePageClick: this.handlePageClick,
            active: this.state.active,
            len: this.props.weeks.length })
        ),
        _react2.default.createElement(Course, { ref: 'course', handleBeforeChange: this.handleBeforeChange,
          weeks: this.props.weeks, index: this.props.index })
      );
    }
  }]);

  return CourseShell;
}(_react2.default.Component);

exports.default = CourseShell;

/***/ }),
/* 612 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _activities = __webpack_require__(248);

var _user = __webpack_require__(156);

var _HighlightPuzzle = __webpack_require__(556);

var _HighlightPuzzle2 = _interopRequireDefault(_HighlightPuzzle);

var _homework = __webpack_require__(558);

var _homework2 = _interopRequireDefault(_homework);

var _concentration = __webpack_require__(552);

var _concentration2 = _interopRequireDefault(_concentration);

var _game = __webpack_require__(555);

var _game2 = _interopRequireDefault(_game);

var _maze = __webpack_require__(560);

var _maze2 = _interopRequireDefault(_maze);

var _solitaire = __webpack_require__(563);

var _solitaire2 = _interopRequireDefault(_solitaire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getPuzzleComponent = function getPuzzleComponent(type) {
  switch (type) {
    case 'highlight':
      return _HighlightPuzzle2.default;
    case 'maze':
      return _maze2.default;
    case 'memory':
      return _concentration2.default;
    case 'puzzle':
      return _homework2.default;
    case 'scenario':
      return _game2.default;
    case 'boss':
      return _game2.default;
    case 'solitaire':
      return _solitaire2.default;
  }
  return function () {
    return _react2.default.createElement('div', null);
  };
};

var getConnectedPuzzleComponent = function getConnectedPuzzleComponent(type) {
  return (0, _reactRedux.connect)(function () {
    return {};
  }, {});
};

var Placeholder = function Placeholder(props) {
  return _react2.default.createElement('div', null);
};

var HomeworkPage = function (_React$Component) {
  _inherits(HomeworkPage, _React$Component);

  function HomeworkPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HomeworkPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HomeworkPage.__proto__ || Object.getPrototypeOf(HomeworkPage)).call.apply(_ref, [this].concat(args))), _this), _this.getHomeLink = function () {
      return '/' + _this.props.courseName + '/week/' + _this.props.weekNumber;
    }, _this.handleComplete = function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this.props.updateProgressByLevel(_this.props.courseName, _this.props.weekNumber, _this.props.index, data);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HomeworkPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.type) {
        this.props.loadActivities(this.props.location.pathname.split('/')[1]);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var PuzzleComponent = getPuzzleComponent(this.props.type);
      return _react2.default.createElement(
        'div',
        null,
        !this.props.type && _react2.default.createElement(Placeholder, null),
        this.props.type !== undefined && _react2.default.createElement(PuzzleComponent, _extends({ name: this.props.name,
          onComplete: this.handleComplete,
          getHomeLink: this.getHomeLink,
          boardId: 'chessboard' }, this.props))
      );
    }
  }]);

  return HomeworkPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2, ownProps) {
  var activities = _ref2.activities;

  var activityId = ownProps.match.params.activity;
  var level = activityId.split('-')[0];
  var course = activities[level] || [];
  var activity = course.find(function (a) {
    return a.courseName + '-' + a.weekNumber + '-' + a.index === activityId;
  });
  if (!activity) {
    return _extends({}, ownProps);
  } else {
    return _extends({
      type: activity.type,
      courseName: activity.courseName,
      weekNumber: activity.weekNumber,
      index: activity.index,
      name: activity.name
    }, activity.data, ownProps);
  }
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadActivities: _activities.loadActivities, updateProgressByLevel: _user.updateProgressByLevel })(HomeworkPage);

/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _styles = __webpack_require__(278);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconLink = function (_React$Component) {
  _inherits(IconLink, _React$Component);

  function IconLink(props) {
    _classCallCheck(this, IconLink);

    var _this = _possibleConstructorReturn(this, (IconLink.__proto__ || Object.getPrototypeOf(IconLink)).call(this, props));

    _this.navigateToLink = function () {
      _this.props.history.push(_this.props.url);
    };

    _this.showRollover = function () {
      _this.setState({
        active: true
      });
    };

    _this.hideRollover = function () {
      _this.setState({
        active: false
      });
    };

    _this.state = {
      active: props.active || false
    };
    _this.activeRoute = props.active;
    return _this;
  }

  _createClass(IconLink, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.activeRoute = nextProps.active;
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return this.activeRoute !== true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className || '',
          onClick: this.navigateToLink,
          onMouseEnter: this.showRollover,
          onMouseLeave: this.hideRollover },
        _react2.default.createElement('img', { className: this.state.active ? _styles2.default.active : '',
          src: this.props.baseUrl + '/' + this.props.type + '-roll.png' })
      );
    }
  }]);

  return IconLink;
}(_react2.default.Component);

var IconLinkContainer = (0, _reactRouterDom.withRouter)(IconLink);

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'flex items-center ' + _styles2.default.iconNavbar },
    props.links.map(function (link) {
      return _react2.default.createElement(IconLinkContainer, _extends({
        className: _styles2.default.iconLink,
        baseUrl: props.baseUrl,
        key: link.url }, link));
    })
  );
};

/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _AutoComplete = __webpack_require__(62);

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Checkbox = __webpack_require__(105);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _DropDownMenu = __webpack_require__(198);

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _MenuItem = __webpack_require__(107);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RaisedButton = __webpack_require__(21);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = __webpack_require__(35);

var _TextField2 = _interopRequireDefault(_TextField);

var _user = __webpack_require__(156);

var _AvatarCarousel = __webpack_require__(237);

var _AvatarCarousel2 = _interopRequireDefault(_AvatarCarousel);

var _CourseForSchool = __webpack_require__(245);

var _CourseForSchool2 = _interopRequireDefault(_CourseForSchool);

var _constants = __webpack_require__(117);

var _layout = __webpack_require__(59);

var _layout2 = _interopRequireDefault(_layout);

var _form = __webpack_require__(39);

var _form2 = _interopRequireDefault(_form);

var _styles = __webpack_require__(708);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var avatars = ['pawn', 'knight', 'bishop', 'rook', 'queen', 'king', 'advanced 1', 'advanced 2', 'advanced 3'];

var schoolFilter = function schoolFilter(searchText, key) {
  return searchText !== '' && key.toLowerCase().indexOf(searchText.toLowerCase()) === 0;
};

var NoCourseMessage = function NoCourseMessage(_ref) {
  var name = _ref.name;

  return _react2.default.createElement(
    'div',
    null,
    'No courses found for ' + name
  );
};

var ProfilePage = function (_React$Component) {
  _inherits(ProfilePage, _React$Component);

  function ProfilePage(props) {
    _classCallCheck(this, ProfilePage);

    var _this = _possibleConstructorReturn(this, (ProfilePage.__proto__ || Object.getPrototypeOf(ProfilePage)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = _extends({
      error: '',
      firstName: (props.personal || {}).firstName || '',
      lastName: (props.personal || {}).lastName || '',
      email: props.email || '',
      level: props.level.replace(/(\d)/g, ' $1') || 'pawn',
      schoolError: '',
      courseId: props.courseId || '',
      viewSchools: props.courseId ? true : false,
      success: ''
    }, _this.getCourseInfo(props));
    return _this;
  }

  _createClass(ProfilePage, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(_extends({
        firstName: (nextProps.personal || {}).firstName || '',
        lastName: (nextProps.personal || {}).lastName || '',
        email: nextProps.email || '',
        level: nextProps.level.replace(/(\d)/g, ' $1') || 'pawn',
        courseId: nextProps.courseId || '',
        viewSchools: nextProps.courseId ? true : false
      }, this.getCourseInfo(nextProps)));
    }
  }, {
    key: 'render',
    value: function render() {
      var hideAutoFillColorStyle = {
        WebkitBoxShadow: '0 0 0 1000px white inset'
      };
      var hintStyle = {
        zIndex: '1',
        pointerEvents: 'none'
      };
      var menuProps = {
        desktop: true,
        disableAutoFocus: true
      };
      return _react2.default.createElement(
        'div',
        { className: 'flex justify-center ' + _layout2.default.container },
        _react2.default.createElement(_AvatarCarousel2.default, { index: avatars.indexOf(this.state.level),
          ref: 'carousel', autoplay: false }),
        _react2.default.createElement(
          'form',
          { style: { width: '600px', margin: '0' },
            className: _form2.default.form + ' ' + _styles2.default.signupForm,
            onSubmit: this.handleSubmit.bind(this) },
          this.state.error && _react2.default.createElement(
            'p',
            { style: { color: '#f44336' } },
            this.state.error
          ),
          this.state.success && _react2.default.createElement(
            'p',
            { style: { color: '#5cb85c' } },
            this.state.success
          ),
          _react2.default.createElement(
            'h1',
            null,
            'Edit Profile'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, { hintText: 'Enter your first name',
              type: 'text',
              required: true,
              fullWidth: true,
              value: this.state.firstName,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              onChange: this.handleFirstNameChange.bind(this) })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, { hintText: 'Enter your last name',
              type: 'text',
              required: true,
              value: this.state.lastName,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              fullWidth: true,
              onChange: this.handleLastNameChange.bind(this) })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, { hintText: 'Enter your email',
              type: 'email',
              required: true,
              value: this.state.email,
              inputStyle: hideAutoFillColorStyle,
              hintStyle: hintStyle,
              fullWidth: true,
              onChange: this.handleEmailChange.bind(this) })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _DropDownMenu2.default,
              { required: true, value: this.state.level,
                onChange: this.handleLevelChange,
                style: { width: '400px', right: '24px' },
                autoWidth: false,
                menuItemStyle: { textTransform: 'capitalize' },
                labelStyle: { textTransform: 'capitalize' } },
              _constants.chessLevels.map(function (level) {
                return _react2.default.createElement(_MenuItem2.default, { key: level, value: level, primaryText: level });
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: { marginTop: '20px' } },
            _react2.default.createElement(_RaisedButton2.default, { style: { marginRight: '20px' }, type: 'submit',
              disabledBackgroundColor: '#aaa',
              disabled: this.state.loading,
              label: '' + (this.state.loading ? '...' : 'Submit'),
              primary: true }),
            _react2.default.createElement(_RaisedButton2.default, { type: 'button', onClick: this.navigateToRoot,
              secondary: true, label: 'Back' })
          )
        )
      );
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(searchText) {
      this.setState({
        searchText: searchText
      });
    }
  }, {
    key: 'handleFirstNameChange',
    value: function handleFirstNameChange(event) {
      this.setState({
        firstName: event.target.value
      });
    }
  }, {
    key: 'handleLastNameChange',
    value: function handleLastNameChange(event) {
      this.setState({
        lastName: event.target.value
      });
    }
  }, {
    key: 'handleEmailChange',
    value: function handleEmailChange(event) {
      this.setState({
        email: event.target.value
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      var update = {
        email: this.state.email,
        personal: {
          firstName: this.state.firstName,
          lastName: this.state.lastName
        },
        level: this.state.level.replace(/\s/g, '') || 'pawn',
        courseId: this.state.courseId
      };
      this.setState({ loading: true });
      this.props.updateUser(update).then(function (response) {
        _this2.setState({ loading: false, error: '', success: 'Profile has been successfully updated' });
      }).catch(function (err) {
        _this2.setState({ loading: false, error: 'There was an error updating your profile', success: '' });
      });
    }
  }]);

  return ProfilePage;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getCourseInfo = function (props) {
    var course = props.courses.find(function (c) {
      return c._id === props.courseId;
    }) || {};
    var school = props.schools.find(function (s) {
      return s._id === course.locationId;
    });
    var searchText = '',
        schoolName = '',
        schoolId = '',
        coursesForSchool = '',
        selectedRows = [];

    if (school) {
      searchText = schoolName = school.name;
      schoolId = school._id;
      coursesForSchool = props.courses.filter(function (course) {
        return course.school._id === school._id;
      });
      selectedRows = [coursesForSchool.indexOf(course)];
    }
    return {
      searchText: searchText, schoolName: schoolName, schoolId: schoolId, coursesForSchool: coursesForSchool, selectedRows: selectedRows
    };
  };

  this.navigateToRoot = function () {
    _this3.props.history.push('/');
  };

  this.handleCheckbox = function () {
    _this3.setState(function (prevState) {
      var nextViewSchools = !prevState.viewSchools;
      var update = {
        viewSchools: nextViewSchools
      };
      if (!nextViewSchools) {
        Object.assign(update, {
          schoolId: '',
          schoolName: '',
          searchText: '',
          coursesForSchool: [],
          selectedRows: [],
          schoolError: '',
          courseId: ''
        });
      }
      return update;
    });
  };

  this.handleRowSelect = function (selectedRows) {
    _this3.setState(function (prevState) {
      return {
        selectedRows: selectedRows,
        courseId: selectedRows.length ? prevState.coursesForSchool[selectedRows[0]]._id : ''
      };
    });
  };

  this.handleLevelChange = function (event, index, level) {
    _this3.refs.carousel.handleLevelChange(index);
    _this3.setState({
      level: level
    });
  };
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var session = _ref2.session,
      schools = _ref2.schools,
      courses = _ref2.courses,
      user = _ref2.user;

  return _extends({
    error: session.sessionError,
    schools: schools.schools || [],
    courses: courses.courses || []
  }, user);
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { updateUser: _user.updateUser })(ProfilePage));

/***/ }),
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(250);

var _Activity = __webpack_require__(609);

var _Activity2 = _interopRequireDefault(_Activity);

var _styles = __webpack_require__(709);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.week },
    props.showName && _react2.default.createElement(
      'h1',
      null,
      'Week ' + props.index + ': ' + props.name
    ),
    _react2.default.createElement(
      'div',
      { className: 'flex flex-wrap ' + _styles2.default.activities },
      props.activities.map(function (activity) {
        return _react2.default.createElement(_Activity2.default, _extends({ baseUrl: activity.baseUrl || _constants.activityAssetUrl,
          className: _styles2.default.tile,
          key: activity.id }, activity));
      })
    )
  );
};

/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(19);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, (Redirect.__proto__ || Object.getPrototypeOf(Redirect)).apply(this, arguments));
  }

  _createClass(Redirect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.history.replace('/' + (this.props.level || 'pawn'));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null);
    }
  }]);

  return Redirect;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.user;

  return _extends({}, user);
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {})(Redirect));

/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(249);

var INITIAL_STATE = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _types.SET_ACTIVITIES:
      return _extends({}, state, action.payload);
  }
  return state;
};

/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _activities = __webpack_require__(617);

var _activities2 = _interopRequireDefault(_activities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  activities: _activities2.default
};

/***/ }),
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 682 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"registrationLink":"CvMKuMMUcY33wB7z8nVMb"};

/***/ }),
/* 683 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"adminPage":"_2l3_nz-zH4KQ2w3DGorYqZ"};

/***/ }),
/* 684 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"boardContainer":"_2RVONaUhZdOx_ZNayk4pDP"};

/***/ }),
/* 685 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 686 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"instructions":"_24gRD_e8z-1CNikbqtYQ-M"};

/***/ }),
/* 687 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"solitaireContainer":"_1if7PnA5eTqzGh2SxQncoy","solitaireBoard":"xEjvt3jhFlK3ZjJ-2--Am"};

/***/ }),
/* 688 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"avatarCarousel":"_37fxlu7km-O1ZtYelwSfR5"};

/***/ }),
/* 689 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"avatar":"_11AoCEuq_i1D3ibNOELv1U"};

/***/ }),
/* 690 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"tvJ0TJJiP6qSX47mdfi2Y"};

/***/ }),
/* 691 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"location":"_1IM-s7udtBqXABWqra-nrG","info":"_2Eqkq9XWzipq4zV0xhnCfG","gMap":"-J_BdHzHsqKC50B0OQ_ir"};

/***/ }),
/* 692 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"separator":"_3m3jlsuSNaDFEw5sJGp9xy"};

/***/ }),
/* 693 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"adminLogin":"_23SXFZPFXeiF_sVzc6HoZr","loginContainer":"hXNn68bit58nyUvqN9HJy"};

/***/ }),
/* 694 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3sh70123kRDZ8PNEeJyshW"};

/***/ }),
/* 695 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"campSection":"_2du8zFm8PkkC_ypFY94ps","container":"_3qt-Ch05AhZyWYhN96zyxe","info":"_1saWA_M-QLG6jUWg9tbBrw","circle":"_3qBYyR6ft5C1zLIIqP0x8a"};

/***/ }),
/* 696 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 697 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"contactSection":"_2xdcwYWxoJFG8VwMMSFhux","container":"_3Bvm28lt_Sd3AdZXiVI86-","contact":"_126kJp3oVUNrWmALjXYi5e","loading":"_1vIEh7onR2i4-imYO7rkRb","spin":"_2RNg-_iOR3FT_v--tMv54V"};

/***/ }),
/* 698 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"flyer":"_39qi0IJb_ULtSj-CrD5sEH","imgLeft":"_1vi7FKnGzC-Z96Rl1FteJ6","imgRight":"_3TCC2x3wniLqK3dgSxxq2i","introContainer":"_25bvlWzXcQCZZDxBLzCOhF","signalling":"_1_RQJrMeWTvhAq8b8PWlt3","introLogo":"_1YhEIFIRJohdjiqG1pMJ07"};

/***/ }),
/* 699 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"gallerySection":"R4r4q-FQZvrIUfhKJ2qOt","container":"_33XnecHpo2dXNo_7XEydb1","gallery":"kiACsxto7N-VvAXPYjTLn","row":"_1dr7_2_AUVL1qoNrv2HT06","thirdRow":"Y084L1j53a2DZiC5JzMcq","firstRow":"_1_iUHVN7tPN2dibV70a0LC","cell1":"_258bjH78fgCiL28DZXe4YB","cell2":"_7n0yVWUA1bI4H3qLRp0-3","cell3":"_2e80qkwyZJTEJIlew8nEaY","secondRow":"_30SJSXbkD846wT9yt6tXCq","photo":"OaBuCaWj34TffPEPNydHQ","assistant":"_1Odhu4AS8GoVl4uvS5CPi4","bday":"_21pL0rZsZcRi60NoIqdBnG","notation":"_2pFpddkC_wLbG1MLM5zWuj","popsicles":"_1ZlrOER_ooKF1pqIXjY44I","ruylopez":"_2jgVwwT-xReNGCruu1Tkbj","tournament":"_30ojFHdDnVC1idCsr6nZzO","participation":"RWC74i2FPGzvT8mC9GSc1","concentration":"_2jl9qtxlca_-2LKLOSHCL7","photoCaption":"JbSuQ9WPK2wZNOJTd523R","sm":"_112YXCVz6ZgM3aFq2puN8Q"};

/***/ }),
/* 700 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"heroSection":"_115UMkYki8J2Dm00JFQ9Ik","video":"_2xdxWhDw4a_zdNohuVV78z","bg":"_3hbyjXJWMLp-XuF8H--5J","info":"_3RImff-W364OinqQ6HNBME"};

/***/ }),
/* 701 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"teacherSection":"_28VIYyk4-Dh9ad4gFNVy35","container":"_354982R9kfZvoaV6gOjHcQ","teacher":"_1qvI6LYrCVNJFoLDRLvDI1","square":"_2_DZj_VNrY1mA6qs3pc7KR","teacherContainer":"_1cOxm2muaiKjMv_S98gwBu","bio":"_1uq1TKqCj1d-1yvgQsX6m3"};

/***/ }),
/* 702 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"cardDetail":"_16xmqbUVkSjFq_35n_E5gA","label":"d2tjStb3QJ8tdYq7B4G3N"};

/***/ }),
/* 703 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"signupForm":"_2Lt8K80U6-n5KCqO3TzL9n"};

/***/ }),
/* 704 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"adminLogin":"_3yh0u02dRPQvgsI-oAqqWS","loginContainer":"_1DqixAUiw0iM_JOC3HMpmK"};

/***/ }),
/* 705 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"activity":"_291W6OjuWXnqxnNENDUevF","rollOver":"_3o8ROWEyHpiDtjT9-PSQSf","footer":"_2Edb7qXAcoYMU8ECmyJP2q","hide":"ezIlJhCRiuEZN8dGqbQmt","placeholder":"ggtyoxUYsUpZo8xNNPvjo"};

/***/ }),
/* 706 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"courseAvatar":"iZnxUrWM0rxUIxo8YU5s2","playerCard":"_1TbILC2K8s35YjGNWFb94T","flyerBg":"_1uLJ3V3b02xsqtLAXVPG4F"};

/***/ }),
/* 707 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pagination":"_2L-p8Mo4COZs4Go-pPnRT0","active":"_2yRis9X1nZZBukQ2MYJ89T","separator":"_3bDdtEg96HPRNQT-I1mS8o","weekTitle":"j4Zsa0BSxkCfXQAGFhlB7"};

/***/ }),
/* 708 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 709 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"week":"_3A5W_Kof2G3zXyp4ORC38p","activities":"_7s58Ky_bb6lBcOoFzDi_O","tile":"_1j2m4sVa5W-070eGmJT44L"};

/***/ }),
/* 710 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"paper":"_840JvRK6r1sFSmfHQ1wya"};

/***/ })
]),[574]);
//# sourceMappingURL=app.js.map