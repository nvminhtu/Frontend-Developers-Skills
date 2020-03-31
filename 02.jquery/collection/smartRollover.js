$(function() {
	var imgCount = 0;
	var images_pre = new Array();
	$('img[src*="_off."],input[src*="_off."]').each (function(){
		images_pre[imgCount] = new Image();
		images_pre[imgCount].src = $(this).attr("src").replace("_off.", "_on.");
		$(this).hover(
			function () {
				$(this).attr("src", $(this).attr("src").replace("_off.", "_on."));
			},
			function () {
				$(this).attr("src", $(this).attr("src").replace("_on.", "_off."));
			}
		);
		imgCount ++;
	});
});
