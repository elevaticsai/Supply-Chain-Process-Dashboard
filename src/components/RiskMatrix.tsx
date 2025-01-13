import React from 'react';
import { Risk } from '../types/dashboard';
import { AlertTriangle } from 'lucide-react';

interface RiskMatrixProps {
  risks: Risk[];
}

export const RiskMatrix: React.FC<RiskMatrixProps> = ({ risks }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Risk Matrix</h2>
      <div className="space-y-4">
        {risks.map((risk) => (
          <div
            key={risk.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-3">
              <AlertTriangle className={`w-5 h-5 ${getSeverityColor(risk.severity)}`} />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{risk.description}</h3>
                <div className="mt-2 flex space-x-4 text-sm">
                  <span className="text-gray-600">
                    Severity: <span className="font-medium">{risk.severity}</span>
                  </span>
                  <span className="text-gray-600">
                    Likelihood: <span className="font-medium">{risk.likelihood}</span>
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Mitigation: {risk.mitigation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getSeverityColor = (severity: string): string => {
  switch (severity) {
    case 'high':
      return 'text-red-500';
    case 'medium':
      return 'text-yellow-500';
    case 'low':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
};