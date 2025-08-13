decodeURI("%"); // URI malformed
decodeURIComponent("%"); 
decodeURI("http://example.com/%");

fetch("%").then(response => response.json()).then(data=>console.log(data)).catch(error=>console.log(error.message)); // Fetching with malformed URI