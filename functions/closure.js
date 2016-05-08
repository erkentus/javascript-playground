'use strict';

/**
 * A closure is created when an inner function is made accessible from outside of the function that created it. 
 * This typically occurs when an outer function returns an inner function.  
 * When this happens, the inner function maintains a reference to the environment in which it was created.  
 * This means that it remembers all of the variables (and their values) that were in scope at the time. 
 * The following example shows how a closure is created and used.
 */

// http://www.sitepoint.com/javascript-closures-demystified/

function add(value1) {
  return function doAdd(value2) {
    return value1 + value2;
  };
}

let increment = add(1); //this is where a closure was created, essentially new function was created with `value1` is preset
let foo = increment(2); //closure is entered

console.log(foo);
