from App.config.settings import settings
from langchain_community.llms import HuggingFacePipeline
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, pipeline
import torch

def load_llm():
    """
    Load a Hugging Face text2text model (like Flan-T5) and wrap it in a LangChain-compatible pipeline.
    """
    model_id = settings.HF_MODEL
    hf_token = settings.HUGGINGFACEHUB_API_TOKEN

    if not model_id or not hf_token:
        raise ValueError("HF_MODEL or HUGGINGFACEHUB_API_TOKEN not set in .env file.")

    print(f"Loading Hugging Face model '{model_id}' via API...")

    # Load tokenizer and model for sequence-to-sequence generation
    tokenizer = AutoTokenizer.from_pretrained(model_id, token=hf_token)
    model = AutoModelForSeq2SeqLM.from_pretrained(model_id, token=hf_token)

    # Setup pipeline for text2text-generation (used by Flan-T5 models)
    generation_pipeline = pipeline(
        "text2text-generation",
        model=model,
        tokenizer=tokenizer,
        max_new_tokens=settings.MAX_NEW_TOKENS,
        temperature=settings.TEMPERATURE,
        device=0 if torch.cuda.is_available() else -1
    )

    return HuggingFacePipeline(pipeline=generation_pipeline)