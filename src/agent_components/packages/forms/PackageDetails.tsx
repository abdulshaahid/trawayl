import React, { useState } from "react";

const commonHighlights = [
  "Meals Included",
  "Transportation",
  "Professional Guide",
  "Accommodation",
  "Equipment",
  "Photography",
  "Insurance",
  "First Aid",
  "Camping",
  "Hiking",
  "City Tours",
  "Local Cuisine",
  "Wildlife Safaris",
  "Adventure Sports",
  "Cultural Experiences",
];

const optionsData = {
  "Room Type": ["Single", "Double", "Suite", "Dormitory"],
  "Travel Style": ["Luxury", "Budget", "Adventure", "Relaxation"],
  Accommodation: ["Hotel", "Resort", "Homestay", "Camping"],
  Transport: ["Flight", "Train", "Bus", "Self-Drive"],
  "Meal Plan": ["Breakfast Only", "Half Board", "Full Board", "All Inclusive"],
  Activities: ["Hiking", "Scuba Diving", "City Tour", "Safari"],
};

export default function PackageDetails({ handleDataUpdate, formData }) {
  const [activeOption, setActiveOption] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Extract initial values from formData
  const description = formData?.packageDetails?.description || '';
  const selectedHighlights = formData?.packageDetails?.selectedHighlights || [];
  const selectedOptions = formData?.packageDetails?.selectedOptions || {};

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    handleDataUpdate({
      ...formData?.packageDetails,
      description: newDescription
    }, 'packageDetails');
  };

  const toggleHighlight = (highlight) => {
    const newHighlights = selectedHighlights.includes(highlight)
      ? selectedHighlights.filter(item => item !== highlight)
      : [...selectedHighlights, highlight];

    handleDataUpdate({
      ...formData?.packageDetails,
      selectedHighlights: newHighlights
    }, 'packageDetails');
  };

  const toggleOptionValue = (option, value) => {
    const values = selectedOptions[option] || [];
    const updatedValues = values.includes(value)
      ? values.filter(item => item !== value)
      : [...values, value];

    handleDataUpdate({
      ...formData?.packageDetails,
      selectedOptions: {
        ...selectedOptions,
        [option]: updatedValues
      }
    }, 'packageDetails');
  };

  const openModal = (option) => {
    setActiveOption(option);
    setShowModal(true);
  };

  const closeModal = () => {
    setActiveOption(null);
    setShowModal(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Package Details</h2>
      <div className="space-y-3">
        <div>
          <label htmlFor="description" className="block text-sm text-gray-400 mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            value={description}
            onChange={handleDescriptionChange}
            className="w-full p-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors resize-none"
            placeholder="Describe your package..."
          />
        </div>
      </div>

      {/* Customize Trip Options */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Included</h2>
        {Object.keys(optionsData).map((option) => (
          <div
            key={option}
            className="flex items-center justify-between p-3 bg-[#111111] rounded-xl text-white cursor-pointer hover:bg-[#37e5a5]/20 transition-colors"
            onClick={() => openModal(option)}
          >
            <span>{option}</span>
            <span className="text-[#37e5a5]">
              {selectedOptions[option]?.join(", ") || "Select"}
            </span>
          </div>
        ))}
      </div>

      {/* Package Highlights */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Package Highlights</h2>
        <div className="space-y-2">
          {selectedHighlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center justify-between p-3 bg-[#111111] rounded-xl text-white"
            >
              <span>{highlight}</span>
              <button
                onClick={() => toggleHighlight(highlight)}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="w-full py-2 bg-[#37e5a5] text-black rounded-xl hover:bg-[#37e5a5]/90 transition-colors font-medium"
        >
          + Add More Highlights
        </button>
      </div>

      {/* Modal for Selecting Highlights or Options */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#151515] w-11/12 max-w-lg rounded-xl p-6 space-y-4">
            <h2 className="text-lg font-semibold text-white">
              {activeOption ? `Select ${activeOption}` : "Select Highlights"}
            </h2>
            <div className="h-64 overflow-y-auto space-y-2">
              {(activeOption ? optionsData[activeOption] : commonHighlights).map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 p-3 bg-[#111111] rounded-xl cursor-pointer hover:bg-[#37e5a5]/20 transition-colors"
                >
                  <input
                    type="checkbox"
                    className="accent-[#37e5a5]"
                    checked={
                      activeOption
                        ? selectedOptions[activeOption]?.includes(item) || false
                        : selectedHighlights.includes(item)
                    }
                    onChange={() =>
                      activeOption
                        ? toggleOptionValue(activeOption, item)
                        : toggleHighlight(item)
                    }
                  />
                  <span className="text-white text-sm">{item}</span>
                </label>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 py-2 bg-[#1f1f1f] text-white rounded-full hover:bg-white/10 transition-colors"
              >
                Close
              </button>
              <button
                onClick={closeModal}
                className="flex-1 py-2 bg-[#37e5a5] text-black rounded-full hover:bg-[#37e5a5]/90 transition-colors font-medium"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}