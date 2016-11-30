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
	*	||		section 3			||
	*	==============================
	*	template strings
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
	*	
	*
**/
console.log('********** Section 3 - Template Strings ***********');

let name		= "Insight Designs",
	address		= "2006 Broadway",
	city		= "Boulder",
	state		= "CO";
console.log(`We are at ${name} ${address} in ${city}, ${state}`);


var Address		= function(address){
	this.name		= address.name;
	this.address	= address.address;
	this.city		= address.city;
	this.state		= address.state;
}
let _address		 = new Address({name:"Insight Designs", address:"2006", city:"Boulder",state:"CO"});
console.log(`We are still at ${_address.name} ${_address.city}, ${_address.state}`);