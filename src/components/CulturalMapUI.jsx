import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import countries from "../data/countries"; // your country data
import CountryDetails from "./CountryDetails";

const geoUrl = "/custom.geo.json";
const hoverColorMap = {
    China: "#f87171", // red
    Japan: "#fb923c", // orange
    India: "#facc15", // yellow
    Vietnam: "#34d399", // green
    "South Korea": "#60a5fa", // blue
    Philippines: "#a78bfa", // purple
    Indonesia: "#f472b6", // pink
    Pakistan: "#4ade80", // lime
    Thailand: "#38bdf8", // light blue
    Singapore: "#c084fc",
    Malaysia: "#fcd34d",
    Mongolia: "#fda4af",
    Nepal: "#86efac",
    Bhutan: "#f9a8d4",
    "Sri Lanka": "#fbbf24",
    Laos: "#a5b4fc",
    Afghanistan: "#f43f5e",
    Brunei: "#22d3ee",
    Maldives: "#2dd4bf",
    "Timor-Leste": "#e879f9",
  };
const getHoverColor = (name) => hoverColorMap[name] || "#6366F1";

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
    <main className="flex flex-col items-center px-4 pt-2 sm:pt-2">
  <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-900 mb-4 sm:mb-6 drop-shadow-sm">
  🌏 Cultural Parenting Values Across Asia
</h1>

  <div className="w-full max-w-5xl mx-auto flex justify-center">
    <ComposableMap
      projectionConfig={{ scale: 420, center: [87, 22] }}
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
                hover: { fill: getHoverColor(geo.properties.name), outline: "none" },
                pressed: { fill: "#4F46E5", outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>

  <p className="text-center text-xl font-extrabold text-indigo-900 mt-6 drop-shadow-sm">
  🔍 Click a country to explore its parenting values ✨
</p>
</main>

  );
};

export default CulturalMapUI;
