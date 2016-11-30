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
	*	||		section 10			||
	*	==============================
	*	inheritance and classes
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
	*
**/
console.log('********** Section 10 - inheritance and classes ***********');

// classic constructor pattern
var myObj			= function(){
	this.myProp		=	"this is my prop";
}
// first class functions - all functions are objects
// var a = function(){ this.whoAmI = typeof this; }
// console.log( new a() );
var myobj 			= new myObj();
console.log(myobj);

// push function directly onto myObj.prototype
myObj.prototype.logMyProp		= function(){
	console.log(this.myProp);
}
myobj.logMyProp();


//	creating object with object literal syntax
//	create a super object for prototype inheritance
var superObject		= {
	getMyProp		: function(){
		return this.myProp;
	}
}
var subObject		= function(myProp){
	this.myProp	 	= myProp;
}

// push superObject onto subObject's prototype. This places the superObject above subObject in the scope chain
subObject.prototype		= superObject;
// instantiate to seperate instances of subObject
// each instance points up the scope chain to the same instance of subObject.prototype = superObject with differnt values inside this defined in the constructor. 
// Separate objects with with unique memory spaces are able to point up to and use the same object in the scope chain consuming one space in memory
// Javascript scope chaining emulates class inheritance in this way
var sObj1			= new subObject("my property");
var sObj2			= new subObject("my completely different property");
console.log(sObj1);
console.log(sObj1.getMyProp());
console.log(sObj2.getMyProp());


/*
	*	 more complex example with two independently usable object chaining off each other
	*
*/
// create a base class constructor
function Car(options){
	this.make 	= options.make;
	this.model	= options.model;
}

// push methods on prototype
Car.prototype.drive = function(){
	return "Driving my " + this.make + " " + this.model;
}
// instantiate a class manually pushing Toyota as make
// var car = new Car({make:'Toyota', model:'Tacoma'});
// console.log(car.drive());


/*
	*	 extend this class with inheritance
	*
*/
function Toyota(options){
	options.make	= "Toyota";		// prepropagate some options
	// 	call the car class using .call( context, arguments )  
	//	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
	Car.call(this, options);
}
// 	use Object.create and then reassign constructor, otherwise Car constructor will be overriden, which is bad
Toyota.prototype = Object.create(Car.prototype);
// 	reassign constructor from Toyota to prevent conflicts with property assignment
// 	if we don't do this, all our cars will be Toyota Tacomas
Toyota.prototype.constructor = Toyota;
//	place a function on the Toyota prototype only accessible by instances of Toyota
Toyota.prototype.CoOfOrigin 	= function(){
	return 'Japan';
}
// simplified instantiation with inheritance
var car = new Toyota({model:'Tacoma'});
console.log(car);
console.log(car.drive());
console.log(car.CoOfOrigin());
var subaru		=	new Car({make:"Subaru", model:"WRX"});
console.log(subaru);
console.log(subaru.drive());

/*
	*	with ES6
	*
*/

class ES6Car{
	// add methods with enhanced object literal syntax
/*
	constructor(options){
		console.log(this);
		this.make		= options.make;
		this.model		= options.model;
	}
*/ // no commas
	// with destructuring
	constructor({make, model}){
		console.log(this);
		this.make		= make;
		this.model		= model;
	} 
	
	drive(){
		return `Driving my ${this.make} ${this.model}`;
	}
}
/*
let ES6car = new ES6Car({model : 'Toyota', make : 'Tacoma'});
console.log(ES6car.drive());
*/

// inheritance class
class ES6Toyota extends ES6Car{
	
	constructor(options){
		super(options);	// call constructor on parent class
		this.make		= 'Toyota';
		// this.model		= model;
	}
	
	getMyTools(){
		return 'metric';
	}
}

let ES6car 		= new ES6Toyota({model:'Tacoma'});
console.log(ES6car.getMyTools());
console.log(ES6car.drive());
