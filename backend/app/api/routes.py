from fastapi import APIRouter, HTTPException
from app.services.dinner_service import DinnerService
from app.models.dinner import Category, DinnerSuggestion, Dish
from typing import List

dinner_router = APIRouter()

# Create a single service instance since we don't need database anymore
dinner_service = DinnerService()


@dinner_router.get("/random", response_model=DinnerSuggestion)
async def get_random_dinner(categories: str = None):
    """Get a random dinner suggestion with dishes from selected categories."""
    try:
        selected_categories = None
        if categories:
            # Parse comma-separated category list
            category_names = [cat.strip() for cat in categories.split(',')]
            if not category_names or len(category_names) == 0:
                raise HTTPException(status_code=400, detail="At least one category must be selected")
            
            try:
                selected_categories = [Category(cat) for cat in category_names]
            except ValueError as e:
                raise HTTPException(status_code=400, detail=f"Invalid category: {str(e)}")
        
        return dinner_service.get_random_dinner(selected_categories)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get random dinner: {str(e)}")


@dinner_router.get("/categories", response_model=List[Category])
async def get_categories():
    try:
        return dinner_service.get_all_categories()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get categories: {str(e)}")


@dinner_router.get("/meals", response_model=List[Dish])
async def get_all_meals():
    """Get all Turkish meals."""
    try:
        return dinner_service.get_all_meals()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get meals: {str(e)}")


