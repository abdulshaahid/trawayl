import { Moon, Bell, Lock, HelpCircle, LogOut } from 'lucide-react';

export function Settings() {
  return (
    <div className="mt-16 min-h-screen bg-background text-white pt-20 pb-24">
      <div className="container mx-auto px-4 space-y-8">
        <h1 className="text-3xl font-bold">Settings</h1>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 bg-card rounded-lg hover:bg-card-hover">
            <div className="flex items-center space-x-4">
              <Moon className="w-6 h-6 text-primary" />
              <span>Dark Mode</span>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-card rounded-lg hover:bg-card-hover">
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6" />
              <span>Notifications</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-card rounded-lg hover:bg-card-hover">
            <div className="flex items-center space-x-4">
              <Lock className="w-6 h-6" />
              <span>Privacy</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-card rounded-lg hover:bg-card-hover">
            <div className="flex items-center space-x-4">
              <HelpCircle className="w-6 h-6" />
              <span>Help & Support</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-card rounded-lg hover:bg-card-hover text-red-500">
            <div className="flex items-center space-x-4">
              <LogOut className="w-6 h-6" />
              <span>Log Out</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}