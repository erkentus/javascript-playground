'use strict';

/**
 * variables
 */

try {
	console.log(variable); //variable is hoisted, but undefined
} catch (err){
	//no error
	console.error(err);
}

var variable = 1;

console.log(variable);

try {
	console.log(block_var = 1);
} catch (err){
	console.error(err); //reference error
}

let block_var;

try {
	console.log(const_var = 1);
} catch (err){
	console.error(err); //reference error
}

const const_var = 2;


/**
 * functions
 */

try {
	expression(5); //it is hoisted by undefined
} catch(err){
	console.error(err);
	//TypeError, not a reference error
}

var expression = function(val){
	console.log(val);
}

try {
	statement(5);
} catch(err){
	console.error(err); //no error
}

function statement(val){
	console.log(val);
}