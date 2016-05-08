'use strict';

/**
 * now the following will cause maximum stack size overflow
 * 
	let factorial = (n) => {
		if (n === 1 || n === 0) return 1;
		return factorial(n-1)*n;
	}
 *
 */

/**
 * Iterative with the loop (no error, but not always possible)
 * 
let factorial = (n) => {
	let result = 1;
	for(let i = 1; i < n+1; i++){
		result *= i;
	}
	return result;
}
 *
 */

/**
 * with tail-call invocation
 * but still has same issue (tail call optimization not supported in javascript)
 * 
let factorial = (n) => {
	let recur = (n, sofar) => {
		if (n === 0) return sofar;
		return recur(n-1, sofar*n);
	}
	return recur(n, 1);
}
 *
 */

/**
 * now with the trampoline
 */
function trampoline(f){
	while (f && f instanceof Function){
		f = f.apply(f.context, f.args);
	}
	return f;
}

function factorial(n){
	function recur(n, acc){
		if (n === 0){
			return acc;
		} else {
			return recur.bind(null, n-1, n*acc);
		}
	}
	return trampoline(recur.bind(null, n, 1));
}

/**
 * more about trampoline
 * @param  {[type]} n [description]
 * @return {[type]}   [description]
 */

function _even(n) {
    if (n == 0) {
        return true;
    } else {
        return _odd.bind(null, n-1);
    }
}
 
function _odd(n) {
    if (n == 0) {
        return false;
    } else {
        return _even.bind(null, n-1);
    }
}
 
function even(n) {
    return trampoline(_even.bind(null, n));
}
 
function odd(n) {
    return trampoline(_odd.bind(null, n));



//a little a bit about closures
const uniqueInt = (() => {
	let counter = 0;
	return () => { counter++; return counter; }
})();

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 