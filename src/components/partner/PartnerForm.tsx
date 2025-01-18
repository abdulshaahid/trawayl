import React from 'react';

const PartnerForm = () => {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Apply to Partner</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Business Name</label>
          <input
            type="text"
            className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
            placeholder="Enter your business name"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Business Type</label>
          <select className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]">
            <option>Select business type</option>
            <option>Hotel / Accommodation</option>
            <option>Tour Operator</option>
            <option>Transportation Service</option>
            <option>Activity Provider</option>
            <option>Restaurant</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Email</label>
          <input
            type="email"
            className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
            placeholder="Enter your business email"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Phone</label>
          <input
            type="tel"
            className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
            placeholder="Enter your business phone"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Message</label>
          <textarea
            className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D] h-32"
            placeholder="Tell us about your business"
          ></textarea>
        </div>
        <button className="w-full bg-[#00FF9D] text-black font-semibold py-3 rounded-full">
          Submit Application
        </button>
      </form>
    </section>
  );
};

export default PartnerForm;