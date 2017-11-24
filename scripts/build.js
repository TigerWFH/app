const fs = require('fs')
const path = require('path');
const execSync = require('child_process').execSync;
const gzip = require('gzip-size');
const prettyBytes = require('pretty-bytes')


const exec = (command, extraEnv) =>
    execSync(command, {
        stdio: 'inherit',
        env: Object.assign({}, process.env, extraEnv)
    });
console.log('Building CommonJS modules ...');

exec('webpack', {
    NODE_ENV: 'production'
});

const size = gzip.sync(
    fs.readFileSync(path.join(path.dirname(__dirname), '/dist/index.js'))
);

console.log('\ngzipped, the UMD build is %s', prettyBytes(size));