import { Camera, Upload, Film } from 'lucide-react';

export function Create() {
  return (
    <div className="min-h-screen bg-background text-white pt-20 pb-24">
      <div className="container mx-auto px-4 space-y-8">
        <h1 className="text-3xl font-bold">Create</h1>
        
        <div className="grid gap-4">
          <button className="flex items-center justify-between p-6 bg-card rounded-lg hover:bg-card-hover">
            <div className="flex items-center space-x-4">
              <Film className="w-8 h-8 text-primary" />
              <div className="text-left">
                <h3 className="font-semibold">Create a Reel</h3>
                <p className="text-sm text-gray-400">Share your travel moments</p>
              </div>
            </div>
            <Upload className="w-6 h-6" />
          </button>

          <button className="flex items-center justify-between p-6 bg-card rounded-lg hover:bg-card-hover">
            <div className="flex items-center space-x-4">
              <Camera className="w-8 h-8 text-primary" />
              <div className="text-left">
                <h3 className="font-semibold">Share Photos</h3>
                <p className="text-sm text-gray-400">Upload your travel photos</p>
              </div>
            </div>
            <Upload className="w-6 h-6" />
          </button>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Your Recent Posts</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={`https://plus.unsplash.com/premium_photo-1722859429474-33515786d9d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=${i}`}
                  alt={`Travel post ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}