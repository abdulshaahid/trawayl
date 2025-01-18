import React from 'react';
import PackageCard from './PackageCard';
import { usePackages } from '../../hooks/usePackages';

export default function PackageList() {
  const { packages, isLoading } = usePackages();

  if (isLoading) {
    return <div className="text-gray-400 text-center py-8">Loading packages...</div>;
  }

  if (!packages.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400 mb-4">No packages found</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {packages.map((pkg) => (
        <PackageCard
          key={pkg.id}
          package={pkg}
          onEdit={(id) => console.log('Edit', id)}
          onDelete={(id) => console.log('Delete', id)}
        />
      ))}
    </div>
  );
}