console.log("hola mundo!");

var map = L.map("map").setView([51.505, -0.09], 13);

// Capa
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var CyclOSM = L.tileLayer(
  "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

// Añadir marcadores
var marker = L.marker([51.5, -0.09]).addTo(map);

// Círculo
var circle = L.circle([51.508, -0.11], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);
// Polígono

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(map);

// Añadir popups
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
  .setLatLng([51.513, -0.09])
  .setContent("I am a standalone popup.")
  .openOn(map);

// Evento

var popup = L.popup();
function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);

  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);

async function getData() {
  try {
    const res = await fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

// getData().then(data=>console.log(data));

function paintData(data) {
  // [{},{},{},{}]
  // latitud -> 1
  // longitud -> 0

  // Tratamiento de datos
  data.features.forEach((pin) => {
    const coordinates = [
      pin.geometry.coordinates[1],
      pin.geometry.coordinates[0],
    ];
    const title = pin.properties.title;
    const mag = pin.properties.mag;
    const place = pin.properties.place;

    // Añadir marcadores
    const marker = L.marker(coordinates)
      .bindPopup(
        `${title}
                            MAG:${mag}
                            Location:${place}
                            <button class='save-btn'>Guardar</button>
                            `
      )
      .addTo(map);

    marker.on("popupopen", () => {
      const saveButton = document.querySelector(".save-btn");
      if (saveButton) {
        saveButton.addEventListener("click", () => {
          alert(`Terremoto guardado!: ${title}`);
        });
      }
    });
  });
}

getData().then((data) => paintData(data));
