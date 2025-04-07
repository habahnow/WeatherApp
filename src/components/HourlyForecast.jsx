function HourlyForecast ( {forecast} ){
    console.log(forecast);
    return (
        <div className="hourly-forecast-item">
            <p>Time: {forecast.dt_txt} UTC</p>
            <p>Temperature: {forecast.main.temp}</p>
            <p>Percipitation: {forecast.pop} %</p>
        </div>
    )
    
}
export default HourlyForecast;