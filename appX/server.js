// var express = require("express");
import express from 'express';
console.log("express 12345...");
var inputArguments = process.argv;
console.log(`inputArguments = ${JSON.stringify(inputArguments)}`);
let name = inputArguments[2];
let nameValue = inputArguments[3];
console.log(`name = ${name}, nameValue = ${nameValue}`);

const convertStringToObject = (inputQuery) => {
	//let inputQuery = "name=Hoang&email=abc@gmail.com&age=30";
	let inputQueries =inputQuery.split("&");
	let inputObj = {

	}
	inputQueries.forEach((inputQuery) => {	
		let key = inputQuery.split("=")[0];
		let value = inputQuery.split("=")[1];
		inputObj[key] = value;
	});
	console.log(`inputObj = ${JSON.stringify(inputObj)}`);
	return inputObj;
}

convertStringToObject("name=Hoang&email=abc@gmail.com&age=30");
