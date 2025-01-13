import React, { useState } from 'react';
import { mockRisks } from '../data/mockData';
import { AlertTriangle } from 'lucide-react';

export const RiskTracker: React.FC = () => {
  const [filteredRisks, setFilteredRisks] = useState(mockRisks);

  return (
    <section className="bg-gray-50 rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Risk and Issue Tracking</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by risk description"
          className="p-2 w-full bg-white text-gray-900 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFilteredRisks(mockRisks.filter(risk => 
            risk.description.toLowerCase().includes(e.target.value.toLowerCase())
          ))}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRisks.map((risk, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex items-start space-x-3">
              <AlertTriangle className={`w-5 h-5 ${
                risk.severity === 'High' ? 'text-red-500' :
                risk.severity === 'Medium' ? 'text-yellow-500' :
                'text-green-500'
              }`} />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{risk.description}</h3>
                <p className="text-gray-600">Severity: {risk.severity}</p>
                <p className="text-gray-600">Likelihood: {risk.likelihood}</p>
                <p className="text-gray-600">Owner: {risk.owner}</p>
                <p className="text-gray-600">Mitigation: {risk.mitigation}</p>
                <p className="text-gray-600">Status: {risk.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};