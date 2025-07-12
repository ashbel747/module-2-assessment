from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str
    APP_PORT: int
    APP_HOST: str
    LLAMA2_HF_TOKEN: str
    LLAMA2_MODEL_NAME: str

    class Config:
        env_file = ".env"

settings = Settings()