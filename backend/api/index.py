from app.main import app as fastapi_app

# Expose ASGI app for Vercel Python runtime
app = fastapi_app


