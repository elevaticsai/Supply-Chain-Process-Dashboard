import React from 'react';
import { MaterialsInventory } from './MaterialsInventory';
import { MaterialsDelivery } from './MaterialsDelivery';

export const MaterialsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <MaterialsInventory />
      <MaterialsDelivery />
    </div>
  );
};