import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import SearchOverlay from "./SearchOverlay";
import TrpdLogo from "../../assets/trpd.svg";
import LoginModal from "../LoginModal";
import { CgProfile } from "react-icons/cg";

interface DecodedToken {
  email: string;
  exp: number; // Expiry timestamp
  // Add other fields if necessary
}

export function Navbar() {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false); // Logout popup state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const decodeToken = () => {
      try {
        const token = localStorage.getItem("useraccesstoken");
        if (token) {
          const decoded: DecodedToken = jwtDecode(token);
          setUserEmail(decoded.email); // Extract the email
        } else {
          setUserEmail(null); // Clear email if no token
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        setUserEmail(null); // Clear email on error
      }
    };

    decodeToken();
  }, []);

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  const handleHomeClick = () => {
    navigate("/");
  };



  const handleLogout = () => {
    localStorage.removeItem("useraccesstoken");
    setUserEmail(null);
    setIsLogoutOpen(false);
    navigate("/login"); // Redirect to the login page
  };



  
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div
            onClick={handleHomeClick}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img src={TrpdLogo} alt="Trawayl Logo" className="w-10 h-10" />
            <span className="text-gray-200 font-bold text-l">trawayl</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-6 h-6 text-white opacity-80" />
            </button>

            {/* Notifications Button */}
            <button
              onClick={handleNotificationClick}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Bell className="w-6 h-6 text-white opacity-80" />
            </button>

            {/* Conditional Rendering: Signup Button or User Email */}
            {userEmail ? (
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                  onClick={() => setIsLogoutOpen((prev) => !prev)} // Toggle logout popup
                />
                {isLogoutOpen && (
                  <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg p-4 z-50">
                    <p className="text-sm mb-2">{userEmail}</p>
                    <button
                      className="w-full bg-[#37e5a5] text-black px-4 py-2 rounded-lg hover:bg-[#28b49c] transition-all"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
) : (
  <button
    onClick={() => setIsLoginOpen(true)}
    className="bg-[#37e5a5] text-black px-4 py-2 rounded-full hover:bg-[#28b49c] transition-all"
>
    Sign in
  </button>
)}

          </div>
        </div>
      </nav>
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
