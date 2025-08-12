const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not suppoerted this");
  }
};
const showPosition = (position) => {
  console.log(`Latitude: ${position.coords.latitude}`);
  console.log(`Longitude: ${position.coords.longitude}`);
};
getLocation();
console.log(navigator.geolocation.getCurrentPosition((position)=>{
  console.log(`Latitude: ${position.coords.latitude}`)
  console.log(`Longitude: ${position.coords.longitude}`)
  console.log(`Accurracy: ${position.coords.accuracy}`)
  console.log(`Altitude: ${position.coords.altitude}`)
  console.log(`AltitudeAccuracy: ${position.coords.altitudeAccuracy}`)
  console.log(`Heading: ${position.coords.heading}`)
  console.log(`Speed: ${position.coords.speed}`)
  console.log(`Timestamp: ${position.timestamp}`)
}))