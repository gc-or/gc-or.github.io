// Vinext beta.5 forces process.exit(0) while native Windows handles are closing.
// Let successful Windows builds drain naturally; preserve all failure exits.
if (process.platform === 'win32') {
  const exit = process.exit.bind(process);
  process.exit = (code) => {
    if (code === 0) process.exitCode = 0;
    else exit(code);
  };
}
process.argv = [process.execPath, 'vinext', 'build', ...process.argv.slice(2)];
await import('../node_modules/vinext/dist/cli.js');
