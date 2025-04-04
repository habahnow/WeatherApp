import { useCityContext} from "../contexts/CityContext"

function  DashboardItem( {city} ){ 
  const { isFavorite, addToFavorites, removeFromFavorites} = useCityContext();

  const favorite = isFavorite(city.id);

    function onDashboardClicked() {
        alert("Dashboard item clicked");
    }

    function onFavoriteClicked(e) {
      e.preventDefault();
      alert("favorite clicked");
      if ( favorite) removeFromFavorites(city.id)
      else addToFavorites(city);
    }

  return (
    <div className="dashboard-item">
        <div className="dashboard-item-btn" onClick={onDashboardClicked}>
            {city.name}, {city.state}, {city.country} | Temp: {city.currentTemperature} 
              Humidity: {city.currentHumidity}% 
              {/* <button className="favorite" color={`Favorite ${favorite ? "red" : "blue"} `} onClick={onFavoriteClicked}>&lt;3</button> */}
              <button className="favorite" style={{color:favorite ? "#FF0000": "#0000FF"}} onClick={onFavoriteClicked}>&lt;3</button>
        </div>
      {}
    </div> 
  );
}

export default DashboardItem