/* eslint-disable */


export const displayMap = (locations) => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1eWFuZ2Nvbm5vciIsImEiOiJjbG11bzN0NnYwZWFoMmlxd29wYmU5Z2lzIn0.ZLiX6jcbcpsp9msNokXdrA'

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shuyangconnor/clmuov0r3008u01rdc3kzgmco',
    // center: [-118.113491, 34.111745],
    scrollZoom: false,
    // interactive: false
  })

  const bounds = new mapboxgl.LngLatBounds()

  locations.forEach(location => {
    // Create marker
    const el = document.createElement('div')
    el.className = 'marker'

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    }).setLngLat(location.coordinates).addTo(map)

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    }).setLngLat(location.coordinates).setHTML(`<p>Day ${location.day}: ${location.description}</p>`).addTo(map)

    // Extend the map bounds to include current location
    bounds.extend(location.coordinates)
  })
  1
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  })
}