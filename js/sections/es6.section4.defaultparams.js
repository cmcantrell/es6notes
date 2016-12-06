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

let sectionTitle	= "Default Parameters";

App.swapTemplate(document.getElementById('main-container'),`
	<header>
		<hgroup>
			<h2>${sectionTitle}</h2>
			<p>Basic Usage</p>
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
					</td>
					<td class="javascript">
						<code>
							function defaultParams(a=2, b=4){ <br/>
								<i class="indent1"></i>return a * b; <br/>
							} <br/>
							console.log(defaultParams());			// 8 <br/>
							console.log(defaultParams(6, 12));		// 72 <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<header>
			<h4>Using string literals with dot syntax and line breaks</h4>
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
					</td>
					<td class="javascript">
						<code>
							/* ES5- syntax<br/>
							function stringConcat(first, last){ <br/>
								<i class="indent1"></i>var first		= first || "test", <br/>
								<i class="indent1"></i>last		= last || "user"; <br/>
								<i class="indent1"></i>return first + " " + last; <br/>
							} <br/>
							*/ <br/><br/>
							
							// ES6+ <br/>
							function stringConcat(first = "test", last = "user"){ <br/>
								<i class="indent1"></i>return first + " " + last; <br/>
							}<br/>
							console.log(stringConcat()); <br/>
							console.log(stringConcat('Insight','Designs')); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
	</div>`);




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
