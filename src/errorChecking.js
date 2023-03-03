import { existsSync } from 'fs';

const filePath = (path) => {
  if (!existsSync(path)) {
    console.log(`Error: file ${path} does not exist`);
    process.exit(404);
  }
};

const fileStructure = (data) => {
  const format = /^([+-]?([0-9]*[.])?[0-9]+)\s([+-]?([0-9]*[.])?[0-9]+)\s([+-]?([0-9]*[.])?[0-9]+)(\r)?\n$/;
  if (!data.match(format)) {
    console.log('Error: invalid file format');
    process.exit(400);
  }
};

const aZero = (a) => {
  if (a === 0) {
    console.log('Error: a cannot be 0');
    process.exit(400);
  }
};

export { filePath, fileStructure, aZero };
