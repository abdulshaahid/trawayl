import React from 'react';

export default function AgentForm() {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add New Agent</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37E5A5]"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37E5A5]"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37E5A5]"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37E5A5]">
            <option value="">Select Department</option>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
      </div>
      
      <button
        type="submit"
        className="mt-6 w-full bg-[#37E5A5] text-black py-2 px-4 rounded-md hover:bg-[#2bc588] transition-colors"
      >
        Add Agent
      </button>
    </form>
  );
}