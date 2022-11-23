
function initMap() {
	
	// 1st place lat lng
  const norway = { lat: 60.4720, lng: 8.4689 };
	
	// 2nd place lat lng

	const tokyo = { lat: 35.652832, lng: 139.839478 };
	
	const paris = { lat: 48.864716, lng: 2.349014 };
	
	// create another center
	var center = new google.maps.LatLng(39.220319, 28.096323);
	
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: center,
  });
  
  // 1st place marker
   var norwaymarker = new google.maps.Marker({
    position:{ lat: 60.4720, lng: 8.4689 },
	lable: "Norway",
    map: map,
  });
  
  // 2nd place marker
  var tokyomarker = new google.maps.Marker({
    position: { lat: 35.652832, lng: 139.839478 },
	lable: "Tokyo",
    map: map,
  });
  
  var parismarker = new google.maps.Marker({
    position: { lat: 48.864716, lng: 2.349014 },
	lable: "Paris",
    map: map,
  });
}

window.initMap = initMap;
