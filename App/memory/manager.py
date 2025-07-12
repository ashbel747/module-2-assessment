from langchain.memory import ConversationBufferMemory

# This stores conversation history for a single user/session
memory = ConversationBufferMemory(memory_key="chat_history")


