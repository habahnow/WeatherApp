import React from 'react';
import HourlyForecast from "./HourlyForecast"

//need to pass only the forecast for the hours that I want
function HourlyForecastList({ hourlyForecast }) {
    return (
        <div className="hourly-forecast-list">
            {hourlyForecast.map(( forecastHour ) => (
                <HourlyForecast key={ forecastHour.dt } hourData={ forecastHour } /> 
            ))}
        </div>
    );
}

export default HourlyForecastList;