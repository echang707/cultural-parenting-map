import React from 'react';
import CulturalMap from '../components/CulturalMap';

const MapPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">🌏 Cultural Parenting Map</h1>
      <CulturalMap />
    </div>
  );
};

export default MapPage;
