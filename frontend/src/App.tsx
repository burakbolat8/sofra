import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDinner } from './hooks/useDinner';
import { DinnerDisplay } from './components/DinnerDisplay';
import { CategorySelector } from './components/CategorySelector';
import { SlotMachine } from './components/SlotMachine';
import { UtensilsCrossed, RefreshCw, Sparkles, Menu, X } from 'lucide-react';
import { Category } from './types/dinner';

function App() {
  const { dinner, loading, error, getRandomDinner } = useDinner();
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([
    Category.MAIN_COURSE, Category.SOUP, Category.SIDE_DISH, Category.SALAD, Category.DESSERT
  ]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarAnimating, setSidebarAnimating] = useState(false);
  const [showSlotMachine, setShowSlotMachine] = useState(false);

  const handleGetDinner = () => {
    if (selectedCategories.length === 0) {
      return;
    }
    setShowSlotMachine(true);
    getRandomDinner(selectedCategories);
  };

  const handleCategoryToggle = (category: Category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  const handleSelectAll = () => {
    setSelectedCategories([Category.MAIN_COURSE, Category.SOUP, Category.SIDE_DISH, Category.SALAD, Category.DESSERT]);
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
  };

  const handleSlotMachineComplete = () => {
    setShowSlotMachine(false);
  };

  const handleSidebarToggle = () => {
    setSidebarAnimating(true);
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarAnimationComplete = () => {
    setSidebarAnimating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Sofra</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <motion.div
          className={`w-80 bg-white shadow-lg border-r transition-all duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full absolute z-10'
          }`}
          initial={false}
          animate={{ x: sidebarOpen ? 0 : -320 }}
          onAnimationComplete={handleSidebarAnimationComplete}
        >
          <div className="flex flex-col h-[calc(100vh-80px)]">
            {/* Sidebar Header */}
            <div className="flex items-center justify-end p-4 border-b">
              <button
                onClick={handleSidebarToggle}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Category Selector */}
            <div className="flex-1 p-4 overflow-y-auto">
              <CategorySelector
                selectedCategories={selectedCategories}
                onCategoryToggle={handleCategoryToggle}
                onSelectAll={handleSelectAll}
                onClearAll={handleClearAll}
              />
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t">
              <motion.button
                className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto ${
                  selectedCategories.length === 0 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-primary-500 hover:bg-primary-600 text-white hover:shadow-md'
                }`}
                onClick={handleGetDinner}
                disabled={selectedCategories.length === 0}
                whileHover={selectedCategories.length > 0 ? { scale: 1.02 } : {}}
                whileTap={selectedCategories.length > 0 ? { scale: 0.98 } : {}}
              >
                <RefreshCw className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Hamburger Button for Collapsed Sidebar */}
          {!sidebarOpen && !sidebarAnimating && (
            <div className="absolute top-[101px] left-4 z-20">
              <button
                onClick={handleSidebarToggle}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          )}
          
          <main className="p-6">
            <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {/* Slot Machine Animation */}
              {showSlotMachine && (
                <motion.div
                  key="slot-machine"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-center justify-center min-h-[60vh]"
                >
                  <SlotMachine
                    selectedCategories={selectedCategories}
                    onComplete={handleSlotMachineComplete}
                  />
                </motion.div>
              )}

              {/* Initial State */}
              {!dinner && !loading && !showSlotMachine && (
                <motion.div
                  key="initial"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center justify-center min-h-[60vh]"
                >
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="w-12 h-12 text-primary-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Ready? 🍽️
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-md">
                      Choose categories and spin!
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Loading State */}
              {loading && !showSlotMachine && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center min-h-[60vh]"
                >
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-primary-500 mx-auto mb-6"></div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Preparing...
                    </h3>
                    <p className="text-gray-600">
                      Selecting your meal
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error State */}
              {error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center justify-center min-h-[60vh]"
                >
                  <div className="text-center">
                    <div className="text-red-600 mb-6">
                      <RefreshCw className="w-16 h-16 mx-auto" />
                    </div>
                    <h3 className="text-2xl font-semibold text-red-800 mb-2">
                      Error
                    </h3>
                    <p className="text-red-600 mb-6">
                      {error}
                    </p>
                    <button
                      className="btn-primary"
                      onClick={handleGetDinner}
                    >
                      Retry
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Dinner Display */}
              {dinner && !loading && !showSlotMachine && (
                <motion.div
                  key="dinner"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <DinnerDisplay dinner={dinner} />
                  
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
