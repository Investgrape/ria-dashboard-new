import React from 'react';
import { Activity, Users, FileText, Menu, BellDot } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
            <span className="text-blue-600 font-bold">R</span>
          </div>
          <div>
            <h1 className="font-semibold text-gray-900">RIA Office</h1>
            <p className="text-xs text-gray-500">Back Office System</p>
          </div>
        </div>

        <nav className="space-y-1">
          <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm rounded-lg bg-blue-50 text-blue-600">
            <Activity size={20} />
            <span>Dashboard</span>
          </button>
          <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm rounded-lg text-gray-600 hover:bg-gray-50">
            <Users size={20} />
            <span>Clients</span>
          </button>
          <button className="flex items-center space-x-2 w-full px-3 py-2 text-sm rounded-lg text-gray-600 hover:bg-gray-50">
            <FileText size={20} />
            <span>Documents</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <Menu size={20} className="text-gray-500" />
          </button>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-50 rounded-lg relative">
              <BellDot size={20} className="text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium">JD</span>
              </div>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
            <p className="text-gray-500">Welcome back, here's what's happening</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AUM Card */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Assets Under Management</p>
                  <p className="text-2xl font-semibold mt-1">$2.4M</p>
                  <p className="text-emerald-600 text-sm mt-1">↑ 2.5% from last month</p>
                </div>
                <Activity className="text-blue-600" />
              </div>
            </div>

            {/* Clients Card */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Total Clients</p>
                  <p className="text-2xl font-semibold mt-1">128</p>
                  <p className="text-emerald-600 text-sm mt-1">↑ 4 new this month</p>
                </div>
                <Users className="text-blue-600" />
              </div>
            </div>

            {/* Documents Card */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Pending Documents</p>
                  <p className="text-2xl font-semibold mt-1">7</p>
                  <p className="text-amber-600 text-sm mt-1">3 need review</p>
                </div>
                <FileText className="text-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;