import { useCityContext} from "../contexts/CityContext"
import { useNavigate } from "react-router-dom"
import { useUnit } from '../contexts/UnitsContext'; 
import { kelvinsToCelsius, kelvinsToFarenheit } from "../helperFunctions/ValueConversions";
import "../css/dashboard-item.css"

function  DashboardItem( {city} ){ 
  const { isFavorite, addToFavorites, removeFromFavorites} = useCityContext();
  const { isMetric } = useUnit();
  const navigate = useNavigate();

  const favorite = isFavorite(city.id);

    function onDashboardClicked() {
        navigate( `/Detailed/${city.id}`,
           { state: { city } });
    };

    function onFavoriteClicked(e) {
      e.preventDefault();
      e.stopPropagation();
      if ( favorite) removeFromFavorites(city.id)
      else addToFavorites(city);
    }

  return (
    <div className="dashboard-item">
        <button className="dashboard-item-btn" onClick={onDashboardClicked}>
            {city.name}, {city.state}, {city.country} | Temp: {" "}
            {isMetric ? `${kelvinsToCelsius(city.currentTemperature)}°C` : `${kelvinsToFarenheit(city.currentTemperature)}°F`} 
              {" " }Humidity: {city.currentHumidity}% 
              <div className="favorite"  onClick={onFavoriteClicked}>♥</div>
        </button>
    </div> 
  );
}

export default DashboardItem