import os
import io
import json
from typing import List, Optional
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from groq import Groq
import PyPDF2
import uuid
from dotenv import load_dotenv

load_dotenv() # Carrega as variáveis do arquivo .env
api_key = os.getenv("GROQ_API_KEY")

app = FastAPI()

# Configuração de CORS para aceitar o link da Vercel
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inicializa o cliente Groq usando a variável de ambiente por segurança
client = Groq(api_key=api_key)

def call_ai_logic(content: str):
    prompt = f"""
    Voce e um especialista em classificação de emails de uma empresa de finâncias.
    Analise o email abaixo e classifique em 'Produtivo' ou 'Improdutivo'.
    Gere uma resposta profissional.
    Produtivo: Emails que requerem uma ação ou resposta específica (ex.: solicitações de suporte técnico, atualização sobre casos em aberto, dúvidas sobre o sistema).
    Improdutivo: Emails que não necessitam de uma ação imediata (ex.: mensagens de felicitações, agradecimentos).
    Email: {content}
    Responda APENAS em JSON:
    {{
        "category": "Produtivo/Improdutivo",
        "suggested_response": "texto para leitura humana",
        "reason": "breve explicação"
    }}
    """
    completion = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )
    return json.loads(completion.choices[0].message.content)

def text_preprocessing_ai(text: str):
    prompt = f"""
    Analise o email abaixo e preprossesse o texto para a leitura humana sem modificar o conteudo.
    email: {text}
    Responda APENAS em JSON:
    {{
        "subject": "assunto",
        "body": "texto",
        "from": "remetente", 
    }}
    """
    completion = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )
    return json.loads(completion.choices[0].message.content)

@app.post("/analyze")
async def analyze_email(
    text: Optional[str] = Form(None), 
    files: Optional[List[UploadFile]] = File(None)
):
    all_results = []
    
    # Lógica para ler Texto direto ou Arquivo (PDF/TXT)
    if text and text.strip():
        analysis = call_ai_logic(text)
        all_results.append({
            "id": str(uuid.uuid4()),
            "source": "Texto Manual",
            "category": analysis["category"],
            "suggestion": analysis["suggested_response"],
            "reason": analysis["reason"],
            "content": text_preprocessing_ai(text)
        })
    

    # Processa cada arquivo da lista
    if files:
        for file in files:
            content = ""
            if file.filename.lower().endswith('.pdf'):
                pdf_reader = PyPDF2.PdfReader(io.BytesIO(await file.read()))
                content = " ".join([p.extract_text() for p in pdf_reader.pages])
            else:
                content = (await file.read()).decode("utf-8")
            
            analysis = call_ai_logic(content)
            all_results.append({
                "id": str(uuid.uuid4()),
                "source": file.filename,
                "category": analysis["category"],
                "suggestion": analysis["suggested_response"],
                "reason": analysis["reason"],
                "content": text_preprocessing_ai(content)
            })

    return all_results

# O Hugging Face pede para rodar na porta 7860
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=7860) 