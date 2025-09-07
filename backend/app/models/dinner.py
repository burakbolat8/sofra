from pydantic import BaseModel
from typing import Optional, List
from enum import Enum

class Category(str, Enum):
    MAIN_COURSE = "main_course"
    SOUP = "soup"
    SIDE_DISH = "side_dish"
    SALAD = "salad"
    DESSERT = "dessert"

class Dish(BaseModel):
    id: int
    name: str
    category: Category
    description: Optional[str] = None
    cooking_time: Optional[str] = None
    difficulty: Optional[str] = None
    cuisine_type: Optional[str] = None

class DinnerSuggestion(BaseModel):
    main_course: Optional[Dish] = None
    soup: Optional[Dish] = None
    side_dish: Optional[Dish] = None
    salad: Optional[Dish] = None
    dessert: Optional[Dish] = None

