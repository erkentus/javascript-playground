'use strict';

function *foo(){
	let elliot = yield "elliot";
	let angela = yield "angela";
}

function *bar(){
	yield "tyrell"
	yield "mr.robot"
	yield *foo();
	yield "krista";
}

let it = bar();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

let again = bar();

for(let actor of again){
	console.log(actor)	
}

/** alternative */

//delegate
//
function action(){
	setTimeout(() => {
		new_it.next('hello');
	}, 5000)
}

function *delegator(){
	let val = yield action();
	console.log(val);
}

let new_it = delegator();
new_it.next();
