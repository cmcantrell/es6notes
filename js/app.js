function doThisAction(){
	console.log('@doThisAction()');
}

function doAnotherAction(){
	console.log('@doAnotherAction()');
}

// var App 			= function(){
//	$cj(document.getElementsByClassName('user-interface')).event('click');
// }
// App.prototype		= $cj.prototype;
// var app 			= new App();


var App = {
	
	swapTemplate	: function(ele, template){
		
		if( !ele ){ return false; }
		
		var content;
		if(typeof template === 'string'){
			content 		= template;
		}else if(window.FileReader){
			
		}
		
		if(ele.innerHTML = content){
			return true;
		}
	}
	
}