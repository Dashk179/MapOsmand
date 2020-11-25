const tilesProvider = 'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'

let myMap = L.map('myMap').setView([23.634501, -102.552784], 5)

L.tileLayer(tilesProvider,{
    maxZoom: 20,
}).addTo(myMap)




let iconMarker = L.icon({
    iconUrl: 'marker.png',
    iconSize: [60, 60],
    iconAnchor: [30, 60]
})


navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { coords } = pos
      const { latitude, longitude } = coords
      L.marker([latitude, longitude], { icon: iconMarker }).addTo(myMap)
  
      setTimeout(() => {
        myMap.panTo(new L.LatLng(latitude, longitude))
      }, 5000)
    },
    (error) => {
      console.log(error)
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })