/*
jQuery Plugin 
Easy Opacity v1.0
Release Date: 	January 1, 2010

Copyright (c) 2010 Drew Douglass - http://www.opensource.org/licenses/mit-license.php

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
(function(jQuery){
	
	$.fn.easyOpacity = function(settings){
		
		//Default settings 
		settings = $.extend({
			opacity : 1, //The starting, inactive opacity state. 
			hoverOpacity : 0.8, //The opacity when the element is hovered 
			duration : 500, //The default duration of opacity animation in milliseconds. 
			hoverEffect : true, //Set to false to cancel any hover effects and just set an opacity. 
			pointer : false, //For convenince, set to true to have the cursor set to 'pointer'
			onMouseOverCallback : null, //Callback function to be run when the animation has completed onMouseOver 
			onMouseOutCallback : null //Callback function to be run when the animation has completed onMouseOut 
		}, settings);
		
		//Fire main plugin functionality 
		return this.each(function(){
		
			//Set original opacity for element 
			$(this).css('opacity', parseFloat(settings.opacity, 10));
		
			//If the hoverEffect is desired. 
			if(settings.hoverEffect === true){
				
				//If pointer is desired, set it. 
				if(settings.pointer === true){ $(this).css('cursor', 'pointer'); }
				
				//On hover 
				$(this).hover(function(){
					$(this).stop().animate({
						opacity : parseFloat(settings.hoverOpacity, 10)
					}, settings.duration, settings.onMouseOverCallback);
					
				//On mouseout 
				}, function(){
					$(this).stop().animate({
						opacity : parseFloat(settings.opacity, 10)
					}, settings.duration, settings.onMouseOutCallback);
				});
			}
		
		});
			
	}
	
}($));