// enclose self-envoked function, save global namespace, pass in global scope to apply obejct
(function(global){
	'use strict';
	
	var Utilities = function(ele){		// define object constructor
		return new Utilities.init(ele);   // envoke and return object init method which defines needed properties, including passed DOM element
	}
	
	Utilities.init = function(ele){		// define obejcts init() method returned by contructor function
		var self = this;
			this.ele  				= ele;
			this.action;
			this.treeSearchDepth 	= 4;
	}
	
	Utilities.prototype = {
		event					: function( event, context=this ){
			let ele=this.ele;

			if( event instanceof Array === false ){
				if(typeof event === 'string'){
					event = [event];
				}
			}

			for(var i=0, n=ele.length; i<n; i++){
				for(var j=0, k=event.length; j<k; j++){
					// ES 5.0-
					// var self = this;
					// ele[i].addEventListener(event[j], function(ev){
					//	console.log(this);
					//	self.eventController( ev, context, null );
					// });
											
					// ES 5.1+
					ele[i].addEventListener(event[j], function(ev){
						console.log(this);
						this.eventController( ev, context, null );
					}.bind(this));
				}
			}
		},
		
		eventController 		: function( event, context=this, args ){
			let ele 	= event.target,
				i 		= 0;
			while( ele.nodeType === 1 && ele.getAttribute('data-action') === null && i < this.treeSearchDepth ){
				ele = ele.parentNode;
			}
			if( typeof ele.getAttribute !== 'function' ){return false;}
	
			let action 		= ele.getAttribute('data-action').split(','),
				Obj			= context || this;
		
			if( action === null ){return false;}
			// console.log( "event handler: " +action );
	
			for(let i=0, n=action.length; i<n; i++){
				if( typeof Obj[action[i]] === 'function' ){
					Obj[action[i]](event, ele);
				}
				this.action		= action[i];
			}
			return this;
		}
	};
    
	Utilities.init.prototype = Utilities.prototype;
	global.Utilities = global.$cj  = Utilities;

}(this));