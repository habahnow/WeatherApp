import DashboardItem from "../components/DashboardItem"
import {useState, useEffect } from "react"
import {getCityWeather} from "../services/api"
import { useCityContext} from "../contexts/CityContext"
import { useUnit } from '../contexts/UnitsContext'; 
import UnitsToggle from "../components/UnitsToggle";


function Dashboard() {
    const [searchQuery, setSearchQuery] = useState("");
    let [cities, setCities] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { favorites } = useCityContext();
    const { isMetric, toggleUnits } = useUnit(); 


    const handleSearch = async (e) => { 
        e.preventDefault()

        if (!searchQuery.trim() || loading )return;

        try {
                const searchedCities = await getCityWeather( searchQuery );
                setCities( searchedCities );
            } catch (err) { 
                console.log(err);
                setError("failed to load items" );
            }
            finally {
                setLoading(false);
        }
            

    };


    return (
        <div className="dashboard">
            <h1>Allan Soto's Weather App</h1>
            <UnitsToggle /> 
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Enter the City Name..." 
                className="search-input"
                onChange={ (e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>

        <div className="favorite-grid">
            {cities.map( (city) => (

                <DashboardItem city={city} key={city.id}/> 
            ))}
            { favorites.length > 0 ?  <h3>Your Favorites</h3> : ""}
            { favorites.map( (city) => (
                <DashboardItem city={city} key={city.id}/> 
            ))}

        </div>
    </div>
    );
}
export default Dashboard