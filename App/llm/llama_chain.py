import os
from ctransformers import AutoModelForCausalLM
from langchain_community.llms import CTransformers
from config.settings import settings

def load_llama_chain():
   model_path = settings.MODEL_PATH

   if not os.path.exists(model_path):
      raise FileNotFoundError(f"Local model file not found at: {model_path}")

   llm = CTransformers(
      model=model_path,
      model_type="llama",
      config={
         "max_new_tokens": settings.MAX_NEW_TOKENS,
         "temperature": settings.TEMPERATURE,
      }
   )
   return llm