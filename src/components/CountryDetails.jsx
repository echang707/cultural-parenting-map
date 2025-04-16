import React, { useState, useEffect } from 'react';

const CountryDetails = ({ country }) => {
  if (!country) return null;

  const [journalEntry, setJournalEntry] = useState('');
  const storageKey = `reflection_${country.name}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setJournalEntry(saved);
  }, [country]);

  const handleSave = () => {
    localStorage.setItem(storageKey, journalEntry);
    alert('Reflection saved!');
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-2">{country.name}</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">Parenting Values</h3>
        <ul className="list-disc list-inside text-sm text-indigo-800 ml-4 space-y-1">
          {country.values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>

      {country.quote && (
        <div className="mb-4">
          <p className="italic text-gray-600 text-sm">“{country.quote}”</p>
        </div>
      )}

      {country.reflect && (
        <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 mt-4">
          <h4 className="font-semibold text-yellow-800 mb-1">Reflection</h4>
          <p className="text-sm text-yellow-900 mb-2">{country.reflect}</p>

          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-2 text-sm"
            placeholder="Write your reflection here..."
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            rows={4}
          />
          <button
            onClick={handleSave}
            className="mt-2 px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700"
          >
            Save Reflection
          </button>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
