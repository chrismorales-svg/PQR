import React, { useState } from 'react';
import { FileText, ListFilter } from 'lucide-react';
import PQRForm from './components/PQRForm';
import PQRList from './components/PQRList';

function App() {
  const [activeTab, setActiveTab] = useState<'create' | 'manage'>('create');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">PQR Management System</h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="sm:hidden">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as 'create' | 'manage')}
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value="create">Create PQR</option>
              <option value="manage">Manage PQRs</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('create')}
                  className={`${
                    activeTab === 'create'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } flex items-center gap-2 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                >
                  <FileText className="h-5 w-5" />
                  Create PQR
                </button>
                <button
                  onClick={() => setActiveTab('manage')}
                  className={`${
                    activeTab === 'manage'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } flex items-center gap-2 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                >
                  <ListFilter className="h-5 w-5" />
                  Manage PQRs
                </button>
              </nav>
            </div>
          </div>
        </div>

        <main>
          {activeTab === 'create' ? <PQRForm /> : <PQRList />}
        </main>
      </div>
    </div>
  );
}

export default App;