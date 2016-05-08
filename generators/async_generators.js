'use strict';

const request = require('request');

request.get('https://www.google.com.sg', function(err, res, body){
	console.log(res.statusCode);
})
 
function make_connection(){
	request.get('https://www.google.com.sg', function(err, res, body){
		it.next(res.statusCode);
	});
}

function *req_generator(){
	let status = yield make_connection();
	console.log(status);
}


let it = req_generator();

it.next();

/** more examples */

function getFirstName(){
	setTimeout(() => {iter.next("myname")}, 2000);
}
function getLastName(){
	setTimeout(() => {iter.next("mylastname")}, 1000);
}

function *mybio(){
	let first = yield getFirstName();
	let last = yield getLastName();
	console.log(first, last);
}

let iter = mybio();
iter.next();