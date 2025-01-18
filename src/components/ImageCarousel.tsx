import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

const ImageCarousel = ({ images, currentIndex, onIndexChange }: ImageCarouselProps) => {
  return (
    <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh]">
      <div className="absolute inset-0">
        <img 
          src={images[currentIndex]} 
          alt="Package"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>
      
      <button 
        onClick={() => onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={() => onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => onIndexChange(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-[#37e5a5]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;