export interface Package {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  highlights: string[];
  images: string[];
  status: 'active' | 'draft' | 'pending';
  rating: number;
  reviews: number;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  packageId: string;
  packageName: string;
  date: string;
  status: 'pending' | 'active' | 'rejected';
  amount: number;
}

export interface Stats {
  totalPackages: number;
  activeBookings: number;
  pendingOrders: number;
  monthlyEarnings: number;
}