import faiss
from backend.core.ingestion.pdf_parser import read_pdf
from sentence_transformers import SentenceTransformer

model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')

def build_index(chunks):
      
      texts = [chunk["text"] for chunk in chunks]
      #df = pd.DataFrame(chunks)
      #df.to_csv("pdf_chunks.csv", index=False)
   
      embeddings = model.encode(texts).astype("float32")

      #storing embeddings in FAISS
      dimension = 384
      index = faiss.IndexFlatL2(dimension)
      index.add(embeddings)
      return index, texts

def retrieve(query, index, texts, k=5):
      query_vector = model.encode(query).astype("float32")
      D, I = index.search(query_vector.reshape(1, -1), k)
      return [texts[i] for i in I[0]]

if __name__ =="__main__":
      
      pdf_path = input("Enter your PDF's file path: ")
      chunks = read_pdf(pdf_path)
      index, texts = build_index(chunks)
      query=input("Enter your query: ")
      print(retrieve(query, index, texts, k=5))
         
      

      