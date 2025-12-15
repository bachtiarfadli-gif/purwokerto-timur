function initMap(targetId, mapConfig) {

  const map = L.map(targetId).setView(
    mapConfig.center,
    mapConfig.zoom
  );

  const osm = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { attribution: '&copy; OpenStreetMap' }
  ).addTo(map);

  const satellite = L.tileLayer(
    'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    { subdomains:['mt0','mt1','mt2','mt3'], maxZoom: 20 }
  );

  const overlayLayers = {};

  for (const name in mapConfig.layers) {
    fetch(mapConfig.layers[name].url)
      .then(res => res.json())
      .then(data => {

        const cfg = mapConfig.layers[name];

        const layer = L.geoJSON(data, {
          style: cfg.style,
          pointToLayer: cfg.color
            ? (f, latlng) =>
                L.circleMarker(latlng, {
                  radius: 6,
                  fillColor: cfg.color,
                  color: "#fff",
                  weight: 1,
                  fillOpacity: 1
                })
            : null,
          onEachFeature: (f, layer) => {
            let popup = "";
            for (let k in f.properties) {
              popup += `<b>${k}</b>: ${f.properties[k]}<br>`;
            }
            layer.bindPopup(popup);
          }
        });

        overlayLayers[name] = layer;
        if (cfg.visible !== false) layer.addTo(map);
      });
  }

  L.control.layers(
    { "OpenStreetMap": osm, "Google Satellite": satellite },
    overlayLayers,
    { collapsed: false }
  ).addTo(map);
}
