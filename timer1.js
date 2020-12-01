// edge cases
// no nums provided
// input is negative
// input is not a number

const stringArgs = process.argv.slice(2);
const args = stringArgs.map((item) => parseInt(item));

for (let i = 0; i < args.length; i++) {
  if (Number.isInteger(args[i]) && args[i] > 0) {
    let delay = args[i] * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  }
}