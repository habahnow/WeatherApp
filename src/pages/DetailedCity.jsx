import BackButton from "../components/BackButton"
import { useLocation } from "react-router-dom";
import {  kelvinsToFarenheit, kelvinsToCelsius, mmToInches } from "../helperFunctions/ValueConversions"

function DetailedCity() {

    const location = useLocation();
    const { city } = location.state || {};

    if (!city) {
        return <div>No city data is available</div>;
    }

    return(
    <div className="detailed-city">
       <BackButton/> 
        <h2>Detailed City Information</h2>
        <h1>{city.name}</h1>
        <p>{city.state}, {city.country}</p>
        <p>What's the notable about the weather now? {city.description}</p>
        <p>Current temperature: { true ? `${kelvinsToCelsius(city.currentTemperature)} °C`: `${kelvinsToFarenheit(city.currentTemperature)} }°F` }</p>
        <p>What does it feel like? {city.feels_like}</p>
        <p>Current Humidity: {city.currentHumidity}%</p>
        <p>Cloud Coverage: {city.clouds}%</p>
         { city.rain && <p>Rain: {city.rain} mm/hr</p> }
         { city.snow && <p>Snow: {city.snow} mm/hr</p> }

        


    </div>
    );
}
export default DetailedCity