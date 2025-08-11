# Browser APIs

## Geolocation API

The Geolocation API is a Browser API that lets web applications request the device’s physical location.

```js
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
    console.log("Accuracy (meters):", position.coords.accuracy);
  },
  (error) => {
    console.error("Error code:", error.code, error.message);
  },
  {
    enableHighAccuracy: true, // request GPS if available
    timeout: 5000, // max time to wait (ms)
    maximumAge: 0, // don't use cached position
  }
);
```

```js
const watchId = navigator.geolocation.watchPosition(
  (pos) => {
    console.log(`Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`);
  },
  (err) => console.error(err),
  { enableHighAccuracy: true }
);

// Stop watching after 10 seconds
setTimeout(() => {
  navigator.geolocation.clearWatch(watchId);
}, 10000);
```

```html
<div id="map" style="height:300px;"></div>
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

<script>
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const map = L.map("map").setView([latitude, longitude], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
          map
        );
        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup("You are here")
          .openPopup();
      },
      (err) => {
        console.error("Error getting location:", err);
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
</script>
```

## Clipboard API

## Drag and Drop API

