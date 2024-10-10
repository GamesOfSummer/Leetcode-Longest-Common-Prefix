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
function converter(accumulator, number, i, array) {
    if (array[i] < array[i + 1]) {
        accumulator -= array[i];
    }
    else {
        accumulator += array[i];
    }
    return accumulator;
}
function romanToInt(romanString) {
    var romanStringChars = romanString.split('');
    var numbers = romanStringChars.map(function (x) { return romans[x]; });
    var returnValue = numbers.reduce(function (acc, number, index, numbers) {
        return converter(acc, number, index, numbers);
    });
    return returnValue;
}
//Coco.setColor('firewood');
chroma_console_1.Coco.start();
chroma_console_1.Coco.log('a');
(0, helpers_js_1.validateFxn)(romanToInt('IV'), 4);
(0, helpers_js_1.validateFxn)(romanToInt('LVIII'), 58);
(0, helpers_js_1.validateFxn)(romanToInt('III'), 3);
(0, helpers_js_1.validateFxn)(romanToInt('MCMXCIV'), 1994);
chroma_console_1.Coco.end();
