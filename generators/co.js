'use strict';

const co = require('co');
const Promise = require('bluebird');
const request = require('request');

function getGooglePage(){
	return new Promise((resolve, reject) => {
		request('https://www.google.com.sg', function(err, res, body){
			if (err) return reject(err);
			return resolve(res.statusCode);
		});
	})
}

co(function *(){
	let resp = yield getGooglePage();
	console.log(resp);
}).catch(function(err){
	console.log(err);
})
