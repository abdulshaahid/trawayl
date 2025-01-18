import React from 'react';

interface PackageHeaderProps {
  title: string;
  provider: string;
  description: string;
  tags: string[];
  price: number;
}

const PackageHeader = ({ title, provider, description, tags, price }: PackageHeaderProps) => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-white">{title}</h1>
      <p className="text-gray-400 mt-1">by {provider}</p>
      
      <div className="mt-4 space-y-2">
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-[#181414] px-3 py-1 rounded-full text-sm text-[#37e5a5]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <div className="text-3xl md:text-4xl font-bold text-[#37e5a5]">
          ₹{price.toLocaleString()}
          <span className="text-sm md:text-base text-gray-400 ml-2">per person</span>
        </div>
        <p className="text-sm text-gray-400 mt-1">*Prices may vary based on group size and season</p>
      </div>
    </div>
  );
}

export default PackageHeader;