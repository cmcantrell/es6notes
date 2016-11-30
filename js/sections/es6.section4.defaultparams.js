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
	*	||		section 4			||
	*	==============================
	*	default params
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
	*	pass in primitive values, arrays (array = []), declared function returns (b=myFunc())
	*
**/
console.log('********** Section 4 - Default Parameters ***********');
function defaultParams(a=2, b=4){
	return a * b;
}
console.log(defaultParams());			// 8
console.log(defaultParams(6, 12));		// 72

// ES5
/*
function stringConcat(first, last){
	var first		= first || "test",
		last		= last || "user";
	return first + " " + last;
}
*/
function stringConcat(first = "test", last = "user"){
	return first + " " + last;
}
console.log(stringConcat());
console.log(stringConcat('Insight','Designs'));
