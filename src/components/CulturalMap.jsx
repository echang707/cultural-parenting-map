import React, { useState } from 'react';
import countries from '../data/countries.js'; // ✅ default import

import CountryDetails from './CountryDetails';

const CulturalMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🌏 Cultural Parenting Map</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {countries.map((country) => (
          <button
            key={country.name}
            onClick={() => setSelectedCountry(country)}
            className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-md shadow hover:bg-indigo-200 transition"
          >
            {country.name}
          </button>
        ))}
      </div>

      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  );
};

export default CulturalMap;
