import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, ArrowLeft } from "lucide-react";

const AgentEditProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "Sarah Anderson",
    email: "sarah.anderson@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    bio: "Experienced travel agent specializing in luxury vacation packages.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
  });

  return (
    <div className="mt-16 mb-12 min-h-screen bg-[#000000] text-white p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate("/agent/agentprofile")} className="text-[#37e5a5]">
          <ArrowLeft />
        </button>
        <h1 className="text-xl font-bold">Edit Profile</h1>
      </div>

      {/* Avatar Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          <img
            src={profile.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-[#000000]"
          />
          <button className="absolute bottom-0 right-0 p-2 bg-[#37e5a5] rounded-full">
            <Camera size={16} className="text-black" />
          </button>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Full Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full bg-[#111111] rounded-lg p-3  focus:border-[#37e5a5] focus:outline-none text-white"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="w-full bg-[#111111] rounded-lg p-3  focus:border-[#37e5a5] focus:outline-none text-white"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Phone</label>
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="w-full bg-[#111111] rounded-lg p-3  focus:border-[#37e5a5] focus:outline-none text-white"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Location</label>
          <input
            type="text"
            value={profile.location}
            onChange={(e) =>
              setProfile({ ...profile, location: e.target.value })
            }
            className="w-full bg-[#111111] rounded-lg p-3  focus:border-[#37e5a5] focus:outline-none text-white"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Bio</label>
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            className="w-full bg-[#111111] rounded-lg p-3  focus:border-[#37e5a5] focus:outline-none text-white h-24"
          />
        </div>

        <button className="w-full bg-[#37e5a5] text-black font-semibold py-3 rounded-lg mt-6">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AgentEditProfile;
