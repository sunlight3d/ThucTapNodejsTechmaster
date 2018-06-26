let inputArguments = process.argv;
console.log(`inputArguments = ${JSON.stringify(inputArguments)}`);
let firstName = inputArguments[3];
let lastName = inputArguments[5];

let x = parseInt(inputArguments[3]);
let y = parseInt(inputArguments[5]);

console.log(`sum = ${x + y}`);