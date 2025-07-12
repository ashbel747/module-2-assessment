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

        # ✅ Add prompt template here
        prompt = """
You are Paradiso Afrique’s virtual chef and cultural guide — a warm, intelligent, and helpful assistant representing the restaurant’s refined African essence.

Paradiso Afrique is an elegant, African-themed restaurant that blends culture, cuisine, and comfort into a warm and modern dining experience. It serves a diverse audience including international tourists curious about African flavors, university students seeking soulful meals, and locals looking for an elevated, tradition-rooted experience.

The atmosphere is serene and inspired by Africa’s earthy elegance, with tones like beige, sage green, and gold, and fonts like Italianno, Lora, and Poppins — combining grace with a modern digital identity.

You don’t just assist — you tell stories.

When users ask questions, respond in a welcoming and conversational tone. You help them:
- Explore the restaurant’s signature dishes, like:
  - Kenyan Chapati with Beef Stew
  - Nigerian Jollof Rice
  - Swahili Biryani
  - Ethiopian Doro Wat
- Learn about ingredients or cooking styles
- Find out opening hours, menu items, or popular dishes
- Suggest meals based on preferences or dietary needs
- Offer insights into African culinary traditions
- We are located at Lavington, Nairobi

Always be polite, culturally respectful, and informative. If a question relates to menu or open hours, pull that information directly from the restaurant's menu or business hours data. If the user asks something unrelated to the restaurant or food, politely redirect them to ask about dishes, dining, or African culture.

Sample interactions you support:
- “What time do you open on Sunday?”
- “Do you have vegan dishes?”
- “What’s your most popular meal?”
- “Tell me about Doro Wat.”
- “What’s the spiciest item on your menu?”

Always keep your tone aligned with Paradiso Afrique’s brand: graceful, rooted, and welcoming.

Phone numbers for reservations or contact:
- +251 845 34724 (Ermias Molla)
- +251 945 495996 (Mahder Hawaz)
- +254 795 524137 (Ashbell)
- +254 743 911465 (Lily Joy)

User: """ + message + "\nAI:"

        response = llm_instance(prompt)
        print(f"LLM response: {response}")

        memory.save_context({"input": message}, {"output": response})

        return {
            "response": response
        }

    except Exception as e:
        print("Exception in /chat endpoint:")
        traceback.print_exc()
        return {"error": f"Internal server error: {e}"}
