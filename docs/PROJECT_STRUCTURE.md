# Project Structure Documentation

## Overview
This document provides a comprehensive overview of the Sofra project structure, explaining the purpose and organization of each directory and file.

## Root Directory Structure

```
sofra/
├── README.md                 # Main project documentation
├── TECH_STACK.md            # Detailed technical architecture
├── PROJECT_STRUCTURE.md     # This file - project organization
├── setup.sh                 # Automated setup script
├── .gitignore              # Git ignore rules
├── docker-compose.yml      # Multi-container orchestration
├── backend/                # Python FastAPI backend
├── frontend/               # React TypeScript frontend
└── docs/                   # Additional documentation (future)
```

## Backend Structure (`backend/`)

### Core Application (`backend/app/`)
```
backend/app/
├── __init__.py             # Package initialization
├── main.py                 # FastAPI application entry point
├── api/                    # API layer
│   ├── __init__.py
│   └── routes.py          # Simplified API endpoints
├── models/                 # Data models
│   ├── __init__.py
│   └── dinner.py          # Pydantic models for dinner data
├── services/               # Business logic layer
│   ├── __init__.py
│   └── dinner_service.py  # Dinner selection logic
└── data/                   # Data layer
    ├── __init__.py
    └── recipes.py         # Sample recipe data
```

### Configuration & Dependencies
```
backend/
├── requirements.txt        # Python package dependencies
├── Dockerfile             # Backend container definition
└── .env.example          # Environment variables template (future)
```

### Key Backend Files Explained

#### `main.py`
- **Purpose**: FastAPI application initialization and configuration
- **Features**: CORS middleware, router inclusion, health checks
- **Endpoints**: Root welcome, health status

#### `models/dinner.py`
- **Purpose**: Data structure definitions using Pydantic
- **Models**: Dish, DinnerSuggestion, Category enums
- **Validation**: Automatic data validation and serialization

#### `services/dinner_service.py`
- **Purpose**: Core business logic for dinner selection
- **Features**: Random selection algorithms, category management
- **Methods**: get_random_dinner(), get_random_dish_by_category()

#### `api/routes.py`
- **Purpose**: HTTP endpoint definitions and request handling
- **Features**: Error handling, input validation, response models
- **Endpoints**: Random dinner, category-specific dishes

#### `data/recipes.py`
- **Purpose**: Sample recipe data for MVP demonstration
- **Content**: 16 sample dishes across 5 categories
- **Structure**: Rich metadata (ingredients, cooking time, difficulty)

## Frontend Structure (`frontend/`)

### Source Code (`frontend/src/`)
```
frontend/src/
├── main.tsx               # React application entry point
├── App.tsx                # Main application component
├── index.css              # Global styles and Tailwind imports
├── types/                 # TypeScript type definitions
│   └── dinner.ts         # Shared types with backend
├── hooks/                 # Custom React hooks
│   └── useDinner.ts      # Dinner API integration hook
└── components/            # Reusable UI components
    ├── DishCard.tsx      # Individual dish display
    └── DinnerDisplay.tsx # Complete dinner presentation
```

### Configuration Files
```
frontend/
├── package.json           # Node.js dependencies and scripts
├── vite.config.ts         # Vite build configuration
├── tailwind.config.js     # Tailwind CSS customization
├── postcss.config.js      # PostCSS processing configuration
├── tsconfig.json          # TypeScript compilation settings
├── tsconfig.node.json     # TypeScript settings for build tools
├── index.html             # HTML entry point
├── Dockerfile             # Frontend container definition
└── nginx.conf             # Nginx server configuration
```

### Key Frontend Files Explained

#### `App.tsx`
- **Purpose**: Main application component and state management
- **Features**: Dinner selection interface, loading states, error handling
- **State**: Manages dinner data, loading, and error states

#### `hooks/useDinner.ts`
- **Purpose**: Custom hook for API integration and state management
- **Features**: API calls, loading states, error handling
- **Methods**: getRandomDinner()

