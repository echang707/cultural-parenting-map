import React, { useState, useEffect } from 'react';

const CountryDetails = ({ country }) => {
  if (!country) return null;
  const flagMap = {
    Afghanistan: "🇦🇫",
    Armenia: "🇦🇲",
    Azerbaijan: "🇦🇿",
    Bahrain: "🇧🇭",
    Bangladesh: "🇧🇩",
    Bhutan: "🇧🇹",
    Brunei: "🇧🇳",
    Cambodia: "🇰🇭",
    China: "🇨🇳",
    Cyprus: "🇨🇾",
    Georgia: "🇬🇪",
    India: "🇮🇳",
    Indonesia: "🇮🇩",
    Iran: "🇮🇷",
    Iraq: "🇮🇶",
    Israel: "🇮🇱",
    Japan: "🇯🇵",
    Jordan: "🇯🇴",
    Kazakhstan: "🇰🇿",
    Kuwait: "🇰🇼",
    Kyrgyzstan: "🇰🇬",
    Laos: "🇱🇦",
    Lebanon: "🇱🇧",
    Malaysia: "🇲🇾",
    Maldives: "🇲🇻",
    Mongolia: "🇲🇳",
    Myanmar: "🇲🇲",
    Nepal: "🇳🇵",
    "North Korea": "🇰🇵",
    Oman: "🇴🇲",
    Pakistan: "🇵🇰",
    Palestine: "🇵🇸",
    Philippines: "🇵🇭",
    Qatar: "🇶🇦",
    Russia: "🇷🇺",
    "Saudi Arabia": "🇸🇦",
    Singapore: "🇸🇬",
    "South Korea": "🇰🇷",
    "Sri Lanka": "🇱🇰",
    Syria: "🇸🇾",
    Tajikistan: "🇹🇯",
    Thailand: "🇹🇭",
    "Timor-Leste": "🇹🇱",
    Turkey: "🇹🇷",
    Turkmenistan: "🇹🇲",
    "United Arab Emirates": "🇦🇪",
    Uzbekistan: "🇺🇿",
    Vietnam: "🇻🇳",
    Yemen: "🇾🇪",
  };

  const [journalEntry, setJournalEntry] = useState('');
  const [savedReflections, setSavedReflections] = useState([]);
  const [showReflections, setShowReflections] = useState(false);

  const storageKey = `reflection_${country.name}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    try {
      const parsed = JSON.parse(saved);
      setSavedReflections(Array.isArray(parsed) ? parsed : [parsed]);
    } catch {
      if (saved) setSavedReflections([saved]);
    }
  }, [country]);

  const handleSave = () => {
    if (!journalEntry.trim()) return;
    const updated = [...savedReflections, journalEntry];
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setSavedReflections(updated);
    setJournalEntry('');
  };

  const handleDelete = (index) => {
    const updated = savedReflections.filter((_, i) => i !== index);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setSavedReflections(updated);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-3xl mx-auto space-y-4">
      <h2 className="text-3xl font-bold">
        {flagMap[country.name] || ""} {country.name}
      </h2>

      {country.description && (
        <div className="bg-gray-50 border border-gray-200 p-4 rounded text-sm text-gray-700 leading-relaxed">
          {country.description}
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold mb-1">Parenting Values</h3>
        <ul className="list-disc list-inside text-sm text-indigo-800 ml-4">
          {country.values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>

      {country.quote && (
        <p className="italic text-gray-600 text-sm border-l-4 border-gray-300 pl-4">“{country.quote}”</p>
      )}

      {country.reflect && (
        <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 mt-2">
          <h4 className="font-semibold text-yellow-800 mb-1">Reflection</h4>
          <p className="text-sm text-yellow-900 mb-2">{country.reflect}</p>

          <textarea
            className="w-full p-3 border border-gray-300 rounded text-sm mb-2"
            placeholder="Write your reflection here..."
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            rows={4}
          />

          <button
            onClick={handleSave}
            className="mt-2 mb-6 px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700"
          >
            Save Reflection
          </button>
        </div>
      )}

      {savedReflections.length > 0 && (
        <div className="mt-6 pt-2 border-t border-gray-200">
          <button
          onClick={() => setShowReflections(!showReflections)}
          className="mt-4 text-sm text-indigo-600 hover:underline font-medium"
        >
          {showReflections ? 'Hide Saved Reflections' : '📓 Show Saved Reflections'}
        </button>

          {showReflections && (
            <div className="mt-3 space-y-3">
              {savedReflections.map((entry, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-start bg-gray-100 p-3 rounded-md shadow-sm border"
                >
                  <p className="text-sm text-gray-800 whitespace-pre-wrap">{entry}</p>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="ml-4 text-red-600 hover:underline text-xs"
                  >
                    🗑️ Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
