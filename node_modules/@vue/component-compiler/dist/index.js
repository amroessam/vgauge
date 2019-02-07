"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const compiler_1 = require("./compiler");
exports.createCompiler = ({ script, style, template }) => new compiler_1.SFCCompiler(script, style, template);
exports.createDefaultCompiler = (options = {}) => exports.createCompiler({
    script: Object.assign({}, options.script),
    style: Object.assign({ trim: true }, options.style),
    template: Object.assign({ compiler: require('vue-template-compiler'), compilerOptions: {}, isProduction: process.env.NODE_ENV === 'production', optimizeSSR: process.env.VUE_ENV === 'server' }, options.template)
});
__export(require("./compiler"));
__export(require("./assembler"));
