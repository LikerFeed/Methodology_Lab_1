'use strict';

import { equSolveFunc } from "./solve.js";
import { interactiveModeFunc } from "./interactive.js";

equSolveFunc(1, 4, 3);
equSolveFunc(3, -18, 27)
equSolveFunc(4, 2, 8);

if (process.argv.length < 3) {
    interactiveModeFunc();
};
