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
	*	||		section 7 			||
	*	==============================
	*	Arrow functions
	*	simplified syntax with no affect on this once in scope.  Local object scope is unaffected.
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
	*
	*
**/

let sectionTitle		= "Arrow Functions";
App.swapTemplate(document.getElementById('main-container'),`
	<header>
		<hgroup>
			<h2>${sectionTitle}</h2>
			<p>Simplified function syntax and lexical binding</p>
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
					</td>
					<td class="javascript">
						<code>
							document.body.addEventListener('click', function(){ <br/>
								<i class="indent1"></i>console.log(this); <br/>
							}); <br/><br/>
							
							// ES5 -
							let self	= this; <br/>
							document.body.addEventListener('click', function(){ <br/>
								<i class="indent1"></i>console.log(this); <br/>
								<i class="indent1"></i>console.log(self); <br/>
							}); <br/><br/>
							
							// ES5.1+
							document.body.addEventListener('click', function(){ <br/>
								<i class="indent1"></i>console.log(this); <br/>
							}.bind(this)); // bind method passes bound arguments<br/><br/>
							
							document.body.addEventListener('click', ()=>{ // arrow functions do not reassign scope <br/>
								<i class="indent1"></i>console.log(this); <br/>
							}); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
	</div>
	`);


console.log('********** Section 7 - Arrow Functions ***********');
// !!!		See /app.js Utilities.prototype.event();


document.body.addEventListener('click', function(){
	console.log(this);
	console.log('--------------');
});


let self = this;
document.body.addEventListener('click', function(){
	console.log(this);
	console.log(self);
	console.log('--------------');
});

document.body.addEventListener('click', function(){
	console.log(this);
	console.log('--------------');
}.bind(this));

document.body.addEventListener('click', ()=>{
	console.log(this);
});