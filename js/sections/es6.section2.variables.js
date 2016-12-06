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
	*	||		section 2.1			||
	*	==============================
	*	let - escapes hoitsting, strictly limited to current blocks scope, 
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
	*
	*
**/
console.log('********** Section 2.1 - Let Declaration ***********');

let sectionTitle	= "Block Scoped Variables - Const & Let";

App.swapTemplate(document.getElementById('main-container'),`
	<header>
		<hgroup>
			<h2>${sectionTitle}</h2>
			<h3>New block scoped variables in ES6</h3>
			<p>Key word let and const form hoisting escaping variables scoped only to the local block.</p>
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
					</td>
					<td class="javascript">
						<code>
							function varTest() { <br/>
								<i class="indent1"></i>console.log(x); // undefined.  X is hoisted from succeeding line. <br/>
								<i class="indent1"></i>var x = 1; <br/>
								<i class="indent1"></i>if (true) { <br/>
									<i class="indent2"></i>var x = 2;  // var is not limited to the scope of the if statement and affects the functions scope <br/>
									<i class="indent2"></i>var x = 3;  // no limitations on manipulating the value of var from within the same scope/block <br/>
									<i class="indent2"></i>console.log(x); // 2 <br/>
								<i class="indent1"></i>} <br/>
								<i class="indent1"></i>console.log(x);  // 2 <br/>
							}; <br/>
							varTest(); <br/><br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<header>
			<h4>Using Let</h4>
			<ul>
				<li>only accessible from within defining block</li>
				<li>ins't hoisted, throws an error if called prior to definition</li>
				<li>reassigning throws an error</li>
			</ul>
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
					</td>
					<td class="javascript">
						<code>
							function letTest() { <br/>
								<i class="indent1"></i>// console.log(x);	<br/>
								<i class="indent1"></i>// let escapes hoisting rules. <br/>
								<i class="indent1"></i>// would throw an error and halt function as expected in most programming languages<br/>
								<i class="indent1"></i>let x = 1; // decalred in functions local scope<br/>
								<i class="indent1"></i>if (true) { <br/>
									<i class="indent2"></i>let x = 2;  // declared with let, the variables scope is limited to the if local blocks scope and doesn't inherit <br/>
									<i class="indent2"></i>// let x = 3;  // error: cannot redeclare a let defined variable within the same scope block <br/>
									<i class="indent2"></i>console.log(x);  // 2 <br/>
								<i class="indent1"></i>} <br/>
								<i class="indent1"></i>console.log(x);  // 1 <br/>
							}; <br/>
							letTest(); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<header>
			<h3>Let and closures</h3>
			<p></p>
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
							function closure() { <br/>
								<i class="indent1"></i>let localVariable		= "my local varable"; 	//	variable decalred in local scope <br/>
								<i class="indent1"></i>return function() { 							// 	return function with reference to variable <br/>
									<i class="indent2"></i>console.log(localVariable); 				// use variable declared in the parent function <br/>
								<i class="indent1"></i>}(); <br/>
							} <br/>
							closure(); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<header>
		<hgroup>
			<h3>Using Const</h3>
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
					</td>
					<td class="javascript">
						<code>
							// basic usage <br/>
							const __CONFIG_OPTION_IP__		= "52.46.187.200";
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
					</td>
					<td class="javascript">
						<code>
							function constTest(){ <br/>
								<i class="indent1"></i>const __SCOPED_CONFIG_OPTION_IP__		= "52.46.187.202"; <br/>
							} <br/>
							constTest(); <br/><br/>
							
							const __SCOPED_CONFIG_OPTION_IP__ = "52.46.187.203";	// no error, previous declaration limited by  scope. <br/>
							function constTest2(){ <br/>
								<i class="indent1"></i>const __SCOPED_CONFIG_OPTION_IP__ = "52.46.187.204"; <br/>
								<i class="indent1"></i>console.log(__SCOPED_CONFIG_OPTION_IP__);<br/>
							} <br/>
							constTest2(); <br/>
							console.log(__SCOPED_CONFIG_OPTION_IP__);	// 52.46.187.203 <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
	</div>
`);


function varTest() {
	console.log('@varTest()');
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
	console.log('@letTest()');
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
	console.log('@closure()');
	let localVariable		= "my local varable"; 	//	variable decalred in local scope 
	return function() { 							// 	return function with reference to variable
		console.log(localVariable); 				// use variable declared in the parent function    
	}();
}
closure();

/*
	*
	*	==============================
	*	||		section 2.2			||
	*	==============================
	*	const - scope limited, unalterable  
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
	*
**/
console.log('********** Section 2.2 - Const Declaration ***********');

// basic usage
const __CONFIG_OPTION_IP__		= "52.46.187.200";
// const __CONFIG_OPTION_IP__ 		= "51.46.187.201"	// error - cannot redeclare
function constTest(){
	const __SCOPED_CONFIG_OPTION_IP__		= "52.46.187.202";
}
constTest();

const __SCOPED_CONFIG_OPTION_IP__			= "52.46.187.203";	// no error, previous declaration limited by scope.
// console.log(__SCOPED_CONFIG_OPTION_IP__);
function constTest2(){
	const __SCOPED_CONFIG_OPTION_IP__		= "52.46.187.204"; // no error
	console.log(__SCOPED_CONFIG_OPTION_IP__); // 52.46.287.204
}
constTest2();
console.log(__SCOPED_CONFIG_OPTION_IP__);	// 52.46.187.203
// console.log(__SCOPED_CONFIG_OPTION_IP_2__);	// error
// const is best used at base scope
