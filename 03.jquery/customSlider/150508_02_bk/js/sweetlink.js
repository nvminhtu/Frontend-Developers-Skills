/**
 * jQuery Sweet Link
 * An utility to change element on whether smartphone or not.
 * 
 * @Author:   Takuma Ando
 * @License:  under MIT Licencse
 * @Version:  2.1
 * @Created:  2012-12-12
 * @Modified: 2013-01-29
 */
/**
 * HOW TO USE:
 *   1.KILL LINK ONLY ON PC: set 'sweetlink'
 *      * 'onclick' attribute is also killed.
 *   2.REMOVE ELEMENT ON PC: set 'sweetlink-element'
 */
!function($){
	/* Default mobile user-agents */
	var re = /iPhone|iPad|iPod|Android|Windows\sPhone|BlackBerry/;
	
	var SL = $.fn.sweetlink = {};
	$.sweetlink = function(){
		var a = arguments;
		switch( true ){
			case a[0] == 'init':
				SL.init();
				break;
			case a[0] == 'style':
				SL.createStyle();
				break;
			case a[0] == 'mobiles':
				SL.mobiles = a[1];
				break;
			case $.isFunction(a[0]):
				if( SL.mobiles.exec(window.navigator.userAgent) )
					a[0]();
				break;
		}
	};
	SL.init = function(){
		if( !SL.mobiles.exec(window.navigator.userAgent) ){
			$('.sweetlink').not('.sweetlinked').each(function(){
				$(this).addClass('sweetlinked').css('cursor','default').removeAttr('onclick').click(function(e){
					e.preventDefault();
					e.stopPropagation();
				});
			});
			$('.sweetlink-element').not('.sweetlinked').addClass('sweetlinked').remove();
		} else {
			$('.sweetlink').not('.sweetlinked').filter('.sweetlink-icon-tel').each(function(){
				$(this).addClass('sweetlinked');
				var color = $(this).attr('class').match(/sweetlink\-icon\-0x([a-f0-9]+)/i)
									? '#'+RegExp.$1
									: 'black';
				var shape = $(this).hasClass('sweetlink-icon-circle') ? 'circle' : 'rect';
				SL.draw(this, shape, color);
			});
		}
	};
	SL.createStyle = function(){
		if( !SL.mobiles.exec(window.navigator.userAgent) ){
			document.write('<'+'style type="text/css">.sweetlink{cursor:default} .sweetlink-element{display:none}<'+'/style>');
		}
	};
	SL.draw = function(target, shape, color){
		var isCircle = shape == 'circle';
		var w = isCircle ? 40 : 60;
		var h = isCircle ? 40 : 25;
		var position = {
			top:  isCircle ? -10 : -h + 10,
			left: isCircle ?  -w + 15 : -15
		}
		
		var $icon = $('<canvas/>').attr({
			width:  w,
			height: h
		}).css({
			position: 'absolute',
			top:      isCircle ? -10 : -h + 10,
			left:     isCircle ?  -w + 15 : -15,
			zIndex:   50,
			width:    w+'px',
			height:   h+'px'
		}).appendTo($('body'));
		var ctx = $icon.get(0).getContext('2d');
		ctx.save();
		ctx.beginPath();
		if( isCircle ){
			ctx.moveTo(40.0, 20.0);
			ctx.bezierCurveTo(40.0, 31.0, 31.0, 40.0, 20.0, 40.0);
			ctx.bezierCurveTo(9.0, 40.0, 0.0, 31.0, 0.0, 20.0);
			ctx.bezierCurveTo(0.0, 9.0, 9.0, 0.0, 20.0, 0.0);
			ctx.bezierCurveTo(31.0, 0.0, 40.0, 9.0, 40.0, 20.0);
			ctx.closePath();
		} else {
			ctx.moveTo(60.0, 6.0);
			ctx.lineTo(60.0, 14.0);
			ctx.bezierCurveTo(60.0, 17.3, 57.3, 20.0, 54.0, 20.0);
			ctx.lineTo(35.0, 20.0);
			ctx.lineTo(30.0, 25.0);
			ctx.lineTo(25.0, 20.0);
			ctx.lineTo(6.0, 20.0);
			ctx.bezierCurveTo(2.7, 20.0, 0.0, 17.3, 0.0, 14.0);
			ctx.lineTo(0.0, 6.0);
			ctx.bezierCurveTo(0.0, 2.7, 2.7, 0.0, 6.0, 0.0);
			ctx.lineTo(54.0, 0.0);
			ctx.bezierCurveTo(57.3, 0.0, 60.0, 2.7, 60.0, 6.0);
			ctx.closePath();
		}
		ctx.fillStyle = color;
		ctx.fill();
		ctx.restore();
		
		ctx.save();
		ctx.beginPath();
		if( isCircle ){
			ctx.translate(5,15);
			ctx.moveTo(3.4, 9.7);
			ctx.bezierCurveTo(3.5, 9.9, 3.4, 10.0, 3.3, 10.1);
			ctx.bezierCurveTo(3.3, 10.1, 1.9, 10.6, 1.5, 10.0);
			ctx.bezierCurveTo(-0.5, 7.4, -0.5, 3.1, 1.5, 0.5);
			ctx.bezierCurveTo(1.9, -0.2, 3.1, 0.0, 3.1, 0.0);
			ctx.bezierCurveTo(3.2, 0.0, 3.3, 0.2, 3.3, 0.4);
			ctx.lineTo(2.9, 3.1);
			ctx.bezierCurveTo(2.9, 3.2, 2.8, 3.4, 2.7, 3.4);
			ctx.lineTo(1.8, 3.4);
			ctx.bezierCurveTo(1.6, 3.4, 1.5, 3.5, 1.5, 3.7);
			ctx.lineTo(1.5, 6.6);
			ctx.bezierCurveTo(1.5, 6.8, 1.6, 6.9, 1.8, 6.9);
			ctx.lineTo(2.7, 6.9);
			ctx.bezierCurveTo(2.9, 6.9, 3.0, 7.1, 3.0, 7.2);
			ctx.lineTo(3.4, 9.7);
			ctx.closePath();

			ctx.moveTo(5.7, 1.6);
			ctx.lineTo(9.1, 1.6);
			ctx.lineTo(9.1, 9.7);
			ctx.lineTo(11.1, 9.7);
			ctx.lineTo(11.1, 1.6);
			ctx.lineTo(14.4, 1.6);
			ctx.lineTo(14.4, 0.3);
			ctx.lineTo(5.7, 0.3);
			ctx.lineTo(5.7, 1.6);
			ctx.closePath();

			ctx.moveTo(17.7, 5.5);
			ctx.lineTo(21.1, 5.5);
			ctx.lineTo(21.1, 4.2);
			ctx.lineTo(17.7, 4.2);
			ctx.lineTo(17.7, 1.6);
			ctx.lineTo(21.8, 1.6);
			ctx.lineTo(21.8, 0.3);
			ctx.lineTo(15.8, 0.3);
			ctx.lineTo(15.8, 9.7);
			ctx.lineTo(22.1, 9.7);
			ctx.lineTo(22.1, 8.4);
			ctx.lineTo(17.7, 8.4);
			ctx.lineTo(17.7, 5.5);
			ctx.closePath();

			ctx.moveTo(25.5, 8.4);
			ctx.lineTo(25.5, 0.3);
			ctx.lineTo(23.6, 0.3);
			ctx.lineTo(23.6, 9.7);
			ctx.lineTo(29.7, 9.7);
			ctx.lineTo(29.7, 8.4);
			ctx.lineTo(25.5, 8.4);
			ctx.closePath();
		} else {
			ctx.translate(10,3);
			ctx.moveTo(4.3, 12.1);
			ctx.bezierCurveTo(4.3, 12.3, 4.2, 12.5, 4.1, 12.6);
			ctx.bezierCurveTo(4.1, 12.6, 2.4, 13.3, 1.8, 12.5);
			ctx.bezierCurveTo(-0.6, 9.2, -0.6, 3.9, 1.8, 0.6);
			ctx.bezierCurveTo(2.4, -0.2, 3.9, 0.0, 3.9, 0.0);
			ctx.bezierCurveTo(4.0, 0.1, 4.1, 0.2, 4.1, 0.4);
			ctx.lineTo(3.7, 3.9);
			ctx.bezierCurveTo(3.6, 4.1, 3.5, 4.2, 3.3, 4.2);
			ctx.lineTo(2.2, 4.2);
			ctx.bezierCurveTo(2.0, 4.2, 1.9, 4.4, 1.9, 4.6);
			ctx.lineTo(1.9, 8.3);
			ctx.bezierCurveTo(1.9, 8.5, 2.0, 8.7, 2.2, 8.7);
			ctx.lineTo(3.4, 8.7);
			ctx.bezierCurveTo(3.6, 8.7, 3.7, 8.8, 3.8, 9.0);
			ctx.lineTo(4.3, 12.1);
			ctx.closePath();

			ctx.moveTo(9.2, 2.0);
			ctx.lineTo(13.4, 2.0);
			ctx.lineTo(13.4, 12.1);
			ctx.lineTo(15.8, 12.1);
			ctx.lineTo(15.8, 2.0);
			ctx.lineTo(20.0, 2.0);
			ctx.lineTo(20.0, 0.3);
			ctx.lineTo(9.2, 0.3);
			ctx.lineTo(9.2, 2.0);
			ctx.closePath();

			ctx.moveTo(24.1, 6.9);
			ctx.lineTo(28.4, 6.9);
			ctx.lineTo(28.4, 5.2);
			ctx.lineTo(24.1, 5.2);
			ctx.lineTo(24.1, 2.0);
			ctx.lineTo(29.3, 2.0);
			ctx.lineTo(29.3, 0.3);
			ctx.lineTo(21.7, 0.3);
			ctx.lineTo(21.7, 12.1);
			ctx.lineTo(29.6, 12.1);
			ctx.lineTo(29.6, 10.4);
			ctx.lineTo(24.1, 10.4);
			ctx.lineTo(24.1, 6.9);
			ctx.closePath();

			ctx.moveTo(33.9, 10.4);
			ctx.lineTo(33.9, 0.3);
			ctx.lineTo(31.5, 0.3);
			ctx.lineTo(31.5, 12.1);
			ctx.lineTo(39.2, 12.1);
			ctx.lineTo(39.2, 10.4);
			ctx.lineTo(33.9, 10.4);
			ctx.lineTo(33.9, 10.4);
			ctx.closePath();
		}
		ctx.fillStyle = 'rgb(255,255,255)';
		ctx.fill();
		ctx.restore();
		
		var rad = 0;
		!function(){
			var callee = arguments.callee;
			if( !$(target).width() ){
				$icon.hide();
			}else{
				$icon.show();
			}
			$icon.css({
				top:$(target).offset().top + position.top + Math.sin(rad / Math.PI) * 2,
				left:$(target).offset().left + position.left
			});
			rad++;
			if( rad > 360 )
				rad -= 360;
			setTimeout(callee, 50);
		}();
	};
	SL.mobiles = re;
	
	$(function(){ SL.init() });
}(jQuery)