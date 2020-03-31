/*
common
*/


/*-------------------------------------------------------------------------
AGENT
*/

var _device = "PC";

(function()
{
	var ua = navigator.userAgent;

	if((ua.indexOf('Android') > 0 && ua.indexOf('Mobile') == -1) || ua.indexOf('iPad') > 0)
	{
		_device = "TB";
	}
	else if((ua.indexOf('iPhone') > 0 && ua.indexOf('iPad') == -1) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0))
	{
		_device = "SP";
	}
}());




/*------------------------------------------------------------------------
RESIZE
*/
var _resizeList = [];

function xAddResize( _trg )
{
	_resizeList.push( _trg );
}


function xRemoveResize( _trg )
{
	var i;
	var _new = [];
	
	for( i = 0; i < _resizeList.length; i++ )
	{
		if( _resizeList[i] != _trg )
		{
			_new.push( _resizeList[i] );
		}
	}
	
	_resizeList = [];
	
	for( i = 0; i < _new.length; i++ )
	{
		_resizeList.push( _new[i] );
	}
}


function onResize()
{	
	for( var i = 0; i < _resizeList.length; i++ )
	{
		_resizeList[i].onResize();
	}
}
//----------------------------------------------------------



/*
スクロール
*/
function setScrroll()
{
	_scrLength = 200;//180;//200;
	_scrSpeed = 480;//500;
	_scrEasing = 'easieEaseOutCubic';
	//_scrEasing = 'easieEaseOutCubic';

	var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
	
	$(document).on(mousewheelevent,function(e)
	{
		e.preventDefault();
		var _delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
		
		if( _delta < 0 )
		{
			_scrSet =  $( document ).scrollTop() + _scrLength;
		}
		else
		{
			_scrSet =  $( document ).scrollTop() - _scrLength;
		}
		
		$( 'html,body' )
		.stop()
		.animate({ scrollTop:_scrSet }, _scrSpeed, _scrEasing );
		//.animate({ scrollTop:_scrSet }, _scrEasing, $.easie(0,0,0,1));
		return false;
	});
}


/*
ページの先頭へ
*/
function setPageTop()
{
	$('#pageTop').hide();
	
	$(window).scroll(function()
	{
		if($(this).scrollTop() > 100)
		{
			$('#pageTop').fadeIn();
        }
        else
		{
			$('#pageTop').fadeOut();
		}
	});
 
    // 「ページトップへ」をクリックした場合
    $('#pageTop').click(function()
	{
        $('html,body').animate({
            scrollTop: 0
        }, "easieEaseOutQuart" );
        return false;
    });
}


/*
ページ遷移
*/
var isJumpClick = false;

function pageJump( _url )
{
	if( isJumpClick )
	{
		return;
	}
	
	isJumpClick = true;
	
	//bgへ
	_main._canvasBg.pageEnd();
	
	
	$( '#container' ).animate({
		top:'-300px',
		opacity: 0
	},440, function(){
	location.href = _url;
	});
	
	
	/*var myElm = document.createElement("div");
	myElm.style.width = '100%';
	myElm.style.height = '100%';
	myElm.style.backgroundColor = 'red';
	myElm.style.zIndex = 10;
	document.body.appendChild( myElm );
	document.getElementById( "container" ).appendChild( _elm );*/
	
	return false;
}


/*
最初のページ表示
*/
function pageStart( )
{
	document.getElementById( "container" ).style.visibility = "visible";
	
	$( '#container' ).animate({
		top:'120px',
		opacity: 1
	}, 500, 'easieEaseOutCubic', function(){ addedPage() } );
	
	return false;
}


function addedPage()
{
	if( this[ "_detail" ] != undefined )
	{
		this[ "_detail" ].createImg();
	}
}
