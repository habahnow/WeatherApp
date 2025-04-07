import React from 'react';
import HourlyForecast from "./HourlyForecast"

//need to pass only the forecast for the hours that I want
function HourlyForecastList({ hourlyForecast }) {
    return (
        <div className="hourly-forecast-list">
            {hourlyForecast.slice(0,6).map(( forecastHour ) => (
                // <p>Forecast information: {forecastHour.dt_txt}</p>
                <HourlyForecast key={ forecastHour.dt } forecast={ forecastHour } /> 
            ))}
        </div>
    );
}

export default HourlyForecastList;