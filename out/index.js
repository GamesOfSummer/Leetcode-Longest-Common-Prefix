"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_js_1 = require("./helpers.js");
var chroma_console_1 = require("chroma-console");
var romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
function longestCommonPrefix(strs) {
    var sortedStrs = strs.sort();
    var firsts = sortedStrs[0];
    var lasts = sortedStrs[sortedStrs.length - 1];
    var holderFirsts = firsts;
    var holderLasts = lasts;
    for (var i = 0; i < firsts.length; i++) {
        if (holderFirsts !== holderLasts) {
            holderFirsts = holderFirsts.slice(0, holderFirsts.length - 1);
            holderLasts = holderLasts.slice(0, holderLasts.length - 1);
        }
    }
    return holderFirsts;
}
chroma_console_1.Coco.start();
(0, helpers_js_1.validateFxn)(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
(0, helpers_js_1.validateFxn)(longestCommonPrefix(['DEF', 'ABCC', 'HIJGK']), '');
(0, helpers_js_1.validateFxn)(longestCommonPrefix(['IV', 'IV']), 'IV');
chroma_console_1.Coco.end();
