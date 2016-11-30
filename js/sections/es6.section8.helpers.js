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
	*	||		section 8.1 		||
	*	==============================
	*	Array Helpers - map()
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	*	native implementation of jQueries $.map() and lowdash's _.map()	
	*	iterates over an array object performing and operation
	*
**/
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

// ES5.1+
// generic usage
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
	// iterate over each element in numbers & multiply it by 2 pushing the results onto doubles
	return num * 2;
});
console.log(numbers);
console.log(doubles);


// map is well suited for restructuring existing data into new data formats
// map over a set of coordinates restructuring an object of form {x:n, y:n}
const coords	= [
	[2,5],[6,3],[8,2],[9,-2]
];
let newCoords		= [];
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
coords.map(function([x,y]){
	return newCoords.push({x,y});
});
console.log(newCoords);

// difficulties with .map() - only useful when you need to perform and return the value of an operation on every element in an array
// returning false or null 
var decreaseStockBySku		= (store,sku,qty=1) => {
	let lowStock = [];
	store.map((item) => {				
		if( item.sku.toUpperCase() === sku.toUpperCase() ){
			if(item.stock > 0){
				item.stock = parseInt(item.stock) - parseInt(qty);		// if item.stock is positive, reduce by qty varible
			}else{
				console.log(`could not fulfill. ${item.manufacturer} ${item.name} is out of stock`);
			}
		}
		// try to do this with map is unsuccesful
		if(item.stock < 1){
			lowStock.push(item);
		}	
	});
	return lowStock;		// we will call this in the next function
	
	// .map() will always return a value making it error prone unless you need to perform an operation on every element.
	// let lowStock = store.map(function(e){
	//	return function(){
	//		if(e.stock < 1){
	//			return e;
	//		}
	//		return;
	//	}();
	// });
	// console.log(lowStock);			// return [object, undefined, object, object, ... ]
};

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
console.log('********** Section 8.2 - forEach() ***********');
// general syntax array.forEach(iteratorFunction(e){ e*2 })
// using the lowstock array generated with our .map() function
//	ES5-
/*
	for(var i=0, n=lowStock.length; i<n; i++){
		console.log( 'reorder: ' + lowStock[i].manufacturer + ' ' + lowStock[i].name + ' is out of stock' );
	}
*/
// ES5.1+
var lowStockNotification	= (lowStock) => {
	return lowStock.forEach((item) => {
		console.log(`reorder: ${item.manufacturer} ${item.name} is out of stock`);
	});
};
let low = decreaseStockBySku(store,'OSAE70',1);
lowStockNotification(low);
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


// filter
var filteredStoreItems = [];
for(var i=0, n=store.length; i<n; i++){
	var currentItem		= store[i];
	if( currentItem['category'].toLowerCase() === 'camping/hiking' && currentItem['manufacturer'].toLowerCase() === 'osprey' && currentItem['price'] < 250.00 && currentItem.stock > 0){
		filteredStoreItems.push(currentItem);
	}
}
//console.log(filteredStoreItems);
// ES6
filteredStoreItems = store.filter(function(item){
	return item.category.toLowerCase() === 'camping/hiking' && item.price < 250 && item.type.toLowerCase() === 'back pack' && item.stock > 0;
});
//console.log(filteredStoreItems);

/*
	*
	*	==============================
	*	||		section 8.4 		||
	*	==============================
	*	Array Helpers - every() & some()
	*	test all elements against a comaparision oporator
	*	.every(function(){ return a === a });
	*	test if any elements pass a comparision oporator
	*	.some(function(){ return a === a });
	*
**/
console.log('********** Section 8.4 - every() & some() ***********');

var noColl		= [0,2,4,6,8,10,11];

console.log(noColl.every(function(e){
	return e % 2 === 0;
}));

console.log(noColl.some(function(e){
	return e % 2 === 0;
}));
