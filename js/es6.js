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
	*	||		section 1			||
	*	==============================
	*	installing Babel
	*	http://babeljs.io/
	*
**/
// install bable locally inside your root directory
// sudo npm install --save-dev babel-preset-latest
// pacakge.json should look something like this
/*
{
  "name": "my-project",
  "version": "1.0.0",
  "devDependencies": {
    "babel-cli": "^6.18.0",
    "babel-preset-es2015": "^6.16.0",
    "babel-preset-latest": "^6.16.0"
  },
  // add these lines to use latest transpiler
  "babel": {
    "presets": [
      "latest"
    ],
    // to minify and transpile soure
    "minified" : true
  }
}
*/
//	the compile command from your root directory
// ./node_modules/.bin/babel ./js/utilities.js -o ./js/utilities.min.js

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
/*
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
*/

/*
	*
	*	==============================
	*	||		section 2.2			||
	*	==============================
	*	const - scope limited, unalterable  
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
	*
**/
/*
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
*/
// console.log(__SCOPED_CONFIG_OPTION_IP_2__);	// error
// const is best used at base scope


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
/*
console.log('********** Section 3 - Template Strings ***********');

let name		= "Insight Designs",
	address		= "2006 Broadway",
	city		= "Boulder",
	state		= "CO";
console.log(`We are at ${name} ${address} in ${city}, ${state}`);
*/

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
/*
console.log('********** Section 4 - Default Parameters ***********');
function defaultParams(a=2, b=4){
	return a * b;
}
console.log(defaultParams());			// 8
console.log(defaultParams(6, 12));		// 72
*/

// ES5
/*
function stringConcat(first, last){
	var first		= first || "test",
		last		= last || "user";
	return first + " " + last;
}
*/
/*
function stringConcat(first = "test", last = "user"){
	return first + " " + last;
}
console.log(stringConcat());
console.log(stringConcat('Insight','Designs'));
*/


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
/*
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
*/


// spread operator
/*
function doSpread(arr){
	console.log(typeof arr);
	console.log(...arr);
}
let arr = ['ele1', 'ele2', 'ele3'];
doSpread(arr);

var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]
console.log(lyrics);
*/

// create a helper function to prepend an undefined amount of elements onto an array using both the rest parameter and spread operators
/*
function unshift(array, ...el) {
	// ES5
	//return [a, b, c, d, e].concat(array);
	return [...el,...array];
}
console.log(unshift(parts, lyrics[0], lyrics[lyrics.length-1]));
*/

/*
	*
	*	==============================
	*	||		section 6 			||
	*	==============================
	*	Destructuring
	*	"...expression that makes it possible to extract data from arrays or objects into distinct variables" - MDN
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
	*
	*
**/
//console.log('********** Section 6 - Destructuring ***********');

/*
let data = {
	sku : "1234NEW",
	name : "New Product",
	manufacturer : "new",
	category : "skiing/snowboarding"
}
*/
// basic implementation
/*
function createProduct({sku, name, manufacturer, category}){	// single object parameter with defined properties
	this.sku 		= sku;
	this.name		= name;
	return this;
}
console.log(new createProduct(data));
*/


/*
function createProduct2(data){
	// pass in an object and destructure properties
	// destructur individually
	// let {sku} 			= data,
	//	{name}			= data,
	//	{category}		= data,
	//	{manufacturer}	= data;
	// destructur all properties in one assignment
	let {sku, name, category, manufacturer} = data;		// all properties - sku, name, category, ... etc, are all individually available
	return {sku, name, category, manufacturer};
}
let newProduct = new createProduct2(data);
console.log(newProduct);
*/


/*
	*
**/
/*
let arrList		= [
	'ele1',
	'ele2',
	'ele3',
	'ele4',
	'ele5',
	'ele6'
];

let {length} = arrList;		
console.log(length);			// {} accesses properties on an object.  {length} will accesss the lenght property on the arrList array object.

let [ele1A, ele2A, ...rest] = arrList;		// [] accesses elements on an array object
console.log(`${ele1A} and ${ele2A}`);
console.log(...rest);

let [{sku}] = store;						// [{}] nested destructuring can access a object property.  Here the store object's sku propety is being accessed.
console.log(sku);
*/


/*
	*	destructuring, object manipulation - converting an array of non indexed coordinates into an array of objects of form {x:n, y:n}
	*
*/
/*
const coords	= [
	[2,5],[6,3],[8,2],[9,-2]
];

let newCoords		= [];
*/
/*
// pre ES6
for(var i=0, n=coords.length; i<n; i++){
	newCoords.push({x:coords[i][0],y:coords[i][1]});
}
console.log(newCoords);
*/

