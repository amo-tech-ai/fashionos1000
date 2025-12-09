import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-6">Welcome back, Creative.</h1>
      <p className="text-gray-500 mb-8 max-w-2xl">
        Here is an overview of your active projects, upcoming bookings, and recent directory activity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
            { label: 'Active Shoots', val: '03', color: 'bg-blue-50 text-blue-600' },
            { label: 'Pending Approvals', val: '12', color: 'bg-orange-50 text-orange-600' },
            { label: 'Total Budget', val: '$24k', color: 'bg-green-50 text-green-600' }
        ].map((kpi, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">{kpi.label}</span>
                <span className={`text-3xl font-serif ${kpi.color} px-2 py-1 rounded inline-block`}>{kpi.val}</span>
            </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-sm mb-4">Features Coming Soon:</h3>
            <ul className="space-y-2 text-sm text-gray-500">
                <li>• Real-time notifications stream</li>
                <li>• Quick actions for booking and invoicing</li>
                <li>• Analytics charts for campaign performance</li>
            </ul>
      </div>
    </div>
  );
};

export default DashboardPage;