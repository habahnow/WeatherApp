import React, { useState } from 'react';
import { useUnit } from '../contexts/UnitsContext'; 

const UnitsToggle = () => {
  const { isMetric, toggleUnits } = useUnit(); 

  return (
    <div className="units-toggle">
      <button onClick={toggleUnits}>
        Switch to {isMetric ? 'Imperial' : 'Metric'}
      </button>
    </div>
  );
};

export default UnitsToggle;