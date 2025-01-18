import React, { useState } from "react";

import { Bell, User, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AgentNavbar() {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNotificationClick = () => {
    navigate("/agent/notifications"); // Navigate to the notifications page
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {!isSearchOpen ? (
          <>
            <Link
              to="/agent/dashboard"
              className="text-xl font-bold text-white"
            >
              <span className="text-[#37e5a5]">Trawayl</span>{" "}
              <span className="text-sm">partner</span>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleNotificationClick}
                className="relative p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#37e5a5] rounded-full"></span>
              </button>

              <Link to="/agent/agentprofile">
                <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
                  <User className="w-5 h-5 text-white" />
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-10 px-4 bg-white/10 rounded-full text-white placeholder-white/60 focus:outline-none"
              autoFocus
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
