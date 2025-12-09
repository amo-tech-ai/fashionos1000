import React from 'react';
import { Button } from '../components/Button';

const ShootsPage: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-serif text-3xl">My Shoots</h1>
        <Button className="!py-2 !px-4 !text-xs">New Shoot</Button>
      </div>
      
      <p className="text-gray-500 mb-8 max-w-2xl">
        Manage your production schedule, call sheets, and asset delivery status.
      </p>

      <div className="bg-white p-8 rounded-xl border border-gray-100 text-center py-16">
            <div className="inline-block p-4 bg-gray-50 rounded-full mb-4">
                <span className="text-2xl">📷</span>
            </div>
            <h3 className="font-bold text-lg mb-2">No active shoots found</h3>
            <p className="text-sm text-gray-400 mb-6">You haven't created any shoot projects yet.</p>
            
            <div className="max-w-md mx-auto text-left bg-gray-50 p-6 rounded-lg">
                 <h4 className="font-bold text-sm mb-2">Planned Functionality:</h4>
                 <ul className="list-disc pl-5 space-y-2 text-xs text-gray-500">
                    <li>Kanban board for shoot stages (Pre-prod, Shooting, Post)</li>
                    <li>Drag-and-drop moodboards</li>
                    <li>Digital call sheet distribution</li>
                 </ul>
            </div>
      </div>
    </div>
  );
};

export default ShootsPage;