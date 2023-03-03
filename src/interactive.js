import { equSolveFunc } from './solve.js';

const interactiveModeFunc = () => {
  const abc = [
    'a = ',
    'b = ',
    'c = ',
  ];
  const params = [];

  process.stdin.on('data', (data) => {
    if (params.length < abc.length) {
      const dataParsing = parseFloat(data.toString());
      params.push(dataParsing);
      if (params.length < abc.length) {
        process.stdout.write(abc[params.length]);
      } else {
        equSolveFunc(...params);
        process.exit();
      }
    }
  });

  setTimeout(() => {
    process.stdout.write(abc[0]);
  }, null);
};

export { interactiveModeFunc };
