# Sofra - Turkish Dinner Decision App 🍽️

A minimalist web application that helps you decide what to cook for dinner by randomly selecting traditional Turkish home meals. Perfect for when you can't decide what to eat!

## Features

- **🎰 Slot Machine UI**: Fun spinning animation to select your meal
- **🍽️ Turkish Home Meals**: Curated list of authentic Turkish dishes
- **📱 Clean Design**: Ultra-minimalist interface with no clutter
- **⚡ One-Click Selection**: Choose categories and spin to get your dinner
- **🎯 Category Selection**: Pick from Main Course, Soup, Side Dish, Salad, and Dessert

## Tech Stack

### Backend
- **Python 3.11+**
- **FastAPI** - Modern, fast web framework for building APIs
- **Pydantic** - Data validation using Python type annotations
- **Uvicorn** - ASGI server for running FastAPI

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Smooth animations and transitions

### Development Tools
- **Poetry** - Python dependency management
- **npm** - Node.js package management
- **Docker** - Containerization (optional)
- **Pre-commit hooks** - Code quality checks

## Project Structure

```
sofra/
├── backend/                 # Python FastAPI backend
│   ├── app/
│   │   ├── api/            # API endpoints
│   │   ├── models/         # Pydantic models
│   │   ├── services/       # Business logic
│   │   └── main.py         # FastAPI app entry point
│   ├── data/               # Recipe data files
│   ├── requirements.txt     # Python dependencies
│   └── Dockerfile          # Backend container
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── types/          # TypeScript type definitions
│   │   └── App.tsx         # Main app component
│   ├── package.json        # Node.js dependencies
│   └── Dockerfile          # Frontend container
├── docker-compose.yml      # Multi-container setup
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- npm or yarn

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Using Docker
```bash
docker-compose up --build
```

## API Endpoints

- `GET /api/dinner/random` - Get a complete random dinner suggestion
- `GET /api/dinner/categories` - Get available food categories  
- `GET /api/dinner/meals` - Get all Turkish meals

## How It Works

1. **Select Categories**: Choose which meal types you want (Main Course, Soup, etc.)
2. **Spin the Wheel**: Click the spinning icon to randomly select dishes
3. **Get Your Dinner**: Receive a complete meal suggestion with Turkish home dishes
4. **Spin Again**: Use the same button to get a new random selection

## Turkish Meals Included

The app includes authentic Turkish home meals like:
- **Main Courses**: Kuru Fasulye, Nohut, Tavuk Sote, Kıymalı Patates, etc.
- **Soups**: Mercimek Çorbası, Yayla Çorbası, Tavuk Çorbası, etc.
- **Side Dishes**: Pilav, Patates Kızartması, Pilaki, etc.
- **Salads**: Çoban Salatası, Roka Salatası, etc.
- **Desserts**: Baklava, Revani, Sütlaç, etc.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
