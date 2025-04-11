//  Run from command line
//  node MavenLifecyclePhaseGoalRunner.js
let spawn = require('child_process').spawn;

let dir = `${__dirname}`;
// const path = `${dir}\\mutualUnderstanding`;
const path = `.\\mutualUnderstanding`;

// const mavenLifecycle = [
//   'clean',
//   'validate',
//   'compile',
//   'test',
//   'package',
//   'verify',
//   'install',
// ];
// mavenLifecycle.map((phase) => {
//   let phaseOutput = spawn('cmd', ['/S', '/C', 'mvn', `${phase}`], {
//     cwd: path,
//   });
//   phaseOutput.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
//   });

//   phaseOutput.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
//   });

//   phaseOutput.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
//   });
// });

let phaseOutput = spawn('cmd', ['/S', '/C', 'mvn', `clean`], {
  cwd: path,
});
phaseOutput.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

phaseOutput.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

phaseOutput.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

// let clean = spawn('cmd', ['/S', '/C', 'mvn', 'clean'], {
//   cwd: path,
// });

// let clean = spawn('cmd', ['/S', '/C', 'mvn', 'compile'], {
//   cwd: path,
// });

// let clean = spawn('cmd', ['/S', '/C', 'mvn', 'test'], {
//   cwd: path,
// });

// let clean = spawn('cmd', ['/S', '/C', 'mvn', 'package'], {
//   cwd: path,
// });

// let clean = spawn('cmd', ['/S', '/C', 'mvn', 'install'], {
//   cwd: path,
// });

// , ['clean', `${dir}\\mutualUnderstanding`]
