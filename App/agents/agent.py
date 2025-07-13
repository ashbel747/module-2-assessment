from langchain.chains import LLMChain
from langchain.agents import Tool, AgentExecutor, initialize_agent
from langchain.memory import ConversationBufferMemory
from langchain.llms import HuggingFacePipeline
from App.langchain.templates import restaurant_template
from App.llm.llama_chain import load_llama_chain
from App.langchain.tools import MenuSearchTool

def create_agent():
   llm = HuggingFacePipeline(pipeline=load_llama_chain())
   memory = ConversationBufferMemory(memory_key="history", return_messages=True)

   tools = [
      Tool.from_function(
         func=MenuSearchTool().run,
         name="menu_search",
         description=MenuSearchTool.description
      )
   ]

   agent = initialize_agent(
      tools=tools,
      llm=llm,
      agent="conversational-react-description",
      memory=memory,
      verbose=True
   )

   return agent