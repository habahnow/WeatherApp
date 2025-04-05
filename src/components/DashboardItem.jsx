import { useCityContext} from "../contexts/CityContext"
import { useNavigate } from "react-router-dom"
import "../css/dashboard-item.css"

function  DashboardItem( {city} ){ 
  const { isFavorite, addToFavorites, removeFromFavorites} = useCityContext();
  const navigate = useNavigate();

  const favorite = isFavorite(city.id);

    function onDashboardClicked() {
        alert("Dashboard item clicked");
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
            {city.name}, {city.state}, {city.country} | Temp: {city.currentTemperature} 
              Humidity: {city.currentHumidity}% 
              <div className="favorite" style={{color:favorite ? "#FF0000": "white"}} onClick={onFavoriteClicked}>♥</div>
        </button>
    </div> 
  );
}

export default DashboardItem