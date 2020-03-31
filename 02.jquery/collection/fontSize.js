$(function() {
	if(!$.cookie('fontsize')) {
		changeSize(2);
	}else {
		changeSize($.cookie('fontsize'));
	}
});

function changeSize(sizeNum){
	for(var i = 1; i <= 3; i++) {
		var img = $('img','#headContainer dl dd li:eq('+(i-1)+')');
		if(i == sizeNum){
			img.unbind().css('cursor','default');
			if(!img.attr('src').match("_on.")) img.attr('src', img.attr('src').replace('_off.gif', '_on.gif'));
		}else {
			setChangeBtn(img, i);
		};
	}
	$("#contentsContainer").attr("class", "fontsize"+sizeNum);
	$.cookie('fontsize',sizeNum,{expires:30,path:'/'});
}

function setChangeBtn(ele, num){
	ele.attr('src', ele.attr('src').match("_on.") ? ele.attr('src').replace('_on.gif', '_off.gif') : ele.attr('src'));
	ele.hover(
		function () {
			$(this).attr('src', $(this).attr('src').replace('_off.gif', '_on.gif'));
		},
		function () {
			$(this).attr('src', $(this).attr('src').replace('_on.gif', '_off.gif'));
		}
	).click( function(){
		changeSize(num);
	}).css('cursor','pointer')
}

