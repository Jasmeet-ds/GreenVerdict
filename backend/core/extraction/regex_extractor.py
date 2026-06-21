import re
from backend.core.ingestion.pdf_parser import read_pdf
from backend.core.rag.vector_store import retrieve, build_index
def extract_metric(string_input):
      metrics_extracted = [re.findall(r'[0-9]+,[0-9]+|[0-9]+', chunk) for chunk in string_input]
      return metrics_extracted

if __name__ == "__main__":
      pdf_path = input("Paste file path: ")
      chunks = read_pdf(pdf_path)
      index, texts = build_index(chunks)
      query = input("metric: ")
      results = retrieve(query, index, texts)
      print("\nRetrieved Chunks:\n")

      for i, chunk in enumerate(results):
            print(f"Chunk {i+1}")
            print(chunk[:500])
            print("\n" + "="*50 + "\n")
            
      extracted = extract_metric(results) 

      print(extracted)