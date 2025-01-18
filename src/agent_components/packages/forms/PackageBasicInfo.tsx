import React, { useRef, useEffect } from "react";

const PackageBasicInfo = ({ handleDataUpdate, formData }) => {
  // Refs to access the input values directly
  const nameRef = useRef(null);
  const locationRef = useRef(null);
  const durationRef = useRef(null);

  // Update input values when `formData` changes
  useEffect(() => {
    if (formData) {
      if (nameRef.current) nameRef.current.value = formData.basicInfo['name'] || '';
      if (locationRef.current) locationRef.current.value = formData.basicInfo['location'] || '';
      if (durationRef.current) durationRef.current.value = formData.basicInfo['duration'] || '';
    }
  }, [formData]);

  // Function to send updated values to the parent component
  const updateParentData = () => {
    const name = nameRef.current?.value || '';
    const location = locationRef.current?.value || '';
    const duration = durationRef.current?.value || '';

    // Only send data if there are changes
    if (
      name !== formData.name ||
      location !== formData.location ||
      duration !== formData.duration
    ) {
      handleDataUpdate({ name, location, duration }, 'basicInfo');
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Basic Information</h2>
      <div className="space-y-3">
        {/* Package Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
            Package Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            className="w-full h-10 px-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
            placeholder="e.g., Mountain Trek Adventure"
            onBlur={updateParentData} // Update data on blur
          />
        </div>

        {/* Location Input */}
        <div>
          <label htmlFor="location" className="block text-sm text-gray-400 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            ref={locationRef}
            className="w-full h-10 px-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
            placeholder="e.g., Manali, India"
            onBlur={updateParentData} // Update data on blur
          />
        </div>

        {/* Duration Input */}
        <div>
          <label htmlFor="duration" className="block text-sm text-gray-400 mb-1">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            ref={durationRef}
            className="w-full h-10 px-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
            placeholder="e.g., 3 days"
            onBlur={updateParentData} // Update data on blur
          />
        </div>
      </div>
    </div>
  );
};

export default PackageBasicInfo;
