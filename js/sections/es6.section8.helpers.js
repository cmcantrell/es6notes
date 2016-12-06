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


let sectionTitle		= "Built in Array Helpers";
App.swapTemplate(document.getElementById('main-container'),`
	<header>
		<hgroup>
			<h2>${sectionTitle}</h2>
			<h3>Brings ease of jQuery, Lodash, Underscore & other libraries to native JavaScript</h3>
		</hgroup>
	</header>
	<header>
		<h2>Array.map()</h2>
		<i><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map</a></i>
		<p>Identical to jQuery.map() & Undescore.map()</p>
	</header>
	<div class="section">
		<div class="code-block">
			<col width="1"/>
			<col width="11"/>
			<table>
				<tr>
					<td class="gutter">
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
						<span>6</span>
					</td>
					<td class="javascript">
						<code>
							var numbers = [1, 4, 9]; <br/>
							var doubles = numbers.map(function(num) { <br/>
								<i class="indent1"></i>// iterate over each element in numbers & multiply it by 2 pushing the results onto doubles <br/>
								<i class="indent1"></i>return num * 2;	<br/>
							});
							console.log(numbers);
							console.log(doubles);
						</code>
					</td>
				</tr>
			</table>
		</div>
		<div class="code-block">
			<col width="1"/>
			<col width="11"/>
			<table>
				<tr>
					<td class="gutter">
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
						<span>6</span>
						<span>7</span>
						<span>8</span>
						<span>9</span>
						<span>10</span>
						<span>11</span>
						<span>12</span>
					</td>
					<td class="javascript">
						<code>
							// map is well suited for restructuring existing data into new data formats <br/>
							// map over a set of coordinates restructuring an object of form {x:n, y:n} <br/>
							const coords	= [ <br/>
								<i class="indent1"></i>[2,5],[6,3],[8,2],[9,-2] <br/>
							]; <br/>
							let newCoords		= []; <br/>
							/* <br/>
								<i class="indent1"></i>// pre ES6 <br/>
								<i class="indent1"></i>for(var i=0, n=coords.length; i&#60;n; i++){ <br/>
									<i class="indent2"></i>newCoords.push({x:coords[i][0],y:coords[i][1]}); <br/>
								<i class="indent1"></i>} <br/>
							*/ <br/><br/>
							
							// implementation incorporating destructuring <br/>
							coords.map(function([x,y]){ <br/>
								<i class="indent1"></i>return newCoords.push({x,y}); <br/>
							}); <br/>
							console.log(newCoords); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<header>
			<h3>Difficulties with Using Array.map()</h3>
			<p>Only useful when you need to perform the same operation on every element in the array.  Once conditional logic is needed, Array.forEach() becomes a much more vaible solution.</p>
		</header>
	</div>
	<div class="section">
		<header>
			<h2>Array.forEach()</h2>
			<i><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach</a></i>
			<p>Identical to jQuery & Underscore's Array.each() functions</p>
		</header>
		<div class="code-block">
			<col width="1"/>
			<col width="11"/>
			<table>
				<tr>
					<td class="gutter">
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
						<span>6</span>
						<span>7</span>
						<span>8</span>
						<span>9</span>
						<span>10</span>
						<span>11</span>
						<span>12</span>
						<span>13</span>
						<span>14</span>
						<span>15</span>
						<span>16</span>
					</td>
					<td class="javascript">
						<code>
							var decreaseStockBySku		= (store,sku,qty=1) => { <br/>
								<i class="indent1"></i>let lowStock = []; <br/>
								<i class="indent1"></i>store.forEach((item) => { <br/>				
									<i class="indent2"></i>if( item.sku.toUpperCase() === sku.toUpperCase() ){ <br/>
										<i class="indent3"></i>if(item.stock > 0){ <br/>
											<i class="indent4"></i>item.stock = parseInt(item.stock) - parseInt(qty);		// if item.stock is positive, reduce by qty varible <br/>
										<i class="indent3"></i>}else{ <br/>
											<i class="indent4"></i>console.log(\`could not fulfill. \$\{item.manufacturer\} \$\{item.name\} is out of stock\`); <br/>
										<i class="indent3"></i>} <br/>
									<i class="indent2"></i> }<br/>
									<i class="indent2"></i>if(item.stock < 1){ <br/>
										<i class="indent3"></i><i class="indent1"></i>lowStock.push(item); <br/>
									<i class="indent2"></i>} <br/>
								<i class="indent1"></i>}); <br/>
								<i class="indent1"></i>return lowStock; <br/>
							}; <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<div class="code-block">
			<col width="1"/>
			<col width="11"/>
			<table>
				<tr>
					<td class="gutter">
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
						<span>6</span>
						<span>7</span>
						<span>8</span>
						<span>9</span>
						<span>10</span>
						<span>11</span>
						<span>12</span>
						<span>13</span>
						<span>14</span>
						<span>15</span>
						<span>16</span>
						<span>17</span>
						<span>18</span>
						<span>19</span>
						<span>20</span>
						<span>21</span>
						<span>22</span>
						<span>23</span>
						<span>24</span>
					</td>
					<td class="javascript">
						<code>
							var decreaseStockBySku		= (store,sku,qty=1) => { <br/>
								<i class="indent1"></i>let lowStock = []; <br/>
								<i class="indent1"></i>store.forEach((item) => { // making use of arrow functions to retain scope<br/>	
									<i class="indent2"></i>if( item.sku.toUpperCase() === sku.toUpperCase() ){ <br/>
										<i class="indent3"></i>if(item.stock > 0){ <br/>
											<i class="indent4"></i>item.stock = parseInt(item.stock) - parseInt(qty);		// if item.stock is positive, reduce by qty varible <br/>
										<i class="indent3"></i>}else{ <br/>
											<i class="indent4"></i>console.log(\`could not fulfill. \$\{item.manufacturer\} \$\{item.name\} is out of stock\`); <br/>
										<i class="indent3"></i>} <br/>
									<i class="indent2"></i> }<br/>
									<i class="indent2"></i>if(item.stock < 1){ <br/>
										<i class="indent3"></i><i class="indent1"></i>lowStock.push(item); <br/>
									<i class="indent2"></i>} <br/>
								<i class="indent1"></i>}); <br/>
								<i class="indent1"></i>return lowStock; <br/>
							}; <br/><br/>
							
							var lowStockNotification	= (lowStock) => { <br/>
								<i class="indent1"></i>return lowStock.forEach((item) => { <br/>
									<i class="indent2"></i>console.log(\`reorder: \$\{item.manufacturer\} \$\{item.name\} is out of stock\`); <br/>
								<i class="indent1"></i>}); <br/>
							}; <br/>
							let low = decreaseStockBySku(store,'OSAE70',1); <br/>
							lowStockNotification(low); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<div class="section">
		<header>
			<h2>Array.find() & Array.filter()</h2>
			<i>
				<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find</a><br/>
				<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter</a>
			</i>
			<p>Complementary to jQuery's $.grep(array, function( e, i ){ return true; }) and Underscore's _.filter(array, function(e){ return true; });</p>
		</header>
		<div class="code-block">
			<col width="1"/>
			<col width="11"/>
			<table>
				<tr>
					<td class="gutter">
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
						<span>6</span>
						<span>7</span>
						<span>8</span>
						<span>9</span>
						<span>10</span>
						<span>11</span>
						<span>12</span>
						<span>13</span>
						<span>14</span>
						<span>15</span>
						<span>16</span>
						<span>17</span>
					</td>
					<td class="javascript">
						<code>
							let findItemBySku = (sku) => { <br/>
								<i class="indent1"></i>return store.find((item) => { <br/>
									<i class="indent2"></i>return item.sku.toUpperCase() === sku.toUpperCase(); <br/>
								<i class="indent1"></i>}); <bd/>
							}; <br/>
							console.log(findItemBySku('OSAE70')); <br/><br/>
							
							// ES5 - <br/>
							/* <br/>
							let findItemBySku = function(sku){ <br/>
								<i class="indent1"></i>for(var i=0, n=store.length; i&#60;n; i++){ <br/>
									<i class="indent2"></i>if( store[i].sku === sku ){ <br/>
										<i class="indent3"></i>return store[i]; <br/>
									<i class="indent2"></i>} <br/>
								<i class="indent1"></i>} <br/>
							}; <br/>
							*/ <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<div class="code-block">
			<col width="1"/>
			<col width="11"/>
			<table>
				<tr>
					<td class="gutter">
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
						<span>6</span>
						<span>7</span>
						<span>8</span>
						<span>9</span>
						<span>10</span>
						<span>11</span>
						<span>12</span>
						<span>13</span>
						<span>14</span>
						<span>15</span>
					</td>
					<td class="javascript">
						<code>
							filteredStoreItems = store.filter(function(item){ <br/>
								<i class="indent1"></i>return item.category.toLowerCase() === 'camping/hiking' && item.price < 250 && item.type.toLowerCase() === 'back pack' && item.stock > 0; <br/>
							}); <br/>
							console.log(filteredStoreItems); <br/><br/>
							
							// ES5- <br/>
							/* <br/>
							var filteredStoreItems = []; <br/>
							for(var i=0, n=store.length; i<n; i++){ <br/>
								<i class="indent1"></i>var currentItem		= store[i]; <br/>
								<i class="indent1"></i>if( currentItem['category'].toLowerCase() === 'camping/hiking' && currentItem['manufacturer'].toLowerCase() === 'osprey' && currentItem['price'] < 250.00 && currentItem.stock > 0){ <br/>
									<i class="indent2"></i>filteredStoreItems.push(currentItem); <br/>
								<i class="indent1"></i>} <br/>
							} <br/>
							*/<br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
	</div>
	`);


