import React from "react";

export default function PackageItinerary({ handleDataUpdate, formData }) {
  const itinerary = formData?.itinerary || [{ day: "", details: "" }];

  const handleAddDay = () => {
    handleDataUpdate([...itinerary, { day: "", details: "" }], 'itinerary');
  };

  const handleRemoveDay = (index) => {
    const updatedItinerary = itinerary.filter((_, i) => i !== index);
    handleDataUpdate(updatedItinerary, 'itinerary');
  };

  const handleItineraryChange = (index, field, value) => {
    const updatedItinerary = itinerary.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    handleDataUpdate(updatedItinerary, 'itinerary');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Itinerary</h2>
        {itinerary.map((item, index) => (
          <div key={index} className="space-y-2 mb-4">
            <label className="block text-sm text-gray-400 mb-1">
              Day {index + 1}
            </label>
            <input
              type="text"
              value={item.day || ""}
              onChange={(e) =>
                handleItineraryChange(index, "day", e.target.value)
              }
              placeholder="Day title (e.g., Arrival, Trekking, Departure...)"
              className="w-full p-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
            />
            <textarea
              value={item.details || ""}
              onChange={(e) =>
                handleItineraryChange(index, "details", e.target.value)
              }
              rows={4}
              placeholder="Details for the day..."
              className="w-full p-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors resize-none"
            />
            <div className="flex justify-end gap-2">
              {itinerary.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveDay(index)}
                  className="py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddDay}
          className="py-2 px-4 bg-[#37e5a5] text-black rounded-full hover:bg-[#37e5a5]/90 transition-colors font-medium"
        >
          + Add Day
        </button>
      </div>
    </div>
  );
}