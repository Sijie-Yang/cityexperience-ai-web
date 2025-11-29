import { ReactNode } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export default function ProductCard({ title, description, icon, className = '' }: ProductCardProps) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow ${className}`}>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

