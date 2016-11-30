'use strict';
//		1 babel - install and compile
//		2 const and let
//		3 template string syntax
//		4 default params
//		5 rest & spread
//		6 destructuring
//		7 arrow functions
// 		8 array helpers
//			8.1 map
//			8.2 forEach
//			8.3 filter & find
//			8.4 every & some
//		9 promises
// 		10 classes

/*
	*
	*	==============================
	*	||		section 5			||
	*	==============================
	*	rest parameters, spread operator
	*	rest parameters allow for an indefinite number of arguments
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
	* 	spread operator expands an object/array from within a code block
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
	*
**/
console.log('********** Section 5 - Rest Parameters and Spread Operator ***********');
// rest parameters
function doRest(...coll){			// pass in array value (if passed in with other variables, it must come last)
	let sum = 0;
	coll.map(function(i){
		return sum += i;
	});
	return sum;
}
console.log(doRest(1, 2, 3, 4, 5, 6));	// 21


// spread operator
function doSpread(arr){
	console.log(typeof arr);
	console.log(...arr);
}
let arr = ['ele1', 'ele2', 'ele3'];
doSpread(arr);

var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]
console.log(lyrics);

// create a helper function to prepend an undefined amount of elements onto an array using both the rest parameter and spread operators
function unshift(array, ...el) {
	// ES5
	//return [a, b, c, d, e].concat(array);
	return [...el,...array];
}
console.log(unshift(parts, lyrics[0], lyrics[lyrics.length-1]));