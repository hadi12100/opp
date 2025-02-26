import React from 'react';

interface CategoryCardProps {
  name: string;
  icon: React.ReactNode;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-3">
        {icon}
      </div>
      <h3 className="font-semibold">{name}</h3>
    </div>
  );
};

export default CategoryCard;