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
	*	||		section 6 			||
	*	==============================
	*	Destructuring
	*	"...expression that makes it possible to extract data from arrays or objects into distinct variables" - MDN
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
	*
	*
**/



let sectionTitle	= "Destructuring";

App.swapTemplate(document.getElementById('main-container'),`
	<header>
		<hgroup>
			<h2>${sectionTitle}</h2>
			<p>Destructing further extends access of arrays and object and argument assignment</p>
		</hgroup>
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
					</td>
					<td class="javascript">
						<code>
							let data = { <br/>
								<i class="indent1"></i>sku : "1234NEW", <br/>
								<i class="indent1"></i>name : "New Product", <br/>
								<i class="indent1"></i>manufacturer : "new", <br/>
								<i class="indent1"></i>category : "skiing/snowboarding" <br/>
							}<br/><br/>
							// basic implementation <br/>
							function createProduct({sku, name, manufacturer, category}){	// single object parameter with defined properties <br/>
								<i class="indent1"></i>this.sku 		= sku; <br/>
								<i class="indent1"></i>this.name		= name; <br/>
								<i class="indent1"></i>return this; <br/>
							}<br/>
							console.log(new createProduct(data));<br/><br/>
							
							function createProduct2(data){ <br/>
								<i class="indent1"></i>let {sku, name, category, manufacturer} = data;		// all properties - sku, name, category, ... etc, are all individually available <br/>
								<i class="indent1"></i>return {sku, name, category, manufacturer}; <br/>
							} <br/>
							let newProduct = new createProduct2(data);<br/>
							console.log(newProduct); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<header>
			<h4>Functional Example</h4>
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
					</td>
					<td class="javascript">
						<code>
							const coords	= [[2,5],[6,3],[8,2],[9,-2]]; <br/>
							let newCoords		= []; <br/><br/>
							coords.map(function([x,y]){ // destructured arguments<br/>
								<i class="indent1"></i>return newCoords.push({x,y}); <br/>
							}); <br/>
							console.log(newCoords); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
	</div>`);





console.log('********** Section 6 - Destructuring ***********');

let data = {
	sku : "1234NEW",
	name : "New Product",
	manufacturer : "new",
	category : "skiing/snowboarding"
}
// basic implementation
function createProduct({sku, name, manufacturer, category}){	// single object parameter with defined properties
	console.log('@createProduct()');
	this.sku 		= sku;
	this.name		= name;
	return this;
}
console.log(new createProduct(data));


function createProduct2(data){
	console.log('@createProduct2()');
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


/*
	*
**/
let arrList		= [
	'ele1',
	'ele2',
	'ele3',
	'ele4',
	'ele5',
	'ele6'
];

let {length} = arrList;		
//console.log(length);			// {} accesses properties on an object.  {length} will accesss the lenght property on the arrList array object.

let [ele1A, ele2A, ...rest] = arrList;		// [] accesses elements on an array object
//console.log(`${ele1A} and ${ele2A}`);
//console.log(...rest);

// let [{sku}] = store;						// [{}] nested destructuring can access a object property.  Here the store object's sku propety is being accessed.
// console.log(sku);


/*
	*	destructuring, object manipulation - converting an array of non indexed coordinates into an array of objects of form {x:n, y:n}
	*
*/
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