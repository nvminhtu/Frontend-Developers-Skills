// Part 1: Define store maker
var iconURLPrefix = 'http://maps.google.com/mapfiles/ms/icons/';
var icons = [
  iconURLPrefix + 'red-dot.png',
  iconURLPrefix + 'green-dot.png',
  iconURLPrefix + 'blue-dot.png'
];

var iconsLength = icons.length;

// Part 2: Define google map & makers
function showMap($map, $k ,area_maps) {
  var stores = area_maps[$k].store;
  // Setup map options
  var $map = new google.maps.Map(document.getElementById(area_maps[$k].id_show), {
    zoom: parseInt(area_maps[$k].zoom),
    center: new google.maps.LatLng(area_maps[$k].area_long, area_maps[$k].area_lat),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    panControl: false,
    zoomControlOptions: {
       position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  });
  
  // Define: window makers
  var infowindow = new google.maps.InfoWindow({
    maxWidth: 160
  });
  var markers = new Array();
  var iconCounter = 0;

  // Add the markers and infowindows to the map
  for (var i = 0; i < stores.length; i++) {  
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(stores[i]["lat"], stores[i]["long"]),
      map: $map,
      icon: icons[iconCounter]
    });
    markers.push(marker);
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(stores[i]["title"]);
        infowindow.open($map, marker);
      }
    })(marker, i));
    
    iconCounter++;
    //Restart colors of google markers
    if(iconCounter >= iconsLength) {
      iconCounter = 0;
    }
  }
  

  // Define: view point - auto center
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < markers.length; i++) {  
    bounds.extend(markers[i].position);
  }
  // Fit these bounds to the map
  $map.fitBounds(bounds);
  // var zoom = $map.getZoom();
  // console.log(zoom);
  // $map.setZoom(zoom > 6 ? 6 : zoom);
  
}

// Part 3: Load data from json file
//function run map
function runMap(){ 
  //get data json
  $.getJSON('js/area.json', function(data) {
    var area_maps = new Array();
    area_maps = data.slice();
    for(var i = 0; i < area_maps.length; i++) {
      showMap(area_maps[i].id_show,i,area_maps);
    }
  });
}
// Final: Call & Run
runMap();