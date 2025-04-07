import DashboardItem from "../components/DashboardItem"
import {useState, useEffect } from "react"
import {getCityWeather} from "../services/api"
import { useCityContext} from "../contexts/CityContext"
import { useUnit } from '../contexts/UnitsContext'; 
import UnitsToggle from "../components/UnitsToggle";


function Dashboard() {
    const [searchQuery, setSearchQuery] = useState("");
    let [cities, setCities] = useState([
        // {id: 1, name: "Los Angeles", country: "USA"},
        // {id: 2, name: "Downey", country: "USA"},
        // {id: 3, name: "South Gate", country: "USA"},
        // {id: 4, name: "Lynwood", country: "USA"},
        // {id: 5, name: "Los Mochis", country: "Mexico"},
    ]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { favorites } = useCityContext();
    const { isMetric, toggleUnits } = useUnit(); 


 /*   useEffect( () => {
        const searchCities = async () => {
            try {
                const searchedCities = await getLongLat( "London" );
                setCities( searchedCities );
            } catch (err) { 
                console.log(err);
                setError("failed to load items" );
            }
            finally {
                setLoading(false);
            }
            
        }
        searchCities();
    }, [])
*/
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
                placeholder="Search for cities..." 
                className="search-input"
                onChange={ (e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>

        <div className="favorite-grid">
            {cities.map( (city) => (
                ( city.name.toLowerCase().includes( searchQuery.toLowerCase().trim() ) || 
                    city.country.toLowerCase().includes( searchQuery.toLowerCase().trim() ) ) && 
                    <DashboardItem city={city} key={city.id}/> 
            ))}
            <h3>Your Favorites</h3>
            { favorites.map( (city) => (
                <DashboardItem city={city} key={city.id}/> 
            ))}

        </div>
    </div>
    );
}
export default Dashboard