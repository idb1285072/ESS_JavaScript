## What is the Geolocation API?

The **Geolocation API** is a **Browser API** that lets web applications request the device’s physical location.

## Core methods

The API is exposed via:

### **a) `getCurrentPosition(success[, error, options])`**

* Gets the location **once**.

```js
navigator.geolocation.getCurrentPosition(
  position => {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
    console.log("Accuracy (meters):", position.coords.accuracy);
  },
  error => {
    console.error("Error code:", error.code, error.message);
  },
  {
    enableHighAccuracy: true, // request GPS if available
    timeout: 5000,            // max time to wait (ms)
    maximumAge: 0             // don't use cached position
  }
);
```

---

### **b) `watchPosition(success[, error, options])`**

* Subscribes to position updates (movement tracking).
* Returns a `watchId` you can use to stop watching.

```js
const watchId = navigator.geolocation.watchPosition(
  pos => {
    console.log(`Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`);
  },
  err => console.error(err),
  { enableHighAccuracy: true }
);

// Stop watching after 10 seconds
setTimeout(() => {
  navigator.geolocation.clearWatch(watchId);
}, 10000);
```

---

### **c) `clearWatch(watchId)`**

* Stops a location watch.

---

## Position object structure

When location is retrieved, you get a `Position` object:

```js
{
  coords: {
    latitude: 37.7749,        // degrees
    longitude: -122.4194,     // degrees
    altitude: null,           // meters above sea level (if available)
    accuracy: 10,             // meters
    altitudeAccuracy: null,   // meters
    heading: 90,              // degrees from north (if moving)
    speed: 1.5                // meters/second
  },
  timestamp: 1691786200000    // ms since epoch
}
```

---

## Error handling

The error callback gets a `PositionError` object:

```js
error.code:
1 => PERMISSION_DENIED
2 => POSITION_UNAVAILABLE
3 => TIMEOUT
```

Example:

```js
error => {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
  }
}
```

---

## **6. Options explained**

| Option               | Type    | Default  | Description                                               |
| -------------------- | ------- | -------- | --------------------------------------------------------- |
| `enableHighAccuracy` | boolean | `false`  | If `true`, use GPS if available (more battery use)        |
| `timeout`            | number  | Infinity | Max time (ms) to wait for location                        |
| `maximumAge`         | number  | 0        | Accept a cached location if it’s not older than this (ms) |

---

## Best practices

* **Always handle permission denial** (don’t assume you’ll get location).
* **Use `enableHighAccuracy` only when needed** — GPS drains battery.
* For continuous tracking, **throttle UI updates** to avoid performance issues.
* Don’t request location unless it’s truly needed (privacy & UX).
* Clearly **explain to users why you need their location** before triggering prompt.
* Combine with a **map library** (Leaflet, Mapbox, Google Maps) for visualization.
* Use `maximumAge` when possible to speed up results and save battery.

---



## Example: Show user on a map

```html
<div id="map" style="height:300px;"></div>
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css">

<script>
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      const map = L.map('map').setView([latitude, longitude], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      L.marker([latitude, longitude]).addTo(map)
        .bindPopup('You are here')
        .openPopup();
    }, err => {
      console.error("Error getting location:", err);
    });
  } else {
    alert("Geolocation is not supported by your browser.");
  }
</script>
```
