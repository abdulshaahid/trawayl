import React, { useState } from 'react';
import { Car, MapPin, Calendar, Users, Upload } from 'lucide-react';
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
          destinations: [''],
          bio: '',
        };
      case 'vehicle':
        return {
          vehicleTypes: [''],
          numberOfVehicles: '',
          serviceAreas: [''],
        };
      case 'strangers':
        return {
          eventType: '',
          capacity: '',
          bio: '',
        };
      default:
        return {};
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayInputChange = (index: number, value: string, field: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item: string, i: number) => (i === index ? value : item)),
    }));
  };

  const addArrayItem = (field: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const removeArrayItem = (index: number, field: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_: string, i: number) => i !== index),
    }));
  };

  const renderTourForm = () => (
    <>
      <div>
        <label className="block text-lg font-medium text-white mb-4">
          Servicing Destinations
        </label>
        {formData.destinations.map((dest: string, index: number) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={dest}
              onChange={(e) => handleArrayInputChange(index, e.target.value, 'destinations')}
              className="flex-1 rounded-full bg-[#111111]  px-4 py-3 text-white"
              placeholder="Enter destination"
            />
            {formData.destinations.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem(index, 'destinations')}
                className="px-4 py-2 bg-red-500/10 text-red-500 rounded-full"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('destinations')}
          className="mt-2 px-4 py-2 bg-[#37e5a5]/10 text-[#37e5a5] rounded-full"
        >
          Add Destination
        </button>
      </div>
      <div>
        <label className="block text-lg font-medium text-white mb-2">
          About the Business
        </label>
        <textarea
          value={formData.bio}
          onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
          className="w-full rounded-xl bg-[#111111]  px-4 py-3 text-white"
          rows={4}
          placeholder="Write about your services..."
        />
      </div>
    </>
  );

  const renderVehicleForm = () => (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-200">
          Vehicle Types
        </label>
        {formData.vehicleTypes.map((type, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={type}
              onChange={(e) => handleArrayInputChange(index, e.target.value, 'vehicleTypes')}
              className="flex-1 rounded-full bg-[#111111]  px-4 py-3 text-white"
              placeholder="Enter vehicle type"
            />
            {formData.vehicleTypes.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem(index, 'vehicleTypes')}
                className="px-4 py-2 bg-red-500/10 text-red-500 rounded-full"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('vehicleTypes')}
          className="mt-2 px-4 py-2 bg-[#37e5a5]/10 text-[#37e5a5] rounded-full"
        >
          Add Vehicle Type
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-200">
          Number of Vehicles
        </label>
        <input
          type="number"
          name="numberOfVehicles"
          value={formData.numberOfVehicles}
          onChange={handleInputChange}
          className="mt-1 w-full rounded-full bg-[#111111]   px-4 py-3 text-white"
          placeholder="Enter number of vehicles"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-200">
          Service Areas
        </label>
        {formData.serviceAreas.map((area: string, index: number) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={area}
              onChange={(e) => handleArrayInputChange(index, e.target.value, 'serviceAreas')}
              className="flex-1 rounded-full bg-[#111111]   px-4 py-3 text-white"
              placeholder="Enter service area"
            />
            {formData.serviceAreas.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem(index, 'serviceAreas')}
                className="px-4 py-2 bg-red-500/10 text-red-500 rounded-full"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('serviceAreas')}
          className="mt-2 px-4 py-2 bg-[#37e5a5]/10 text-[#37e5a5] rounded-full"
        >
          Add Service Area
        </button>
      </div>
    </>
  );

  const renderStrangersForm = () => (
    <>
      <div>
        <label className="block text-lg font-medium text-white mb-4">
          Event Type
        </label>
        <select
          name="eventType"
          value={formData.eventType}
          onChange={handleInputChange}
          className="w-full rounded-full bg-[#111111]   px-4 py-3 text-white"
        >
          <option value="">Select an event type</option>
          <option value="camping">Camping</option>
          <option value="meetup">Meetup</option>
          <option value="tour">Tour</option>
          <option value="ride">Ride</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-200">
          Capacity
        </label>
        <input
          type="number"
          name="capacity"
          value={formData.capacity}
          onChange={handleInputChange}
          className="mt-1 w-full rounded-full bg-[#111111]   px-4 py-3 text-white"
          placeholder="Enter event capacity"
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-white mb-2">
          About the Business
        </label>
        <textarea
          value={formData.bio}
          onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
          className="w-full rounded-xl bg-[#111111]  px-4 py-3 text-white"
          rows={4}
          placeholder="Write about your services..."
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
      {type === 'strangers' && renderStrangersForm()}

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
