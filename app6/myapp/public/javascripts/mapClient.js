
const generateMarkers = (map) => {
  var locations = [
        {lat: 10.791258, lng: 106.700659},
        {lat: 10.791183, lng: 106.700182},
        {lat: 10.791514, lng: 106.701351},
        {lat: 10.790684, lng: 106.701697},
        {lat: 10.791669, lng: 106.701468},
        {lat: 10.790785, lng: 106.699822},
        {lat: 10.790202, lng: 106.701216},
        {lat: 10.790079, lng: 106.701980},
        {lat: 10.790481, lng: 106.701535}        
      ]  
  var markers = locations.map((location, index) => {
  	let marker = new google.maps.Marker({
  		position: location,
  		label: `Marker ${index}`,
  		map: map
  	});
  	//Marker event's
  	marker.addListener('click', () => {
  		alert(`You click to marker : ${marker.getLabel()}`);
  	});  	
  	marker.addListener('rightclick', () => {
  		alert(`You right-click to marker : ${marker.getLabel()}`);
  	});  	
  	return marker;
  });	  
  let markerCluster = new MarkerClusterer(map, markers, {
    	// imagePath: '../images',
    	// imagePath: 'localhost:3000/images/m1.png',
    	imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
	});
};

export const initMap = ()=>{	
  let myLocation = {lat: 21.015208, lng: 105.847244};    
  let map = new google.maps.Map(document.getElementById('map'), 
  	{
  		zoom: 4, 
  		center: myLocation
  	});    
  //Map event's
  	map.addListener('drag', () => {
  		//alert(`You drag the map to center: ${map.getCenter()}`);
  	});  	
  	map.addListener('dragstart', () => {
  		// alert(`You drag the map to center: ${map.getCenter()}`);
  	});  	
  	map.addListener('dragend', () => {
  		// alert(`You drag the map to center: ${map.getCenter()}`);
  	});  	
  	map.addListener('center_changed', () => {
  		// alert(`You drag the map to center: ${map.getCenter()}`);
  	});  	
  	map.addListener('zoom_changed', () => {
  		alert(`You zoomed the map to bounds: ${map.getBounds()}`);
  	});
  	/*
  	infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
        	navigator.geolocation.getCurrentPosition(function(position) {
        		var pos = {
        			lat: position.coords.latitude,
        			lng: position.coords.longitude
        		};

        		infoWindow.setPosition(pos);
        		infoWindow.setContent('Location found.');
        		infoWindow.open(map);
        		map.setCenter(pos);
        	}, function() {
        		handleLocationError(true, infoWindow, map.getCenter());
        	});
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
      }
      */

  	
  generateMarkers(map);  
}

window.initMap = initMap;//Thêm dòng này để export
$(document).ready(() => {	
    
});