/*
// using the ES6 Map function
coords.map(function(coord){
	let [x,y] = coord;
	return newCoords.push({x,y});
});
*/
// same map function implementation incorporating destructuring
/*
coords.map(function([x,y]){
	return newCoords.push({x,y});
});
console.log(newCoords);
*/

/*
	*
	*	==============================
	*	||		section 7 			||
	*	==============================
	*	Arrow functions
	*	simplified syntax with no affect on this once in scope.  Local object scope is unaffected.
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
	*
	*
**/
// console.log('********** Section 7 - Arrow Functions ***********');
// !!!		See /app.js Utilities.prototype.event();



/*
	*
	*	==============================
	*	||		section 8.1 		||
	*	==============================
	*	Array Helpers - map()
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	*	native implementation of jQueries $.map() and lowdash's _.map()	
	*	iterates over an array object performing and operation
	*
**/
/*
console.log('********** Section 8.1 - map() ***********');
// basic syntax array.map(iteraterFunction(e){ return e*2 });
// ES5-
// iteration with for loop to decrease stock
for(var i=0, n=store.length; i<n; i++){
	var currentItem		= store[i];
	// get desired item from array
	if( currentItem.manufacturer.toLowerCase() === 'osprey'){ 
		// perform operation
		if(currentItem.stock > 0 ){ 
			store[i].stock--;
		}
		else{
			console.log(store[i].name + " is out of stock");
		}
	}
}
*/

// ES5.1+
// generic usage
/*
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
	return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]

var decreaseStockBySku		= (store,sku,qty) => {
	let lowStock = [];
	// using .map() to iterate
	store.map((item) => {		// arrow function syntax
		// perform operation on array
		if( item.sku.toUpperCase() === sku.toUpperCase() ){
			if(item.stock > 0){
				item.stock = parseInt(item.stock) - parseInt(qty);
			}else{
				console.log(`could not fulfill. ${item.manufacturer} ${item.name} is out of stock`);
			}
		}
		if(item.stock < 1){
			lowStock.push(item);
		}
	});
	return lowStock;		// we will call this in the next function
};
*/

/*
	*
	*	==============================
	*	||		section 8.2 		||
	*	==============================
	*	Array Helpers - forEach()
	*	native implementation of jQueries $.each() and lowdash's _.forEach()	
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	*
**/
// console.log('********** Section 8.2 - forEach() ***********');
// general syntax array.forEach(iteratorFunction(e){ e*2 })
// using the lowstock array generated with our .map() function
//	ES5-
/*
	for(var i=0, n=lowStock.length; i<n; i++){
		console.log( 'reorder: ' + lowStock[i].manufacturer + ' ' + lowStock[i].name + ' is out of stock' );
	}
*/
// ES5.1+
/*
var lowStockNotification	= (lowStock) => {
	return lowStock.forEach((item) => {
		console.log(`reorder: ${item.manufacturer} ${item.name} is out of stock`);
	});
};
let low = decreaseStockBySku(store,'OSAE70',1);
lowStockNotification(low);
*/
// console.log(store);


/*
	*
	*	==============================
	*	||		section 8.3 		||
	*	==============================
	*	Array Helpers - find() & filter()
	*	$.grep(array, function( e, i ){ return true; })
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	*	_.filter(array, function(e){ return true; });
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	*
**/
/*
console.log('********** Section 8.3 - find() & filter() ***********');

// ES5
for(var i=0, n=store.length; i<n; i++){
	if( store[i].sku === 'OSAE70' ){
		// console.log(store[i]);
		break;
	}
}
// ES6 
let findItemBySku = (sku) => {
	return store.find((item) => {
		return item.sku.toUpperCase() === sku.toUpperCase();
	});
};
console.log(findItemBySku('OSAE70'));
*/


// filter
/*
var filteredStoreItems = [];
for(var i=0, n=store.length; i<n; i++){
	var currentItem		= store[i];
	if( currentItem['category'].toLowerCase() === 'camping/hiking' && currentItem['manufacturer'].toLowerCase() === 'osprey' && currentItem['price'] < 250.00 && currentItem.stock > 0){
		filteredStoreItems.push(currentItem);
	}
}
*/
//console.log(filteredStoreItems);
// ES6
/*
filteredStoreItems = store.filter(function(item){
	return item.category.toLowerCase() === 'camping/hiking' && item.price < 250 && item.type.toLowerCase() === 'back pack' && item.stock > 0;
});
*/
//console.log(filteredStoreItems);


/*
	*
	*	==============================
	*	||		section 9			||
	*	==============================
	*	native promises
	*	similar to jQuery's promise.  prototype includes .resolve(), .reject(), .then() & .catch()
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	*
**/

