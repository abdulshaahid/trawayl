export function ProfileStats() {
  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      <div className="bg-card p-4 rounded-lg">
        <p className="text-2xl font-bold">24</p>
        <p className="text-sm text-gray-400">Trips</p>
      </div>
      <div className="bg-card p-4 rounded-lg">
        <p className="text-2xl font-bold">156</p>
        <p className="text-sm text-gray-400">Reviews</p>
      </div>
      <div className="bg-card p-4 rounded-lg">
        <p className="text-2xl font-bold">1.2k</p>
        <p className="text-sm text-gray-400">Followers</p>
      </div>
    </div>
  );
}