import React, { useState, useRef } from 'react';
import { Upload, Calendar, Camera, Building2 } from 'lucide-react';

interface KYCFormProps {
  onSubmit: (data: {
    fullName: string;
    dob: string;
    documentType: string;
    document: File | null;
    photoKYC: string | null;
    accountHolder: string;
    accountNumber: string;
    ifscCode: string;
  }) => void;
}

export function KYCForm({ onSubmit }: KYCFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    documentType: '',
    accountHolder: '',
    accountNumber: '',
    ifscCode: '',
  });
  const [document, setDocument] = useState<File | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [photoKYC, setPhotoKYC] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocument(file);
    }
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        } 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setShowCamera(true);
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };

  const takePhoto = () => {
    if (videoRef.current && videoRef.current.videoWidth > 0) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        const photoData = canvas.toDataURL('image/jpeg');
        setPhotoKYC(photoData);
        stopCamera();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      document,
      photoKYC,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
      <div className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-200">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-full bg-[#111111]   
              px-4 py-3 text-white focus:border-[#37e5a5] focus:ring-[#37e5a5] 
              focus:ring-1 transition-colors placeholder:text-gray-500"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="dob" className="block text-sm font-medium text-gray-200">
            Date of Birth
          </label>
          <div className="relative">
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-full bg-[#111111]   
                pl-10 pr-4 py-3 text-white focus:border-[#37e5a5] focus:ring-[#37e5a5] 
                focus:ring-1 transition-colors placeholder:text-gray-500"
            />
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label htmlFor="documentType" className="block text-sm font-medium text-gray-200">
            Document Type
          </label>
          <select
            id="documentType"
            name="documentType"
            value={formData.documentType}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-full bg-[#111111]  
              px-4 py-3 text-white focus:border-[#37e5a5] focus:ring-[#37e5a5] 
              focus:ring-1 transition-colors placeholder:text-gray-500"
          >
            <option value="">Select document type</option>
            <option value="pan">PAN Card</option>
            <option value="aadhaar">Aadhaar Card</option>
            <option value="passport">Passport</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Upload Document
          </label>
          <div className="relative border-2 border-dashed border-gray-700 rounded-xl p-6
            hover:border-[#37e5a5] transition-colors bg-black/50">
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleDocumentChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex items-center justify-center">
              <Upload className="h-8 w-8 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-300">
                  {document ? document.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-xs text-gray-500">
                  PDF, JPG or PNG (max. 5MB)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/30 rounded-xl p-6 border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium text-white">Photo KYC</h3>
              <p className="text-sm text-gray-400">Take a photo for verification</p>
            </div>
            <Camera className="h-6 w-6 text-[#37e5a5]" />
          </div>
          
          {showCamera ? (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-[300px] object-contain mx-auto"
                  onLoadedMetadata={() => {
                    if (videoRef.current) {
                      videoRef.current.play();
                    }
                  }}
                />
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  onClick={takePhoto}
                  className="px-6 py-2 bg-[#37e5a5] text-black rounded-full hover:bg-[#37e5a5]/90"
                >
                  Take Photo
                </button>
                <button
                  type="button"
                  onClick={stopCamera}
                  className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : photoKYC ? (
            <div className="space-y-4">
              <img 
                src={photoKYC} 
                alt="KYC Photo" 
                className="w-full h-[300px] object-contain rounded-lg bg-black"
              />
              <button
                type="button"
                onClick={() => {
                  setPhotoKYC(null);
                  startCamera();
                }}
                className="w-full bg-[#37e5a5]/10 hover:bg-[#37e5a5]/20 text-[#37e5a5] 
                  py-3 rounded-full border border-[#37e5a5]/20 transition-colors"
              >
                Retake Photo
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={startCamera}
              className="w-full bg-[#37e5a5]/10 hover:bg-[#37e5a5]/20 text-[#37e5a5] 
                py-3 rounded-full border border-[#37e5a5]/20 transition-colors"
            >
              Start Photo KYC
            </button>
          )}
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8">
        <h3 className="text-lg font-medium text-white mb-4">Bank Account Details</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="accountHolder" className="block text-sm font-medium text-gray-200">
              Account Holder Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="accountHolder"
                name="accountHolder"
                value={formData.accountHolder}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-full bg-[#111111] 
                  pl-10 pr-4 py-3 text-white focus:border-[#37e5a5] focus:ring-[#37e5a5] 
                  focus:ring-1 transition-colors placeholder:text-gray-500"
                placeholder="Enter account holder name"
              />
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-200">
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-full bg-[#111111] 
                px-4 py-3 text-white focus:border-[#37e5a5] focus:ring-[#37e5a5] 
                focus:ring-1 transition-colors placeholder:text-gray-500"
              placeholder="Enter account number"
            />
          </div>

          <div>
            <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-200">
              IFSC Code
            </label>
            <input
              type="text"
              id="ifscCode"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleInputChange}
              required
              pattern="^[A-Z]{4}0[A-Z0-9]{6}$"
              className="mt-1 block w-full rounded-full bg-[#111111]   
                px-4 py-3 text-white focus:border-[#37e5a5] focus:ring-[#37e5a5] 
                focus:ring-1 transition-colors placeholder:text-gray-500"
              placeholder="Enter IFSC code"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-8 py-4 bg-[#37e5a5] 
          text-black font-semibold rounded-full hover:bg-[#37e5a5]/90 transition-colors"
      >
        Continue
      </button>
    </form>
  );
}

export default function App() {
  const handleKYCSubmit = (data: any) => {
    console.log('KYC Form Data:', data);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <KYCForm onSubmit={handleKYCSubmit} />
    </div>
  );
}