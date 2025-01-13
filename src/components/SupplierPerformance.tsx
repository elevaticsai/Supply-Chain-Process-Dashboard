import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';
import { Supplier } from '../types/dashboard';

interface SupplierPerformanceProps {
  suppliers: Supplier[];
}

export const SupplierPerformance: React.FC<SupplierPerformanceProps> = ({ suppliers }) => {
  const formatData = (suppliers: Supplier[]) => {
    return [
      {
        metric: 'On-Time Delivery',
        ...suppliers.reduce((acc, supplier) => ({
          ...acc,
          [supplier.name]: supplier.onTimeDelivery,
        }), {}),
      },
      {
        metric: 'Quality Score',
        ...suppliers.reduce((acc, supplier) => ({
          ...acc,
          [supplier.name]: supplier.qualityScore,
        }), {}),
      },
      {
        metric: 'Cost Variance',
        ...suppliers.reduce((acc, supplier) => ({
          ...acc,
          [supplier.name]: Math.abs(supplier.costVariance),
        }), {}),
      },
    ];
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Supplier Performance</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={formatData(suppliers)}>
            <PolarGrid />
            <PolarAngleAxis dataKey="metric" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            {suppliers.map((supplier, index) => (
              <Radar
                key={supplier.id}
                name={supplier.name}
                dataKey={supplier.name}
                stroke={getSupplierColor(index)}
                fill={getSupplierColor(index)}
                fillOpacity={0.2}
              />
            ))}
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const getSupplierColor = (index: number): string => {
  const colors = ['#4F46E5', '#10B981', '#F59E0B'];
  return colors[index % colors.length];
};