import { useUnit } from '../contexts/UnitsContext'; 
import {  kelvinsToFarenheit, kelvinsToCelsius, mmToInches } from "../helperFunctions/ValueConversions"

function HourlyForecast ( {forecast} ){
    const { isMetric, toggleUnits } = useUnit();

    return (
        <div className="hourly-forecast-item">
            <p>Time: {forecast.dt_txt} UTC</p>
            <p>Temperature: {isMetric ? `${kelvinsToCelsius(forecast.main.temp)} °C` : `${kelvinsToFarenheit(forecast.main.temp)} °F`}</p>
            <p>Percipitation: {forecast.pop} %</p>
        </div>
    )
    
}
export default HourlyForecast;