from langchain_community.llms import HuggingFacePipeline
from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM
from App.config.settings import settings
import torch

def load_llama_chain():
    model = AutoModelForCausalLM.from_pretrained(
        settings.LLAMA2_MODEL_NAME,
        token=settings.LLAMA2_HF_TOKEN,
        device_map="auto",
        torch_dtype=torch.float16
    )

    tokenizer = AutoTokenizer.from_pretrained(
        settings.LLAMA2_MODEL_NAME,
        token=settings.LLAMA2_HF_TOKEN
    )

    text_gen_pipeline = pipeline(
        "text-generation",
        model=model,
        tokenizer=tokenizer,
        max_new_tokens=512,
        temperature=0.7,
        repetition_penalty=1.1
    )

    return HuggingFacePipeline(pipeline=text_gen_pipeline)
