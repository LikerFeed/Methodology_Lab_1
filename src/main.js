'use strict';

import { interactiveModeFunc } from './interactive.js';
import { uninteractiveModeFunc } from './uninteractive.js';

if (process.argv.length < 3) {
  interactiveModeFunc();
} else {
  uninteractiveModeFunc();
}
