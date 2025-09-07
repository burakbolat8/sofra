import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category } from '../types/dinner';

interface SlotMachineProps {
  selectedCategories: Category[];
  onComplete: () => void;
}

interface SlotItem {
  id: string;
  name: string;
  emoji: string;
  color: string;
}

const categoryData: Record<Category, SlotItem> = {
  [Category.MAIN_COURSE]: { id: 'main', name: 'Main Course', emoji: '🍽️', color: 'from-red-500 to-red-600' },
  [Category.SOUP]: { id: 'soup', name: 'Soup', emoji: '🥣', color: 'from-orange-500 to-orange-600' },
  [Category.SIDE_DISH]: { id: 'side', name: 'Side Dish', emoji: '🥗', color: 'from-green-500 to-green-600' },
  [Category.SALAD]: { id: 'salad', name: 'Salad', emoji: '🥬', color: 'from-emerald-500 to-emerald-600' },
  [Category.DESSERT]: { id: 'dessert', name: 'Dessert', emoji: '🍰', color: 'from-pink-500 to-pink-600' },
};

const slotItems = [
  { id: '1', name: 'Kuru Fasulye', emoji: '🫘', color: 'from-amber-500 to-amber-600' },
  { id: '2', name: 'Nohut', emoji: '🫘', color: 'from-yellow-500 to-yellow-600' },
  { id: '3', name: 'Lahmacun', emoji: '🥙', color: 'from-red-500 to-red-600' },
  { id: '4', name: 'Mantı', emoji: '🥟', color: 'from-blue-500 to-blue-600' },
  { id: '5', name: 'Köfte', emoji: '🍖', color: 'from-orange-500 to-orange-600' },
  { id: '6', name: 'Pide', emoji: '🥖', color: 'from-yellow-500 to-yellow-600' },
  { id: '7', name: 'Mercimek Çorbası', emoji: '🍲', color: 'from-orange-500 to-orange-600' },
  { id: '8', name: 'Yayla Çorbası', emoji: '🥛', color: 'from-white-500 to-gray-600' },
  { id: '9', name: 'Pilav', emoji: '🍚', color: 'from-yellow-500 to-yellow-600' },
  { id: '10', name: 'Bulgur Pilavı', emoji: '🌾', color: 'from-amber-500 to-amber-600' },
  { id: '11', name: 'Çoban Salatası', emoji: '🥗', color: 'from-green-500 to-green-600' },
  { id: '12', name: 'Gavurdağı Salatası', emoji: '🥒', color: 'from-emerald-500 to-emerald-600' },
  { id: '13', name: 'Sütlaç', emoji: '🍮', color: 'from-pink-500 to-pink-600' },
  { id: '14', name: 'Baklava', emoji: '🥮', color: 'from-amber-500 to-amber-600' },
  { id: '15', name: 'Künefe', emoji: '🧀', color: 'from-orange-500 to-orange-600' },
];

export function SlotMachine({ selectedCategories, onComplete }: SlotMachineProps) {
  const [spinning, setSpinning] = useState(true);
  const [results, setResults] = useState<SlotItem[]>([]);
  const [currentSpins, setCurrentSpins] = useState(0);

  useEffect(() => {
    if (spinning) {
      const spinInterval = setInterval(() => {
        setCurrentSpins(prev => prev + 1);
        
        // Generate random results for each selected category
        const newResults = selectedCategories.map(category => {
          const randomItem = slotItems[Math.floor(Math.random() * slotItems.length)];
          return {
            ...randomItem,
            name: categoryData[category].name,
            emoji: categoryData[category].emoji,
            color: categoryData[category].color,
          };
        });
        setResults(newResults);
      }, 100);

      // Stop spinning after 3 seconds
      const stopTimeout = setTimeout(() => {
        setSpinning(false);
        clearInterval(spinInterval);
        
        // Wait a bit more before calling onComplete
        setTimeout(() => {
          onComplete();
        }, 1000);
      }, 3000);

      return () => {
        clearInterval(spinInterval);
        clearTimeout(stopTimeout);
      };
    }
  }, [spinning, selectedCategories, onComplete]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          🎰 Spinning! 🎰
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {spinning ? 'Spinning...' : 'Ready!'}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedCategories.map((category, index) => {
          const categoryInfo = categoryData[category];
          const result = results[index];
          
          return (
            <motion.div
              key={category}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Slot Machine Frame */}
              <div className="bg-gray-100 rounded-lg p-4 shadow-lg border-2 border-gray-200">
                <div className="bg-white rounded-lg p-6 relative overflow-hidden border border-gray-300">
                  {/* Spinning Animation */}
                  <motion.div
                    className="flex flex-col items-center justify-center min-h-[120px]"
                    animate={spinning ? {
                      y: [0, -20, 0],
                    } : {}}
                    transition={{
                      duration: 0.1,
                      repeat: spinning ? Infinity : 0,
                      ease: "linear"
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {result && (
                        <motion.div
                          key={result.id}
                          className="text-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${result.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                            <span className="text-3xl">{result.emoji}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {result.name}
                          </h3>
                          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${result.color} rounded-full`}
                              initial={{ width: "0%" }}
                              animate={{ width: spinning ? "100%" : "100%" }}
                              transition={{ duration: 0.5, delay: spinning ? 0 : 0.5 }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
                
                {/* Slot Machine Decorations */}
                <div className="absolute top-2 left-2 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Spin Counter */}
      {spinning && (
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full border border-gray-300">
            <motion.div
              className="w-2 h-2 bg-yellow-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
            <span className="text-sm font-medium">
              {currentSpins}
            </span>
          </div>
        </motion.div>
      )}

      {/* Success Message */}
      {!spinning && results.length > 0 && (
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg">
            <motion.div
              className="w-6 h-6"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              🎉
            </motion.div>
            <span className="text-lg font-semibold">
              Afiyet olsun! 🍽️
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
