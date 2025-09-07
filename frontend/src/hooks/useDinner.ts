import { useState, useCallback } from 'react';
import { DinnerSuggestion, Category } from '../types/dinner';

interface UseDinnerReturn {
  dinner: DinnerSuggestion | null;
  loading: boolean;
  error: string | null;
  getRandomDinner: (categories?: Category[]) => Promise<void>;
}

export const useDinner = (): UseDinnerReturn => {
  const [dinner, setDinner] = useState<DinnerSuggestion | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getRandomDinner = useCallback(async (categories?: Category[]) => {
    setLoading(true);
    setError(null);
    
    try {
      let url = '/api/dinner/random';
      if (categories && categories.length > 0) {
        const categoryParams = categories.map(cat => cat).join(',');
        url += `?categories=${categoryParams}`;
      }
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch random dinner');
      }
      
      const data: DinnerSuggestion = await response.json();
      setDinner(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    dinner,
    loading,
    error,
    getRandomDinner,
  };
};
