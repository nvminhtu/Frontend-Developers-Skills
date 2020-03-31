$(function() {
	var notBlank = new Array("fujiofood.com","z301.secure.ne.jp");

	var n = "";
	for (var i = 0; i < notBlank.length; i ++) n += ":not([href*='" + notBlank[i] + "'])";n += ":not([href*='" + document.domain + "'])";


	$("a[rel='external'], a[href$='.pdf']").attr("target", "_blank");
	$("a[href^=http]"+n).attr("target", "_blank");

	$("a[rel='shopsearch']").each( function(){
		$(this).click( function(){
			var wo = window.open($(this).attr("href"),"popupwin","status=yes,menubar=yes,scrollbars=yes,width=680,height=620");
			return false;
		});
	});

	$("a[rel^='popup']").each( function(){
		$(this).click( function(){
			var w = $(this).attr("rel").indexOf("w=") == -1 ? 600 : $(this).attr("rel").substring($(this).attr("rel").indexOf("w=") + 2, $(this).attr("rel").indexOf(";", $(this).attr("rel").indexOf("w=")));
			var h = $(this).attr("rel").indexOf("h=") == -1 ? 600 : $(this).attr("rel").substring($(this).attr("rel").indexOf("h=") + 2, $(this).attr("rel").indexOf(";", $(this).attr("rel").indexOf("h=")));
			var wo = window.open($(this).attr("href"),"popupwin","status=yes,menubar=yes,scrollbars=yes,width="+w+",height="+h);
			return false;
		});
	});
});

