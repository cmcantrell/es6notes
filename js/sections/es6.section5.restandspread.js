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

let sectionTitle	= "Rest Parameters & Spread Operator";

App.swapTemplate(document.getElementById('main-container'),`
	<header>
		<hgroup>
			<h2>${sectionTitle}</h2>
			<p>Rest Parameters - Veriadic function parameters</p>
			<p>Unknown amount of arguments used to be accessible through the arguments obect, but lacked many properties and methods available to Array.  Rest Parameters solve this problem.</p>
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
					</td>
					<td class="javascript">
						<code>
							function doRest(...coll){	// pass in array value (if passed in with other variables, it must come last) <br/>
								<i class="indent1"></i>let sum = 0; <br/>
								<i class="indent1"></i>coll.map(function(i){ // iterate using ES5+ Array.map()<br/>
									<i class="indent2"></i>return sum += i; <br/>
								<i class="indent1"></i>}); <br/>
								<i class="indent1"></i>return sum; <br/>
							} <br/>
							console.log(doRest(1, 2, 3, 4, 5, 6));	// 21 <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<header>
			<h4>Spread Operator</h4>
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
					</td>
					<td class="javascript">
						<code>
							function doSpread(arr){ <br/>
								<i class="indent1"></i>console.log(typeof arr); <br/>
								<i class="indent1"></i>console.log(...arr);<br/>
							}<br/>
							let arr = ['ele1', 'ele2', 'ele3'];<br/>
							doSpread(arr);<br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<header>
			<h4>Using Spread to extand an array onto another array.</h4>
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
					</td>
					<td class="javascript">
						<code>
							var parts = ['shoulders', 'knees']; <br/>
							var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]; <br/>
							console.log(lyrics); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<header>
			<h4>Using Rest Parameters, Spread Operator together with arguments</h4>
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
					</td>
					<td class="javascript">
						<code>
							var parts = ['shoulders', 'knees']; <br/>
							var lyrics = ['head', ...parts, 'and', 'toes']; <br/><br/>
							
							function unshift(array, ...el) { // mixing with arguments, Rest Params must come last <br/>
								<i class="indent1"></i>// ES5 this could be accomplished as follows</br>
								<i class="indent1"></i>//return [a, b, c, d, e].concat(array); <br/>
								<i class="indent1"></i>// ES6+ <br/>
								<i class="indent1"></i>return [...el,...array]; // concatenate using spread operator <br/>
							} <br/>
							console.log(unshift(parts, lyrics[0], lyrics[lyrics.length-1])); 
						</code>
					</td>
				</tr>
			</table>
		</div>
	</div>`);

console.log('********** Section 5 - Rest Parameters and Spread Operator ***********');
// rest parameters
function doRest(...coll){		// pass in array value (if passed in with other variables, it must come last)
	console.log('@doRest()');
	let sum = 0;
	coll.map(function(i){
		return sum += i;
	});
	return sum;
}
console.log(doRest(1, 2, 3, 4, 5, 6));	// 21


// spread operator
function doSpread(arr){
	console.log('@doSpread()');
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
	console.log('@unshift()');
	// ES5
	//return [a, b, c, d, e].concat(array);
	return [...el,...array];
}
console.log(unshift(parts, lyrics[0], lyrics[lyrics.length-1]));