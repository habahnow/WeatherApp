
function  DashboardItem( {city} ){ 

    function onDashboardClicked() {
        alert("clicked")
    }

  return (
    <div className="dashboard-item">
        <button className="dashboard-item-btn" onClick={onDashboardClicked}>
            {city.name} {city.country} 
        </button>
      {}
    </div> 
  );
}

export default DashboardItem