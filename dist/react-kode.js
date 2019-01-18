(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('highlight.js')) :
  typeof define === 'function' && define.amd ? define(['react', 'highlight.js'], factory) :
  (global = global || self, global.Kode = factory(global.React, global.hljs));
}(this, function (React, hljs) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  hljs = hljs && hljs.hasOwnProperty('default') ? hljs['default'] : hljs;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  function emptyFunction() {}

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim
    };

    ReactPropTypes.checkPropTypes = emptyFunction;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });
  var propTypes_1 = propTypes.PropTypes;

  /**
   * Using highlight.js covert code to html
   * @param {string} str
   * @param {string} lang
   */

  var highlight = function highlight(str, lang) {
    var snippet = str.trim();
    var matching = snippet.trim().match(/(\r?\n)/);
    var separator = matching ? matching[1] : '';
    var lines = matching ? snippet.split(separator) : [snippet];
    var result = hljs.highlight(lang, lines.shift());
    var html = result.value;

    while (lines.length > 0) {
      result = hljs.highlight(lang, lines.shift(), false, result.top);
      html += separator + result.value;
    }

    result.value = html;
    return result;
  };
  /**
   * The string generate by highlight.js
   * @param {string} htmlString
   */

  var enableLineNumber = function enableLineNumber(htmlString, initialLineNumber) {
    var lines = htmlString.split('\n');
    var innerHTML = lines.map(function (ln, i) {
      return "<tr class=\"hljs-ln\">\n      <td><span class=\"hljs-num\">".concat(initialLineNumber + i, " </span></td>\n      <td>").concat(ln, "</td>\n    </tr>");
    }).join('');
    return "<table class=\"hljs-table\">".concat(innerHTML, "</table>");
  };
  /**
   * Add inline css
   */

  var embedInlineCSS = function embedInlineCSS() {
    var style = document.createElement('style');
    var css = "\n    .hljs-pre {\n      margin: 0;\n    }\n    .hljs-table {\n      border-collapse: collapse;\n    }\n    .hljs-table td:nth-child(2) {\n      width: 100%;\n    }\n    .hljs-num {\n      user-select: none;\n      -moz-user-select: none;\n    }\n  ";
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  };

  var Kode =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Kode, _Component);

    function Kode(props) {
      var _this;

      _classCallCheck(this, Kode);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Kode).call(this, props));
      _this.el = React__default.createRef();
      embedInlineCSS();
      return _this;
    }

    _createClass(Kode, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            children = _this$props.children,
            lang = _this$props.lang,
            isEnableLineNumber = _this$props.isEnableLineNumber,
            initialLineNumber = _this$props.initialLineNumber;
        var snippet = highlight(children, lang || 'plaintext').value;
        var innerHTML = isEnableLineNumber ? enableLineNumber(snippet, initialLineNumber) : snippet;
        this.el.current.innerHTML = innerHTML;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            lang = _this$props2.lang,
            className = _this$props2.className;
        var props = {
          className: className
        };
        return React__default.createElement("div", props, React__default.createElement("pre", {
          className: "hljs-pre"
        }, React__default.createElement("code", {
          className: "hljs ".concat(lang),
          ref: this.el
        })));
      }
    }]);

    return Kode;
  }(React.Component);

  Kode.propTypes = {
    lang: propTypes.string,
    isEnableLineNumber: propTypes.bool,
    initialLineNumber: propTypes.number,
    diff: propTypes.shape({
      addition: propTypes.shape({
        start: propTypes.number,
        end: propTypes.number
      }),
      deletion: propTypes.shape({
        start: propTypes.number,
        end: propTypes.number
      })
    })
  };
  Kode.defaultProps = {
    lang: 'plaintext',
    isEnableLineNumber: false,
    initialLineNumber: 1,
    diff: null
  };

  return Kode;

}));
//# sourceMappingURL=react-kode.js.map
