import numpy as np
import pandas as pd 
import pymupdf 

def chunk_text(text, chunk_size=500):
      words = text.split()
      chunks=[]
      for i in range(0,len(words),chunk_size):
            chunk_words = words[i:i+chunk_size]
            chunk =" ".join(chunk_words)
            chunks.append(chunk)
      return chunks

def read_pdf(pdf_path):
      data = []
      doc = pymupdf.open(pdf_path)
      for page_num, page in enumerate(doc):
            text = page.get_text().strip()
            
            clean_lines = []

            for line in text.split("\n"):
                  line = line.strip()
                  if not line.isdigit():
                        clean_lines.append(line)

            clean_text = " ".join(clean_lines)
            chunks = chunk_text(clean_text)
            for chunk_num, chunk in enumerate(chunks):
                  if chunk:
                        record = {"page": page_num+1,"chunk_id": chunk_num + 1, "text": chunk}
                        data.append(record)
      return data

