import { useState } from 'react';
import { countries } from '../data/countries'; // make sure this path is correct

const CountryList = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cultural Parenting Values</h1>
      <ul className="space-y-2">
        {countries.map((country) => (
          <li key={country.name}>
            <button
                className="w-full text-left p-4 bg-gradient-to-r from-white to-gray-50 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition"
                onClick={() => setSelected(country)}
            >
                <h3 className="text-lg font-semibold text-gray-800">{country.name}</h3>
                <p className="text-sm text-gray-500">{country.short}</p>
            </button>

          </li>
        ))}
      </ul>

      {selected && (
        <div className="mt-6 p-6 bg-white border border-indigo-200 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold">{selected.name}</h2>
          <p className="mt-2 text-gray-700">{selected.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {selected.values.map((val, idx) => (
              <span
                key={idx}
                className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-medium"
              >
                {val}
              </span>
            ))}
          </div>
          <button
            onClick={() => setSelected(null)}
            className="mt-4 text-sm text-indigo-600 hover:underline"
          >
            ← Back to countries
          </button>

        </div>
      )}
    </div>
  );
};

export default CountryList;
