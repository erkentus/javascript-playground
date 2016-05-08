'use strict';

/** try and catch blocks */

/** pass it inside the generator function */

function *foo_in(){
	yield "starting...";
	let increment = 1;
	while(true){
		try{
			yield (increment++);
		}
		catch(err){
			break;
		}
	}
	yield "there was an error"
}

let it = foo_in();

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.throw('new error'));
console.log(it.next())

/** passing error outside */

function *foo_out(val){
	let uppercase = val.toUpperCase();
	yield uppercase;
}

it = foo_out(123); //should throw an error

try{
	it.next();
} catch(err){
	console.log(err);
}

/** error handling with generator inside generator */

