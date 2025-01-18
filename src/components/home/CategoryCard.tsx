import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  href: string;
}

export function CategoryCard({ icon: Icon, title, href }: CategoryCardProps) {
  return (
    <Link
      to={href}
      className="flex flex-col items-center justify-center p-6 bg-card hover:bg-card-hover rounded-2xl transition-colors"
    >
      <Icon className="w-8 h-8 text-primary mb-3" />
      <span className="text-white font-medium">{title}</span>
    </Link>
  );
}