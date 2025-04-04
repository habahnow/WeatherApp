import DashboardItem from "../components/DashboardItem"
import {useState, useEffect } from "react"
import {getCityWeather} from "../services/api"

function Dashboard() {
    const [searchQuery, setSearchQuery] = useState("");
    const [cities, setCities] = useState([
        {id: 1, name: "Los Angeles", country: "USA"},
        {id: 2, name: "Downey", country: "USA"},
        {id: 3, name: "South Gate", country: "USA"},
        {id: 4, name: "Lynwood", country: "USA"},
        {id: 5, name: "Los Mochis", country: "Mexico"},
    ]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


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
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for cities..." 
                className="search-input"
                // value={searchQuery} // maybe this is a pointless line
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

        </div>
    </div>
    );
}
export default Dashboard