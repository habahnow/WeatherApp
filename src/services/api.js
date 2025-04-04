const API_KEY = "68a25b86b868e3d62305da48f8fdee23";
const BASE_URL = "http://api.openweathermap.org";


export const getLongLat = async ( city ) => {
    const response = await fetch(
        `${BASE_URL}/geo/1.0/direct?q= 
        ${encodeURIComponent( city )}&limit=10&appid=${API_KEY}`);

    const data = await response.json();
    return data;
}

export const getWeather = async ( lat, lon ) => {
    const response = await fetch( `${BASE_URL}/data/2.5/forecast?lat=` + lat + 
        `&lon=`+ lon + `&appid=` + API_KEY);

    const data = await response.json();
    return data.results;
}