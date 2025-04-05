import BackButton from "../components/BackButton"
import { useLocation } from "react-router-dom";

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
        <p>Current temperature: {city.currentTemperature}</p>
        <p>Current Humidity: {city.currentHumidity}%</p>

    </div>
    );
}
export default DetailedCity