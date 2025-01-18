  import React, { useState } from 'react';
  import { ArrowLeft } from 'lucide-react';
  import { Link } from 'react-router-dom';
  import PackageBasicInfo from '../../agent_components/packages/forms/PackageBasicInfo';
  import PackageDetails from '../../agent_components/packages/forms/PackageDetails';
  import PackageHighlights from '../../agent_components/packages/forms/PackageHighlights';
  import PackageMedia from '../../agent_components/packages/forms/PackageMedia';
  import PackagePricing from '../../agent_components/packages/forms/PackagePricing';
  import axios from 'axios';
  import URL from '../../URL';


  interface PackageData {
    name: string;
    location: string;
    duration: string;
    description: string;
  }

  interface HighlightData {
    name: string;
    order: number;
  }

  interface OptionData {
    category: string;
    value: string;
  }

  interface ItineraryItemData {
    day: number;
    description: string;
  }

  interface MediaData {
    file: File;
    media_type: string;
  }

  interface PricingData {
    price: number;
    currency: string;
    duration: string;
  }

  const steps = [


    { component: PackageBasicInfo, label: "Basic Info" },
    { component: PackageDetails, label: "Details" },
    { component: PackageHighlights, label: "Highlights" },
    { component: PackageMedia, label: "Media" },
    { component: PackagePricing, label: "Pricing" },
    { component: null, label: "Preview" },


  ];

  export default function AddPackage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<Record<string, any>>({
      basicInfo: {},
      details: {},
      highlights: [],
      options: [],
      itinerary: [],
      media: {},
      pricing: {},
    });

    const isLastStep = currentStep === steps.length - 1;
    const isFirstStep = currentStep === 0;

    const handleNext = () => {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
    };

    const handlePrevious = () => {
      if (currentStep > 0) {
        setCurrentStep((prev) => prev - 1);
      }
    };
  //   const file = new File([formData.media], 'image.jpg', { type: formData.media.type });
  // console.log(formData.media.da)
  // console.log(file)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

    }
    console.log(formData)

    const Send_package=()=>{
    
      axios.post(`${URL}/package/packages/create/`,{
  package:formData

      })
    }



    

    const handleFormDataUpdate = (newData: Record<string, any>, step: string) => {
      setFormData((prevData) => ({
        ...prevData,
        [step]: newData,
      }));
    };

    const CurrentComponent = steps[currentStep].component;

    const renderPreview = () => {
      return (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Preview Your Package</h2>
          <div className="space-y-3">
            <h3 className="text-white">Basic Info:</h3>
            <p className="text-gray-300">{JSON.stringify(formData.basicInfo)}</p>

            <h3 className="text-white">Details:</h3>
            <p className="text-gray-300">{JSON.stringify(formData.details)}</p>

            <h3 className="text-white">Highlights:</h3>
            <ul className="list-disc list-inside text-gray-300">
              {formData.highlights.map((highlight: HighlightData, index: number) => (
                <li key={index}>{highlight.name}</li>
              ))}
            </ul>

            <h3 className="text-white">Options:</h3>
            <ul className="list-disc list-inside text-gray-300">
              {formData.options.map((option: OptionData, index: number) => (
                <li key={index}>{option.category}: {option.value}</li>
              ))}
            </ul>

            <h3 className="text-white">Itinerary:</h3>
            <ol className="list-decimal list-inside text-gray-300">
              {formData.itinerary.map((item: ItineraryItemData, index: number) => (
                <li key={index}>Day {item.day}: {item.description}</li>
              ))}
            </ol>

            <h3 className="text-white">Media:</h3>
            <p className="text-gray-300">{JSON.stringify(formData.media)}</p>

            <h3 className="text-white">Pricing:</h3>
            <p className="text-gray-300">{JSON.stringify(formData.pricing)}</p>
          </div>
        </div>
      );
    };

    return (
      <div className="min-h-screen bg-black pt-20 pb-20 px-4">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/packages" className="p-2 hover:bg-white/5 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-white" />
            </Link>
            <h1 className="text-xl font-bold text-white">Add New Package</h1>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Render the current step's component */}
            {currentStep === steps.length - 1 ? renderPreview() : CurrentComponent && <CurrentComponent handleDataUpdate={handleFormDataUpdate} formData={formData} />}

            <div className="flex gap-3 pt-4">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex-1 py-3 bg-[#1f1f1f] text-white rounded-full hover:border-white/20 transition-colors"
                >
                  Previous
                </button>
              )}
              {isLastStep ? (
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#37e5a5] text-black rounded-full hover:bg-[#37e5a5]/90 transition-colors font-medium"
                  onClick={Send_package}
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 py-3 bg-[#37e5a5] text-black rounded-full hover:bg-[#37e5a5]/90 transition-colors font-medium"
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
