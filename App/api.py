from fastapi import APIRouter, Request
from pydantic import BaseModel
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from fastapi.responses import JSONResponse
from starlette.status import HTTP_500_INTERNAL_SERVER_ERROR
from App.agents.agent import create_agent
from App.memory.manager import memory

router = APIRouter()
history_router = APIRouter()
agent = create_agent()
limiter = Limiter(key_func=get_remote_address)

class ChatRequest(BaseModel):
   message: str

class ChatResponse(BaseModel):
   response: str

class ErrorResponse(BaseModel):
   error: str


@router.post("/chat", response_model=ChatResponse, responses={429: {"model": ErrorResponse}})
@limiter.limit("5/minute") 
async def chat(request: Request, chat_req: ChatRequest):
   try:
      user_input = chat_req.message
      response = agent.run(user_input)
      return {"response": response}

   except Exception as e:
      return JSONResponse(
         status_code=HTTP_500_INTERNAL_SERVER_ERROR,
         content={"error": f"Internal server error: {str(e)}"},
      )
      

@history_router.get("/chat/history/{session_id}")
def get_chat_history(session_id: str):
   try:
      return {"session_id": session_id, "history": memory.buffer}
   except Exception as e:
      return {"error": str(e)}