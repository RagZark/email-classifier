from utils.ai_client import ask_gemini

def classify_email(text: str) -> str:
    prompt: f""" 
    Você é um classificador de emails.

    Classifique o email abaixo em APENAS UMA categoria:
    - Produtivo
    -Improdutivo

    Email:
    {text}

    Responda somente com: Produtivo ou Improdutivo.
    """

    result = ask_gemini(prompt).strip()

    result = result.lower()

    if "produtivo" in result:
        return "Produtivo"
    else:
        return "Improdutivo"
    

def generate_auto_response(email_text: str, category: str) -> str:
    prompt = f""" 
    Gere uma resposta automática baseada na categoria atual de email.

    Categoria: {category}

    Email original:
    {email_text}

    Instruções:
    - Seja educado.
    - Responda em português.
    - Se o email for Produtivo, dê uma resposta útil e com a próxima ação clara.
    - Se o email for Improdutivo, responda brevemente, agradecendo ou confirmando.
    - Não mencione que você é uma IA(Inteligencia Artificial).
    """

    response = ask_gemini(prompt)
    return response.strip()