from langchain_community.llms import HuggingFacePipeline
from transformers import pipeline, AutoTokenizer, AutoModelForSeq2SeqLM
from App.config.settings import settings
import torch

def load_llama_chain():
    model_name = settings.LLAMA2_MODEL_NAME

    try:
        # Load the flan-t5-base model (Seq2Seq)
        model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
        tokenizer = AutoTokenizer.from_pretrained(model_name)

        text_gen_pipeline = pipeline(
            "text2text-generation",  # flan-t5 is a Seq2Seq model
            model=model,
            tokenizer=tokenizer,
            max_new_tokens=128,
            temperature=0.7,
            repetition_penalty=1.1
        )

        return HuggingFacePipeline(pipeline=text_gen_pipeline)

    except Exception as e:
        print(f"Failed to load model: {e}")
        def fallback_llm(*args, **kwargs):
            return f"Error loading model: {e}"
        return fallback_llm
