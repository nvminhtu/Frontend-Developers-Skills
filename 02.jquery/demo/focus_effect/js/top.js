/*
common
*/

var _main;

var Main = ( function()
{
	function Main()
	{
		this._threeMain;
		this._canvasBg;
		this._cover;
		
		this.isCover = true;


		this._worksList = [
		[ "box11", "http://localhost.frontend/tu/focus_effect/australia.jpg", "", "/projects/fact/" ],
		[ "box10", "http://homunculus.jp/common/img/works/texture9.jpg", "http://homunculus.jp/common/img/works/text9.png", "/projects/thisisjapan/" ],
		[ "box1", "http://homunculus.jp/common/img/works/texture9.jpg", "http://homunculus.jp/common/img/works/text9.png", "/projects/cledepeau-2014aw/" ],
		[ "box2", "http://homunculus.jp/common/img/works/texture8.jpg", "http://homunculus.jp/common/img/works/text8.png", "/projects/daisukekobayashi/" ],
		[ "box12", "http://homunculus.jp/common/img/works/texture7.jpg", "http://homunculus.jp/common/img/works/text7.png", "/projects/pg-bold-cinderella/" ],
		[ "box4", "http://homunculus.jp/common/img/works/texture6.jpg", "http://homunculus.jp/common/img/works/text6.png", "/projects/medical-youkai/" ],
		[ "box5", "http://homunculus.jp/common/img/works/texture5.jpg", "http://homunculus.jp/common/img/works/text5.png", "/projects/haneda-voices/" ],
		[ "box6", "http://homunculus.jp/common/img/works/texture4.jpg", "http://homunculus.jp/common/img/works/text4.png", "/projects/mikaforshu/" ],
		[ "box7", "http://homunculus.jp/common/img/works/texture3.jpg", "http://homunculus.jp/common/img/works/text3.png", "/projects/asiacross/" ],
		[ "box8", "http://homunculus.jp/common/img/works/texture2.jpg", "http://homunculus.jp/common/img/works/text2.png", "/projects/omotesundo/" ]//,
		//[ "box9", "http://homunculus.jp/common/img/works/texture1.jpg", "http://homunculus.jp/common/img/works/text1.png", "/projects/makers-base/" ]
		];
		
		this._modelCount = 0;
		
		
		window.onload = function()
		{
			_main.onLoad();
		}
	}


	Main.prototype.onLoad = function()
	{
		document.body.style.overflow = "hidden";
		document.body.style.position = "fixed";
		window.scrollTo(0, 0);
		document.getElementById( "container" ).style.visibility = "hidden";
		document.getElementById( "container" ).style.opacity = "0";
	  document.getElementById( "header" ).style.visibility = "hidden";
		
		
		//bg
		this._canvasBg = new CanvasBg( "bg", false );
	
		//tjree.js
		this._threeMain = new THREEMain( );
	
		//カセット生成
		for( var i = 0; i < this._worksList.length; i++ )
		{
			this._threeMain.create( this._worksList[i][0],this._worksList[i][1],this._worksList[i][2],this._worksList[i][3] );
		}
	
	
		if( navigator.userAgent.indexOf("Mac") == -1 )
		{
			setScrroll( );
		}
	
		setPageTop();
	
		window.onresize = function(e)
		{
			onResize( );
		}
	
	
		if( !this.isCover )
		{
			var _child = document.getElementById( "cover" );
			document.body.removeChild( _child );
			
			document.body.style.overflow = "auto";
			document.body.style.position = "static";
			window.scrollTo(0, 0);
			
		}
		
	}
	
	
	
	/*-------------------------------------------------------------------------
	COVER CLEAR
	*/
	Main.prototype.clearCover = function()
	{
		this.xAllReady();
		
		var _this = this;
		
		$( '#cover' ).animate({
			top: ( window.innerHeight* -1 - 100 ),
		}, 650, 'easieEaseOutCubic', _this.clearCoverComp );
	}
	
	Main.prototype.clearCoverComp = function()
	{
		//console.log( "ccc:" + _main._cover );
		_main._cover.clearCover();
		var _child = document.getElementById( "cover" );
		document.body.removeChild( _child );
		_main.xAllStart();
	}



	/*------------------------------------------------------------------------
	START
	*/
	Main.prototype.xAllReady = function()
	{
		document.body.style.overflow = "auto";
		document.body.style.position = "static";
		document.getElementById( "container" ).style.visibility = "visible";
		document.getElementById( "header" ).style.visibility = "visible";
		
	
		//
		$( '#container' ).animate({
			opacity: 1
		}, 600, 'easieEaseOutCubic' );
		
		window.scrollTo(0, 0);
	}



	Main.prototype.xAllStart = function()
	{
		this._threeMain.start();
		this._canvasBg.start();
	}
	
	
	//-------------------------------------------------------------------------------
	
	/*
	worksモデルが生成されたら呼ばれる
	threeMainから
	*/
	Main.prototype.modelComp = function()
	{	
		this._modelCount++;
		
		if( this._modelCount >= this._worksList.length )
		{	
			this._timer = setTimeout( _main.modelCompTimer, 1000 );
		}
	}
	
	Main.prototype.modelCompTimer = function()
	{	
		clearTimeout( _main._timer );
		
		//coverなし
		_main.xAllReady();
		_main.xAllStart();
		
	}



	/*
	LOADING-----------------------------------------------------------------------
	*/

	Main.prototype.addLoadind = function()
	{
		var _elm = document.createElement('div');
		_elm.id = "loading";
		_elm.innerHTML = "<img src='http://homunculus.jp/common/img/loading.gif'>"
		document.body.appendChild( _elm );
	}


	Main.prototype.removeLoading = function()
	{
		if( document.getElementById( "loading" ) != null );
		{
			$( '#loading' ).animate({
				opacity: 0
			}, 300, 'easieEaseOutCubic', _main.removeLoadingComp );
		}
	}
	
	
	Main.prototype.removeLoadingComp = function()
	{
		var _child = document.getElementById( "loading" );
		document.body.removeChild( _child );
	}



	return Main;
		
})();


_main = new Main();