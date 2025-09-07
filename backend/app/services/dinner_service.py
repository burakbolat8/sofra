import random
from typing import List, Optional
from app.models.dinner import Dish, Category, DinnerSuggestion
from app.data.recipes import TURKISH_MEALS

class DinnerService:
    def __init__(self):
        self.meals = TURKISH_MEALS
    
    def get_random_dinner(self, selected_categories: List[Category] = None) -> DinnerSuggestion:
        """Get a random dinner suggestion with dishes from selected categories."""
        if selected_categories is None or len(selected_categories) == 0:
            selected_categories = [
                Category.MAIN_COURSE,
                Category.SOUP,
                Category.SIDE_DISH,
                Category.SALAD,
                Category.DESSERT,
            ]
        
        dinner = DinnerSuggestion()
        
        for category in selected_categories:
            dish = self.get_random_dish_by_category(category)
            if category == Category.MAIN_COURSE:
                dinner.main_course = dish
            elif category == Category.SOUP:
                dinner.soup = dish
            elif category == Category.SIDE_DISH:
                dinner.side_dish = dish
            elif category == Category.SALAD:
                dinner.salad = dish
            elif category == Category.DESSERT:
                dinner.dessert = dish
        
        return dinner
    
    def get_random_dish_by_category(self, category: Category) -> Optional[Dish]:
        """Get a random dish from a specific category."""
        category_dishes = [dish for dish in self.meals if dish.category == category]
        if not category_dishes:
            return None
        return random.choice(category_dishes)
    
    def get_all_categories(self) -> List[Category]:
        """Get all available categories."""
        return list(Category)
    
    def get_all_meals(self) -> List[Dish]:
        """Get all Turkish meals."""
        return self.meals
