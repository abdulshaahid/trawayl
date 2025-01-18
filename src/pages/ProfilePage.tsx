import { Link } from 'react-router-dom';
import { Settings, ChevronRight, Calendar, HelpCircle, User, Gift, Tag, Briefcase } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import UserAxiosInstance from '../AxiosInstances/UserAxiosInstance';
import SERVERURL from '../URL';

const ProfilePage = () => {
  const menuItems = [
    { icon: <Calendar size={24} />, title: 'Bookings', subtitle: 'View your trips', path: '/bookings' },
    { icon: <HelpCircle size={24} />, title: 'Help Center', subtitle: 'Get support', path: '/help' },
    { icon: <User size={24} />, title: 'Account & Settings', subtitle: 'Manage your account', path: '/accountsettings' },
    { icon: <Gift size={24} />, title: 'Rewards', subtitle: 'View your rewards', path: '/rewards' },
    { icon: <Tag size={24} />, title: 'Offers', subtitle: 'Special deals for you', path: '/offers' },
    { icon: <Briefcase size={24} />, title: 'Partner with Us', subtitle: 'Join our network', path: '/partner' },
  ];

  const [profile, setProfile] = useState({
    first_name: '',
    trips: 0,
    reviews: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await UserAxiosInstance.get(`${SERVERURL}/accounts/profile/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Ensure the accessToken is valid
          },
        });

        // Assuming the response.data is the user profile object
        setProfile(response.data); 
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mt-16 min-h-screen bg-black pb-20">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Hi, {profile.first_name || 'User'}!</h2>
            <Link to="/edit-profile" className="text-[#00FF9D] text-sm">
              Edit Profile
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-[#111] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">{profile.trips || "0"} </div>
            <div className="text-gray-400 text-sm">Trips</div>
          </div>
          <div className="flex-1 bg-[#111] rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-white">{profile.reviews || "0"}</div>
            <div className="text-gray-400 text-sm">Reviews</div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index} className="flex items-center justify-between p-4 bg-[#111] rounded-lg">
              <div className="flex items-center">
                {item.icon}
                <div className="ml-4">
                  <div className="text-white font-semibold">{item.title}</div>
                  <div className="text-gray-400 text-sm">{item.subtitle}</div>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
