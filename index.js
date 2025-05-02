import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

console.log(os.platform());
console.log(os.version());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const os = require('os');

// console.log(os.platform());
// console.log(os.version());
// console.log(__dirname);
// console.log(__filename);

