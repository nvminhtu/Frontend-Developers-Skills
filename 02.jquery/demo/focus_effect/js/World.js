/*
3D WORLD
*/



World = ( function()
{	
	/*
	CONST
	*/
	function World( _op )
	{
		this._objMng;
		
		this.isOver = false;
		this.isAction = false;
		
		this._parent = _op._parent;
		this._id = _op._id;
		this._bmd1 = _op._bmd1;
		this._bmd2 = _op._bmd2;
		this._url = _op._url;
		
		this._stageWidth = document.getElementById( this._id ).getBoundingClientRect().width;
		this._stageHeight = document.getElementById( this._id ).getBoundingClientRect().height;
		
		//camera
		this._fov = 45;
		this._far = 2000;
		this._near = 1;
		
		this.init( );
	}
		
		
	/*
	INIT
	*/
	World.prototype.init = function()
	{
		//if ( !Detector.webgl ) isWebGL = false;
		isWebGL = false;
		
		var _this = this;
		this._meshParentList = [];
			
			
		this.initEngine();
		this.initRender();
			
			
		//RESIZE
		if( isFullScreen )
		{
			window.onresize = function( e )
			{
				return _this.onResize( e );
			};
			
			this.onResize( );
		}
			
		//モデル生成管理
		this._objMng = new ObjectMngCV( this );
		
		//モデル生成
		this.createModel( );
		


		//マウスイベント		
		var _www = this;
		
		$( String( "#" + _www._id ) ).hover(
			function()
			{
				document.body.style.cursor = "pointer";
				_www.mOver( );
			},
			function()
			{
				document.body.style.cursor = "default";
				_www.mOut( );
			}
		);
			
		$( String( "#" + _www._id ) ).click(
			function()
			{
				pageJump( _www._url );
			}
		);
		
		
		//THREEMainへ
		this._parent.modelComp();
	}
		
		
	
	/*
	OVER
	*/
	World.prototype.mOver = function()
	{
		if( !this.isOver )
		{
			this.isOver = true;
			this.isAction = true;
		}
	}
	
	World.prototype.mOut = function()
	{
		if( this.isOver )
		{
			this.isOver = false;
		}
	}
	
	
	
	/*
	アニメーション終了
	*/
	World.prototype.animeEnd = function()
	{
		this.isAction = false;
	}
	
	
		
	/*
	ENGINE
	*/
	World.prototype.initEngine = function()
	{
		this._container = document.createElement( 'div' );
		document.getElementById( this._id ).appendChild( this._container );
		
		//camera
		this._cam = new THREE.PerspectiveCamera( this._fov, this._stageWidth / this._stageHeight, this._near, this._far );
		this._cam.position.z = 496;
		
		if( !isWebGL )
		{
			this._cam.position.z = 494;
		}
					
		//scene
		this._scene = new THREE.Scene();
	}
		
		
	/*
	INIT RENDER
	*/
	World.prototype.initRender = function( )
	{
		//RENDER-------------------------------------------------------------------------------------------
		this._render = new THREE.CanvasRenderer();
		this._render.setSize( this._stageWidth, this._stageHeight );
		this._container.appendChild( this._render.domElement );
	}
		
		
		
	/*
	モデルの生成
	*/
	World.prototype.createModel = function()
	{
		this._objMng.createPlane( );
	}
		
		
		
	/*
	Mesh追加
	*/
	World.prototype.addMesh = function( _mesh, _obj )
	{	
		//3d mesh表示
		this._scene.add( _mesh );
		
		if( _obj != null || _obj != undefined )
		{
			this._meshParentList.push( _obj );
		}
		
		this._render.render( this._scene, this._cam );
	}

		
		
	/*
	RENDER
	*/
	World.prototype.onEnterFrame = function( )
	{
		if( this.isAction )
		{	
			var _leng = this._meshParentList.length;
		
			for( var i = 0; i < _leng; i++ )
			{
				this._meshParentList[i].onEnterFrame( );
			}

			this._render.render( this._scene, this._cam );
			
			//console.log("EEEEEEE");
		}
	}
		
		
	/*
	RESIZE
	*/
	World.prototype.onResize = function( e )
	{
		if(typeof e === "undefined"){ e = null; }
			
		this._stageWidth = window.innerWidth;
		this._stageHeight = window.innerHeight;
			
		this._cam.aspect = this._stageWidth / this._stageHeight;
		this._cam.updateProjectionMatrix();
		this._render.setSize( this._stageWidth, this._stageHeight );
	}

	return World;
		
} )();









