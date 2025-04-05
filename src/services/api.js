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
    const response = await fetch( `${BASE_URL}/data/2.5/weather?lat=` + lat + 
        `&lon=`+ lon + `&appid=` + API_KEY);

    const data = await response.json();
    return data;
}

export const getCityWeather = async ( city ) => {
    let cities = await getLongLat( city ); 

    for ( let i = 0; i < cities.length; i++ ){
        let weather = await getWeather( cities[i].lat, cities[i].lon); 

        cities[i].currentTemperature = weather.main.temp;
        cities[i].currentHumidity = weather.main.humidity; 
        cities[i].id = cities[i].lon + "|" + cities[i].lat;
        cities[i].description = weather.weather[0].description;
        cities[i].icon = weather.weather[0].icon;
        cities[i].feels_like = weather.main.feels_like;
        if (weather.rain) cities[i].rain = weather.rain["1h"];
        if (weather.snow) cities[i].snow  = weather.snow["1h"];
        cities[i].clouds = weather.clouds.all;

    
    }
    return cities;

}