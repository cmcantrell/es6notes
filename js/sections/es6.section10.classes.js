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
let sectionTitle	= "Classes &amp; Inheritance";

App.swapTemplate(document.getElementById('main-container'), 
	`
	<header>
		<hgroup>
			<h2>${sectionTitle}</h2>
			<h3>The classic constructor pattern</h3>
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
					</td>
					<td class="javascript">
						<code>
							// create a constructor object with single property<br/>
							var myObj			= function(){<br/>
								<i class="indent1"></i>this.myProp		=	"this is my prop";<br/>
							}<br/>
							var myobj 			= new myObj(); // instantiate object<br/>
							// first class functions - all objects are functions, including properties and prototypes<br/>
							console.log(myobj);<br/><br/>
				
							// push function directly onto myObj.prototype<br/>
							myObj.prototype.logMyProp		= function(){<br/>
								<i class="indent1"></i>console.log(this.myProp);<br/>
							}<br/>
							myobj.logMyProp(); // logs "this is my prop"<br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="section">
		<header>
			<h3>Creating Objects with Object Literal Syntax</h3>
			<p>Creating object inheritance using prototype chaining.</p>
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
						<span>18</span>
						<span>19</span>
						<span>20</span>
						<span>21</span>
						<span>22</span>
						<span>23</span>
					</td>
					<td class="javascript">
						<code>
							// create two objects using literal syntax<br/>
							var superObject		= { </br>
								<i class="indent1"></i>getMyProp		: function(){ <br/>
									<i class="indent2"></i>return this.myProp; <br/>
								<i class="indent1"></i>} <br/>
							} <br/><br/>

							var subObject		= function(myProp){ <br/>
								<i class="indent1"></i>this.myProp	 	= myProp; <br/>
							} <br/><br/>
							
							// push superObject onto subObject's prototype. This places the superObject above subObject in the scope chain<br/>
							subObject.prototype		= superObject;<br/>
							// instances point up scope chain to same instance of subObject.prototype = superObject<br/>
							// own this value defined inside constructor<br/>
							// Separate objects, unique memory spaces make use/share of same object/methods in the scope chain<br/>
							// Javascript scope chaining emulates class inheritance in this way<br/><br/>
							
							var sObj1			= new subObject("my property");<br/>
							var sObj2			= new subObject("my completely different property");<br/>
							console.log(sObj1);<br/>
							console.log(sObj1.getMyProp());<br/>
							console.log(sObj2.getMyProp());<br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="section">
		<header>
			<h3>A Little More Complex Example</h3>
			<p>Two independently usable objects using prototype inheritance to share functionality.</p>
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
							// create a base class constructor<br/>
							function Car(options){ <br/>
								<i class="indent1"></i>this.make 	= options.make;<br/>
								<i class="indent1"></i>this.model	= options.model;<br/>
							} <br/><br/>
							
							// push methods on prototype<br/>
							Car.prototype.drive = function(){<br/>
								<i class="indent1"></i>return "Driving my " + this.make + " " + this.model;<br/>
							}<br/>
							// instantiate a class manually pushing Toyota as make<br/>
							var car = new Car({make:'Toyota', model:'Tacoma'});<br/>
							console.log(car.drive());<br/><br/>
							
							
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
					</td>
					<td class="javascript">
						<code>
							// create a second class to inherit off our Car class<br/>
							function Toyota(options){ <br/>
								<i class="indent1"></i>options.make	= "Toyota";		// prepropagate some options <br/>
								<i class="indent1"></i>// 	call the car class using .call( context, arguments )  <br/>
								<i class="indent1"></i>//	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call <br/>
								<i class="indent1"></i>Car.call(this, options); <br/>
							}<br/><br/>
							
							// instantiate Car onto Toyota prototype using Object.create() <br/>
							Toyota.prototype = Object.create(Car.prototype); <br/>
							// 	reassign constructor from Toyota <br/>
							// 	if we don't do this, this instance of Toyota will point to Car as its constructor <br/>
							Toyota.prototype.constructor = Toyota; <br/>
							//	place a function on the Toyota prototype only accessible by instances of Toyota <br/>
							Toyota.prototype.CoOfOrigin 	= function(){ <br/>
								<i class="indent1"></i>return 'Japan'; <br/>
							} <br/><br/>
							
							var car = new Toyota({model:'Tacoma'}); <br/>
							console.log(car); <br/>
							console.log(car.drive()); <br/>
							console.log(car.CoOfOrigin()); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<header>
			<h3>ES6 Class Syntax</h3>
			<p>Recreate the above class with ES6's Systnactic Sugar class feature.</p>
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
							class ES6Car{ <br/>
								<i class="indent1"></i>// add methods with enhanced object literal syntax <br/>
								<i class="indent1"></i>// drop keyword "function" & no commas <br/>
								<i class="indent1"></i>constructor({make, model}){ // pass using destructuring <br/>
									<i class="indent2"></i>console.log(this); <br/>
									<i class="indent2"></i>this.make		= make; <br/>
									<i class="indent2"></i>this.model		= model; <br/>
								<i class="indent1"></i>} <br/><br/>
	
								<i class="indent1"></i>drive(){ <br/>
									<i class="indent2"></i>return \`Driving my \$\{this.make\} \$\{this.model\}\`; // sting literals<br/>
								<i class="indent1"></i>} <br/>
							} <br/><br/>
							
							let ES6car = new ES6Car({model : 'Toyota', make : 'Tacoma'}); <br/>
							console.log(ES6car.drive()); <br/><br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<header>
			<p>Now, lets add some inheritance with the super method and put some methods in our prototype chain.</p>
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
							class ES6Toyota extends ES6Car{ <br/>	
								<i class="indent1"></i>constructor(options){ <br/>
									<i class="indent2"></i>super(options);	// call constructor on parent class <br/>
									<i class="indent2"></i>this.make		= 'Toyota'; <br/>
								<i class="indent1"></i>} <br/><br/>
	
								<i class="indent1"></i>getMyTools(){ <br/>
									<i class="indent2"></i>return 'metric'; // this class isn't inherted and won't be on the prototype<br/>
								<i class="indent1"></i>} <br/>
							} <br/><br/>

							let ES6car2 		= new ES6Toyota({model:'Tacoma'}); <br/>
							console.log(ES6car2.getMyTools()); <br/>
							console.log(ES6car2.drive()); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="section">
		<header>
			<h3>Real World Example</h3>
			<p>To see a method chaining patterned JS object created and converted to ES6 class syntax, open:<br/> 
			/js/utilities.es5.js<br/>
			/js/utilities.js</p>
		</header>
		<div class="row user-interface" id="user-interface">
			<button name="this-button" data-action="doThisAction" class="btn btn-danger">Button</button>
			<button name="this-button" data-action="doAnotherAction" class="btn btn-danger">Button</button>
		</div>
	</div>
	<script type="text/javascript" src="js/es6.js"></script>
	`
);

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
console.log('---------------------------------------------');


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
// instances point up scope chain to same instance of subObject.prototype = superObject, own this value defined inside constructor
// Separate objects, unique memory spaces make use/share of same object/methods in the scope chain
// Javascript scope chaining emulates class inheritance in this way
var sObj1			= new subObject("my property");
var sObj2			= new subObject("my completely different property");
console.log(sObj1);
console.log(sObj1.getMyProp());
console.log(sObj2.getMyProp());
console.log('---------------------------------------------');

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
// instantiate a class manually pushing Subaru as make
var toy		=	new Car({make:"Toyota", model:"Tacoma"});
console.log(toy);
console.log(toy.drive());

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
// instantiate Car onto Toyota prototype using Object.create()
Toyota.prototype = Object.create(Car.prototype);
// 	reassign constructor from Toyota
// 	if we don't do this, this instance of Toyota will point to Car as its constructor
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
console.log('---------------------------------------------');
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

let ES6car = new ES6Car({model : 'Toyota', make : 'Tacoma'});
console.log(ES6car.drive());


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

let ES6car2 		= new ES6Toyota({model:'Tacoma'});
console.log(ES6car2.getMyTools());
console.log(ES6car2.drive());


$('.user-interface').event('click', this || window);