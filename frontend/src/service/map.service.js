const apiKey = process.env.REACT_APP_HERE_API_KEY;

export  function getMap(lat, lon) {
    return `https://image.maps.ls.hereapi.com/mia/1.6/mapview?c=${lat}%2C${lon}&z=5&&apiKey=${apiKey}`;
}
