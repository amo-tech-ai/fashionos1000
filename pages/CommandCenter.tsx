import React from 'react';

const CommandCenterPage: React.FC = () => {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-6">Live Command Center</h1>
      <p className="text-gray-500 mb-8 max-w-2xl">
        Real-time monitoring for runway shows and complex multi-set productions.
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-black text-white p-6 rounded-xl aspect-video flex items-center justify-center">
            <div className="text-center">
                <span className="block text-red-500 animate-pulse text-xs font-bold uppercase tracking-widest mb-2">Live Feed Offline</span>
                <p className="text-gray-500 text-sm">Stream signal not detected</p>
            </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-sm mb-4">System Status</h3>
            <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Runway Cam 1</span>
                    <span className="text-red-500 font-mono text-xs">DISCONNECTED</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Backstage Audio</span>
                    <span className="text-red-500 font-mono text-xs">DISCONNECTED</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Lighting DMX</span>
                    <span className="text-green-500 font-mono text-xs">READY</span>
                </div>
            </div>
        </div>
      </div>

       <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
             <h4 className="font-bold text-sm mb-2">Module Info:</h4>
             <p className="text-xs text-gray-500">This command center will eventually integrate with RTMP streams and IoT lighting controllers for live event management.</p>
        </div>
    </div>
  );
};

export default CommandCenterPage;