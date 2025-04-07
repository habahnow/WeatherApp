function HourlyForecast ( {forecast} ){
    return (
        <div className="hourly-forecast">
            <p>Time: {forecast.dt_time}</p>
            <p>Temperature:</p>
            <p>percipitation:</p>
        </div>
    )
    
}