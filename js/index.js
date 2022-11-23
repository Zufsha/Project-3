// Initialize and add the map
function initMap() {
  // The location of Uluru
  const norway = { lat: 60.4720, lng: 8.4689 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: norway,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: norway,
    map: map,
  });
}

window.initMap = initMap;
