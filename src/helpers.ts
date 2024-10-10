
export const validateFxn = (output: any, answer: any) => {
    //console.log('\x1b[36m%s\x1b[0m', '🛠 Testing function...');

    if (
        Array.isArray(output) &&
        Array.isArray(answer) &&
        JSON.stringify(output) === JSON.stringify(answer)
    ) {
        console.log(
            '\x1b[32m',
            '✅ CORRECT ARRAYS :: ' + output + ' === ' + answer
        );
    } else if (output === answer) {
        console.log('\x1b[32m', '✅ CORRECT :: ' + output + ' === ' + answer);
    } else {
        console.log(
            '\x1b[31m',
            '⭕ WRONG :: Output was ' + output + ' - expected ' + answer
        );
    }

    //console.log();
};
