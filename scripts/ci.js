const { spawnSync } = require('child_process');

const foo = spawnSync('v8', ['--version']);
console.log(foo);

console.log('done');
