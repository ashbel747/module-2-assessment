from langchain.memory import ConversationBufferMemory
from langchain_community.chat_message_histories import ChatMessageHistory

print("running on manager")

chat_history = ChatMessageHistory()

memory = ConversationBufferMemory.from_messages(
    chat_memory=chat_history,
    return_messages=True,
    memory_key="chat_history"
)
