var CanvasDetector = {
	canCanvas: function()
	{
		return !!window.CanvasRenderingContext2D
	},
	canWebGL: function()
	{
		try
		{
			return !!window.WebGLRenderingContext && !!document.createElement( 'canvas' ).getContext( 'experimental-webgl' );
		}
		catch( e )
		{
			return false;
		}
	}
};