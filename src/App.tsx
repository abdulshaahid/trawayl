import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { BottomNav } from './components/layout/BottomNav';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Create } from './pages/Create';
import { Packages } from './pages/Packages';
import { Vehicles } from './pages/Vehicles';
import { Wallet } from './pages/Wallet';
import { Settings } from './pages/Settings';
import ProfilePage from './pages/ProfilePage';
import BookingsPage from './pages/BookingsPage';
import HelpCenterPage from './pages/HelpCenterPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import RewardsPage from './pages/RewardsPage';
import OffersPage from './pages/OffersPage';
import PartnerPage from './pages/PartnerPage';
import EditProfilePage from './pages/EditProfilePage';
import Footer from './components/layout/Footer';
// new
import PackageItinerary from './pages/PackageItinerary';
import VehicleBooking from './pages/VehicleBooking';
import SoloTravel from './pages/SoloTravel';
import Booking from './pages/Booking';
import ReviewBooking from './components/booking/ReviewBooking';
import PaymentMethods from './components/booking/PaymentMethods';
//neww

import RegistrationPage from './pages/RegistrationPage';
import { Notifications } from './pages/Notifications';
import Dashboard from './agent_pages/Dashboard';
import Orders from './agent_pages/orders/Orders';
import Earnings from './agent_pages/earnings/Earnings';
import PackageStats from './agent_pages/stats/PackageStats';
import AgentPackages from './agent_pages/packages/AgentPackages';
import { AgentNotifications } from './agent_pages/AgentNotifications';
import OrderDetails from './agent_pages/orders/OrderDetails';
//agentprofile
import AgentProfile from './agent_pages/AgentProfile';
import AgentEditProfile from './agent_components/AgentProfile/AgentEditProfile';
import AgentHelpCenter from './agent_components/AgentProfile/AgentHelpCenter';
import AgentRewards from './agent_components/AgentProfile/AgentRewards';
import AgentOffers from './agent_components/AgentProfile/AgentOffers';
import AgentAuthPage from './agent_pages/AgentAuthPage';

import AddPackage from './agent_pages/packages/AddPackage';
import AgentNavbar from './agent_components/layout/AgentNavbar';
import AgentBottomNav from './agent_components/layout/AgentBottomNav';
import UserLogin from './pages/UserLogin';
import AdminWrapper from './admin_pages/AdminWrapper';
import AgentRegister from './agent_pages/AgentRegister';
import AgentLogin from './agent_pages/AgentLogin';
import Test from './pages/Test';

//Partner registration
import RegMain from './reg_pages/RegMain';

// Helper Component for Navbar Selection
function ConditionalNavbar() {
  const location = useLocation();

  // Routes starting with "/agent" will show the agent navbar
  // Routes starting with "/admin" will show no navbar (assuming admin uses a different layout)
  const isAgentRoute = location.pathname.startsWith('/agent');
  const isAdminRoute = location.pathname.startsWith('/admin');

  return isAgentRoute ? <AgentNavbar /> : isAdminRoute ? null : <Navbar />;
}

// Helper Component for BottomNav Selection
function ConditionalBottomNav() {
  const location = useLocation();

  // Routes starting with "/agent" will show the agent bottom navigation
  // Routes starting with "/admin" will show no bottom nav (assuming admin uses a different layout)
  const isAgentRoute = location.pathname.startsWith('/agent');
  const isAdminRoute = location.pathname.startsWith('/admin');

  return isAgentRoute ? <AgentBottomNav /> : isAdminRoute ? null : <BottomNav />;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        {/* Conditional Navbar */}
        <ConditionalNavbar />

        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<Create />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/accountsettings" element={<AccountSettingsPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/PackageItinerary" element={<PackageItinerary />} />
          <Route path="/package-itinerary/:pkgId" element={<PackageItinerary />} />
          <Route path="/vehiclebooking/:vehicleId" element={<VehicleBooking />} />
          <Route path="/solotravel/:groupId" element={<SoloTravel />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/reviewbooking" element={<ReviewBooking />} />
        <Route path="/payment" element={<PaymentMethods />} />
   
        
          <Route path="/payment" element={<PaymentMethods />} />
          <Route path="/notifications" element={<Notifications />} />







          {/* -------------------------------------------------------------------------------------------- */}
          {/* Agent Routes */}
          <Route path="/agent/dashboard" element={<Dashboard />} />
          <Route path="/agent/addpackage" element={<AddPackage />} />
          <Route path="/agent/agentpackages" element={<AgentPackages />} />
         
          <Route path="/agent/orders" element={<Orders />} />
          <Route path="/agent/orders/:id" element={<OrderDetails />} />{/* Dynamic route for OrderDetails */}
      
          <Route path="/agent/earnings" element={<Earnings />} />
          <Route path="/agentstats/packages" element={<PackageStats />} />
          <Route path="/agent/notifications" element={<AgentNotifications />} />          






          {/* agentprofile */}
          <Route path="/agent/agentprofile" element={<AgentProfile />} />
          <Route path="/agent/agent-edit-profile" element={<AgentEditProfile />} />
          <Route path="/agent/agent-help-center" element={<AgentHelpCenter />} />
          <Route path="/agent/agent-rewards" element={<AgentRewards />} />
          <Route path="/agent/agent-offers" element={<AgentOffers />} />
          <Route path="/agent/agentauth" element={<AgentAuthPage />} />

          {/* agent registration */}
          <Route path="/agent/registeration" element={<RegMain/>} />
  






          {/* ---------------------------------------------------------------------------------------- */}
          {/* authentication and stuff */}
          <Route path="/signup" element={<RegistrationPage/>}/>
          <Route path="/signin" element={<UserLogin/>}/>
          <Route path="/test" element={<Test/>}/>


          <Route path="/agent/signup" element={<AgentRegister />} />
          <Route path="/agent/signin" element={<AgentLogin />} />
          <Route path="/agent/registerandlogin" element={<AgentAuthPage />} />
          






          {/* ------------------------------------------------------------------------------------------------- */}
          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminWrapper />} />
          </Routes>

        {/* Conditional Bottom Navigation */}
        <ConditionalBottomNav />
      </div>
    </Router>
  );
}

export default App;
