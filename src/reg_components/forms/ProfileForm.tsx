import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

interface ProfileFormProps {
  onSubmit: (data: { image: File | null }) => void;
}

export function ProfileForm({ onSubmit }: ProfileFormProps) {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ image });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold text-center text-white mb-4">
        Upload Profile Picture
      </h2>
      
      <div
        className="relative h-64 border-2 border-dashed border-gray-700 rounded-lg 
          hover:border-[#37e5a5] transition-colors"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {preview ? (
          <div className="relative h-full">
            <img
              src={preview}
              alt="Preview"
              className="h-full w-full object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => {
                setImage(null);
                setPreview(null);
              }}
              className="absolute top-2 right-2 p-2 bg-black/50 rounded-full
                hover:bg-black transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center">
            <Upload className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-400 text-center mb-2">
              Drag and drop your image here, or click to select
            </p>
            <p className="text-sm text-gray-500">
              Supports: JPG, PNG (max 5MB)
            </p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      <div className="flex gap-4 mt-4">
        <button
          type="button"
          className="flex-1 px-8 py-4 bg-[#111111] text-white font-semibold rounded-full
            hover:bg-gray-700 transition-colors"
        >
          Skip for Now
        </button>
        <button
          type="submit"
          className="flex-1 px-8 py-4 bg-[#37e5a5] text-black font-semibold rounded-full
            hover:bg-[#37e5a5]/90 transition-colors"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
