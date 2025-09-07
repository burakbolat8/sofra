from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import dinner_router

app = FastAPI(
    title="Sofra API",
    description="Dinner Decision API - Helps you choose what to cook for dinner",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],  # React dev servers
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(dinner_router, prefix="/api/dinner", tags=["dinner"])

@app.get("/")
async def root():
    return {
        "message": "Welcome to Sofra API! 🍽️",
        "docs": "/docs",
        "endpoints": {
            "random_dinner": "/api/dinner/random",
            "categories": "/api/dinner/categories",
            "category_dish": "/api/dinner/category/{category_name}"
        }
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "sofra-api"}
