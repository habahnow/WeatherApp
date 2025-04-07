import React from 'react';
import HourlyForecast from "./HourlyForecast"

function HourlyForecastList({ hourlyForecast }) {
    return (
        <div className="hourly-forecast-list">
            {hourlyForecast.slice(0,6).map(( forecastHour ) => (
                <HourlyForecast key={ forecastHour.dt } forecast={ forecastHour } /> 
            ))}
        </div>
    );
}

export default HourlyForecastList;