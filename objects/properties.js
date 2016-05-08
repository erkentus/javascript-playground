'use strict';

let obj = {}; // new Object();

Object.defineProperty(obj, 'key', {
	__proto__: null, //default prototype, no inheritance
	value: 'value',
	enumerable: false, //default true
	configurable: false, //default true
	writable: false, //defaule true
});

try {
	obj.key = 'new-value'; //it is not writeable
}
catch(err){
	console.error(err); //TypeError
}

try {
	delete obj.key;  //it is not configurable
} catch(err){
	console.error(err); //TypeError
}

obj.loopable = true; 
obj.loopable = 'some-value'; //writeable by default

for(let k in obj){
	console.log(k, obj[k]); //enumerable by default is true, will appear in Object.keys as well
}

delete obj.loopable 
console.log(obj.loopable); //configurable by default

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
console.log(arc.getArchive());