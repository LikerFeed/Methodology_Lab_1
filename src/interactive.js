'use strict';

import { equSolveFunc } from './solve.js';

const interactiveModeFunc = () => {
  const abc = [
    'a = ',
    'b = ',
    'c = ',
  ];
  const params = [];

  const numberCheck = (data) => (
    data.toString().trim() === parseInt(data.toString()).toString().trim()
      || data.toString().trim() === parseFloat(data.toString()).toString().trim()
  );

  process.stdin.on('data', (data) => {
    if (params.length < abc.length) {
      const parsedData = parseFloat(data.toString());
      if (params.length === 0 && parsedData === 0) {
        console.log('Error: a cannot be 0');
        process.stdout.write(abc[0]);
      } else if (!numberCheck(data)) {
        console.log(
          `Error: ${data
            .toString()
            .trim()} - invalid value. There should be a number`,
        );
        process.stdout.write(abc[params.length]);
      } else {
        params.push(parsedData);
        if (params.length < abc.length) {
          process.stdout.write(abc[params.length]);
        } else {
          equSolveFunc(...params);
          process.exit();
        }
      }
    }
  });

  setTimeout(() => {
    process.stdout.write(abc[0]);
  }, null);
};

export { interactiveModeFunc };
