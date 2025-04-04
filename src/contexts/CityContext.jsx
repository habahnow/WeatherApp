import {createContext, useState, useContext, useEffect} from "react" 
const CityContext = createContext()

export const useCityContext = () => useContext(CityContext);
export const CityProvider = ( {children} ) => { 
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorties");

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect( () => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (city) => {
        setFavorites( prev => [ ...prev, city ] );
    }

    const removeFromFavorites = (cityId) => {
        setFavorites( prev => prev.filter( city => city.id !== cityId));
    }

    const isFavorite = (cityId) => {
        return favorites.some( city => city.id === cityId );
    }
    const value = {
        favorites, 
        addToFavorites, 
        removeFromFavorites, 
        isFavorite
    }
    return <CityContext.Provider value={value}> 
        {children}
    </CityContext.Provider>
}