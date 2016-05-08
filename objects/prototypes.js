'use strict';

let human = {
	describe: function(){
		console.log(`This is a ${this.name}`)
	},
	name: 'human'
};

let mike = {
	__proto__:human,
	name: 'mike'
}

mike.describe();

let jane = Object.create(human, {
	name: "jane" //alternative name: { value: "jane", configurable: true ... }
});

jane.describe();