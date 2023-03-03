import { readFileSync } from 'fs';
import { equSolveFunc } from './solve.js';
import { filePath, fileStructure, aZero } from './errorChecking.js';

const uninteractiveModeFunc = () => {
  const path = process.argv[2];
  filePath(path);

  const data = readFileSync(path).toString();
  fileStructure(data);

  const params = data.trim('\n').split(' ').map((val) => parseFloat(val));
  aZero(params[0]);

  equSolveFunc(...params);
};

export { uninteractiveModeFunc };
