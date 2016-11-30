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
	*	||		section 2.1			||
	*	==============================
	*	let - escapes hoitsting, strictly limited to current blocks scope, 
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
	*
	*
**/
console.log('********** Section 2.1 - Let Declaration ***********');
function varTest() {
	console.log(x); // undefined.  X is hoisted from succeeding line.
	var x = 1;
	if (true) {
		var x = 2;  // var is not limited to the scope of the if statement and affects the functions scope
		var x = 3;  // no limitations on manipulating the value of var from within the same scope/block
		console.log(x); // 2
	}
	console.log(x);  // 2
};
varTest();

function letTest() {
	// console.log(x);	// let escapes hoisting rules.
	let x = 1;
	if (true) {
		let x = 2;  // declared with let, the variables scope is limited to the if blocks scope,
		// let x = 3;  // error: cannot redeclare a let defined variable within the same scope block
		console.log(x);  // 2
	}
	console.log(x);  // 1
};
letTest();

// while let is defined as block restricted, they still work with closures
function closure() {
	let localVariable		= "my local varable"; 	//	variable decalred in local scope 
	return function() { 							// 	return function with reference to variable
		console.log(localVariable); 				// use variable declared in the parent function    
	}();
}
closure();

/*
	*
	*	==============================
	*	||		section 2.2			||
	*	==============================
	*	const - scope limited, unalterable  
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
	*
**/
console.log('********** Section 2.2 - Const Declaration ***********');
const __CONFIG_OPTION_IP__		= "52.46.187.200";
console.log(__CONFIG_OPTION_IP__);
// const __CONFIG_OPTION_IP__ 		= "51.46.187.201"	// error
function constTest(){
	const __SCOPED_CONFIG_OPTION_IP__		= "52.46.187.202";
}
constTest();

// reverse scope
const __SCOPED_CONFIG_OPTION_IP__			= "52.46.187.203";		// no error, previous declaration limited by scope.
function constTest2(){
	const __SCOPED_CONFIG_OPTION_IP__		= "52.46.187.204";
	console.log(__SCOPED_CONFIG_OPTION_IP__);
	const __SCOPED_CONFIG_OPTION_IP_2__		= "52.46.193.108";
}
constTest2();
console.log(__SCOPED_CONFIG_OPTION_IP__);	// not affected by contTest2();
// console.log(__SCOPED_CONFIG_OPTION_IP_2__);	// error
// const is best used at base scope