// general usage
/*
let promise = new Promise((resolve, reject)=>{
	let to = setTimeout(()=>{
		resolve();
		clearTimeout(to);
	}, 3000);
});

promise.then(()=>{
	console.log('********** Section 9 - promises ***********');
	console.log('it\'s done');
});

let xmlPromise = new Promise((resolve, reject)=>{
	let siteId		= '06701900',
		url			= `http://waterservices.usgs.gov/nwis/iv/?sites=${siteId}&period=P7D&parameterCd=00060,00010&format=json`,
		xmlhttp 		= new XMLHttpRequest();

	xmlhttp.open('GET', url, true);
	xmlhttp.onreadystatechange = function(){
		if(parseInt(xmlhttp.readyState) === 4){
			switch(xmlhttp.readyState){
				case 4 :
					resolve(xmlhttp.responseText);
					break;
			}	
		}
	}
	// xmlhttp.setRequestHeader('Content-Type', 'application/soap+xml');
	// xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	xmlhttp.setRequestHeader('Content-Type', 'application/json');
	xmlhttp.send();
});

xmlPromise.then((res)=>{
	console.log('Request done');
});
*/


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
// console.log('********** Section 10 - inheritance and classes ***********');

// classic constructor pattern
/*
var myObj			= function(){
	this.myProp		=	"this is my prop";
}
var myobj 			= new myObj();
console.log(myobj);
*/

// push function directly onto myObj.prototype
/*
myObj.prototype.logMyProp		= function(){
	console.log(this.myProp);
}
myobj.logMyProp();
*/


//	creating object with object literal syntax
//	create a super object for prototype inheritance
/*
var superObject		= {
	getMyProp		: function(){
		return this.myProp;
	}
}
var subObject		= function(myProp){
	this.myProp	 	= myProp;
}
*/

// push superObject onto subObject's prototype
/*
subObject.prototype		= superObject;
//	instantiate to seperate instances of subObject
//	each instance points up the scope chain to the same instance of subObject.prototype = superObject with differnt values inside this defined in the constructor
var sObj1			= new subObject("my property");
var sObj2			= new subObject("my completely different property");
console.log(sObj1);
console.log(sObj1.getMyProp());
console.log(sObj2.getMyProp());
*/


/*
	*	 more complex example with two independently usable object chaining off each other
	*
*/
// create a base class constructor
/*
function Car(options){
	this.make 	= options.make;
	this.model	= options.model;
}
*/

// push methods on prototype
/*
Car.prototype.drive = function(){
	return "Driving my " + this.make + " " + this.model;
}
*/
// instantiate a class manually pushing Toyota as make
// var car = new Car({make:'Toyota', model:'Tacoma'});
// console.log(car.drive());


// create a class to inherit off base Car class
/*
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
*/

/*
	*	with ES6
	*
*/

/*
class ES6Car{
	// add methods with enhanced object literal syntax

	// constructor(options){
	//	console.log(this);
	//	this.make		= options.make;
	//	this.model		= options.model;
	// }
	// no commas
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
*/
/*
let ES6car = new ES6Car({model : 'Toyota', make : 'Tacoma'});
console.log(ES6car.drive());
*/

// inheritance class
/*
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

console.log('--------------------------------------------------');
*/



// array.every(function(item){return 1 === 1;});
// array.some(function(item){return 1 === 1;});

/*
var numbers = [1, 1, 2, 3, 4, 4];
function unique(array) {
    return array.reduce(function(previous, element){
        if(!previous.find(function(el){ return element===el})){
            previous.push(element);
        }
        return previous;
    }, []);
}
unique(numbers);
*/


/*
	*
	*	symbols
	*
	*
*/

/*
let meta			= Symbol();

class MySymClass{
	constructor(){
		this.property1 		= "propertyValue1";
		this.property2 		= "propertyValue2";
		this.property3 		= "propertyValue3";
		this[meta]			= {
			length		:	"test",
			type		: 	"test"
		};
	}
}
let obj 		= new MySymClass();
console.log(obj);
for(let prop in obj){
	console.log(`${obj}.${prop} = ${obj[prop]}`);
}
console.log(Object.getOwnPropertySymbols(obj))
*/

/*
	*
	*	generators
	*	function exitable and invokable at any time
	*
	*
**/

/*
function* genFunc(data){
	// .next() 1
	console.log('next() 1');
	console.log(data);
	// stop 1
	let genVar = yield 'genVar';	// keyword added to ES6;
	
	// .next() 2
	console.log('next() 2');
	
	return genVar;
}
// stuff in the store
var gen		= genFunc({data : 'point 1 data'});  // just initializes, no conde inside genFunc() is envoked
*/
// console.log(gen);
// console.log(gen.next());		// envokes point 1 code
// console.log(gen.next('genData')); 	// envokes point 2 code




/*
	*
	*	maps
	*
	*
	*
**/

