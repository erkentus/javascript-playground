'use strict';

/**
 * node js 4.2.2
 */

/**
 * old version
function *incrementor(){
	let incrementor = 1;
	while (true) {
		yield incrementor;
		incrementor++;
	}
}
 */

/** new version */

function *incrementor(){
	let incrementor = 1;
	while(true){
		yield (incrementor++);
	}
}

let it = incrementor();

console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }

function *foo(x) {
	let y = 2 * (yield (x + 1));
	let z = yield (y / 3)
	return x + y + z;
}

it = foo(5);

console.log(it.next()); //value 6
console.log(it.next(12)); //value: 8
console.log(it.next(15)); //value: 15 (z) + 24 (y) + 5 (x)
console.log(it.next()); //value: undefined

