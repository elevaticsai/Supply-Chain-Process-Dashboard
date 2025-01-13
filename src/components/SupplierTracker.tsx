import React, { useState } from 'react';
import { mockSuppliers } from '../data/mockData';

export const SupplierTracker: React.FC = () => {
  const [filteredSuppliers, setFilteredSuppliers] = useState(mockSuppliers);

  return (
    <section className="bg-gray-50 rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Supplier Performance</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by supplier"
          className="p-2 w-full bg-white text-gray-900 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFilteredSuppliers(mockSuppliers.filter(supplier => 
            supplier.name.toLowerCase().includes(e.target.value.toLowerCase())
          ))}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSuppliers.map((supplier, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <h3 className="text-xl font-bold mb-2 text-gray-900">{supplier.name}</h3>
            <p className="text-gray-600">On-Time Delivery Rate: {supplier.onTimeDeliveryRate}%</p>
            <p className="text-gray-600">Defect Rate: {supplier.defectRate}%</p>
            <p className="text-gray-600">Cost Variance: {supplier.costVariance}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};