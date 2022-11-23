
function initMap() {

  const norway = { lat: 60.4720, lng: 8.4689 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: norway,
  });
   google.maps.marker = new google.maps.Marker({
    position: norway
	position:new google.maps.Marker(
    map: map,
  });
}

window.initMap = initMap;
