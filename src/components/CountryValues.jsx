import React from 'react';
import countries from '../data/countries';
import CountryCard from './CountryCard';

const flagMap = {
  China: '🇨🇳',
  India: '🇮🇳',
  Japan: '🇯🇵',
  Vietnam: '🇻🇳',
  'South Korea': '🇰🇷',
  Philippines: '🇵🇭',
  Indonesia: '🇮🇩',
};

const CountryValues = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
        Cultural Parenting Values Map
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {countries.map((country) => (
          <CountryCard key={country.name} country={country} flag={flagMap[country.name]} />
        ))}
      </div>
    </div>
  );
};

export default CountryValues;
