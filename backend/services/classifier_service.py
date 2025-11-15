from utils.ai_client import ask_gemini

def classify_email(text: str) -> str:
    print(f"🎯 INICIANDO CLASSIFICACAO: '{text}'")
    
    text_lower = text.lower().strip()
    obvious_improductive = ['ok', 'obrigado', 'obrigada', 'valeu', 'grato', 'confirmado']
    
    if text_lower in obvious_improductive:
        print(f"CLASSIFICACAO MANUAL: '{text}' → IMPRODUTIVO")
        return "Improdutivo"
    
    if len(text_lower.split()) <= 2:
        for word in obvious_improductive:
            if word in text_lower:
                print(f"CLASSIFICACAO MANUAL (curto): '{text}' → IMPRODUTIVO")
                return "Improdutivo"
    
    prompt = f"""
    Classifique como "Produtivo" ou "Improdutivo":
    Email: "{text}"
    Resposta APENAS: Produtivo ou Improdutivo
    """
    
    try:
        result = ask_gemini(prompt).strip().lower()
        print(f"🤖 RESPOSTA BRUTA DA IA: '{result}'")
        
        if "produtivo" in result:
            final = "Produtivo"
        elif "improdutivo" in result:
            final = "Improdutivo"
        else:
            final = "Improdutivo"
            print(f"⚠️  IA não respondeu claramente, usando fallback: {final}")
        
        print(f"🎯 CATEGORIA FINAL: {final}")
        return final
        
    except Exception as e:
        print(f"ERRO: {e}")
        return "Improdutivo"

def generate_auto_response(email_text: str, category: str) -> str:
    print(f"GERANDO RESPOSTA - Categoria: {category}")
    
    text_lower = email_text.lower().strip()
    
    if category == "Improdutivo":
        if text_lower == 'ok':
            response = "Confirmado!"
        elif any(word in text_lower for word in ['obrigado', 'obrigada', 'grato']):
            response = "Por nada!"
        else:
            response = "Obrigado!"
    else:
        response = "Entendido. Vou analisar e retorno em breve."
    
    print(f"RESPOSTA: '{response}'")
    return response