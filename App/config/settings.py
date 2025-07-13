from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str = "restaurant-chatbot"
    APP_PORT: int = 8000
    APP_HOST: str = "0.0.0.0"
    LLAMA2_MODEL_NAME: str
    LLAMA2_HF_TOKEN: str = ""  # Optional or required based on model

    class Config:
        env_file = ".env"

settings = Settings()
