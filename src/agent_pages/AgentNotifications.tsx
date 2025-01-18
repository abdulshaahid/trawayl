import { Bell } from 'lucide-react';

export function AgentNotifications() {
  const notifications = [
    {
      id: 1,
      title: 'Booking Confirmed',
      message: 'Your Bali Adventure Package has been confirmed',
      time: '2 hours ago',
      type: 'success'
    },
    {
      id: 2,
      title: 'Special Offer',
      message: 'Get 20% off on Tokyo Explorer Package',
      time: '1 day ago',
      type: 'promo'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-white pt-20 pb-24">
      <div className="container mx-auto px-4 space-y-6">
        <h1 className="text-2xl font-bold">Notifications</h1>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white/5 backdrop-blur-xl rounded-lg p-4 space-y-2"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">{notification.title}</h3>
                </div>
                <span className="text-sm text-gray-400">{notification.time}</span>
              </div>
              <p className="text-gray-300">{notification.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}