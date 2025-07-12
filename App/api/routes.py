from fastapi import APIRouter
from App.llm.llama_chain import load_llama_chain
from App.memory.manager import memory
from pydantic import BaseModel
import traceback

class ChatRequest(BaseModel):
    message: str

router = APIRouter()
llm = None

def get_llm():
    global llm
    if llm is None:
        try:
            llm = load_llama_chain()
            print("LLM model loaded successfully.")
        except Exception as e:
            print(f"Error loading LLM model: {e}")
            llm = None
    return llm

@router.get("/")
def root():
    return {"message": "Restaurant Chatbot is running."}



@router.post("/chat")
def chat_with_bot(request: ChatRequest):
    try:
        message = request.message
        print(f"Received message: {message}")

        history = memory.buffer
        memory.save_context({"input": message}, {"output": "..."})

        llm_instance = get_llm()
        if llm_instance is None:
            error_msg = "LLM model is not available."
            print(error_msg)
            return {"error": error_msg}

        response = llm_instance(message)
        print(f"LLM response: {response}")

        memory.save_context({"input": message}, {"output": response})

        return {
            "response": response,
            "chat_history": history
        }

    except Exception as e:
        print("Exception in /chat endpoint:")
        traceback.print_exc()
        return {"error": f"Internal server error: {e}"}
