  var area_maps = new Array();

  $.getJSON('js/area.json', function(data) {
    
    // for (var i = 0; i < data.length; i++) {
    //   area_maps[i][1]= data[i].area_title;
    //   area_maps[i][2] = data[i].area_long;
    //   area_maps[i][3] = data[i].area_lat;
    // }
    
    //console.log(data);
    // for (var i in data) {
    //    area_maps[i] = data[i].slice();
    // }

  });
 
  //Define Lattitude & Longtitude
  var area_maps = [ 
    { "id_show":"map","area_long":"10.7835923","area_lat":"106.6965481",
      "locations": [
        {"title":"<h4>Sai Gon Zoo</h4>","lat":"10.7865226","long":"106.7058501"},
        {"title":"<h4>Ben Thanh Market</h4>","lat":"10.775377","long":"106.6989327"},
        {"title":"<h4>Diamond</h4>","lat":"10.7810777","long":"106.7009571"}
      ]
    },
    {"id_show":"map2","area_long":"10.4025204","area_lat":"107.1217798"},
    {"id_show":"map3","area_long":"107.1217798","area_lat":"10.4025204"},
    {"id_show":"map4","area_long":"10.7835923","area_lat":"106.6965481"},
    {"id_show":"map5","area_long":"10.7835923","area_lat":"106.6965481"}
  ];
   console.log(area_maps);
  //Define locations in one map
  console.log(area_maps[0].locations);

  var locations = [
    ['<h4>Sai Gon Zoo</h4>', 10.7865226, 106.7058501],
    ['<h4>Ben Thanh Market</h4>', 10.775377, 106.6989327],
    ['<h4>Diamond</h4>', 10.7810777, 106.7009571]
  ];

  //Setup the different icons and shadows
  var iconURLPrefix = 'http://maps.google.com/mapfiles/ms/icons/';

  var icons = [
    iconURLPrefix + 'red-dot.png',
    iconURLPrefix + 'green-dot.png',
    iconURLPrefix + 'blue-dot.png'
  ];

  var iconsLength = icons.length;
  
  //Define area of map
 
   // Setup map options
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: new google.maps.LatLng(10.7835923, 106.6965481),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      panControl: false,
      zoomControlOptions: {
         position: google.maps.ControlPosition.LEFT_BOTTOM
      }
    });
    var infowindow = new google.maps.InfoWindow({
      maxWidth: 160
    });
    var markers = new Array();
    
    var iconCounter = 0;
    
    // Add the markers and infowindows to the map
    for (var i = 0; i < locations.length; i++) {  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: icons[iconCounter]
      });
      markers.push(marker);
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
      
      iconCounter++;
      // We only have a limited number of possible icon colors, so we may have to restart the counter
      if(iconCounter >= iconsLength) {
        iconCounter = 0;
      }
    }

  function autoCenter() {
    //  Create a new viewpoint bound
    var bounds = new google.maps.LatLngBounds();
    //  Go through each...
    for (var i = 0; i < markers.length; i++) {  
  	  bounds.extend(markers[i].position);
    }
    //  Fit these bounds to the map
    map.fitBounds(bounds);
  }

  autoCenter();