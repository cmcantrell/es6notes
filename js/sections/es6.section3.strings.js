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
	*	||		section 3			||
	*	==============================
	*	template strings
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
	*	
	*
**/
console.log('********** Section 3 - Template Strings ***********');

let sectionTitle	= "Template Strings";

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
							let name		= "Insight Designs", <br/>
								<i class="indent1"></i>address	= "2006 Broadway", <br/>
								<i class="indent1"></i>city		= "Boulder", <br/>
								<i class="indent1"></i>state	= "CO"; <br/>
							console.log(\`We are at \$\{name\} \$\{address\} in \$\{city\}, \$\{state\}\`); <br/>
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
					</td>
					<td class="javascript">
						<code>
							var Address		= function(address){ <br/>
								<i class="indent1"></i>this.name		= address.name; <br/>
								<i class="indent1"></i>this.address	= address.address; <br/>
								<i class="indent1"></i>this.city		= address.city; <br/>
								<i class="indent1"></i>this.state		= address.state; <br/>
							}
							let _address = new Address({name:"Insight Designs", address:"2006", city:"Boulder",state:"CO"}); <br/><br/>
							console.log(\`We are still at \$\{_address.name\} <br/>
									<i class="indent1"></i>\$\{_address.city\}, <br/>
										<i class="indent2"></i>\$\{_address.state\}\`); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
	</div>`);

let name		= "Insight Designs",
	address		= "2006 Broadway",
	city		= "Boulder",
	state		= "CO";
console.log(`We are at ${name} ${address} in ${city}, ${state}`);


var Address		= function(address){
	this.name		= address.name;
	this.address	= address.address;
	this.city		= address.city;
	this.state		= address.state;
}
let _address		 = new Address({name:"Insight Designs", address:"2006", city:"Boulder",state:"CO"});
console.log(`We are still at ${_address.name} 
	${_address.city}, 
		${_address.state}`);