import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
}

const ReviewCard = ({ name, avatar, rating, review, date }: ReviewCardProps) => {
  return (
    <div className="bg-[#171717] p-6 rounded-3xl flex flex-col h-full">
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'text-[#37e5a5] fill-[#37e5a5]' : 'text-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-400 flex-grow">{review}</p>
      <p className="text-sm text-gray-500 mt-4">{date}</p>
    </div>
  );
};

export default ReviewCard;