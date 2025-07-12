from langchain_community.llms import HuggingFacePipeline

try:
    import torch
    from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM
except ImportError:
    torch = None
    pipeline = None
    AutoTokenizer = None
    AutoModelForCausalLM = None

from App.config.settings import settings

print("llama running")

def load_llama_chain():
    if torch is None:
        print("Warning: PyTorch or Transformers not installed. LLM cannot be loaded.")
        # Return dummy llm function
        def dummy_llm(*args, **kwargs):
            return "Error: Required packages (torch, transformers) not installed."
        return dummy_llm

    try:
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

    except Exception as e:
        err_msg = str(e)   # capture error string
        print(f"Failed to load LLM model: {err_msg}")

        def fallback_llm(*args, **kwargs):
            return f"Error loading model: {err_msg}"   # use captured string here

        return fallback_llm
