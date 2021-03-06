import { ChildProcess, spawn } from 'child_process';

let app: ChildProcess | null = null;
function restart() {
  if (app) {
    app.once('close', () => {
      runServer();
    });
    app.kill('SIGTERM');
  } else {
    runServer();
  }
}

function runServer() {
  app = spawn('node', ['dist/app.js']);
  if (app.stdout) {
    app.stdout.pipe(process.stdout);
  }
  if (app.stderr) {
    app.stderr.pipe(process.stderr);
  }
}

const compileProcess = spawn('tsc', [], {
  shell: true,
});
compileProcess.stdout.on('data', (chunk) => {
  const feedback = chunk.toString() as string;
  process.stdout.write(feedback);
  if (/* 编译完成 */ feedback.includes('Watching for file changes')) {
    restart();
  }
});
compileProcess.stderr.on('data', (chunk) => {
  process.stderr.write(chunk.toString());
});
