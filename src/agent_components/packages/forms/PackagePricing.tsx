import React from "react";

export default function PackagePricing({ handleDataUpdate, formData }) {
  const pricing = formData?.pricing || {
    pricePerPerson: "",
    minPeople: 1,
    maxPeople: "",
    offerThresholdType: "",
    offerPersonsThreshold: "",
    offerAmountDeduction: "",
    offerAmountThreshold: "",
    offerPercentage: "",
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    handleDataUpdate({
      ...pricing,
      [id]: value,
    }, 'pricing');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Pricing</h2>

      <div className="space-y-3">
        {/* Price per person */}
        <div>
          <label htmlFor="pricePerPerson" className="block text-sm text-gray-400 mb-1">
            Price per person
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              $
            </span>
            <input
              type="number"
              id="pricePerPerson"
              value={pricing.pricePerPerson}
              onChange={handleChange}
              className="w-full h-10 pl-8 pr-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        {/* Minimum number of people */}
        <div>
          <label htmlFor="minPeople" className="block text-sm text-gray-400 mb-1">
            Minimum people
          </label>
          <input
            type="number"
            id="minPeople"
            value={pricing.minPeople}
            onChange={handleChange}
            className="w-full h-10 px-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
            placeholder="1"
            min="1"
          />
        </div>

        {/* Maximum number of people */}
        <div>
          <label htmlFor="maxPeople" className="block text-sm text-gray-400 mb-1">
            Maximum people
          </label>
          <input
            type="number"
            id="maxPeople"
            value={pricing.maxPeople}
            onChange={handleChange}
            className="w-full h-10 px-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
            placeholder="100"
            min={pricing.minPeople || 1}
          />
        </div>

        {/* Offer section */}
        <div className="space-y-3">
          <h3 className="text-sm text-gray-400">Add Offer</h3>

          {/* Offer Threshold Type Selection */}
          <div>
            <label htmlFor="offerThresholdType" className="block text-sm text-gray-400 mb-1">
              Offer Threshold Type
            </label>
            <select
              id="offerThresholdType"
              value={pricing.offerThresholdType}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
            >
              <option value="">Select threshold type</option>
              <option value="persons">Threshold based on number of persons</option>
              <option value="amount">Threshold based on booking amount</option>
            </select>
          </div>

          {/* Conditional Inputs for Person-based Threshold */}
          {pricing.offerThresholdType === "persons" && (
            <div className="space-y-3">
              <div>
                <label htmlFor="offerPersonsThreshold" className="block text-sm text-gray-400 mb-1">
                  Threshold Number of Persons
                </label>
                <input
                  type="number"
                  id="offerPersonsThreshold"
                  value={pricing.offerPersonsThreshold}
                  onChange={handleChange}
                  className="w-full h-10 px-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
                  placeholder="e.g. 10"
                  min={pricing.minPeople || 1}
                />
              </div>
              <div>
                <label htmlFor="offerAmountDeduction" className="block text-sm text-gray-400 mb-1">
                  Offer Amount Deduction
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    $
                  </span>
                  <input
                    type="number"
                    id="offerAmountDeduction"
                    value={pricing.offerAmountDeduction}
                    onChange={handleChange}
                    className="w-full h-10 pl-8 pr-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
                    placeholder="e.g. 50"
                    min="0"
                    step="0.01"
                  />
                </div>
                <span className="text-xs text-gray-400">
                  Enter the deduction amount if number of persons exceeds the threshold
                </span>
              </div>
            </div>
          )}

          {/* Conditional Inputs for Amount-based Threshold */}
          {pricing.offerThresholdType === "amount" && (
            <div className="space-y-3">
              <div>
                <label htmlFor="offerAmountThreshold" className="block text-sm text-gray-400 mb-1">
                  Offer Threshold Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    $
                  </span>
                  <input
                    type="number"
                    id="offerAmountThreshold"
                    value={pricing.offerAmountThreshold}
                    onChange={handleChange}
                    className="w-full h-10 pl-8 pr-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
                    placeholder="e.g. 1000"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="offerPercentage" className="block text-sm text-gray-400 mb-1">
                  Offer Percentage Deduction
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="offerPercentage"
                    value={pricing.offerPercentage}
                    onChange={handleChange}
                    className="w-full h-10 px-3 bg-[#111111] rounded-xl text-white focus:outline-none focus:border-[#37e5a5] transition-colors"
                    placeholder="e.g. 10"
                    min="0"
                    max="100"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    %
                  </span>
                </div>
                <span className="text-xs text-gray-400">
                  Enter the percentage deduction if total amount exceeds the threshold
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}