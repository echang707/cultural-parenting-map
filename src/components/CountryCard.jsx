import React, { useState } from 'react';

const CountryCard = ({ country, flag }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        {flag} {country.name}
      </h2>
      <p className="text-sm text-gray-600 italic mb-2">{country.short}</p>

      {expanded && (
        <>
          <p className="text-sm text-gray-700 mb-2">{country.description}</p>
          <ul className="list-disc list-inside text-sm text-indigo-600">
            {country.values.map((value, i) => (
              <li key={i}>{value}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CountryCard;
