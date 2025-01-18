import React, { useState } from 'react';
import { Download, Check } from 'lucide-react';

interface ContractFormProps {
  onSubmit: () => void;
}

export function ContractForm({ onSubmit }: ContractFormProps) {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-[#111111]   rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">Partner Agreement</h3>
          <button
            type="button"
            className="flex items-center gap-2 text-[#37e5a5] hover:text-[#37e5a5]/80 transition-colors"
          >
            <Download className="h-5 w-5" />
            Download
          </button>
        </div>
        
        <div className="h-96 overflow-y-auto prose prose-invert prose-sm max-w-none">
          <h4>1. Introduction</h4>
          <p>
            This Partner Agreement ("Agreement") is entered into between Trawayl ("Company") 
            and the Partner ("Partner") as identified in the registration process.
          </p>

          <h4>2. Services</h4>
          <p>
            The Partner agrees to provide travel-related services through the Trawayl platform
            in accordance with the terms and conditions set forth in this Agreement.
          </p>

          <h4>3. Responsibilities</h4>
          <ul>
            <li>Maintain accurate and up-to-date information</li>
            <li>Provide services as described in the package details</li>
            <li>Respond to customer inquiries promptly</li>
            <li>Maintain necessary licenses and permits</li>
          </ul>

          <h4>4. Commission Structure</h4>
          <p>
            The Company will charge a commission on each successful booking as per the
            following structure:
          </p>
          <ul>
            <li>Standard bookings: 10% of the total booking value</li>
            <li>Premium bookings: 12% of the total booking value</li>
            <li>Last-minute bookings: 15% of the total booking value</li>
          </ul>

          <h4>5. Payment Terms</h4>
          <p>
            Payments will be processed within 7 business days after the successful
            completion of the service.
          </p>

          <h4>6. Termination</h4>
          <p>
            Either party may terminate this Agreement with 30 days written notice.
            Outstanding bookings must be honored.
          </p>
        </div>
      </div>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="h-5 w-5 rounded border-gray-800 bg-black text-[#37e5a5]
            focus:ring-[#37e5a5] focus:ring-offset-0"
        />
        <span className="text-sm text-gray-200">
          I have read and agree to the terms and conditions
        </span>
      </label>

      <button
        type="submit"
        disabled={!agreed}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#37e5a5] 
          text-black font-semibold rounded-full hover:bg-[#37e5a5]/90 transition-colors
          disabled:bg-gray-700 disabled:cursor-not-allowed"
      >
        {agreed && <Check className="h-5 w-5" />}
        Complete Registration
      </button>
    </form>
  );
}