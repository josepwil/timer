const process = require('process');
const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdin.setEncoding('utf8');

rl.on('line', (data) => {
    const counter = data * 1000;
    process.stdout.write(`setting timer for ${data} seconds`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, counter)
  },
);

rl.on('SIGINT', () => {
  process.stdout.write('\nThanks for using me, ciao!\n');
  rl.close();
})

process.stdin.on('keypress', (c) => {
 if (c == 'b') {
  process.stdout.write('\x07');
  rl.clearLine(process.stdout, 0)
}
})



