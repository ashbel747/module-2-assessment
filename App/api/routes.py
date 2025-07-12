from fastapi import APIRouter
from App.llm.llama_chain import load_llama_chain
from App.memory.manager import memory

router = APIRouter()
llm = load_llama_chain()

@router.get("/")
def root():
    return {"message": "Restaurant Chatbot is running."}

@router.post("/chat")
def chat_with_bot(message: str):
    history = memory.buffer  # fetch history
    memory.save_context({"input": message}, {"output": "..."})  # save dummy output temporarily
    response = llm(message)  # get response
    memory.save_context({"input": message}, {"output": response})  # update with real response
    return {
        "response": response,
        "chat_history": history
    }