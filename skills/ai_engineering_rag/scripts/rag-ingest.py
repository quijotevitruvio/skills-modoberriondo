"""
Level 99 AI RAG Ingestor
Purpose: Chunk and embed local documents (markdown/txt) for a Vector DB.
Dependencies: openai, langchain, pinecone-client (or chromadb)
"""

import os
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma

# 1. Configuration
DATA_DIR = "./documents/"
PERSIST_DIR = "./chroma_db"
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

def ingest_docs(directory):
    """Semantic chunking and embedding logic."""
    documents = []
    for filename in os.listdir(directory):
        if filename.endswith(".md") or filename.endswith(".txt"):
            with open(os.path.join(directory, filename), 'r', encoding='utf-8') as f:
                documents.append(f.read())
    
    # 2. Recursive Chunking (Preserve context)
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=100,
        separators=["\n\n", "\n", " ", ""]
    )
    texts = text_splitter.create_documents(documents)
    
    # 3. Embedding & Vector Storage
    embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
    vector_db = Chroma.from_documents(
        documents=texts,
        embedding=embeddings,
        persist_directory=PERSIST_DIR
    )
    
    print(f"%c ✅ Ingested {len(texts)} chunks into Vector DB ", "color: #00ff00; font-weight: bold; background: #000;")
    return vector_db

if __name__ == "__main__":
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
        print(f"Please put your .md or .txt files into {DATA_DIR}")
    else:
        ingest_docs(DATA_DIR)
