// Global variables.
var map;
function initMap() {
	// Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 59.927278, lng: 10.700805},
    	zoom: 13
		});
	}