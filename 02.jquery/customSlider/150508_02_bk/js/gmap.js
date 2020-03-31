/*
	App Name: gmap.js
	App URI: None
	Description: A way easily to use Google Maps API v3
	Version: 0.8.1
	Author: Takuma Ando
	Author URI: None
	license: Dual licensed under the MIT and GPL license 3
	         http://www.opensource.org/licenses/mit-license.php
	         http://www.gnu.org/licenses/gpl.html
	Created: 2010-07-07
	Modified: 2013-09-13
*/

/*
	Class GMaps
*/
function GMaps(htmlOptions){
	//Set properties
	this.fileName = 'gmap.js';
	this.maps = [];
	this.loaded = 0;
	this.callback;
}

GMaps.prototype.init = function(){
	this.params = this._extend({}, this._getParams());
	this.defaultOptions = {
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		navigationControl: true,
		scaleControl: false,
		scrollwheel: true,
		streetViewControl: false
	};
};

GMaps.prototype.create = function(){
	var maps = this._getElementsByClassName('gMap');
	for(var i = 0; i < maps.length; i++){
		this.maps.push(this.rendering(maps[i]));
	}
};

GMaps.prototype.isAuto = function(){
	return (this.params.auto) ? true: false;
};

GMaps.prototype.setMarkerWithInfoWindow = function(markerOptions, infoWindowOptions){
	var marker = new google.maps.Marker(markerOptions);
	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
	google.maps.event.addListener(marker, 'click', function(){
		infoWindow.open(markerOptions.map, marker);
	});
	return marker;
};

GMaps.prototype.rendering = function(map){
	var that = this;
	var htmlOptions = this._extend({}, this.defaultOptions);
	var additionalOptions = {
		minifyInfoWindow: false
	};
	
	/*
		className configurations
	*/
	var _className = (map.className) ? map.className: map.getAttribute('class');
		
		//zoom
		if(_className.match(/gMapZoom(\d+)/)){
			htmlOptions.zoom = RegExp.$1 - 0;
		}
		
		//navigation style
		if(_className.match(/gMapNavigation([a-z]+)/)){
			htmlOptions.navigationControlOptions = {
				style: eval('google.maps.NavigationControlStyle.' + RegExp.$1.toUpperCase())
			};
		}
		
		//disable scrollwheel
		if(_className.match(/gMapDisableScrollwheel/)){
			htmlOptions.scrollwheel = false;
		}
		
		//enable streetViewControl
		if(_className.match(/gMapEnableStreetView/)){
			htmlOptions.streetViewControl = true;
		}
		
		//enable mapTypeControl
		if(_className.match(/gMapEnableMapType/)){
			htmlOptions.mapTypeControl = true;
		}
		
		//enable scaleControl
		if(_className.match(/gMapEnableScale/)){
			htmlOptions.scaleControl = true;
		}
		
		//minify infoWindow
		if (_className.match(/gMapMinifyInfoWindow/)){
			additionalOptions.minifyInfoWindow = true;
		}
		
	/*
		center
	*/
	var centerElem = this._getElementsByClassName('gMapCenter', map);
	if(centerElem.length > 0){
		var center = this._getLatLng(centerElem[0]);
		htmlOptions.center = new google.maps.LatLng(center[0] - 0, center[1] - 0);
	}else{
		return null;
	}
	
	/*
		markers
	*/
	var markerElems = this._getElementsByClassName('gMapMarker', map);
	var markers = [];
	for(var j = 0; j < markerElems.length; j++){
		markers.push({
			latLng: this._getLatLng(markerElems[j]),
			infoWindow: this._getElementsByClassName('gMapInfoWindow', markerElems[j])[0],
			icon: this._getElementsByClassName('gMapIcon', markerElems[j])[0]
		});
	}
	
	/*
		generate a map
	*/
	var GMap = new google.maps.Map(map, htmlOptions);
	for(var j = 0; j < markers.length; j++){
		var latlng = new google.maps.LatLng(markers[j].latLng[0] - 0, markers[j].latLng[1] - 0);
		if (markers[j].infoWindow){
			var marker = this.setMarkerWithInfoWindow({
				position: latlng,
				map: GMap,
				icon: (markers[j].icon) ? markers[j].icon.getAttribute('src') : null
			}, {
				content: this._wrap(markers[j].infoWindow)
			});
		} else {
			var marker = new google.maps.Marker({
				position: latlng,
				map: GMap,
				icon: (markers[j].icon) ? markers[j].icon.getAttribute('src') : null
			});
		}
		
		//start with infoWindow minified
		if (!additionalOptions.minifyInfoWindow && j == 0 ){
			google.maps.event.trigger(marker, 'click');
		}
	}
	
	//set event up
	var tilesloaded = google.maps.event.addListener(GMap, 'tilesloaded', function(){
		that._loaded();
		google.maps.event.removeListener(tilesloaded);
	});
	
	return GMap;
};

