'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _scopeGenerator = require('./scopeGenerator');

var _scopeGenerator2 = _interopRequireDefault(_scopeGenerator);

var _postcssModulesLocalByDefault = require('postcss-modules-local-by-default');

var _postcssModulesLocalByDefault2 = _interopRequireDefault(_postcssModulesLocalByDefault);

var _postcssModulesScope = require('postcss-modules-scope');

var _postcssModulesScope2 = _interopRequireDefault(_postcssModulesScope);

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _genericNames = require('generic-names');

var _genericNames2 = _interopRequireDefault(_genericNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScopedNameGenerator(opts) {
  var scopedNameGenerator = opts.generateScopedName || _scopeGenerator2.default;

  if (typeof scopedNameGenerator === 'function') return scopedNameGenerator;
  return (0, _genericNames2.default)(scopedNameGenerator, { context: process.cwd() });
}

exports.default = _postcss2.default.plugin('postcss-css-modules', function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var plugins = [_postcssModulesLocalByDefault2.default, _postcssModulesScope2.default];
  var parser = new _Parser2.default();

  _postcssModulesScope2.default.generateScopedName = getScopedNameGenerator(opts);

  return function (css, result) {
    var styles = (0, _postcss2.default)(plugins.concat(parser.plugin)).process(css).css;
    if (opts.getJSON != undefined) {
      opts.getJSON(parser.exportTokens);
    }
  };
});