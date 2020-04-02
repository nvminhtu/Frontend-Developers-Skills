$(function() {
		$("#gnavi .sub, #gnavi .sub ul li,#gnavi .sub ul").mouseover(function(e) {
		 $("#gnavi .sub ul").stop(1,1).slideDown();
		  $("#gnavi .sub").find("img.btn_sub").attr("src",$("#gnavi .sub").find("img").attr("src").replace(/_off/, "_on"));
		
	});
	
	$("#gnavi .sub").mouseout(function(e) {
	 $("#gnavi .sub ul").stop(1,1).delay(1000).slideUp();
		//$("#gnavi .sub ul").stop(1,1).delay(1000);
		 $("#gnavi .sub").find("img.btn_sub").delay(2000).attr("src",$("#gnavi .sub").find("img").attr("src").replace(/_on/, "_off"));
	});
});