GMaps.prototype._getElementsByClassName = function(_className, elem){
	var elem = (elem) ? elem: document;
	var elems = (elem.all) ? elem.all: elem.getElementsByTagName("*");
	var re = new RegExp('(^|\ +)'+_className+'(\ +|$)');
	var nodeList = [];
	for(var i = 0; i < elems.length; i++){
		if(elems[i].className && elems[i].className != null){
			if(elems[i].className.match(re)) {
				nodeList.push(elems[i]);
				continue;
			}
		}
	}
	return nodeList;
};

GMaps.prototype._getLatLng = function(elem){
	var latLngElem = this._getElementsByClassName('gMapLatLng', elem);
	if(latLngElem.length > 0){
		var target = latLngElem[0];
		//iPad :: latLngElem may has <a>
		var children = target.getElementsByTagName('a');
		while(children.length){
			var tNode = document.createTextNode(children[0].innerHTML);
			target.insertBefore(tNode, children[0]);
			target.removeChild(children[0]);
		}
		var latLng = target.innerHTML;
		return latLng.replace(/\ /, '').split(',');
	}
	return [0,0];
};

GMaps.prototype._wrap = function(nodes, _tagName){
	_tagName = _tagName || 'div';
	var wrapper = document.createElement(_tagName);
	if(typeof nodes == 'array'){
		for(var i = 0; i < nodes.length; i++){
			wrapper.appendChild(nodes[i]);
		}
	}else{
		wrapper.appendChild(nodes);
	}
	return wrapper;
};

GMaps.prototype._extend = function(obj, extension){
	for( var prop in extension){
		obj[ prop ] = extension[ prop ];
	}
	return obj;
};

GMaps.prototype._getParams = function(){
	try {
		var scripts = document.getElementsByTagName('script');
		var re = new RegExp(this.fileName.replace(/\./, '\\.') + '\\?(.*?)$');
		for(var i = 0; i < scripts.length; i++){
			if(scripts[i].src && scripts[i].src != null){
				if(scripts[i].src.search(re) != -1){
					if(RegExp.$1){
						var params = {};
						var _params = RegExp.$1.split('&');
						for(var j = 0; j < _params.length; j++){
							var param = _params[j].split('=');
							param[1] = (param[1]) ? param[1]: 1;
							params[param[0]] = param[1];
						}
						return params;
					}
					break;
				}
			}
		}
	} catch(e){}
	return {};
};

GMaps.prototype._loaded = function(){
	this.loaded++;
	if(this.maps.length == this.loaded){
		if(this.callback){
			this.callback();
		}
	}
};

/*
	Load Google Maps API v3
*/
//get params
var _params = new GMaps()._getParams();

var other_params = 'sensor=false';
if(_params.hl) { other_params += '&language=' + _params.hl; }

var params = {
	language: (_params.hl) ? _params.hl : 'ja',
	other_params: other_params
};

google.setOnLoadCallback(function(){
	var gmaps = new GMaps();
	gmaps.init();
	if(gmaps.isAuto()){
		//Set 'gMaps' as global variable
		gMaps = gmaps.create();
	}
});
google.load('maps', '3.x', params);