console.log('********** Section 8.1 - map() ***********');
// basic syntax array.map(iteraterFunction(e){ return e*2 });
// ES5-
// iteration with for loop to decrease stock
/*
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
	store.forEach((item) => {				
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
/*
let findItemBySku = function(){
	for(var i=0, n=store.length; i<n; i++){
		if( store[i].sku === 'OSAE70' ){
			return store[i];
		}
	}
};
*/
	
// ES6 
console.log('Array.find()');
let findItemBySku = (sku) => {
	return store.find((item) => {
		return item.sku.toUpperCase() === sku.toUpperCase();
	});
};

console.log(findItemBySku('OSAE70'));

console.log('Array.filter()');
// filter
var filteredStoreItems = [];
for(var i=0, n=store.length; i<n; i++){
	var currentItem		= store[i];
	if( currentItem['category'].toLowerCase() === 'camping/hiking' && currentItem['manufacturer'].toLowerCase() === 'osprey' && currentItem['price'] < 250.00 && currentItem.stock > 0){
		filteredStoreItems.push(currentItem);
	}
}
// console.log(filteredStoreItems);
// ES6
filteredStoreItems = store.filter(function(item){
	return item.category.toLowerCase() === 'camping/hiking' && item.price < 250 && item.type.toLowerCase() === 'back pack' && item.stock > 0;
});
console.log(filteredStoreItems);

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
