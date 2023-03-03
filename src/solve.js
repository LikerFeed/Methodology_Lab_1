'use strict';

const equSolveFunc = (a, b, c) => {
    console.log(`${a}*x^2 + ${b}*x + ${c} = 0`);
    const disc = b * b - 4 * a * c;
    console.log(`\nDiscriminant = ${disc}`);
    if (disc > 0) {
        console.log("\nThere is 2 roots");
        const x1 = (-b - Math.sqrt(disc)) / (2 * a);
        const x2 = (-b + Math.sqrt(disc)) / (2 * a);
        console.log(`\nx1 = ${x1}\nx2 = ${x2}\n`);
    } else if (disc === 0) {
        console.log("\nThere is 1 root");
        const x1 = -b / (2 * a);
        console.log(`\nx1 = ${x1}`);
    } else {
        console.log("\nThere is 0 root");
    }
};

export { equSolveFunc };
