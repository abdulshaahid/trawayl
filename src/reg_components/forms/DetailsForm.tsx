import React, { useState } from 'react';
import type { PartnerType } from '../../types';

interface DetailsFormProps {
  type: PartnerType;
  onSubmit: (data: any) => void;
}

export function DetailsForm({ type, onSubmit }: DetailsFormProps) {
  const [formData, setFormData] = useState(() => {
    switch (type) {
      case 'tour':
        return {
          packageTypes: [],
          customPackageType: '',
          bio: '',
        };
      case 'vehicle':
        return {
          vehicleTypes: [],
          customVehicleType: '',
          numberOfVehicles: '',
          bio: '',
        };
      default:
        return {};
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addArrayItem = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], value],
      customPackageType: '', // Clear custom input
      customVehicleType: '',
    }));
  };

  const removeArrayItem = (index: number, field: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_: string, i: number) => i !== index),
    }));
  };

  const renderTourForm = () => (
    <>
      <div>
        <label className="block text-lg font-medium text-white mb-4">
          Types of Packages Providing
        </label>
        <div className="flex gap-2 mb-4">
          <select
            onChange={(e) => addArrayItem('packageTypes', e.target.value)}
            className="flex-1 rounded-full bg-[#111111] px-4 py-3 text-white"
          >
            <option value="" disabled selected>
              Select a package type
            </option>
            <option value="Adventure Tours">Adventure Tours</option>
            <option value="Family Packages">Family Packages</option>
            <option value="Honeymoon Packages">Honeymoon Packages</option>
            <option value="Corporate Tours">Corporate Tours</option>
            <option value="Solo Tours">Solo Tours</option>
          </select>
        </div>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            name="customPackageType"
            value={formData.customPackageType}
            onChange={handleInputChange}
            className="flex-1 rounded-full bg-[#111111] px-4 py-3 text-white"
            placeholder="Add a custom package type"
          />
          <button
            type="button"
            onClick={() => addArrayItem('packageTypes', formData.customPackageType)}
            disabled={!formData.customPackageType}
            className="px-4 py-2 bg-[#37e5a5]/10 text-[#37e5a5] rounded-full"
          >
            Add
          </button>
        </div>
        {formData.packageTypes.map((type: string, index: number) => (
          <div key={index} className="flex gap-2 mb-2">
            <span className="flex-1 rounded-full bg-[#222222] px-4 py-3 text-white">
              {type}
            </span>
            <button
              type="button"
              onClick={() => removeArrayItem(index, 'packageTypes')}
              className="px-4 py-2 bg-red-500/10 text-red-500 rounded-full"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div>
        <label className="block text-lg font-medium text-white mb-2">
          About the Business
        </label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          className="w-full rounded-xl bg-[#111111] px-4 py-3 text-white"
          rows={4}
          placeholder="Write about your services..."
        />
      </div>
    </>
  );

  const renderVehicleForm = () => (
    <>
      <div>
        <label className="block text-lg font-medium text-white mb-4">
          Vehicle Types
        </label>
        <div className="flex gap-2 mb-4">
          <select
            onChange={(e) => addArrayItem('vehicleTypes', e.target.value)}
            className="flex-1 rounded-full bg-[#111111] px-4 py-3 text-white"
          >
            <option value="" disabled selected>
              Select a vehicle type
            </option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Bus">Bus</option>
            <option value="Tempo Traveller">Tempo Traveller</option>
          </select>
        </div>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            name="customVehicleType"
            value={formData.customVehicleType}
            onChange={handleInputChange}
            className="flex-1 rounded-full bg-[#111111] px-4 py-3 text-white"
            placeholder="Add a custom vehicle type"
          />
          <button
            type="button"
            onClick={() => addArrayItem('vehicleTypes', formData.customVehicleType)}
            disabled={!formData.customVehicleType}
            className="px-4 py-2 bg-[#37e5a5]/10 text-[#37e5a5] rounded-full"
          >
            Add
          </button>
        </div>
        {formData.vehicleTypes.map((type: string, index: number) => (
          <div key={index} className="flex gap-2 mb-2">
            <span className="flex-1 rounded-full bg-[#222222] px-4 py-3 text-white">
              {type}
            </span>
            <button
              type="button"
              onClick={() => removeArrayItem(index, 'vehicleTypes')}
              className="px-4 py-2 bg-red-500/10 text-red-500 rounded-full"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div>
        <label className="block text-lg font-medium text-white mb-2">
          Number of Vehicles
        </label>
        <input
          type="number"
          name="numberOfVehicles"
          value={formData.numberOfVehicles}
          onChange={handleInputChange}
          className="w-full rounded-full bg-[#111111] px-4 py-3 text-white"
          placeholder="Enter number of vehicles"
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-white mb-2">
          About the Business
        </label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          className="w-full rounded-xl bg-[#111111] px-4 py-3 text-white"
          rows={4}
          placeholder="Write about your business and services..."
        />
      </div>
     
    </>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {type === 'tour' && renderTourForm()}
      {type === 'vehicle' && renderVehicleForm()}

      <button
        type="submit"
        className="w-full flex items-center justify-center px-8 py-4 bg-[#37e5a5] 
          text-black font-semibold rounded-full hover:bg-[#37e5a5]/90 transition-colors"
      >
        Continue
      </button>
    </form>
  );
}
