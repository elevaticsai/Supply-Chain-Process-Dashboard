import React, { useState } from 'react';
import { FileText, FileSpreadsheet, FileImage, File, Upload } from 'lucide-react';
import { mockDocuments } from '../data/mockData';
import { Document } from '../types/dashboard';

export const DocumentList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'Design', 'Quality', 'Production', 'Other'];

  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500" />;
      case 'xls':
        return <FileSpreadsheet className="w-5 h-5 text-green-500" />;
      case 'img':
        return <FileImage className="w-5 h-5 text-blue-500" />;
      default:
        return <File className="w-5 h-5 text-gray-500" />;
    }
  };

  const filteredDocs = selectedCategory === 'all' 
    ? mockDocuments 
    : mockDocuments.filter(doc => doc.category === selectedCategory);

  return (
    <section className="bg-gray-50 rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Documents</h2>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          <Upload className="w-4 h-4" />
          Upload
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-md ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filteredDocs.map(doc => (
          <div key={doc.id} className="flex items-center justify-between p-3 bg-white rounded-md border border-gray-100 hover:bg-gray-50">
            <div className="flex items-center gap-3">
              {getIcon(doc.type)}
              <div>
                <p className="font-medium text-gray-900">{doc.name}</p>
                <p className="text-sm text-gray-600">
                  {doc.size} • {doc.uploadDate.toLocaleDateString()}
                </p>
              </div>
            </div>
            <button className="text-blue-500 hover:text-blue-600">Download</button>
          </div>
        ))}
      </div>
    </section>
  );
};