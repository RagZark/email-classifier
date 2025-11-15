from google import genai
from dotenv import load_dotenv

load_dotenv()

# The client gets the API key from the environment variable `GEMINI_API_KEY`.
client = genai.Client()

def classify_email(text):
    prompt = f"""
    Classifique o email abaixo em PRODUTIVO ou IMPRODUTIVO.
    Responda apenas com uma palavra.

    Email:
    {text}
    """
    response = client.models.generate_text(
        model="gemini-2.5-flash",
        prompt=prompt
    )
    return response.text.strip()

def generate_auto_reply(text):
    prompt = f"""
    Gere uma resposta automática educada e clara para o email abaixo:

    Email:
    {text}
    """
    response = client.models.generate_text(
        model="gemini-2.5-flash",
        prompt=prompt
    )
    return response.text.strip()