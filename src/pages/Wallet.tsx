import { CreditCard, Receipt, Wallet as WalletIcon } from 'lucide-react';

export function Wallet() {
  return (
    <div className="min-h-screen bg-background text-white pt-20 pb-24">
      <div className="container mx-auto px-4 space-y-8">
        <h1 className="text-2xl font-bold">Wallet & Rewards</h1>

        <div className="bg-card rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400">Available Balance</p>
              <p className="text-3xl font-bold">$2,459.50</p>
            </div>
            <WalletIcon className="w-8 h-8 text-primary" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20">
              <CreditCard className="w-5 h-5" />
              <span>Add Money</span>
            </button>
            <button className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-card-hover hover:bg-border">
              <Receipt className="w-5 h-5" />
              <span>Withdraw</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Bali Adventure Package</h3>
                    <p className="text-sm text-gray-400">Feb 15, 2024</p>
                  </div>
                  <p className="text-primary font-bold">-$899.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}