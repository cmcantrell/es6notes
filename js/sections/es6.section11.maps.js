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
//		11 maps


/*
	*
	*	==============================
	*	||		section 11			||
	*	==============================
	*	Maps
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	*	object of key : value type
	*	order is preserved
	*	keys can be any JS type: numbers, strings or even functions and objects.
	*	comes packages with .get(), .set(), .keys() and .size() methods
	*
**/

let myMap		= new Map();
myMap.set('mapEnt1', 'map entry 1');
console.log(myMap);
console.log(myMap.get('mapEnt1'));

myMap.set('mapEnt2', {
	name 	: "map entry 2",
	value	: "arbitrary value",
	meta 	: {
		name	: "object meta",
		length	: 2
	}
});
console.log(myMap);

// maps are different than objects
let myOtherMap		= new Map();
console.log(myOtherMap);
let myObject		= new Object();
console.log(myObject);

let storeMap		= new Map();
storeMap.set({name:"products"},[{name:"Osprey", products:{length:4}}]);
console.log(storeMap);



let productObj		= 
	{
		"Sage" : {
			"X-Rod" : {
				"length" 	: 12,
				"weight" 	: 7,
				"style"		: "spey"
			},
			"Trout Spey" : {
				"length" 	: 11,
				"weight" 	: 3,
				"style"		: "spey"
			},
			"One" : {
				"length" 	: 9.5,
				"weight" 	: 4,
				"style"		: "single handed"
			}
		}
	};
console.log(productObj);
let coll		= [],
	sortedObj	= {};
for(let inst in productObj['Sage']){
	coll.push([inst, productObj['Sage'][inst]]);
}
console.log(coll);
coll.sort(function(a,b){
	return a[1]['weight'] - b[1]['weight'];
});
console.log(coll);
coll.forEach(function(i){
	sortedObj[i[0]] = i[1];
});
console.log(sortedObj);

let productMap			= {'Sage' : {}};
	productMap.Sage		= new Map();
coll.forEach(function(i){
	productMap.Sage.set(i[0],i[1]);
})
console.log(productMap);


productMap.Sage.forEach(function(i,n){
	console.log(`[${n}]`);
	console.log(i);
});
console.log(sortedObj.forEach);
let sortedMap 		= new Map([...productMap.Sage.entries()].sort(function(a,b){
	return a[1]['weight'] - b[1]['weight'];
}));
console.log(sortedMap);
// map length is easily accessible opposed to standard objects iteration over object.hasOwnProperty() method.
console.log(sortedMap.size);