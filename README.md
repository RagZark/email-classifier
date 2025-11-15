# Email Classifier AI

## Descrição
Sistema de classificação automática de emails com geração de respostas usando Inteligência Artificial. A aplicação analisa o conteúdo de emails e os classifica como **"Produtivo"** ou **"Improdutivo"**, gerando automaticamente respostas contextualizadas para cada categoria.

---

## Funcionalidades
- **Classificação Automática:** Identifica se um email é produtivo (requer ação) ou improdutivo (saudações/confirmações).  
- **Geração de Respostas:** Cria respostas personalizadas baseadas na categoria do email.  
- **Upload de Arquivos:** Suporte a arquivos `.txt` e `.pdf`.  
- **Interface Responsiva:** Design adaptável para desktop e mobile.  
- **Processamento com IA:** Utiliza Google Gemini para análise inteligente do conteúdo.

---

## Tecnologias Utilizadas

### Backend
- Python 3.11  
- Flask  
- Google Gemini AI  
- PyPDF2 (extração de texto)  
- Gunicorn  

### Frontend
- React  
- Vite  
- Tailwind CSS  
- Axios  

---

## Como Usar

### Classificação por Texto
1. Digite o conteúdo do email na área de texto.  
2. Clique em **"Classificar Email"**.  
3. Veja a categoria e resposta sugerida.  

### Classificação por Arquivo
1. Clique para selecionar um arquivo (`.txt` ou `.pdf`).  
2. O sistema extrairá o texto automaticamente.  
3. Receba a classificação e resposta apropriada.  

---

## Categorias de Classificação

### Emails Produtivos
- Solicitações de informação específica  
- Pedidos de ação ou tarefas  
- Agendamento de reuniões  
- Discussão de projetos ou problemas  
- Requisições de decisão  

### Emails Improdutivos
- Saudações simples (olá, bom dia)  
- Agradecimentos isolados  
- Confirmações básicas (ok, entendido)  
- Expressões emocionais sem contexto  

---

## Desenvolvimento

### Pré-requisitos
- Python 3.11+  
- Node.js 16+  
- Chave API do Google Gemini  

### Instalação

#### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
# ou
.venv\Scripts\activate     # Windows
pip install -r requirements.txt
```

## Frontend

```bash
cd frontend
npm install
```
## Execução Local
Backend
```
cd backend
python app.py
```
Servidor disponível em: http://localhost:5000

Frontend
```
cd frontend
npm run dev
```
Aplicação disponível em: http://localhost:5173
