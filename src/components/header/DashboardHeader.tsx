import React from 'react';
import { Calendar, TrendingUp, Package, Truck } from 'lucide-react';
import { DateRangeFilter } from './DateRangeFilter';
import { MetricCard } from '../common/MetricCard';

export const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Supply Chain Process Dashboard</h1>
            <p className="text-gray-600 mt-1">Real-time supply chain insights and analytics</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <DateRangeFilter />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <MetricCard
            icon={<TrendingUp className="w-5 h-5 text-blue-500" />}
            title="Production Efficiency"
            value="94.5%"
            trend="+2.1%"
            trendDirection="up"
          />
          <MetricCard
            icon={<Package className="w-5 h-5 text-green-500" />}
            title="On-Time Delivery"
            value="92.3%"
            trend="-0.5%"
            trendDirection="down"
          />
          <MetricCard
            icon={<Truck className="w-5 h-5 text-purple-500" />}
            title="Inventory Turnover"
            value="12.3x"
            trend="+1.2x"
            trendDirection="up"
          />
          <MetricCard
            icon={<Calendar className="w-5 h-5 text-orange-500" />}
            title="Lead Time"
            value="4.2 days"
            trend="-0.3 days"
            trendDirection="up"
          />
        </div>
      </div>
    </header>
  );
};