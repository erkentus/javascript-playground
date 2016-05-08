'use strict';

const request = require('request');
const Promise = require('bluebird');

Promise.each([1,2], function(val){
	return val;
})
.then(function(val){
	console.log(val);
});

function getGooglePage(){
	return new Promise((resolve, reject) => {
		request('https://www.google.com.sg', function(err, res, body){
			if (err) return reject(err);
			return resolve(res.statusCode);
		});
	})
}

function runGenerator(g){
	let it = g();
	let ret;

	(function iterate(val){
		ret = it.next(val);
		if (!ret.done){
			if ("then" in ret.value) {
				ret.value
					.then(iterate)
					.catch(function(err){
						it.throw(err);
					});
			}
			else{
				setTimeout(function(){
					iterate(ret.value);
				}, 0)
			}
		}
	})();
}

runGenerator(function *gen(){
	try{
		let googleRes = yield getGooglePage();
		console.log(googleRes);
	}catch(err){
		console.log('caught', err);
	}
});

