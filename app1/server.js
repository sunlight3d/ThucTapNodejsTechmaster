/*
Gọi Node với thông số đầu vào:
nodemon ./server.js localhost 8080
nodemon --inspect ./server.js 80

npm install --save-dev babel-cli
npm install --save-dev babel-preset-es2015

Debug:
nodemon --inspect ./server.js --exec babel-node

*/

import http from 'http';

let person = {
	"name": "Hoang",
	"email": "sunlight4d@gmail.com"
};

console.log(`person.name = ${person.name}`);
console.log(`person.name = ${person["name"]}`);

let inputArguments =  process.argv;
console.log(`inputArguments = ${JSON.stringify(inputArguments)}`);

console.log(`person = ${JSON.stringify(person)}`);

/*
const server = http.createServer((req, res) => {
	res.writeHead(200);
	res.end('Hi everybody!');
});

server.listen(8080);
*/

var x = 1;
let y = 1;

if (true) {
	//Bên trong khối lệnh
  	var x = 2;
  	let y = 2;
}
console.log(`x = ${x}`);
console.log(`y = ${y}`);

const PI = 3.1416;



