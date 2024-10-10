import { validateFxn } from './helpers.js';
import { Coco } from 'chroma-console';

const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function longestCommonPrefix(strs: string[]): string {
    const sortedStrs = strs.sort();

    const firsts = sortedStrs[0];
    const lasts = sortedStrs[sortedStrs.length - 1];

    let holderFirsts = firsts;
    let holderLasts = lasts;

    for (let i = 0; i < firsts.length; i++) {
        if (holderFirsts !== holderLasts) {
            holderFirsts = holderFirsts.slice(0, holderFirsts.length - 1);
            holderLasts = holderLasts.slice(0, holderLasts.length - 1);
        }
    }

    return holderFirsts;
}

Coco.start();

validateFxn(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
validateFxn(longestCommonPrefix(['DEF', 'ABCC', 'HIJGK']), '');
validateFxn(longestCommonPrefix(['IV', 'IV']), 'IV');

Coco.end();

export {};
