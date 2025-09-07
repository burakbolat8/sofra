# Tech Stack & Architecture Documentation

## Overview
Sofra is a minimalist Turkish dinner decision app built with a simple, clean architecture using Python FastAPI for the backend and React TypeScript for the frontend. The application focuses on simplicity and user experience with a fun slot machine interface.

## Backend Architecture

### Core Framework: FastAPI
- **Why FastAPI?**
  - Modern, fast web framework for building APIs with Python 3.7+
  - Automatic API documentation with OpenAPI/Swagger
  - Built-in data validation with Pydantic
  - High performance, comparable to NodeJS and Go
  - Type hints support for better development experience

### Key Components

#### 1. Models (`app/models/dinner.py`)
- **Pydantic Models**: Type-safe data validation and serialization
- **Enum Classes**: Strict category definitions for food types
- **Optional Fields**: Flexible data structure for incomplete meals

#### 2. Services (`app/services/dinner_service.py`)
- **Business Logic Layer**: Separates concerns from API endpoints
- **Random Selection Algorithm**: Fair and efficient dish selection
- **Category Management**: Organized food categorization system

#### 3. API Routes (`app/api/routes.py`)
- **RESTful Endpoints**: Clean, predictable API structure
- **Error Handling**: Comprehensive error responses with proper HTTP status codes
- **Input Validation**: Automatic validation using Pydantic models

#### 4. Data Layer (`app/data/recipes.py`)
- **Static Data**: Sample recipes for MVP demonstration
- **Extensible Structure**: Easy to replace with database integration
- **Rich Metadata**: Cooking time, difficulty, ingredients, etc.

### API Endpoints

```
GET /api/dinner/random          # Complete dinner suggestion
GET /api/dinner/categories      # Available food categories
GET /api/dinner/category/{name} # Random dish from category
GET /api/dinner/category/{name}/all # All dishes from category
```

## Frontend Architecture

### Core Framework: React 18
- **Why React 18?**
  - Latest React features and performance improvements
  - Concurrent rendering for better user experience
  - Hooks-based architecture for cleaner code
  - Large ecosystem and community support

### Key Technologies

#### 1. TypeScript
- **Type Safety**: Compile-time error checking
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Interface Definitions**: Shared types with backend models

#### 2. Vite
- **Build Tool**: Extremely fast development server
- **Hot Module Replacement**: Instant updates during development
- **Optimized Production Builds**: Efficient bundling and tree-shaking

#### 3. Tailwind CSS
- **Utility-First CSS**: Rapid UI development
- **Custom Design System**: Consistent spacing, colors, and typography
- **Responsive Design**: Mobile-first approach with breakpoint utilities

#### 4. Framer Motion
- **Animation Library**: Smooth, performant animations
- **Declarative API**: Easy-to-understand animation definitions
- **Performance**: Optimized for React rendering cycles

### Component Architecture

#### 1. App Component (`src/App.tsx`)
- **Main Container**: Orchestrates application state
- **Routing Logic**: Handles different application states
- **Error Boundaries**: Graceful error handling

#### 2. Custom Hooks (`src/hooks/useDinner.ts`)
- **State Management**: Centralized API state handling
- **API Integration**: Clean separation of concerns
- **Error Handling**: Consistent error state management

#### 3. Reusable Components
- **DishCard**: Individual dish display with animations
- **DinnerDisplay**: Complete meal presentation
- **Consistent Styling**: Unified design language

## Development Workflow

### Local Development
1. **Backend**: FastAPI with auto-reload for instant updates
2. **Frontend**: Vite dev server with HMR for rapid iteration
3. **API Proxy**: Frontend proxies API calls to backend during development

### Production Deployment
1. **Backend**: Containerized with Python slim image
2. **Frontend**: Built and served via Nginx
3. **Reverse Proxy**: Nginx handles API routing and static file serving

## Performance Considerations

### Backend
- **Async/Await**: Non-blocking I/O operations
- **Pydantic Validation**: Fast data validation and serialization
- **Memory Efficient**: Minimal memory footprint for recipe data

### Frontend
- **Code Splitting**: Lazy loading of components
- **Optimized Images**: WebP format with fallbacks
- **Bundle Optimization**: Tree-shaking and minification
- **Animation Performance**: Hardware-accelerated CSS transforms

## Security Features

### Backend
- **Input Validation**: Pydantic models prevent injection attacks
- **CORS Configuration**: Controlled cross-origin access
- **Error Handling**: No sensitive information in error messages

### Frontend
- **Type Safety**: TypeScript prevents runtime type errors
- **Sanitized Input**: No direct DOM manipulation
- **Secure Dependencies**: Regular dependency updates

## Scalability Considerations

### Current MVP
- **Static Data**: In-memory recipe storage
- **Single Instance**: Monolithic application structure

### Future Enhancements
- **Database Integration**: PostgreSQL or MongoDB for recipe storage
- **User Accounts**: Authentication and personalized recommendations
- **Recipe Management**: CRUD operations for custom recipes
- **API Rate Limiting**: Prevent abuse and ensure fair usage
- **Caching Layer**: Redis for frequently accessed data
- **Microservices**: Separate services for different domains

## Testing Strategy

### Backend Testing
- **Unit Tests**: Pytest for service layer testing
- **Integration Tests**: API endpoint testing
- **Data Validation**: Pydantic model testing

### Frontend Testing
- **Component Testing**: React Testing Library
- **Hook Testing**: Custom hook validation
- **E2E Testing**: Playwright for user journey testing

## Monitoring & Observability

### Backend
- **Health Checks**: `/health` endpoint for service monitoring
- **Logging**: Structured logging for debugging
- **Metrics**: Performance monitoring endpoints

### Frontend
- **Error Tracking**: Error boundary logging
- **Performance Monitoring**: Core Web Vitals tracking
- **User Analytics**: Usage pattern analysis

## Deployment Options

### Docker Compose (Development)
- **Local Development**: Easy setup and teardown
- **Service Discovery**: Automatic networking between services
- **Volume Mounting**: Live code updates during development

### Production Deployment
- **Kubernetes**: Scalable container orchestration
- **Cloud Platforms**: AWS, GCP, or Azure deployment
- **CDN Integration**: Global content delivery
- **Load Balancing**: Multiple backend instances

## Future Roadmap

### Phase 2: Enhanced Features
- **Recipe Search**: Advanced filtering and search capabilities
- **Dietary Restrictions**: Vegetarian, vegan, gluten-free options
- **Cooking Instructions**: Step-by-step recipe guidance
- **Nutritional Information**: Calorie and macro tracking

### Phase 3: Social Features
- **Recipe Sharing**: User-generated content
- **Rating System**: Community-driven recommendations
- **Meal Planning**: Weekly dinner planning tools
- **Shopping Lists**: Automated ingredient lists

### Phase 4: AI Integration
- **Smart Recommendations**: Machine learning-based suggestions
- **Ingredient Substitution**: AI-powered alternatives
- **Meal Optimization**: Balanced nutrition recommendations
- **Seasonal Suggestions**: Local and seasonal ingredient focus
