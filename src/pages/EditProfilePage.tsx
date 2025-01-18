import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';
import axios from 'axios';
import URL from '../URL';
import UserAxiosInstance from '../AxiosInstances/UserAxiosInstance';

const EditProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');

  const handleSaveChanges = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const response = await UserAxiosInstance.post(`${URL}/accounts/profile/edit-profile/`, {
        full_name: fullName,
        email: email,
        phone_number: phoneNumber,
        location: location,
        bio: bio,
      });

      console.log(response.data);
      setIsOpen(true);

      // Reset form after successful submission
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setLocation('');
      setBio('');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="mt-16 min-h-screen bg-black pb-20 text-white">
      <header className="flex items-center p-6 border-b border-gray-800">
        <Link to="/profile" className="mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold">Edit Profile</h1>
      </header>

      <div className="p-6">
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-[#00FF9D] p-2 rounded-full">
              <Camera size={20} className="text-black" />
            </button>
          </div>
          <button className="text-[#00FF9D]">Change Photo</button>
        </div>

        <form onSubmit={handleSaveChanges} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm text-gray-400 mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
            />
          </div>

         

          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm text-gray-400 mb-2">
              Phone
            </label>
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm text-gray-400 mb-2">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm text-gray-400 mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full bg-[#111] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D] h-32"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00FF9D] text-black font-semibold py-3 rounded-full"
          >
            Save Changes
          </button>
        </form>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#111] rounded-lg p-6 text-white">
            <h2 className="text-xl font-bold mb-4">Profile Updated Successfully!</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-[#00FF9D] text-black px-4 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfilePage;
