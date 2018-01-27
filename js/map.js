// Global variables.
var map;
var marker;
var infowindow;
// Create a new blank array for all the listing markers.
var markers = [];
// These are the place listings that wiil be shown to the user.
var locations = [ {
	name: 'The Vigeland Park Oslo',
	location: {
		lat: 59.927190, 
		lng: 10.700812
	}
}, {
	name: 'Fornebu, Oslo',
	location: {
		lat: 59.900185, 
		lng: 10.628829
	}

}, {
	name: 'Holmenkollen Ski Museum, Oslo',
	location: {
		lat: 59.964337, 
		lng: 10.667083
	}
}, {
	name: 'Viking Ship Museum, Oslo',
	location: {
		lat: 59.905074, 
		lng: 10.684397
	}
}, {
	name: 'Opera House, Oslo',
	location: {
		lat: 59.907650, 
		lng: 10.753138
	}
}, {
	name: 'TusenFryd, Norway',
	location: {
		lat: 59.748181, 
		lng: 10.778209
	}
} ];
function initMap() {
	// Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 59.927278, lng: 10.700805},
    	zoom: 13
		});

	var largeInfowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();

    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
        // Get the position from the location array.
        var position = locations[i].location;
        var title = locations[i].name;
        // Create a marker per location, and put into markers array.
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
          });
        // Push the marker to our array of markers.
        markers.push(marker);
        // Create an onclick event to open an infowindow at each marker.
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
          });
        bounds.extend(markers[i].position);
    }
    // Extend the boundaries of the map for each marker
    map.fitBounds(bounds);
}
// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('<div>' + marker.title + '</div>');
        infowindow.open(map, marker);
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick',function(){
          infowindow.setMarker = null;
        });
    }
}