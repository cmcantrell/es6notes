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
	*	||		section 9			||
	*	==============================
	*	native promises
	*	similar to jQuery's promise.  prototype includes .resolve(), .reject(), .then() & .catch()
	*	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	*
**/

let sectionTitle		= "Native Promises";
App.swapTemplate(document.getElementById('main-container'),`
	<header>
		<hgroup>
			<h2>${sectionTitle}</h2>
			<i><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise</a></i>
			<h3>Promises work on callbacks, similiar to their implementation in jQuery.</h3>
			<p>General Usage: </p>
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
							let promise = new Promise((resolve, reject)=>{ // call new promise object <br/>
								<i class="indent1"></i>let to = setTimeout(()=>{  <br/>
									<i class="indent2"></i>resolve(); <br/>
									<i class="indent2"></i>clearTimeout(to); <br/>
								<i class="indent1"></i>}, 3000); <br/>
							}); </br><br/>

							promise.then(()=>{ <br/>
								<i class="indent1"></i>console.log(this); // arrow functions retain scope inside asynchronous function invocation <br/>
								<i class="indent1"></i>console.log('it\'s done'); <br/>
							}); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
		<ul>
			<li>Comes packaged with methods reslove() & reject()</li>
			<li>Packaged with callbacks then() & catch()</li>
		</ul>
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
							let xmlPromise = new Promise((resolve, reject)=>{ <br/>
								<i class="indent1"></i>let siteId		= "06701900", <br/>
									<i class="indent2"></i>url			= \`http://waterservices.usgs.gov/nwis/iv/?sites=\$\{siteId\}&period=P7D&parameterCd=00060,00010&format=json\`, <br/>
									<i class="indent2"></i>xmlhttp 		= new XMLHttpRequest(); <br/><br/>

								<i class="indent1"></i>xmlhttp.open('GET', url, true); <br/>
								<i class="indent1"></i>xmlhttp.onreadystatechange = function(){ <br/>
									<i class="indent2"></i>if(parseInt(xmlhttp.readyState) === 4){ <br/>
										<i class="indent3"></i>switch(xmlhttp.readyState){ <br/>
											<i class="indent4"></i>case 4 : <br/>
												<i class="indent5"></i>resolve(xmlhttp.responseText); <br/>
												<i class="indent5"></i>break; <br/>
										<i class="indent3"></i>} <br/>
									<i class="indent2"></i>} <br/>
								<i class="indent1"></i>} <br/>
								<i class="indent1"></i>xmlhttp.setRequestHeader('Content-Type', 'application/json'); <br/>
								<i class="indent1"></i>xmlhttp.send(); <br/>
							}); <br/><br/>

							xmlPromise.then((res)=>{ <br/>
								<i class="indent1"></i>console.log('Request done'); <br/>
							}); <br/>
						</code>
					</td>
				</tr>
			</table>
		</div>
	</div>
	`);

// general usage
let promise = new Promise((resolve, reject)=>{
	let to = setTimeout(()=>{
		resolve();
		clearTimeout(to);
	}, 3000);
});

promise.then(()=>{
	console.log('********** Section 9 - promises ***********');
	console.log(this);
	console.log('it\'s done');
});

let xmlPromise = new Promise((resolve, reject)=>{
	let siteId		= '06701900',
		url			= `http://waterservices.usgs.gov/nwis/iv/?sites=${siteId}&period=P7D&parameterCd=00060,00010&format=json`,
		xmlhttp 		= new XMLHttpRequest();

	xmlhttp.open('GET', url, true);
	xmlhttp.onreadystatechange = function(){
		if(parseInt(xmlhttp.readyState) === 4){
			switch(xmlhttp.readyState){
				case 4 :
					resolve(xmlhttp.responseText);
					break;
			}	
		}
	}
	// xmlhttp.setRequestHeader('Content-Type', 'application/soap+xml');
	// xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	xmlhttp.setRequestHeader('Content-Type', 'application/json');
	xmlhttp.send();
});

xmlPromise.then((res)=>{
	console.log('Request done');
});
