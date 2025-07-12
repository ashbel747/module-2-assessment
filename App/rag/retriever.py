import os
from langchain.vectorstores import Chroma
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.document_loaders import TextLoader

embedding_model = HuggingFaceEmbeddings()

def create_vector_store(directory="App/rag/docs"):
    documents = []
    for filename in os.listdir(directory):
        if filename.endswith(".txt"):
            loader = TextLoader(os.path.join(directory, filename))
            documents.extend(loader.load())

    vectorstore = Chroma.from_documents(documents, embedding_model)
    return vectorstore

def retrieve_docs(query, vectorstore):
    results = vectorstore.similarity_search(query)
    return results