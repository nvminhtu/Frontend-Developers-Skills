/*
bg
*/


CanvasBg = ( function()
{
	function CanvasBg( _id, isAuto )
	{
		//IE?
		this.isIE = false;
		var _ua = window.navigator.userAgent;
		if( _ua.match(/MSIE/) || _ua.match(/Trident/) )
		{
			this.isIE = true;
		}
		
		this._id = _id;
		this.isAuto = isAuto;
		
		this._canvas;
		this._stage;
		this._width;
		this._height;
		
		this._scaleX;
		this._scaleY;
		
		//ABOUT
		this._about;
		
		this._count = 0;
		
		this._lineNum = 2;
		this._lineList = [];
		
		this.init( );
	}
	
		
	/*
	INIT
	*/
	CanvasBg.prototype.init = function()
	{
		this._canvas = document.getElementById( this._id );
		this._stage = new createjs.Stage( this._canvas );
		
		this._width = window.innerWidth;
		this._height = window.innerHeight;
		
		this.loadImg();
	}
	
	
	
	/*
	LOAD IMG
	*/
	CanvasBg.prototype.loadImg = function()
	{
		var _this = this;
		var _img = new Image();
		_img.src = "/common/img/bg.png";
		//_img.onload = loadImgComplete;
		_img.onload = function( e )
		{
			_this.createImg( e );
		}
	}
	
	CanvasBg.prototype.createImg = function( e )
	{		
		var _img = e.target;
		
		//line
		for( var i = 0; i < 2; i++ )
		{
			var _line = new CanvasLine( this, _img );
			this._lineList.push( _line );
		}
		
		
		//ABOUT bg
		if( location.href.indexOf( "/about/" ) != -1 )
		{
			this._about = new CanvasAbout( this );
		}
		
		
		//自動再生するか？
		if( this.isAuto )
		{
			this.start();
		}
	}
	
	
	
	CanvasBg.prototype.pageEnd = function()
	{
		if( this._about != undefined )
		{
			this._about.pageEnd();
		}
	}
	
	
	
	CanvasBg.prototype.start = function()
	{
		//RESIZE
		xAddResize( this );	
		this.onResize( );
		
		//enterframe
		var _this = this;
		createjs.Ticker.setFPS( 30 );
		createjs.Ticker.addEventListener( "tick", function(){ _this.tick.apply(_this) } );
	}
	
	
	
	/*
	ENTER FRAME
	*/
	CanvasBg.prototype.tick = function( )
	{	
		var i;
		
		this._count++;
		
		if( this._count >= 40 )
		{
			this._count = 0;
			
			for( i = 0; i < this._lineList.length; i++ )
			{
				this._lineList[i].pointChange( );
			}
		}
		
		for( i = 0; i < this._lineList.length; i++ )
		{
			this._lineList[i].update( );
		}
		
		if( this._about != null )
		{
			this._about.update();
		}
		
		this._stage.update( );
	}
	
	
	
	/*
	RESIZE
	*/
	CanvasBg.prototype.onResize = function( )
	{
		this._scaleX = window.innerWidth / this._width;
		this._scaleY = window.innerHeight / this._height;
		
		this._stage.canvas.width = window.innerWidth;
		this._stage.canvas.height = window.innerHeight;
		
		this._width = window.innerWidth;
		this._height = window.innerHeight;
		
		
		
		//line
		for( var i = 0; i < this._lineList.length; i++ )
		{
			this._lineList[i].resize( );
		}
		
		//about
		//console.log(this._about);
		
		
		if( this._about != undefined )
		{
			this._about.resize();
		}
		
		this._stage.update();
	}
	
	
	return CanvasBg;
		
} )();





