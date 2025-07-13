from fastapi import APIRouter
from App.memory.manager import memory

router = APIRouter()

@router.get("/chat/history")
def get_chat_history():
   try:
      return {
         "history": memory.buffer  
      }
   except Exception as e:
      return {"error": str(e)}