#### `components/DishCard.tsx`
- **Purpose**: Reusable component for displaying individual dishes
- **Features**: Category-based styling, ingredient display, animations
- **Props**: dish object, category, optional className

#### `components/DinnerDisplay.tsx`
- **Purpose**: Complete dinner presentation with all courses
- **Features**: Grid layout, staggered animations, course filtering
- **Props**: dinner object (DinnerSuggestion)

#### `types/dinner.ts`
- **Purpose**: TypeScript interfaces matching backend models
- **Models**: Dish, DinnerSuggestion, Category enums
- **Usage**: Shared types between components and hooks

## Configuration Files

### Docker Configuration
```
docker-compose.yml         # Multi-service orchestration
├── backend service        # Python FastAPI on port 8000
├── frontend service       # React app on port 3000
└── network configuration  # Internal service communication
```

### Development Tools
```
setup.sh                   # Automated project setup script
.gitignore                 # Comprehensive ignore patterns
```

## Data Flow Architecture

### Backend Data Flow
1. **Request** → API Routes (`routes.py`)
2. **Validation** → Pydantic Models (`models/dinner.py`)
3. **Processing** → Business Logic (`services/dinner_service.py`)
4. **Data Access** → Recipe Data (`data/recipes.py`)
5. **Response** → Serialized JSON via FastAPI

### Frontend Data Flow
1. **User Action** → Component Event Handler
2. **API Call** → Custom Hook (`useDinner.ts`)
3. **State Update** → React State Management
4. **UI Update** → Component Re-render
5. **Animation** → Framer Motion Transitions

## Development Workflow

### Local Development Setup
1. **Backend**: Python virtual environment + FastAPI dev server
2. **Frontend**: Node.js dependencies + Vite dev server
3. **API Proxy**: Frontend proxies `/api/*` to backend

### Production Build
1. **Backend**: Containerized Python application
2. **Frontend**: Built React app served via Nginx
3. **Deployment**: Docker Compose or Kubernetes

## File Naming Conventions

### Backend
- **Python Files**: snake_case (e.g., `dinner_service.py`)
- **Directories**: snake_case (e.g., `api/`, `models/`)
- **Classes**: PascalCase (e.g., `DinnerService`)
- **Functions**: snake_case (e.g., `get_random_dinner`)

### Frontend
- **React Components**: PascalCase (e.g., `DishCard.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useDinner.ts`)
- **Type Files**: camelCase (e.g., `dinner.ts`)
- **Directories**: camelCase (e.g., `components/`, `hooks/`)

## Future Structure Considerations

### Planned Additions
```
docs/                      # Additional documentation
├── API.md                # API documentation
├── DEPLOYMENT.md         # Deployment guides
└── CONTRIBUTING.md       # Contribution guidelines

tests/                    # Testing infrastructure
├── backend/              # Python tests
└── frontend/             # React tests

scripts/                  # Utility scripts
├── deploy.sh            # Deployment automation
└── backup.sh            # Data backup scripts
```

### Scalability Considerations
- **Database Integration**: Replace static data with database models
- **Authentication**: Add user management and security layers
- **Caching**: Implement Redis or similar caching layer
- **Monitoring**: Add logging and metrics collection
- **Testing**: Comprehensive test coverage for all layers

## Best Practices Implemented

### Code Organization
- **Separation of Concerns**: Clear separation between API, business logic, and data
- **Single Responsibility**: Each component has a single, well-defined purpose
- **Dependency Injection**: Services are injected where needed
- **Interface Segregation**: Clean interfaces between layers

### Development Experience
- **Type Safety**: Full TypeScript coverage in frontend
- **Hot Reloading**: Fast development iteration with Vite
- **API Documentation**: Automatic OpenAPI docs with FastAPI
- **Error Handling**: Comprehensive error handling at all layers

### Performance
- **Async Operations**: Non-blocking I/O in backend
- **Optimized Builds**: Tree-shaking and minification in frontend
- **Efficient Rendering**: React 18 concurrent features
- **Animation Performance**: Hardware-accelerated CSS transforms
