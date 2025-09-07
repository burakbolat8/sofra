import React from 'react';
import { motion } from 'framer-motion';
import { Dish, Category } from '../types/dinner';
import { Clock, ChefHat, Utensils } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
  category: Category;
  className?: string;
}

const categoryColors = {
  [Category.MAIN_COURSE]: 'from-orange-500 to-red-500',
  [Category.SOUP]: 'from-blue-500 to-cyan-500',
  [Category.SIDE_DISH]: 'from-green-500 to-emerald-500',
  [Category.SALAD]: 'from-lime-500 to-green-500',
  [Category.DESSERT]: 'from-pink-500 to-purple-500',
};

const categoryLabels = {
  [Category.MAIN_COURSE]: 'Main Course',
  [Category.SOUP]: 'Soup',
  [Category.SIDE_DISH]: 'Side Dish',
  [Category.SALAD]: 'Salad',
  [Category.DESSERT]: 'Dessert',
};

export const DishCard: React.FC<DishCardProps> = ({ dish, category, className = '' }) => {
  return (
    <motion.div
      className={`dish-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[category]}`}>
          {categoryLabels[category]}
        </div>
        {dish.difficulty && (
          <div className="flex items-center text-xs text-gray-600">
            <ChefHat className="w-3 h-3 mr-1" />
            {dish.difficulty}
          </div>
        )}
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{dish.name}</h3>
      
      {dish.description && (
        <p className="text-gray-600 text-sm mb-3">{dish.description}</p>
      )}
      
      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        {dish.cooking_time && (
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {dish.cooking_time}
          </div>
        )}
      </div>
      
      {dish.ingredients && dish.ingredients.length > 0 && (
        <div className="border-t border-gray-100 pt-3">
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <Utensils className="w-3 h-3 mr-1" />
            Ingredients:
          </div>
          <div className="flex flex-wrap gap-1">
            {dish.ingredients.slice(0, 4).map((ingredient, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {ingredient}
              </span>
            ))}
            {dish.ingredients.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                +{dish.ingredients.length - 4} more
              </span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};
