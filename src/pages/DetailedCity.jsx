import BackButton from "../components/BackButton"
import { useLocation } from "react-router-dom";
import { useUnit } from '../contexts/UnitsContext'; 
import {  kelvinsToFarenheit, kelvinsToCelsius, mmToInches } from "../helperFunctions/ValueConversions"
import { getForecast } from "../services/api"
import { useEffect, useState } from "react";
import HourlyForecastList from "../components/HourlyForecastList";
import UnitsToggle from "../components/HourlyForecastList";
import "../css/detailed-city.css"

function DetailedCity() {
    const location = useLocation();
    const { isMetric, toggleUnits } = useUnit();
    const { city } = location.state || {};
    const [forecast, setForecast] = useState(null); 
    const [loading, setLoading] = useState(true);


    useEffect( () => {
        const fetchForecast = async () => {
            try{
                const forecastData = await getForecast(city);
                setForecast(forecastData); 
            } catch (error) {
                console.error("Error fetching forecast:", error);
            } finally {
                setLoading(false); 
            }
        };

        if (city) {
            fetchForecast(); 
        }
    }, [city]); 

    if (!city) {
        return <div>No city data is available</div>;
    }

    if (loading) {
        return <div>Loading forecast...</div>; 
    }


    return (
        <div className="detailed-city">
            <BackButton />
            <UnitsToggle />
            <h2>Detailed City Information</h2>
            <div className="currentWeather">
                <h1>{city.name}</h1>
                <p>{city.state}, {city.country}</p>
                <p>What's notable about the weather now? {city.description}</p>
                <p>Current temperature: {true ? `${kelvinsToCelsius(city.currentTemperature)} °C` : `${kelvinsToFarenheit(city.currentTemperature)} °F`}</p>
                <p>What does it feel like? {city.feels_like}</p>
                <p>Current Humidity: {city.currentHumidity}%</p>
                <p>Cloud Coverage: {city.clouds}%</p>
                {city.rain && <p>Rain: {city.rain} mm/hr</p>}
                {city.snow && <p>Snow: {city.snow} mm/hr</p>}
            </div>
            <div className="hourly-forecast">
                <HourlyForecastList hourlyForecast={ forecast }/> 
            </div>
        </div>
    );
}
export default DetailedCity;