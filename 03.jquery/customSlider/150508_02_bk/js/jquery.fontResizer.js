
(function($){
	$(function(){
		var elements = document.getElementsByTagName('*');
		var $resizer = $('');
		for(var i = 0; i < elements.length; i++){
			if ( elements[i].className || elements[i].className != null ){
				if ( elements[i].className.match(/fontResizer[a-zA-Z0-9]+/) ) {
					$resizer = ( !$resizer.length ) ? $(elements[i]) : $resizer.add(elements[i]);
				}
			}
		}
		
		$resizer.not('.fontResizerTarget').css( 'cursor', 'pointer' ).click(function(){
			if ( $(this).get(0).className ) {
				$(this).get(0).className.match(/fontResizer([a-zA-Z0-9]+)/);
				var size = RegExp.$1 - 0;
				if ( size ) {
					size = ( isNaN(size) ) ? size : size + '%';
					$.cookie('fontsize', size, {expires: 7});
					fontResizer();
					return false;
				}
			}
		});
		fontResizer();
	});
	
/*	function fontResizer(){
		var size = $.cookie('fontsize');
		if (size != null) {
			$('.fontResizerSelected').removeClass('fontResizerSelected');
			$('.fontResizerTarget').css({ fontSize: size });
			$('.fontResizer' + size.replace('%', '')).addClass('fontResizerSelected');
		}
	}*/
	
	function fontResizer(){
		var size = $.cookie('fontsize');
		if (size != null) {
			$('.fontResizerSelected').removeClass('fontResizerSelected');
			$('.fontResizerTarget').css({ fontSize: size });
			$('.fontResizer' + size.replace('%', '')).addClass('fontResizerSelected');
			if (size == '100%') {
			document.getElementById("img01").setAttribute("src", document.getElementById("img01").getAttribute("src").replace("_off1.", "_on1."));
			document.getElementById("img02").setAttribute("src", document.getElementById("img02").getAttribute("src").replace("_on1.", "_off1."));
			}
			if (size == '125%') {
			document.getElementById("img02").setAttribute("src", document.getElementById("img02").getAttribute("src").replace("_off1.", "_on1."));
			document.getElementById("img01").setAttribute("src", document.getElementById("img01").getAttribute("src").replace("_on1.", "_off1."));
			}
		}
	}
})(jQuery);