
import { Bell, Moon, User } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <User size={20} />
          Profile Settings
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37E5A5]"
              defaultValue="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37E5A5]"
              defaultValue="john@example.com"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Bell size={20} />
          Notification Preferences
        </h2>
        
        <div className="space-y-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-[#37E5A5] rounded" />
            <span className="ml-2">Email notifications</span>
          </label>
          
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-[#37E5A5] rounded" />
            <span className="ml-2">Push notifications</span>
          </label>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Moon size={20} />
          Theme Settings
        </h2>
        
        <div className="flex items-center justify-between">
          <span>Dark Mode</span>
          <button className="w-12 h-6 rounded-full bg-gray-200 flex items-center transition-colors focus:outline-none">
            <div className="w-4 h-4 rounded-full bg-white shadow-md transform translate-x-1"></div>
          </button>
        </div>
      </div>
    </div>
  );
}