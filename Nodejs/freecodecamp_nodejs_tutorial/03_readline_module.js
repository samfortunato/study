const readlineModule = require('readline');

const readline = readlineModule.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNum = 4;

// this is GARBAGE, non-DRY code. THANKS freecodecamp...
readline.question('What is the secret number?: ', (userInput) => {
  if (Number(userInput.trim()) === secretNum) {
    readline.close();
  } else {
    readline.setPrompt('Wrong, guess again: ');
    readline.prompt();

    readline.on('line', (userInput) => {
      if (Number(userInput.trim()) === secretNum) {
        readline.close();
      } else {
        readline.setPrompt('Wrong, guess again: ');
        readline.prompt();
      }
    });
  }
});

readline.on('close', () => {
  console.log('Correct!');
});
