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
	*	||		section 1			||
	*	==============================
	*	installing Babel
	*	http://babeljs.io/
	*	https://babeljs.io/docs/usage/cli/
	*	https://babeljs.io/docs/usage/options/
	*	https://babeljs.io/docs/plugins/preset-es2015/
	*	https://babeljs.io/docs/usage/polyfill/
	*	https://www.barbarianmeetscoding.com/blog/2016/02/21/start-using-es6-es2015-in-your-project-with-babel-and-gulp/
	*
**/
// install bable locally inside your root directory
// sudo npm install --save-dev babel-preset-latest babel-cli
// sudo npm install --save-dev babel-polyfill
// pacakge.json should look something like this
/*
{
  "name": "my-project",
  "version": "1.0.0",
  "devDependencies": {
    "babel-cli": "^6.18.0",
    "babel-preset-latest": "^6.16.0"
  },
  // add these lines to use latest transpiler
  "babel": {
    "presets": ["es2015"], // "presets":["latest"],
    // to minify and transpile soure
    "minified" : true,
    "comments" : false
  }
}
*/
//	the compile command from your root directory and watch file
// ./node_modules/.bin/babel ./js/utilities.js -w -o ./js/utilities.min.js

// window.location = 'https://babeljs.io/docs/setup/#installation';