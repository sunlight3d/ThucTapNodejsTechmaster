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
import products from './data';

// console.log(`products = ${JSON.stringify(products)}`);
/*
let products2 = products.concat({
	name: "iphone X",
	yearOfManufacture: 2017,
	price: 205000,
	description: "Iphone X is good"
});
*/
products.push({
	name: "iphone X",
	yearOfManufacture: 2017,
	price: 205000,
	description: "Iphone X is good"
});
// console.log(`products2 = ${JSON.stringify(products2)}`);
//console.log(`products = ${JSON.stringify(products)}`);
//console.log(`products2 = ${JSON.stringify(products2)}`);
//Duyệt 
products.forEach(product => {
	console.log(`product = ${JSON.stringify(product)}`);
});
//Lọc 
let newProducts = products.filter(product => {
	return (product.yearOfManufacture > 2013);
});

newProducts.forEach(product => {
	console.log(`product = ${JSON.stringify(product)}`);
});

let xArray = [1,2,3,4,5];
let yArray =xArray.map(x => {
	return x * x + 1;
});
yArray.forEach(y => {
	console.log(`y = ${y}`);
});