import json
from pathlib import Path
from dotenv import load_dotenv
import os
from huggingface_hub import InferenceClient
from backend.core.rag.vector_store import retrieve, build_index
from backend.core.ingestion.pdf_parser import read_pdf

env_path = Path(__file__).resolve().parents[3] / ".env"
load_dotenv(dotenv_path=env_path)
token = os.getenv("HF_TOKEN")
client = InferenceClient(token=token)

query_list = ["scope1_emissions", "scope2_emissions", "gender_diversity_pct",
              "board_independence_pct", "renewable_energy_pct"]

def metric_extraction(index, texts):
    results = []
    for query in query_list:
        retrieved_chunks = retrieve(query, index, texts)
        combined_text = " ".join(retrieved_chunks)

        prompt = f"""
        You are an ESG data analyst. Extract metrics from the text below.
        Return ONLY valid JSON with these fields: metric, value, unit.

        Rules:
        - For metric always mention what we are measuring it should be a term concerning ESG
        - If value is not found return 'null'.
        - Do NOT infer values. Only what is given in text should be out here.
        - Do NOT calculate values.
        - Do NOT create metrics that are not explicitly stated.
        - Ignore qualitative statements.
        - Return ONLY valid JSON.

        Text: {combined_text}

        JSON:
        Schema:
        [
          {{
            "metric": "metric name 1",
            "value": "value 1",
            "unit": "unit 1"
          }},
          {{
            "metric": "metric name 2",
            "value": "value 2",
            "unit": "unit 2"
          }}
        ]
        """

        response = client.chat_completion(
            messages=[{"role": "user", "content": prompt}],
            model="deepseek-ai/DeepSeek-R1",
            max_tokens=300,
        )

        result_text = response.choices[0].message.content
        results.append(result_text)

    return results

if __name__ == "__main__":
    pdf_path = input("Enter your PDF's file path: ")
    chunks = read_pdf(pdf_path)
    index, texts = build_index(chunks)
    all_results = metric_extraction(index, texts)
    for r in all_results:
        print(r)
        print("---")