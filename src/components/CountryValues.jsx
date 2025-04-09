import React from 'react';
import { countries } from '../data/countries';

const CountryValues = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50 py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        🌏 Cultural Parenting Values
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {countries.map((country) => (
          <div
            key={country.code}
            className="bg-white shadow-xl rounded-3xl p-6 border border-gray-200 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-bold mb-3 text-indigo-700">{country.name}</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {country.values.map((value, index) => (
                <li key={index}>
                  <span className="font-semibold">{value.concept}</span>: {value.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryValues;
