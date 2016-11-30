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

// general usage
let promise = new Promise((resolve, reject)=>{
	let to = setTimeout(()=>{
		resolve();
		clearTimeout(to);
	}, 3000);
});

promise.then(()=>{
	console.log('********** Section 9 - promises ***********');
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
