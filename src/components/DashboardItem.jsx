
function  DashboardItem( {city} ){ 

    function onDashboardClicked() {
        alert("clicked")
    }

  return (
    <div className="dashboard-item">
        <button className="dashboard-item-btn" onClick={onDashboardClicked}>
            {city.name}, {city.state}, {city.country} | Temp: {city.currentTemperature} 
              Humidity: {city.currentHumidity}%
        </button>
      {}
    </div> 
  );
}

export default DashboardItem