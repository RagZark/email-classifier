from utils.ai_client import ask_gemini

def classify_email(text: str) -> str:
    prompt = f"""
    Classifique o email abaixo como "Produtivo" ou "Improdutivo":
    "{text}"
    
    Resposta: 
    """
    
    try:
        print(f"🎯 ENVIANDO: '{text}'")
        result = ask_gemini(prompt).strip().lower()
        print(f"🔍 RESPOSTA BRUTA: '{result}'")

        clean_result = result.split()[-1] if result.split() else ""
        print(f"🧹 RESPOSTA LIMPA: '{clean_result}'")

        if clean_result == "produtivo":
            category = "Produtivo"
        elif clean_result == "improdutivo":
            category = "Improdutivo"
        else:
            if "produtivo" in result and "improdutivo" not in result:
                category = "Produtivo"
            else:
                category = "Improdutivo"
            
        print(f"CATEGORIA: {category}")
        return category
        
    except Exception as e:
        print(f"ERRO: {e}")
        return "Improdutivo"

def generate_auto_response(email_text: str, category: str) -> str:
    text_lower = email_text.lower().strip()
    
    if category == "Improdutivo":
        if any(word in text_lower for word in ['ok', 'confirmado', 'certo']):
            return "Confirmado!"
        elif any(word in text_lower for word in ['obrigado', 'obrigada', 'grato']):
            return "Por nada!"
        elif any(word in text_lower for word in ['olá', 'ola', 'oi', 'e aí']):
            return "Olá! Em que posso ajudar?"
        elif any(word in text_lower for word in ['bom dia', 'boa tarde', 'boa noite']):
            return "Bom dia! Como posso ajudar?"
        elif any(word in text_lower for word in ['poxa', 'aff', 'puts']):
            return "Entendo. Em que posso ajudar?"
        else:
            return "Obrigado!"
    else:
        return "Entendido. Vou analisar e retorno em breve."