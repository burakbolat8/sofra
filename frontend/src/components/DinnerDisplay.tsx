import React from 'react';
import { motion } from 'framer-motion';
import { DinnerSuggestion } from '../types/dinner';
import { DishCard } from './DishCard';
import { UtensilsCrossed, Sparkles } from 'lucide-react';

interface DinnerDisplayProps {
  dinner: DinnerSuggestion;
}

export const DinnerDisplay: React.FC<DinnerDisplayProps> = ({ dinner }) => {
  const courses = [
    { key: 'main_course', dish: dinner.main_course, title: 'Main Course' },
    { key: 'soup', dish: dinner.soup, title: 'Soup' },
    { key: 'side_dish', dish: dinner.side_dish, title: 'Side Dish' },
    { key: 'salad', dish: dinner.salad, title: 'Salad' },
    { key: 'dessert', dish: dinner.dessert, title: 'Dessert' },
  ].filter(course => course.dish);

  if (courses.length === 0) {
    return (
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="card max-w-md mx-auto">
          <div className="text-orange-600 mb-4">
            <UtensilsCrossed className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Categories Selected
          </h3>
          <p className="text-gray-600">
            Please select at least one category to get dinner suggestions.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <UtensilsCrossed className="w-8 h-8 text-white" />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Tonight's Dinner
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          >
            <DishCard
              dish={course.dish!}
              category={course.dish!.category}
              className="h-full"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-8 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex items-center justify-center mb-2">
          <Sparkles className="w-5 h-5 text-primary-500 mr-2" />
          <span className="text-primary-700 font-medium">Afiyet olsun! 🍽️</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
