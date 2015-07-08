google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

  var myLatlng = new google.maps.LatLng(51.920505,4.454438);

  var mapOptions = {
    zoom: 14,

    center: myLatlng,

    mapTypeId: google.maps.MapTypeId.ROADMAP,


    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: false,
    overviewMapControl: true,

    styles: [
      {
        "featureType": "water",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#acbcc9"
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          {
            "color": "#f2e5d4"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on",
            "color": "#c5c6c6"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on",
            "color": "#e4d7c6"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on",
            "color": "#fbfaf7"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on",
            "color": "#c5dac6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": 33
          }
        ]
      },
      {
        "featureType": "road"
      },
      {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": 20
          }
        ]
      },
      {},
      {
        "featureType": "road",
        "stylers": [
          {
            "visibility": "on",
            "lightness": 20
          }
        ]
      },
      {
        featureType: "transit.station.rail",
        elementType: "geometry",
        stylers: [
          { "color": "#ffff00" },
          { "lightness": 33 }
        ]
      },
      {
        featureType: "transit.station.rail",
        elementType: "labels",
        stylers: [
          { hue: "#ffff00" },
          { saturation:50 }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          { invert_lightness:false}
        ]
      }
    ]
  };

  $('#map').hide();

  setTimeout(function()
  {
    $('#map').show();

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'ASK Community Systems'
    });

    //map marker popup
    var contentString = '<div class="text-center">' +
      '<h2>Contact</h2><br>' +
      '<p>Heemraadssingel 89 | 3022 CA Rotterdam<br>010 225 0130 | info@ask-cs.com</p>' +
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 270
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });

    google.maps.event.addListener(marker, 'onmouseover', toggleBounce);

    function toggleBounce() {

      if (marker.getAnimation() != null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }





  }, 1000);

}


//Show and hide JobArea
$( "#jobsToggle" ).click(function() {
  $('#jobArea').removeClass('hide rotateOutUpLeft').addClass('animated rotateInDownLeft');
});

$( "#closeJobs" ).click(function() {
  $('#jobArea').removeClass('rotateInDownLeft').addClass('animated rotateOutUpLeft');
});

