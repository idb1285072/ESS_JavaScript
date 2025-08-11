navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position);
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
