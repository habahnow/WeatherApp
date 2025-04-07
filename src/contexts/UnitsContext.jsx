import React, { createContext, useContext, useState } from 'react';

const UnitsContext = createContext();

export const UnitsProvider = ({ children }) => {
    const [isMetric, setIsMetric] = useState(true); // Default to metric

    const toggleUnits = () => {
        setIsMetric(prev => !prev);
    };

    return (
        <UnitsContext.Provider value={{ isMetric, toggleUnits }}>
            {children}
        </UnitsContext.Provider>
    );
};

export const useUnit = () => {
    return useContext(UnitsContext);
};