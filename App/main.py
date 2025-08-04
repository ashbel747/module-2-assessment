from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from App.config.settings import settings
from App.api.routes import router as chat_router

app = FastAPI(title=settings.APP_NAME)
print("main is running")
# Enable CORS for all origins (frontend integration later)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://practicedeplo.netlify.app"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register chat router
app.include_router(chat_router)

# google/fan-t5-base
