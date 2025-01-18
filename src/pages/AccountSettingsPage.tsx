import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bell, Globe, CreditCard, Lock } from 'lucide-react';

const AccountSettingsPage = () => {
  return (
    <div className="min-h-screen bg-black pb-20">
      <header className="mt-16 top-0 z-10 bg-black flex items-center p-4 sm:p-6 border-b border-gray-800">
        <Link to="/profile" className="mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold">Account & Settings</h1>
      </header>

      <div className="p-4 sm:p-6 space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div className="bg-[#111] p-4 rounded-lg">
              <label className="block text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                value="Shahid"
                className="w-full bg-transparent mt-1 focus:outline-none"
              />
            </div>
            <div className="bg-[#111] p-4 rounded-lg">
              <label className="block text-sm text-gray-400">Email</label>
              <input
                type="email"
                value="shahid@example.com"
                className="w-full bg-transparent mt-1 focus:outline-none"
              />
            </div>
            <div className="bg-[#111] p-4 rounded-lg">
              <label className="block text-sm text-gray-400">Phone</label>
              <input
                type="tel"
                value="+1 234 567 8900"
                className="w-full bg-transparent mt-1 focus:outline-none"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-[#111] p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-[#00FF9D]" />
                <span>Language</span>
              </div>
              <select className="bg-transparent">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="flex items-center justify-between bg-[#111] p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Bell size={20} className="text-[#00FF9D]" />
                <span>Push Notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-[#222] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00FF9D]"></div>
              </label>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-[#111] p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-[#00FF9D]" />
                <div>
                  <div>Visa ending in 4242</div>
                  <div className="text-sm text-gray-400">Expires 12/24</div>
                </div>
              </div>
              <button className="text-[#00FF9D]">Edit</button>
            </div>
            <button className="w-full bg-[#111] p-4 rounded-lg text-[#00FF9D] text-center">
              + Add New Card
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Security</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-[#111] p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Lock size={20} className="text-[#00FF9D]" />
                <span>Change Password</span>
              </div>
              <ArrowLeft size={20} className="rotate-180" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AccountSettingsPage;