"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icssReplaceSymbols = require("icss-replace-symbols");

var _icssReplaceSymbols2 = _interopRequireDefault(_icssReplaceSymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parser = function Parser() {
  var _this = this;

  _classCallCheck(this, Parser);

  this.extractExports = function (css) {
    css.each(function (node) {
      if (node.type == "rule" && node.selector == ":export") _this.handleExport(node);
    });
  };

  this.handleExport = function (exportNode) {
    exportNode.each(function (decl) {
      if (decl.type == 'decl') {
        Object.keys(_this.translations).forEach(function (translation) {
          decl.value = decl.value.replace(translation, _this.translations[translation]);
        });
        _this.exportTokens[decl.prop] = decl.value;
      }
    });
    exportNode.remove();
  };

  this.plugin = function (css, result) {
    (0, _icssReplaceSymbols2.default)(css, _this.translations);
    _this.extractExports(css);
  };

  this.exportTokens = {};
  this.translations = {};
};

exports.default = Parser;