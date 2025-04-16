import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import countries from "../data/countries"; // your country data
import CountryDetails from "./CountryDetails";

const geoUrl = "/custom.geo.json";

const CulturalMapUI = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (countryName) => {
    const found = countries.find((c) => c.name === countryName);
    if (found) setSelectedCountry(found);
  };

  if (selectedCountry) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <button
          onClick={() => setSelectedCountry(null)}
          className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          ← Back to Map
        </button>
        <CountryDetails country={selectedCountry} />
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center px-4 pt-4 sm:pt-8">
  <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
    🌏 Cultural Parenting Values Across Asia
  </h1>

  <div className="w-full max-w-5xl">
    <ComposableMap
      projectionConfig={{ scale: 400, center: [100, 30] }}
      width={980}
      height={500}
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography="/custom.geo.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={() => handleCountryClick(geo.properties.name)}
              style={{
                default: { fill: "#E0E7FF", outline: "none" },
                hover: { fill: "#6366F1", outline: "none" },
                pressed: { fill: "#4F46E5", outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>

  <p className="text-center text-sm text-gray-600 mt-4">
    Click a country to explore its parenting values ✨
  </p>
</main>

  );
};

export default CulturalMapUI;
