import React from 'react';
import { motion } from 'framer-motion';
import { Category, CategoryOption } from '../types/dinner';

interface CategorySelectorProps {
  selectedCategories: Category[];
  onCategoryToggle: (category: Category) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
}

const categoryOptions: CategoryOption[] = [
  {
    value: Category.MAIN_COURSE,
    label: 'Main Course',
    color: 'from-orange-500 to-red-500',
    icon: '🍽️'
  },
  {
    value: Category.SOUP,
    label: 'Soup',
    color: 'from-blue-500 to-cyan-500',
    icon: '🥣'
  },
  {
    value: Category.SIDE_DISH,
    label: 'Side Dish',
    color: 'from-green-500 to-emerald-500',
    icon: '🥗'
  },
  {
    value: Category.SALAD,
    label: 'Salad',
    color: 'from-lime-500 to-green-500',
    icon: '🥬'
  },
  {
    value: Category.DESSERT,
    label: 'Dessert',
    color: 'from-pink-500 to-purple-500',
    icon: '🍰'
  }
];

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategories,
  onCategoryToggle,
  onSelectAll,
  onClearAll
}) => {
  const isAllSelected = selectedCategories.length === categoryOptions.length;
  const isNoneSelected = selectedCategories.length === 0;

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* Category Grid */}
      <div className="grid grid-cols-1 gap-3">
        {categoryOptions.map((option) => {
          const isSelected = selectedCategories.includes(option.value);
          return (
            <motion.button
              key={option.value}
              onClick={() => onCategoryToggle(option.value)}
              className={`relative p-2 rounded-lg border-2 transition-all duration-200 flex items-center space-x-2 ${
                isSelected
                  ? `border-primary-500 bg-gradient-to-r ${option.color} text-white shadow-lg`
                  : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-lg">{option.icon}</div>
              <div className={`font-medium text-xs ${
                isSelected ? 'text-white' : 'text-gray-700'
              }`}>
                {option.label}
              </div>
              {isSelected && (
                <motion.div
                  className="ml-auto w-4 h-4 bg-white rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <span className="text-primary-500 text-xs">✓</span>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <motion.button
          onClick={onSelectAll}
          className={`px-3 py-1 rounded-lg font-medium transition-all duration-200 text-xs flex-1 ${
            isAllSelected
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-secondary-500 hover:bg-secondary-600 text-white hover:shadow-md'
          }`}
          disabled={isAllSelected}
          whileHover={!isAllSelected ? { scale: 1.02 } : {}}
          whileTap={!isAllSelected ? { scale: 0.98 } : {}}
        >
          All
        </motion.button>
        
        <motion.button
          onClick={onClearAll}
          className={`px-3 py-1 rounded-lg font-medium transition-all duration-200 text-xs flex-1 ${
            isNoneSelected
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-500 hover:bg-gray-600 text-white hover:shadow-md'
          }`}
          disabled={isNoneSelected}
          whileHover={!isNoneSelected ? { scale: 1.02 } : {}}
          whileTap={!isNoneSelected ? { scale: 0.98 } : {}}
        >
          Clear
        </motion.button>
      </div>

    </motion.div>
  );
};
