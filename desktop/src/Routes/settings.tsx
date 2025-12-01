import { createFileRoute } from '@tanstack/react-router';
import React, { useState, useEffect } from 'react';
import { Button } from '../components/@shadcn/ui/button';

export const Route = createFileRoute('/settings')({
  component: Settings,
});


function Settings() {
  const [connString, setConnString] = useState('');
  const [status, setStatus] = useState('');

  // Load the saved string when the component mounts
  useEffect(() => {
    const loadSettings = async () => {
      // @ts-ignore (if you haven't set up global types yet)
      const HOST = await window.electronAPI.settings.getConnectionString();
      setConnString(HOST);
    };
    loadSettings();
  }, []);

  const handleSave = async () => {
    try {
      setStatus('Saving...');
      // @ts-ignore
      await window.electronAPI.settings.saveConnectionString(connString);
      setStatus('Saved successfully!');
      
      // Clear message after 2 seconds
      setTimeout(() => setStatus(''), 2000);
    } catch (error) {
      setStatus('Error saving settings.');
    }
  };

  return (
    <div className=" items-center bg-background">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-100">Application Settings</h1>
        
        <div className="bg-background-muted p-6 rounded-lg shadow-lg border border-gray-700">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              API Connection String
            </label>
            <input
              type="text" 
              value={connString}
              onChange={(e) => setConnString(e.target.value)}
              placeholder="http://localhost:3000..."
              className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <p className="text-xs text-gray-500 mt-2">
              This string is encrypted before being stored on your device.
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <span className={`text-sm ${status.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
              {status}
            </span>
            
            <Button
              onClick={handleSave}
              className="px-6 py-2 flex-1/12 rounded-md font-medium transition-colors duration-200 m-2"
            >
              Save Changes
            </Button>
            <Button onClick={() => window.location.reload()}>Reload</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;