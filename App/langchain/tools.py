from langchain.tools import BaseTool
from typing import Optional
from App.retriever import create_retriever
import os

retriever = create_retriever()

class MenuSearchTool(BaseTool):
   name = "menu_search"
   description = (
      "Search for menu items, open hours, reservations, location, or student discounts. "
      "Use this when a user asks questions like 'Do you have vegan dishes?', "
      "'What time do you open?', 'Where are you located?', or 'Do students get a discount?'."
   )

   def _run(self, query: str) -> str:
      try:
         results = retriever.get_relevant_documents(query)
         if not results:
            return "Sorry, I couldn't find an answer related to that."

         return "\n".join(doc.page_content for doc in results)

      except Exception as e:
         return f"Error during search: {str(e)}"