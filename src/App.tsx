import React from 'react';
import { DashboardHeader } from './components/header/DashboardHeader';
import { ProductionSection } from './components/production/ProductionSection';
import { DemandSection } from './components/demand/DemandSection';
import { MaterialsSection } from './components/materials/MaterialsSection';
import { DistributionSection } from './components/distribution/DistributionSection';
import { QualitySection } from './components/quality/QualitySection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProductionSection />
          <DemandSection />
        </div>
        <MaterialsSection />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DistributionSection />
          <QualitySection />
        </div>
      </main>
    </div>
  );
}

export default App;